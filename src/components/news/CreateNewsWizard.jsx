"use client";
import { useState, useRef } from 'react';

const CreateNewsWizard = ({ onSuccess, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    tag: '',
    description: '',
    content: '', // Will be generated from blocks
    image: '',
    date: new Date().toISOString().split('T')[0]
  });
  
  // Block Editor State
  const [blocks, setBlocks] = useState([
    { id: '1', type: 'text', content: '' } // Start with one text block
  ]);

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const totalSteps = 3; // 1: Info, 2: Content (Editor), 3: Preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        alert("El archivo es demasiado grande. Máximo 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Block Editor Logic ---

  const addBlock = (type) => {
    setBlocks(prev => [
      ...prev,
      { 
        id: Date.now().toString(), 
        type, 
        content: type === 'text' ? '' : (type === 'carousel' ? [] : '') 
      }
    ]);
  };

  const updateBlock = (id, newContent) => {
    setBlocks(prev => prev.map(block => 
      block.id === id ? { ...block, content: newContent } : block
    ));
  };

  const removeBlock = (id) => {
    setBlocks(prev => prev.filter(block => block.id !== id));
  };

  const moveBlock = (index, direction) => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === blocks.length - 1) return;
    
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index + (direction === 'up' ? -1 : 1)];
    newBlocks[index + (direction === 'up' ? -1 : 1)] = temp;
    setBlocks(newBlocks);
  };

  const handleBlockImageUpload = (id, files, isCarousel = false) => {
    const fileArray = Array.from(files);
    
    fileArray.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (isCarousel) {
                setBlocks(prev => prev.map(b => 
                    b.id === id 
                    ? { ...b, content: [...(b.content || []), reader.result] } 
                    : b
                ));
            } else {
                // Single image
                 setBlocks(prev => prev.map(b => 
                    b.id === id ? { ...b, content: reader.result } : b
                ));
            }
        };
        reader.readAsDataURL(file);
    });
  };

  const generateHtmlFromBlocks = () => {
    return blocks.map(block => {
        if (block.type === 'text') {
            // Simple markdown-to-html conversion or just paragraph wrapping
            // Replacing newlines with <br/> or wrapping in <p> if double newline
            const paragraphs = block.content.split('\n\n').map(p => `<p class="mb-4">${p.replace(/\n/g, '<br/>')}</p>`).join('');
            return paragraphs;
        } 
        else if (block.type === 'image') {
            if (!block.content) return '';
            return `
                <div class="my-8 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                    <img src="${block.content}" class="w-full h-auto object-cover" alt="Imagen insertada" />
                </div>
            `;
        }
        else if (block.type === 'carousel') {
             if (!block.content || block.content.length === 0) return '';
             // Render a simple horizontal scroll container
             const imagesHtml = block.content.map(img => `
                <div class="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden border border-gray-700 snap-center">
                    <img src="${img}" class="w-full h-full object-cover" />
                </div>
             `).join('');
             
             return `
                <div class="my-8">
                    <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
                        ${imagesHtml}
                    </div>
                </div>
             `;
        }
    }).join('');
  };

  // --- Navigation & Submit ---

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const finalContent = generateHtmlFromBlocks();

    const newArticle = {
      id: Date.now(),
      ...formData,
      content: finalContent,
      isLocal: true,
      // Keep main image separate for the card view
    };

    try {
      const existingNews = JSON.parse(localStorage.getItem('quantum_local_news') || '[]');
      localStorage.setItem('quantum_local_news', JSON.stringify([newArticle, ...existingNews]));
      if (onSuccess) onSuccess(newArticle);
    } catch (error) {
      console.error(error);
      alert("Error al guardar. Posiblemente las imágenes son muy pesadas (Límite de LocalStorage).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl max-w-4xl w-full mx-auto relative overflow-hidden flex flex-col max-h-[90vh]">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
        <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-cyan-400">📝</span> 
                Creador de Noticias
            </h2>
            <p className="text-gray-400 text-sm mt-1">Paso {currentStep} de {totalSteps}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-800 h-1">
        <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
        
        {/* STEP 1: Basic Info */}
        {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none"
                            placeholder="Título impactante..."
                            autoFocus
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Autor</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none"
                        />
                    </div>
                    <div>
                         <label className="block text-sm text-gray-400 mb-1">Categoría</label>
                        <input
                            type="text"
                            name="tag"
                            value={formData.tag}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                         <label className="block text-sm text-gray-400 mb-1">Resumen Corto (Bajada)</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="2"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none"
                            placeholder="Breve descripción para la tarjeta..."
                        />
                    </div>
                    
                    {/* Main Cover Image */}
                    <div className="md:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">Imagen de Portada</label>
                         <div 
                            className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/50 cursor-pointer transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                accept="image/*" 
                                className="hidden" 
                            />
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" className="h-48 w-full object-cover rounded-lg" />
                            ) : (
                                <div className="text-gray-500 flex flex-col items-center">
                                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <span>Click para subir portada</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* STEP 2: Block Editor */}
        {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Editor de Contenido</h3>
                    <div className="flex gap-2">
                        <button onClick={() => addBlock('text')} className="bg-gray-800 hover:bg-gray-700 text-sm px-3 py-2 rounded border border-gray-700 flex items-center gap-1 transition-colors">
                            <span className="text-cyan-400">+</span> Texto
                        </button>
                        <button onClick={() => addBlock('image')} className="bg-gray-800 hover:bg-gray-700 text-sm px-3 py-2 rounded border border-gray-700 flex items-center gap-1 transition-colors">
                             <span className="text-purple-400">+</span> Imagen
                        </button>
                        <button onClick={() => addBlock('carousel')} className="bg-gray-800 hover:bg-gray-700 text-sm px-3 py-2 rounded border border-gray-700 flex items-center gap-1 transition-colors">
                             <span className="text-green-400">+</span> Carrusel (Galería)
                        </button>
                    </div>
                 </div>

                 <div className="space-y-4 min-h-[400px]">
                    {blocks.map((block, index) => (
                        <div key={block.id} className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 relative group hover:border-gray-600 transition-colors">
                            {/* Block Controls */}
                            <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/80 rounded p-1 z-10">
                                <button onClick={() => moveBlock(index, 'up')} className="p-1 hover:text-cyan-400 disabled:opacity-30" disabled={index === 0}>⬆️</button>
                                <button onClick={() => moveBlock(index, 'down')} className="p-1 hover:text-cyan-400 disabled:opacity-30" disabled={index === blocks.length - 1}>⬇️</button>
                                <button onClick={() => removeBlock(block.id)} className="p-1 hover:text-red-400 text-red-500">✖️</button>
                            </div>

                            {/* TEXT BLOCK */}
                            {block.type === 'text' && (
                                <div>
                                    <label className="text-xs text-cyan-400 uppercase font-bold tracking-wider mb-2 block">Párrafo de Texto</label>
                                    <textarea
                                        value={block.content}
                                        onChange={(e) => updateBlock(block.id, e.target.value)}
                                        className="w-full bg-transparent text-gray-200 resize-none outline-none min-h-[100px]"
                                        placeholder="Escribe aquí... (Enter crea saltos de línea)"
                                    />
                                </div>
                            )}

                            {/* IMAGE BLOCK */}
                            {block.type === 'image' && (
                                <div>
                                     <label className="text-xs text-purple-400 uppercase font-bold tracking-wider mb-2 block">Imagen Insertada</label>
                                     {block.content ? (
                                        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-black/40">
                                            <img src={block.content} className="w-full h-full object-contain" />
                                            <button onClick={() => updateBlock(block.id, '')} className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 text-white font-bold transition-opacity">Cambiar</button>
                                        </div>
                                     ) : (
                                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:bg-gray-800/50 transition-colors">
                                            <input type="file" accept="image/*" className="hidden" id={`file-${block.id}`} onChange={(e) => handleBlockImageUpload(block.id, e.target.files)} />
                                            <label htmlFor={`file-${block.id}`} className="cursor-pointer flex flex-col items-center">
                                                <span className="text-4xl mb-2">📷</span>
                                                <span className="text-sm text-gray-400">Subir Imagen Única</span>
                                            </label>
                                        </div>
                                     )}
                                </div>
                            )}

                            {/* CAROUSEL BLOCK */}
                            {block.type === 'carousel' && (
                                <div>
                                    <label className="text-xs text-green-400 uppercase font-bold tracking-wider mb-2 block">Galería / Carrusel ({block.content?.length || 0} fotos)</label>
                                    
                                    <div className="flex gap-2 overflow-x-auto pb-2 mb-2 custom-scrollbar">
                                        {block.content && block.content.map((img, i) => (
                                            <div key={i} className="w-20 h-20 shrink-0 rounded border border-gray-600 overflow-hidden relative group/img">
                                                <img src={img} className="w-full h-full object-cover" />
                                                <button 
                                                    onClick={() => {
                                                        const newContent = block.content.filter((_, idx) => idx !== i);
                                                        updateBlock(block.id, newContent);
                                                    }}
                                                    className="absolute top-0 right-0 bg-red-600 text-white w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover/img:opacity-100"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                         <div className="w-20 h-20 shrink-0 rounded border-2 border-dashed border-gray-600 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors cursor-pointer relative">
                                            <input 
                                                type="file" 
                                                accept="image/*" 
                                                multiple 
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                onChange={(e) => handleBlockImageUpload(block.id, e.target.files, true)}
                                            />
                                            <span className="text-2xl">+</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">Sube hasta 5 imágenes. Se verán como un carrusel deslizable.</p>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="h-20 border-2 border-dashed border-gray-800 rounded-xl flex items-center justify-center text-gray-500">
                        Selecciona un tipo de bloque arriba para añadir contenido
                    </div>
                 </div>
            </div>
        )}

        {/* STEP 3: Preview */}
        {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                 <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-yellow-200/80 text-sm text-center mb-6">
                    Así se verá tu noticia publicada
                </div>

                {/* Article Preview Card */}
                <article className="max-w-2xl mx-auto">
                    {formData.image && (
                         <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl relative">
                            <img src={formData.image} className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-cyan-900/80 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30 backdrop-blur-md">
                                {formData.tag || 'Categoría'}
                            </div>
                         </div>
                    )}
                   
                    <h1 className="text-3xl font-bold text-white mb-4 leading-tight">{formData.title || 'Sin Título'}</h1>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
                        <span>Por <span className="text-white">{formData.author || 'Anónimo'}</span></span>
                        <span>•</span>
                        <span>{formData.date}</span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="lead text-xl text-gray-200 font-medium mb-8">{formData.description}</p>
                        
                        {/* Dynamic Content Rendering */}
                        <div 
                            className="leading-relaxed [&>p]:mb-6 [&>p]:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: generateHtmlFromBlocks() }}
                        />
                    </div>
                </article>
            </div>
        )}

      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-800 bg-gray-900/50 flex justify-between">
        <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-white'}`}
        >
            Atrás
        </button>

        {currentStep < totalSteps ? (
            <button onClick={handleNext} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-2 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20">
                Siguiente
            </button>
        ) : (
             <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-8 py-2 rounded-lg font-bold transition-all shadow-lg shadow-purple-500/20"
            >
                {loading ? 'Publicando...' : 'Publicar Ahora'}
            </button>
        )}
      </div>

    </div>
  );
};

export default CreateNewsWizard;
