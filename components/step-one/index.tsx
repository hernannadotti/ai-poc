import React, { useState } from 'react';
import backgroundImage from '../../src/assets/images/Mobile_1280x900.svg';
import canadianIcon from '../../src/assets/images/proudly-canadian-icon.svg';
import ppuLogo from '../../src/assets/images/ppu-logo.svg';

interface FormData {
  petName: string;
  postalCode: string;
  petType: 'Dog' | 'Cat' | '';
  petGender: 'Male' | 'Female' | '';
  petBreed: string;
  petAge: string;
  email: string;
  promoCode: string;
  termsAccepted: boolean;
}

const StepOne: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    petName: '',
    postalCode: '',
    petType: '',
    petGender: '',
    petBreed: '',
    petAge: '',
    email: '',
    promoCode: '',
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const dogBreeds = [
    'Select Breed',
    'Labrador Retriever',
    'German Shepherd',
    'Golden Retriever',
    'French Bulldog',
    'Bulldog',
    'Poodle',
    'Beagle',
    'Rottweiler',
    'German Shorthaired Pointer',
    'Yorkshire Terrier',
    'Boxer',
    'Dachshund',
    'Siberian Husky',
    'Great Dane',
    'Doberman Pinscher',
    'Australian Shepherd',
    'Miniature Schnauzer',
    'Cavalier King Charles Spaniel',
    'Shih Tzu',
    'Boston Terrier',
    'Pomeranian',
    'Havanese',
    'Shetland Sheepdog',
    'Brittany',
    'Pembroke Welsh Corgi',
    'Mixed Breed',
    'Other',
  ];

  const catBreeds = [
    'Select Breed',
    'Persian',
    'Maine Coon',
    'Ragdoll',
    'British Shorthair',
    'Siamese',
    'Scottish Fold',
    'Sphynx',
    'Abyssinian',
    'Devon Rex',
    'American Shorthair',
    'Exotic Shorthair',
    'Bengal',
    'Russian Blue',
    'Norwegian Forest Cat',
    'Birman',
    'Oriental Shorthair',
    'Burmese',
    'Tonkinese',
    'Domestic Shorthair',
    'Domestic Longhair',
    'Mixed Breed',
    'Other',
  ];

  const getBreedsByPetType = (petType: string) => {
    if (petType === 'Dog') return dogBreeds;
    if (petType === 'Cat') return catBreeds;
    return ['Select Breed'];
  };

  const breeds = getBreedsByPetType(formData.petType);
  const ages = Array.from({ length: 31 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat font-vag-rounded relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover-image -z-10"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      
      <header className="relative z-20 flex items-center px-4 py-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3B3FB6' }}>
        <img src={ppuLogo} alt="PPU Logo" className="h-12 sm:h-16" />
      </header>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full" style={{ maxWidth: '656px' }}>
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm bg-opacity-95 relative">
            <img 
              src={canadianIcon} 
              alt="Proudly Canadian" 
              className="absolute top-4 right-4 h-16 w-16"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[#2D3E8F]">
              ABOUT MY PETS
            </h1>
            <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              First, let's get to know your pet better.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="petName" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Pet Name
                </label>
                <input
                  type="text"
                  id="petName"
                  value={formData.petName}
                  onChange={(e) => handleInputChange('petName', e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="Enter your pet's name"
                  required
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="A1A 1A1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Pet Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange('petType', 'Dog');
                      handleInputChange('petBreed', '');
                    }}
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm sm:text-base ${
                      formData.petType === 'Dog'
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    🐕 Dog
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange('petType', 'Cat');
                      handleInputChange('petBreed', '');
                    }}
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm sm:text-base ${
                      formData.petType === 'Cat'
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    🐈 Cat
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Pet Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleInputChange('petGender', 'Male')}
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm sm:text-base ${
                      formData.petGender === 'Male'
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('petGender', 'Female')}
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm sm:text-base ${
                      formData.petGender === 'Female'
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="petBreed" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Pet Breed
                </label>
                <select
                  id="petBreed"
                  value={formData.petBreed}
                  onChange={(e) => handleInputChange('petBreed', e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base select-with-arrow"
                  required
                  disabled={!formData.petType}
                >
                  {breeds.map((breed) => (
                    <option key={breed} value={breed === 'Select Breed' ? '' : breed} disabled={breed === 'Select Breed'}>
                      {breed}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="petAge" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Pet Age
                </label>
                <select
                  id="petAge"
                  value={formData.petAge}
                  onChange={(e) => handleInputChange('petAge', e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base select-with-arrow"
                  required
                >
                  <option value="" disabled>
                    Select Age
                  </option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age} {age === 1 ? 'year' : 'years'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="promoCode" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Partner or Promo Code
                </label>
                <input
                  type="text"
                  id="promoCode"
                  value={formData.promoCode}
                  onChange={(e) => handleInputChange('promoCode', e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="Enter code (optional)"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                  className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                  By checking this box, I confirm that I accept Pets Plus Us Pet Insurance's{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                    Terms of Use
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B3DBF] hover:bg-[#2D2E9F] text-white font-bold py-3.5 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B3DBF] text-base sm:text-lg mt-2"
              >
                Get Pricing
              </button>
            </form>
          </div>

          <p className="text-center text-white text-xs sm:text-sm mt-6 drop-shadow-lg">
            © {new Date().getFullYear()} Pets Plus Us Pet Insurance. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
