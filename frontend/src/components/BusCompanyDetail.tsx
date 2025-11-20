import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BusRoute {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  availableSeats: number;
  busType: string;
}

interface BusCompany {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
  totalBuses: number;
  established: string;
  contact: {
    phone: string;
    email: string;
  };
  amenities: string[];
}

const BusCompanyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const companies: { [key: string]: BusCompany } = {
    '1': {
      id: '1',
      name: 'AVS',
      logo: '/images/avs-logo.svg',
      description: 'Leading bus transport company serving major cities across Ivory Coast. We pride ourselves on punctuality, comfort, and exceptional customer service.',
      rating: 4.7,
      totalBuses: 45,
      established: '2008',
      contact: {
        phone: '+225-20-25-10-10',
        email: 'info@avs-ci.com'
      },
      amenities: ['AC', 'Comfortable Seats', 'Luggage Storage', 'Professional Drivers', 'Safety Equipment']
    },
    '2': {
      id: '2',
      name: 'CITADINE',
      logo: '/images/citadine-logo.svg',
      description: 'Modern urban and intercity transport solutions throughout Côte d\'Ivoire with focus on customer satisfaction.',
      rating: 4.5,
      totalBuses: 32,
      established: '2012',
      contact: {
        phone: '+225-27-22-15-15',
        email: 'contact@citadine-ci.com'
      },
      amenities: ['AC', 'GPS Tracking', 'Clean Vehicles', 'Punctual Service']
    },
    '3': {
      id: '3',
      name: 'UTB',
      logo: '/images/utb-logo.svg',
      description: 'Reliable intercity connections linking Abidjan to major destinations across Ivory Coast.',
      rating: 4.6,
      totalBuses: 38,
      established: '2010',
      contact: {
        phone: '+225-20-30-20-20',
        email: 'service@utb-transport.ci'
      },
      amenities: ['AC', 'Reclining Seats', 'Luggage Compartments', 'Regular Maintenance', 'Licensed Drivers']
    },
    '4': {
      id: '4',
      name: 'GBAKA',
      logo: '/images/gbaka-logo.svg',
      description: 'Popular local transport serving communities across Ivory Coast with affordable and accessible services.',
      rating: 4.3,
      totalBuses: 28,
      established: '2015',
      contact: {
        phone: '+225-05-45-67-89',
        email: 'info@gbaka-transport.ci'
      },
      amenities: ['Basic Comfort', 'Affordable Rates', 'Local Routes', 'Community Service']
    }
  };

  const routes: { [key: string]: BusRoute[] } = {
    '1': [
      {
        id: 'r1',
        from: 'Abidjan',
        to: 'Yamoussoukro',
        departureTime: '06:00',
        arrivalTime: '09:30',
        duration: '3h 30m',
        price: 3500,
        availableSeats: 12,
        busType: 'Express'
      },
      {
        id: 'r2',
        from: 'Abidjan',
        to: 'Bouaké',
        departureTime: '08:00',
        arrivalTime: '12:00',
        duration: '4h 00m',
        price: 4000,
        availableSeats: 8,
        busType: 'Standard'
      },
      {
        id: 'r3',
        from: 'Abidjan',
        to: 'San Pedro',
        departureTime: '09:30',
        arrivalTime: '14:30',
        duration: '5h 00m',
        price: 5000,
        availableSeats: 15,
        busType: 'Express'
      },
      {
        id: 'r4',
        from: 'Yamoussoukro',
        to: 'Abidjan',
        departureTime: '15:00',
        arrivalTime: '18:30',
        duration: '3h 30m',
        price: 3500,
        availableSeats: 6,
        busType: 'Express'
      },
      {
        id: 'r5',
        from: 'Bouaké',
        to: 'Korhogo',
        departureTime: '11:00',
        arrivalTime: '14:30',
        duration: '3h 30m',
        price: 3000,
        availableSeats: 20,
        busType: 'Standard'
      }
    ],
    '2': [
      {
        id: 'r6',
        from: 'Abidjan',
        to: 'Grand Bassam',
        departureTime: '07:00',
        arrivalTime: '08:15',
        duration: '1h 15m',
        price: 1500,
        availableSeats: 10,
        busType: 'Urban'
      },
      {
        id: 'r7',
        from: 'Abidjan',
        to: 'Daloa',
        departureTime: '10:00',
        arrivalTime: '15:30',
        duration: '5h 30m',
        price: 4500,
        availableSeats: 18,
        busType: 'Express'
      },
      {
        id: 'r8',
        from: 'Daloa',
        to: 'Man',
        departureTime: '13:00',
        arrivalTime: '16:00',
        duration: '3h 00m',
        price: 2800,
        availableSeats: 14,
        busType: 'Standard'
      }
    ],
    '3': [
      {
        id: 'r9',
        from: 'Abidjan',
        to: 'Gagnoa',
        departureTime: '08:30',
        arrivalTime: '12:00',
        duration: '3h 30m',
        price: 3200,
        availableSeats: 16,
        busType: 'Express'
      },
      {
        id: 'r10',
        from: 'Abidjan',
        to: 'Divo',
        departureTime: '14:00',
        arrivalTime: '16:30',
        duration: '2h 30m',
        price: 2500,
        availableSeats: 22,
        busType: 'Standard'
      },
      {
        id: 'r11',
        from: 'Gagnoa',
        to: 'Soubré',
        departureTime: '16:00',
        arrivalTime: '18:30',
        duration: '2h 30m',
        price: 2200,
        availableSeats: 12,
        busType: 'Standard'
      }
    ],
    '4': [
      {
        id: 'r12',
        from: 'Abidjan',
        to: 'Anyama',
        departureTime: '06:30',
        arrivalTime: '07:30',
        duration: '1h 00m',
        price: 800,
        availableSeats: 25,
        busType: 'Local'
      },
      {
        id: 'r13',
        from: 'Abidjan',
        to: 'Bingerville',
        departureTime: '09:00',
        arrivalTime: '09:45',
        duration: '45m',
        price: 600,
        availableSeats: 30,
        busType: 'Local'
      },
      {
        id: 'r14',
        from: 'Abidjan',
        to: 'Dabou',
        departureTime: '11:30',
        arrivalTime: '13:00',
        duration: '1h 30m',
        price: 1200,
        availableSeats: 18,
        busType: 'Local'
      }
    ]
  };

  const company = id ? companies[id] : null;
  const companyRoutes = id ? routes[id] || [] : [];

  if (!company) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Company Not Found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{company.name}</span>
      </div>

      {/* Company Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="w-20 h-20 mr-6 object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{company.name}</h1>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="ml-2 text-lg font-medium">{company.rating}</span>
                <span className="ml-2 text-gray-500">• Est. {company.established}</span>
              </div>
              <p className="text-gray-600 max-w-2xl">{company.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-2">Fleet Size</div>
            <div className="text-2xl font-bold text-blue-600">{company.totalBuses} Buses</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Routes Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Available Routes & Schedules</h2>
          
          {companyRoutes.length > 0 ? (
            <div className="space-y-4">
              {companyRoutes.map((route) => (
                <div key={route.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="text-lg font-semibold text-gray-800">
                          {route.from} → {route.to}
                        </div>
                        <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {route.busType}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Departure</div>
                          <div className="font-medium">{route.departureTime}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Arrival</div>
                          <div className="font-medium">{route.arrivalTime}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Duration</div>
                          <div className="font-medium">{route.duration}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Available Seats</div>
                          <div className="font-medium text-green-600">{route.availableSeats}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {route.price.toLocaleString()} CFA
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-semibold mb-2">No Routes Available</h3>
              <p className="text-gray-600">This company doesn't have any active routes at the moment.</p>
            </div>
          )}
        </div>

        {/* Company Info Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-lg mr-3">📱</span>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">{company.contact.phone}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-3">📧</span>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">{company.contact.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Bus Amenities</h3>
            <div className="grid grid-cols-2 gap-3">
              {company.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Routes</span>
                <span className="font-medium">{companyRoutes.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Rating</span>
                <span className="font-medium">{company.rating} ⭐</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Years of Service</span>
                <span className="font-medium">{new Date().getFullYear() - parseInt(company.established)} years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusCompanyDetail;