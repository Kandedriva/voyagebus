import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RegistrationData {
  companyName: string;
  email: string;
  phone: string;
  localisation: string;
  city: string;
  description: string;
  logo: File | null;
}

const CompanyRegistration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    companyName: '',
    email: '',
    phone: '',
    localisation: '',
    city: '',
    description: '',
    logo: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      logo: file
    }));
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Registration data:', formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cities = [
    'Abidjan', 'Yamoussoukro', 'Bouaké', 'San Pedro', 'Daloa', 
    'Korhogo', 'Man', 'Gagnoa', 'Divo', 'Grand Bassam'
  ];

  if (submitSuccess) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Registration Successful!</h2>
          <p className="text-green-700 mb-6">
            Your bus company registration has been submitted successfully. 
            Our team will review your application and contact you within 48 hours.
          </p>
          <div className="space-x-4">
            <Link 
              to="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Return to Home
            </Link>
            <button 
              onClick={() => {
                setSubmitSuccess(false);
                setFormData({
                  companyName: '',
                  email: '',
                  phone: '',
                  localisation: '',
                  city: '',
                  description: '',
                  logo: null
                });
                setLogoPreview(null);
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Register Another Company
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">Company Registration</span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Register Your Bus Company</h1>
          <p className="text-gray-600">Join our platform and start offering your services to customers across Ivory Coast</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Company Information</h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your company and services"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="company@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+225-XX-XX-XX-XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation *
              </label>
              <textarea
                name="localisation"
                value={formData.localisation}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your complete business address"
              />
            </div>
          </div>

          {/* Logo Upload */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Company Logo</h3>
            <div className="flex items-start space-x-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Logo *
                </label>
                <input
                  type="file"
                  name="logo"
                  onChange={handleLogoChange}
                  accept="image/*"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Accepted formats: JPG, PNG, SVG. Max size: 2MB. Recommended: 200x200px
                </p>
              </div>
              {logoPreview && (
                <div className="w-24 h-24">
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-full h-full object-contain border rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="border-t pt-6">
            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{' '}
                <button type="button" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </button>
                . I confirm that all information provided is accurate and up to date.
              </label>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Link
                to="/"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Register Company'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistration;