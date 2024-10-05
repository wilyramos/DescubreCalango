interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="relative bg-white shadow-md rounded-xl overflow-hidden border-t-4 border-indigo-500">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-20 text-white p-2 text-right">
        <h3 className="text-xl ">{title}</h3>
        <p className=" bg-black bg-opacity-40">{description}</p>
        <a href={link} target="" rel="" className="px-2 py-1 mt-auto text-sm bg-transparent rounded hover:bg-blue-600 transition text-left">
          Ver proyecto
        </a>
      </div>
    </div>


  );
}
