import React from 'react';
import { Link } from 'react-router-dom';

interface BusCompany {
  id: string;
  name: string;
  logo: string;
  description: string;
  routes: number;
  rating: number;
  established: string;
}

const HomePage: React.FC = () => {
  const busCompanies: BusCompany[] = [
    {
      id: '1',
      name: 'AVS',
      logo: '/images/avs-logo.svg',
      description: 'Leading bus transport company serving major cities across Ivory Coast',
      routes: 25,
      rating: 4.7,
      established: '2008'
    },
    {
      id: '2',
      name: 'CITADINE',
      logo: '/images/citadine-logo.svg',
      description: 'Modern urban and intercity transport solutions throughout Côte d\'Ivoire',
      routes: 18,
      rating: 4.5,
      established: '2012'
    },
    {
      id: '3',
      name: 'UTB',
      logo: '/images/utb-logo.svg',
      description: 'Reliable intercity connections linking Abidjan to major destinations',
      routes: 22,
      rating: 4.6,
      established: '2010'
    },
    {
      id: '4',
      name: 'GBAKA',
      logo: '/images/gbaka-logo.svg',
      description: 'Popular local transport serving communities across Ivory Coast',
      routes: 15,
      rating: 4.3,
      established: '2015'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Book tickets with trusted bus companies across the country
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="From"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-lg"
            />
            <input
              type="text"
              placeholder="To"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-lg"
            />
            <input
              type="date"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-lg"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VoyageBus?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book your tickets online in just a few clicks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Travel with verified and licensed bus operators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Compare prices and find the best deals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bus Companies Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Bus Companies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {busCompanies.map((company) => (
              <div key={company.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-12 h-12 mr-3 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{company.name}</h3>
                      <p className="text-sm text-gray-500">Est. {company.established}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="ml-1 text-sm font-medium">{company.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{company.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{company.routes} routes available</span>
                </div>
                
                <Link
                  to={`/company/${company.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center block"
                >
                  View Schedules
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomePage;