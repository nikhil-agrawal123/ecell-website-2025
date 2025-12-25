'use client';

import React, { useState } from 'react';

const SubmitIdeasPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    ideaTitle: '',
    category: '',
    description: '',
    targetAudience: '',
    businessModel: '',
    teamSize: '',
    currentStage: '',
    fundingNeeded: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        ideaTitle: '',
        category: '',
        description: '',
        targetAudience: '',
        businessModel: '',
        teamSize: '',
        currentStage: '',
        fundingNeeded: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error submitting idea:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          footer {
            display: none !important;
          }
        `
      }} />
      {/* Header */}
      <div className="relative pt-40 pb-12 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Submit Your Idea
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Have a brilliant startup idea? Share it with us and get guidance, mentorship, and potential funding opportunities.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-neutral-300 mb-2">
                  Department/ Branch
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
            </div>
          </div>

          {/* Idea Details */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Idea Details</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="ideaTitle" className="block text-sm font-medium text-neutral-300 mb-2">
                  Idea Title *
                </label>
                <input
                  type="text"
                  id="ideaTitle"
                  name="ideaTitle"
                  value={formData.ideaTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-neutral-300 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="fintech">FinTech</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="social-impact">Social Impact</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-300 mb-2">
                  Idea Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Describe your idea, the problem it solves, and your proposed solution..."
                />
              </div>

              <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-neutral-300 mb-2">
                Additional Comments
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Any additional information, challenges you're facing, or specific help you need..."
              />
            </div>

              {/* <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-neutral-300 mb-2">
                  Target Audience
                </label>
                <textarea
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Who are your target customers? Define your audience..."
                />
              </div>

              <div>
                <label htmlFor="businessModel" className="block text-sm font-medium text-neutral-300 mb-2">
                  Business Model
                </label>
                <textarea
                  id="businessModel"
                  name="businessModel"
                  value={formData.businessModel}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="How do you plan to make money? Describe your revenue model..."
                />
              </div> */}
            </div>
          </div>

          {/* Project Status
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Project Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-neutral-300 mb-2">
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Select team size</option>
                  <option value="solo">Solo (Just me)</option>
                  <option value="2-3">2-3 members</option>
                  <option value="4-5">4-5 members</option>
                  <option value="6+">6+ members</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentStage" className="block text-sm font-medium text-neutral-300 mb-2">
                  Current Stage
                </label>
                <select
                  id="currentStage"
                  name="currentStage"
                  value={formData.currentStage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Select current stage</option>
                  <option value="idea">Just an idea</option>
                  <option value="research">Market research</option>
                  <option value="prototype">Prototype development</option>
                  <option value="mvp">MVP ready</option>
                  <option value="launched">Already launched</option>
                </select>
              </div>

              <div>
                <label htmlFor="fundingNeeded" className="block text-sm font-medium text-neutral-300 mb-2">
                  Funding Needed
                </label>
                <select
                  id="fundingNeeded"
                  name="fundingNeeded"
                  value={formData.fundingNeeded}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Select funding range</option>
                  <option value="none">No funding needed</option>
                  <option value="under-1l">Under ₹1 Lakh</option>
                  <option value="1l-5l">₹1-5 Lakhs</option>
                  <option value="5l-10l">₹5-10 Lakhs</option>
                  <option value="10l-50l">₹10-50 Lakhs</option>
                  <option value="50l+">₹50 Lakhs+</option>
                </select>
              </div>
            </div>
          </div> */}

          {/* Additional Information */}
          {/* <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Additional Information</h2>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-neutral-300 mb-2">
                Additional Comments
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Any additional information, challenges you're facing, or specific help you need..."
              />
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-[3px] relative disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full" />
              <div className="px-12 py-4 bg-transparent rounded-full font-bold relative group transition duration-200 text-white">
                {isSubmitting ? 'Submitting...' : 'Submit Your Idea'}
              </div>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
              <p className="text-green-400 font-semibold">
                🎉 Your idea has been submitted successfully! We&apos;ll review it and get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-center p-4 bg-red-900/20 border border-red-700 rounded-lg">
              <p className="text-red-400 font-semibold">
                ❌ There was an error submitting your idea. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Review Process</h3>
              <p className="text-neutral-300">
                Our team will review your submission within 5-7 business days.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Mentorship</h3>
              <p className="text-neutral-300">
                Selected ideas get paired with experienced mentors and industry experts.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Launch Support</h3>
              <p className="text-neutral-300">
                Get access to funding opportunities, resources, and our startup incubator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitIdeasPage;