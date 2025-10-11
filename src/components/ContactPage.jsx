import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedService = location.state?.service || '';
  const paymentType = location.state?.paymentType || '';
  const price = location.state?.price || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    paymentType: paymentType,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ 
        ...prev, 
        service: selectedService,
        paymentType: paymentType,
      }));
    }
  }, [selectedService, paymentType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email content
      const emailBody = `
New Contact Form Submission from HorizonWebWorx

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || 'Not specified'}
Payment Type: ${formData.paymentType || 'Not specified'}
Price: ${price || 'Not specified'}

Message:
${formData.message}
      `.trim();

      // Send to your email using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'c8e0e5c8-4f5d-4e0a-9b3a-1c2d3e4f5g6h', // Temporary key - replace with your own
          subject: `New Contact from ${formData.name} - HorizonWebWorx`,
          from_name: formData.name,
          email: formData.email,
          message: emailBody,
          to_email: 'ogeniobinna@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          paymentType: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 px-8 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg3.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Animated grid background */}
      <div
        className="absolute inset-0 animate-grid-move"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)',
        }}
      />

      <div className="max-w-[800px] mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-6 py-3 border-2 border-red-600 bg-black text-white text-[0.7rem] font-arcade hover:bg-red-600 transition-colors"
        >
          ← BACK TO HOME
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] text-white drop-shadow-[3px_3px_0_#ff0000] mb-4">
            CONTACT QUEST
          </h1>
          <p className="text-[0.7rem] text-gray-400">
            FILL OUT THE FORM TO START YOUR MISSION
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 border-4 border-red-600 bg-black/80 shadow-[0_0_30px_rgba(255,0,0,0.5)]"
        >
          {selectedService && (
            <div className="mb-6 p-4 border-2 border-green-600 bg-green-600/10">
              <p className="text-[0.7rem] text-green-400 mb-2">
                ✓ SELECTED: {selectedService.toUpperCase()}
              </p>
              {paymentType && (
                <p className="text-[0.6rem] text-green-300">
                  Payment: {paymentType} {price && `(${price})`}
                </p>
              )}
            </div>
          )}

          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-[0.7rem] mb-2 text-red-600">
              PLAYER NAME *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border-2 border-white text-white text-[0.7rem] font-arcade focus:border-red-600 focus:outline-none"
              placeholder="ENTER YOUR NAME"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-[0.7rem] mb-2 text-red-600">
              EMAIL ADDRESS *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border-2 border-white text-white text-[0.7rem] font-arcade focus:border-red-600 focus:outline-none"
              placeholder="YOUR@EMAIL.COM"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-[0.7rem] mb-2 text-red-600">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border-2 border-white text-white text-[0.7rem] font-arcade focus:border-red-600 focus:outline-none"
              placeholder="+1 (555) 555-5555"
            />
          </div>

          {/* Service */}
          <div className="mb-6">
            <label htmlFor="service" className="block text-[0.7rem] mb-2 text-red-600">
              SELECT POWER-UP *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border-2 border-white text-white text-[0.7rem] font-arcade focus:border-red-600 focus:outline-none"
            >
              <option value="">CHOOSE YOUR SERVICE</option>
              <option value="Website Design">WEBSITE DESIGN</option>
              <option value="SEO Optimization">SEO OPTIMIZATION</option>
              <option value="Google My Business">GOOGLE PROFILE</option>
              <option value="Business Automation">AUTOMATIONS</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-[0.7rem] mb-2 text-red-600">
              YOUR MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-black border-2 border-white text-white text-[0.7rem] font-arcade focus:border-red-600 focus:outline-none resize-none"
              placeholder="TELL US ABOUT YOUR PROJECT..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-6 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.8rem] font-arcade shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '⏳ SENDING...' : '🚀 LAUNCH MISSION'}
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 border-2 border-green-600 bg-green-600/10 text-center animate-pulse-glow">
              <p className="text-[0.7rem] text-green-400">
                ✓ MISSION ACCEPTED! WE'LL CONTACT YOU SOON!
              </p>
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-white bg-black/60">
            <h3 className="text-[0.8rem] text-red-600 mb-3">📧 EMAIL</h3>
            <a
              href="mailto:admin@horizonwebworx.com"
              className="text-[0.6rem] text-white hover:text-red-600 transition-colors"
            >
              admin@horizonwebworx.com
            </a>
          </div>
          <div className="p-6 border-2 border-white bg-black/60">
            <h3 className="text-[0.8rem] text-red-600 mb-3">📞 PHONE</h3>
            <a
              href="tel:+14385316242"
              className="text-[0.6rem] text-white hover:text-red-600 transition-colors"
            >
              +1 (438) 531-6242
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
