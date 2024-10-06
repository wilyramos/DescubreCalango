
const categories = [
  {
    title: 'Comidas y bebidas',
    description: 'Descubre las comidas y bebidas más deliciosas de la región.',
    imageUrl: './public/images/comida.webp',
    link: '#',
  },
  {
    title: 'Aventura',
    description: 'Descubre las actividades de aventura más emocionantes.',
    imageUrl: './public/images/aventura.webp',
    link: '#',
  },
  {
    title: 'Naturaleza',
    description: 'Descubre la naturaleza más impresionante de la región.',
    imageUrl: './public/images/viaja-a-calango-mala.jpg',
    link: '#',
  },
  {
    title: 'Cultura',
    description: 'Descubre la cultura más rica de la región.',
    imageUrl: './public/images/cultura.jpg',
    link: '#',
  },
  {
    title: 'Category 5',
    description: 'Description of category 5',
    imageUrl: 'https://via.placeholder.com/500',
    link: '#',
  },
  {
    title: 'Category 6',
    description: 'Description of category 6',
    imageUrl: 'https://via.placeholder.com/500',
    link: '#',
  },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={category.imageUrl} alt={category.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <p className="text-gray-700 mb-4">{category.description}</p>
            <a href={category.link} className="text-blue-500 hover:text-blue-700 font-semibold">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
