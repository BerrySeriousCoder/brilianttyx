import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPageComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/contactus`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
        setSubmitStatus('error');
      alert('An error occurred while submitting the form.');
    }finally{
        setIsSubmitting(false);
    }
  };

 

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-center mb-3">Contact Us</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
          Have a question or want to work together? Let's connect.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Contact Form */}
        <div className="flex-1 bg-zinc-900/50 p-8 rounded-xl backdrop-blur">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder-zinc-600"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder-zinc-600"
                />
              </div>
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder-zinc-600"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder-zinc-600"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder-zinc-600 resize-none"
            ></textarea>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-medium transition-colors w-full md:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-96 space-y-8">
          {/* Email */}
          <div className="group">
            <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur hover:bg-zinc-900/70 transition-colors cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-zinc-400 text-sm">Write us anytime</p>
                </div>
              </div>
              <p className="text-blue-400">brilianttyx@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="group">
            <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur hover:bg-zinc-900/70 transition-colors cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-zinc-400 text-sm">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <p className="text-blue-400">Drop ur number we will contact you soon</p>
            </div>
          </div>

          {/* Location */}
          <div className="group">
            <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur hover:bg-zinc-900/70 transition-colors cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-zinc-400 text-sm">Visit our office</p>
                </div>
              </div>
              <p className="text-blue-400">Shivam Vihar Phase-5<br />Ghaziabad , UttarPradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComponent;