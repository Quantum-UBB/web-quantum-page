"use client";
import { useState, useRef } from 'react';

const CreateEventWizard = ({ onSuccess, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    host: '',
    type: 'Conferencia', // Default type
    description: '', // Short description
    fullDescription: '', // Long description
    date: new Date().toISOString().slice(0, 16), // YYYY-MM-DDTHH:MM
    endDate: '',
    location: '',
    locationUrl: '',
    image: '',
    hostImage: '',
    hostImagePreview: '' // Helper for preview
  });
  const [loading, setLoading] = useState(false);
  
  // Refs for file inputs
  const imageInputRef = useRef(null);
  const hostImageInputRef = useRef(null);

  const totalSteps = 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1.5 * 1024 * 1024) { // 1.5MB limit
        alert("El archivo es demasiado grande. Por favor sube una imagen menor a 1.5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
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

    const newEvent = {
      id: Date.now(),
      ...formData,
      isLocal: true,
      status: 'upcoming' // Default status
    };

    try {
      const existingEvents = JSON.parse(localStorage.getItem('quantum_local_events') || '[]');
      localStorage.setItem('quantum_local_events', JSON.stringify([newEvent, ...existingEvents]));
      
      if (onSuccess) onSuccess(newEvent);
    } catch (error) {
      console.error("Error saving event:", error);
      alert("Error al guardar el evento (posiblemente las imágenes son muy pesadas).");
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
                <span className="text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span> 
                Creador de Eventos
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
            className="bg-gradient-to-r from-purple-500 to-pink-600 h-1 transition-all duration-300 ease-out"
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
                    <label className="block text-sm font-medium text-gray-400 mb-1">Título del Evento</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                        placeholder="Ej: Hackathon Global 2026"
                        autoFocus
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Organizador (Host)</label>
                        <input
                            type="text"
                            name="host"
                            value={formData.host}
                            onChange={handleChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                            placeholder="Ej: Facultad de Ingeniería"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Tipo de Evento</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option>Conferencia</option>
                            <option>Webinar</option>
                            <option>Taller / Workshop</option>
                            <option>Hackathon</option>
                            <option>Meetup</option>
                        </select>
                    </div>
                </div>
            </div>
        )}

        {/* Step 2: Date & Location */}
        {currentStep === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Fecha y Ubicación</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Fecha de Inicio</label>
                        <input
                            type="datetime-local"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Fecha de Término (Opcional)</label>
                        <input
                            type="datetime-local"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Ubicación (Física o Virtual)</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                        placeholder="Ej: Auditorio Central / Zoom"
                    />
                </div>
                
                <div>
                     <label className="block text-sm font-medium text-gray-400 mb-1">Enlace de Ubicación (Maps/Link)</label>
                     <input
                        type="url"
                        name="locationUrl"
                        value={formData.locationUrl}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                        placeholder="https://maps.google.com/..."
                    />
                </div>
            </div>
        )}

        {/* Step 3: Description */}
        {currentStep === 3 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Detalles del Evento</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Resumen Corto (Para tarjetas)</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                        placeholder="Breve descripción que aparecerá en la lista de eventos..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Descripción Completa</label>
                    <textarea
                        name="fullDescription"
                        value={formData.fullDescription}
                        onChange={handleChange}
                        rows="6"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-sans text-sm"
                        placeholder="Detalla la agenda, los speakers, y toda la información relevante para la página de detalle..."
                    />
                </div>
            </div>
        )}

        {/* Step 4: Media */}
        {currentStep === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                
                {/* Event Image */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Imagen del Evento</h3>
                    <div 
                        className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:bg-gray-800/30 transition-colors cursor-pointer group"
                        onClick={() => imageInputRef.current?.click()}
                    >
                        <input 
                            type="file" 
                            ref={imageInputRef} 
                            onChange={(e) => handleFileChange(e, 'image')} 
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
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <p className="text-gray-300 font-medium">Subir Banner del Evento</p>
                                <p className="text-gray-500 text-sm">Recomendado 1200x600px</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Host Image */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Logo del Organizador</h3>
                    <div className="flex items-center gap-6">
                        <div 
                            className="w-24 h-24 border-2 border-dashed border-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:border-purple-500 transition-colors overflow-hidden relative group"
                            onClick={() => hostImageInputRef.current?.click()}
                        >
                            <input 
                                type="file" 
                                ref={hostImageInputRef} 
                                onChange={(e) => handleFileChange(e, 'hostImage')} 
                                accept="image/*" 
                                className="hidden" 
                            />
                            {formData.hostImage ? (
                                <>
                                    <img src={formData.hostImage} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </div>
                                </>
                            ) : (
                                <span className="text-xs text-center text-gray-500">Logo Host</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-400">Sube el logo o foto del organizador.</p>
                            <p className="text-xs text-gray-600 mt-1">Se mostrará en la página de detalle junto a la información del host.</p>
                        </div>
                    </div>
                </div>

            </div>
        )}

        {/* Step 5: Preview */}
        {currentStep === 5 && (
             <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Confirmar Evento</h3>
                
                {/* Main Preview Card */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md max-w-sm mx-auto">
                     <div className="relative aspect-video bg-gray-200">
                        {formData.image && <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />}
                        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                            {new Date(formData.date).toLocaleDateString()}
                        </div>
                     </div>
                     <div className="p-4">
                        <div className="text-xs font-bold text-cyan-700 uppercase tracking-widest mb-1">{formData.type}</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{formData.title}</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">{formData.description}</p>
                     </div>
                     <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex items-center gap-2">
                        {formData.hostImage && <img src={formData.hostImage} className="w-6 h-6 rounded-full object-cover" />}
                        <span className="text-xs text-gray-600 font-medium">{formData.host}</span>
                     </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex gap-3 text-blue-200/80 text-sm">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <p className="font-bold text-blue-200 mb-1">Detalles Adicionales:</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                            <li>Ubicación: {formData.location} ({formData.locationUrl ? 'Con enlace' : 'Sin enlace'})</li>
                            <li>Descripción Completa: {formData.fullDescription ? 'Incluida' : 'No incluida'}</li>
                            <li>Fecha Término: {formData.endDate ? new Date(formData.endDate).toLocaleDateString() : 'Mismo día'}</li>
                        </ul>
                    </div>
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
                className="bg-gray-800 hover:bg-gray-700 text-purple-400 border border-purple-500/30 px-8 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
                Siguiente
            </button>
        ) : (
            <button
                onClick={handleSubmit}
                disabled={loading}
                className={`bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-2 rounded-lg font-bold transition-all shadow-lg shadow-purple-500/20 hover:scale-105 ${
                    loading ? 'opacity-70 cursor-wait' : ''
                }`}
            >
                {loading ? 'Creando...' : 'Publicar Evento'}
            </button>
        )}
      </div>

    </div>
  );
};

export default CreateEventWizard;
