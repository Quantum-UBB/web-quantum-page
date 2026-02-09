"use client";
import { useState, useRef } from 'react';

const CreateNewsWizard = ({ onSuccess, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    tag: '',
    description: '',
    content: '',
    image: '',
    secondaryImages: [],
    date: new Date().toISOString().split('T')[0]
  });
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const secondaryFileInputRef = useRef(null);

  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1.5 * 1024 * 1024) { // 1.5MB limit
        alert("El archivo es demasiado grande. Por favor sube una imagen menor a 1.5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondaryFilesChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Limit total secondary images to 3 for performance/storage reasons
    if (formData.secondaryImages.length + files.length > 3) {
        alert("Solo puedes subir un máximo de 3 imágenes secundarias.");
        return;
    }

    files.forEach(file => {
        if (file.size > 500 * 1024) {
             alert(`El archivo ${file.name} es muy grande (>500KB) y será omitido.`);
             return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prev => ({ 
                ...prev, 
                secondaryImages: [...prev.secondaryImages, reader.result] 
            }));
        };
        reader.readAsDataURL(file);
    });
  };

  const removeSecondaryImage = (index) => {
      setFormData(prev => ({
          ...prev,
          secondaryImages: prev.secondaryImages.filter((_, i) => i !== index)
      }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const newArticle = {
      id: Date.now(),
      ...formData,
      isLocal: true
    };

    try {
      const existingNews = JSON.parse(localStorage.getItem('quantum_local_news') || '[]');
      localStorage.setItem('quantum_local_news', JSON.stringify([newArticle, ...existingNews]));
      
      if (onSuccess) onSuccess(newArticle);
    } catch (error) {
      console.error("Error saving news:", error);
      alert("Error al guardar la noticia (posiblemente las imágenes son muy pesadas para LocalStorage).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl max-w-2xl w-full mx-auto relative overflow-hidden flex flex-col max-h-[90vh]">
      
      {/* Header & Close Button */}
      <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
        <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </span> 
                Creador de Noticias
            </h2>
            <p className="text-gray-400 text-sm mt-1">Paso {currentStep} de {totalSteps}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-1">
        <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1 transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>

      {/* Scrollable Content Area */}
      <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
        
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Información Básica</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Título de la Noticia</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                        placeholder="Ej: Avance revolucionario en Quantum..."
                        autoFocus
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Autor</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Categoría</label>
                        <input
                            type="text"
                            name="tag"
                            value={formData.tag}
                            onChange={handleChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                            placeholder="Tecnología, Ciencia..."
                        />
                    </div>
                </div>
            </div>
        )}

        {/* Step 2: Content */}
        {currentStep === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Detalles del Contenido</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Resumen Corto (Bajada)</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
                        placeholder="Breve descripción para la tarjeta..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Contenido Completo (Opcional)</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="6"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all font-mono text-sm"
                        placeholder="Escribe aquí el cuerpo de la noticia. Puedes usar Markdown simple si lo deseas..."
                    />
                </div>
            </div>
        )}

        {/* Step 3: Media */}
        {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                
                {/* Main Image Upload */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Imagen Principal</h3>
                    <div 
                        className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:bg-gray-800/30 transition-colors cursor-pointer group"
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
                            <div className="relative w-full h-48 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-medium">Cambiar Imagen</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-3 py-4">
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <p className="text-gray-300 font-medium">Click para subir foto principal</p>
                                <p className="text-gray-500 text-sm">Max 500KB</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Secondary Images Upload */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex justify-between items-center">
                        <span>Imágenes Secundarias</span>
                        <span className="text-sm font-normal text-gray-500">{formData.secondaryImages.length}/3</span>
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                        {formData.secondaryImages.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden group border border-gray-700">
                                <img src={img} alt={`Secundaria ${index}`} className="w-full h-full object-cover" />
                                <button 
                                    onClick={() => removeSecondaryImage(index)}
                                    className="absolute top-1 right-1 bg-red-500/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>
                        ))}
                        
                        {formData.secondaryImages.length < 3 && (
                             <div 
                                className="aspect-square rounded-lg border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
                                onClick={() => secondaryFileInputRef.current?.click()}
                            >
                                <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                <span className="text-xs">Agregar</span>
                            </div>
                        )}
                    </div>
                    
                    <input 
                        type="file" 
                        ref={secondaryFileInputRef} 
                        onChange={handleSecondaryFilesChange} 
                        accept="image/*" 
                        multiple 
                        className="hidden" 
                    />
                </div>

            </div>
        )}

        {/* Step 4: Preview */}
        {currentStep === 4 && (
             <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Vista Previa</h3>
                
                <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
                    {/* Main Image */}
                    {formData.image && (
                        <div className="h-48 w-full relative">
                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-cyan-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-lg">
                                    {formData.tag || 'Noticia'}
                                </span>
                            </div>
                        </div>
                    )}
                    
                    <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                            <span>{formData.date}</span>
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            <span>{formData.author || 'Anónimo'}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{formData.title || 'Sin Título'}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{formData.description || 'Sin descripción'}</p>
                        
                        {/* Secondary Images Preview in Card */}
                        {formData.secondaryImages.length > 0 && (
                            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                                {formData.secondaryImages.map((img, i) => (
                                    <div key={i} className="w-16 h-16 shrink-0 rounded-md overflow-hidden border border-gray-700">
                                        <img src={img} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {formData.content && (
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 text-xs text-gray-400 font-mono">
                                [Contenido Extendido Presente]
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex gap-3 text-yellow-200/80 text-sm">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p>Revisa bien la información antes de publicar.</p>
                </div>
             </div>
        )}

      </div>

      {/* Footer / Controls */}
      <div className="p-6 border-t border-gray-800 bg-gray-900/50 flex justify-between items-center">
        <button
            onClick={handleBack}
            disabled={currentStep === 1 || loading}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
                currentStep === 1 
                ? 'text-gray-600 cursor-not-allowed' 
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
        >
            Atrás
        </button>

        {currentStep < totalSteps ? (
            <button
                onClick={handleNext}
                className="bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-500/30 px-8 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
                Siguiente
            </button>
        ) : (
            <button
                onClick={handleSubmit}
                disabled={loading}
                className={`bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-2 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 ${
                    loading ? 'opacity-70 cursor-wait' : ''
                }`}
            >
                {loading ? 'Publicando...' : 'Confirmar y Publicar'}
            </button>
        )}
      </div>

    </div>
  );
};

export default CreateNewsWizard;
