
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

function Form({ visible, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    languages: [''],
    email: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});


  if (!visible) return null;

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to terms and conditions';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLanguageChange = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(lang => lang !== language)
        : [...prev.languages, language]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        languages: [''],
        email: '',
        agreeToTerms: false
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="fixed inset-0 h-[673px] mt-auto gap-[12px] mb-3 flex justify-center items-center z-50">
      <div className="bg-white rounded-[12px] p-[40px] max-w-md relative">
        
        <button 
          onClick={onClose}
          className="absolute right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>


        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Started Today!</h2>
          <p className="text-gray-600  font-normal text-[18px] leading-">Fill in your details and take control of your tasks.</p>
          
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-medium text-[16px] leading-[24px] tracking-normal mb-[10px]">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className={`w-full px-3 py-2 bg-[#FFDEE287] border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 ${
                  errors.firstName ? 'border-[#FF3E54]' : 'border-[#FFDEE287]'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="font-medium text-[16px] leading-[24px] tracking-normal mb-[10px]">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className={`w-full px-3 py-2 opacity-80 bg-[#FFDEE287] border rounded-[4px] ${
                  errors.lastName ? 'border-[#FF3E54]' : 'border-[#FFDEE287]'
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          
          <div>
            <label className="font-medium text-[16px] leading-[24px] tracking-normal mb-[10px]">
              Gender
            </label>
            <div className="flex gap-3">
            <label className="flex items-center space-x-2 bg-[#FFDEE287] px-4 py-2 rounded-[4px] cursor-pointer ">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                  className="text-[#424242CC] opacity-80"
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2 bg-[#FFDEE287] px-4 py-2 rounded-md cursor-pointer ">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                  className="text-pink-500 "
                />
                <span className="text-[#424242CC] opacity-80 ">Female</span>
              </label>
            </div>
          </div>

          <div>
            <label className="font-medium text-[16px] leading-[24px] tracking-normal mb-[10px]">
              Language
            </label>
            <div className="space-y-2">
              {['english', 'hindi', 'marathi'].map((language) => (
                <label key={language} className="flex w-[220px] items-center space-x-3 bg-[#FFDEE287] px-4 py-2 rounded-[4px] cursor-pointer ">
                  <input
                    type="checkbox"
                    checked={formData.languages.includes(language)}
                    onChange={() => handleLanguageChange(language)}
                    className="w-4 h-4  bg-[#FFDEE287] rounded "
                  />
                  <span className="text-[#424242CC] capitalize">{language}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className=" font-medium text-[16px] leading-[24px] tracking-normal mb-[10px]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={`w-full px-3 py-2 bg-[#FFDEE287] border rounded-[4px]  ${
                errors.email ? 'border-[#FF3E54]' : 'border-[#FFDEE287]'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-4 h-4  bg-white border-gray-300 rounded mt-0.5"
              />
              <label className="text-sm text-gray-600">
                I agree to the{' '}
                <span className="text-red-500 cursor-pointer">
                  terms and conditions
                </span>
              </label>
            </div>
            {errors.agreeToTerms && <p className="text-red-500 text-[14px] mt-1">{errors.agreeToTerms}</p>}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#FF3E54] hover:bg-pink-500 text-white font-medium py-3 px-4 rounded-[6px]   "
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;