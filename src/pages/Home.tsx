
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center text-blue-600">Find Your Next Adventure</h2>
          <p className="mt-4 text-gray-700 text-center">Discover personalized travel recommendations for you.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Beach Escape', 'Mountain Adventure', 'Cultural Experience'].map((destination) => (
              <div key={destination} className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105">
                <img src={`https://via.placeholder.com/300?text=${destination}`} alt={destination} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{destination}</h3>
                  <p className="mt-2 text-gray-600">Explore the best of {destination} with our tailored suggestions.</p>
                  <Link to={`/destinations/${destination}`} className="mt-4 inline-block text-blue-600 hover:underline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };


