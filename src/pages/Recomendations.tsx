import { useState } from 'react';

const recomendaciones = [
  { titulo: 'Tour de Aventura', descripcion: 'Explora emocionantes rutas en Calango.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.5, categoria: 'Aventura' },
  { titulo: 'Experiencia Cultural', descripcion: 'Sumérgete en la historia y cultura local.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.7, categoria: 'Cultura' },
  { titulo: 'Caminata en la Naturaleza', descripcion: 'Descubre los paisajes naturales de Calango.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.8, categoria: 'Naturaleza' },
  { titulo: 'Tour Gastronómico', descripcion: 'Prueba los sabores únicos de la región.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.6, categoria: 'Gastronomía' },
];

const categorias = ['Todas', 'Aventura', 'Cultura', 'Naturaleza', 'Gastronomía'];

export default function Recomendations() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const recomendacionesFiltradas = categoriaSeleccionada === 'Todas' 
    ? recomendaciones 
    : recomendaciones.filter(rec => rec.categoria === categoriaSeleccionada);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Explora Calango según tus Gustos</h2>
      
      {/* Barra de filtros */}
      <div className="flex justify-center space-x-4 mb-8">
        {categorias.map((categoria) => (
          <button 
            key={categoria}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 
              ${categoriaSeleccionada === categoria ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-100'}`}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
      
      {/* Cuadrícula de recomendaciones */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recomendacionesFiltradas.map((rec, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img className="w-full h-48 object-cover" src={rec.imagenUrl} alt={rec.titulo} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{rec.titulo}</h3>
              <p className="text-gray-700 mb-4">{rec.descripcion}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-600">Calificación: {rec.calificacion}</span>
                <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">{rec.categoria}</span>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">Más Información</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
