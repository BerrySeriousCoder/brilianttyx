import React from 'react';

const testimonials = [
  {
    name: "Ananya Verma",
    role: "Product Manager @ NimbusHub",
    text: "We needed a custom software solution on a tight deadline, and this team delivered beyond expectations. The process was smooth, and they really understood our needs.",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    name: "Ravi Sharma",
    role: "CTO @ FreshForks",
    text: "Working with them felt like having an extended in-house team. They took care of every detail and built a platform that’s both robust and user-friendly.",
    gradient: "from-red-500 to-purple-500"
  },
  {
    name: "Priya Nair",
    role: "Founder @ FitSphere",
    text: "We had a vague idea of what we wanted, and they turned it into a fully functional product. The communication and dedication were top-notch.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    name: "Liam O'Connor",
    role: "VP @ SkyBridge Solutions",
    text: "Their team helped us scale our operations by building a custom CRM. It’s been a game-changer for our business, and the ongoing support is fantastic.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Siddharth Menon",
    role: "Design Lead @ QuickKart",
    text: "Their design and development team brought our vision to life. The app they built for us is not only functional but also beautifully designed.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Emily Martinez",
    role: "Co-founder @ BrightSpace",
    text: "We needed a partner who could handle complexity, and they did just that. They delivered a seamless e-commerce platform that our customers love.",
    gradient: "from-pink-500 to-red-500"
  }
];


const TestimonialCard = ({ name, role, text, gradient }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gray-900 p-8 hover:bg-gray-800 transition-all duration-300">
    <div className={`absolute -inset-1 opacity-80  bg-gradient-to-r ${gradient} group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative">
      <div className="mb-4">
        <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg>
      </div>
      <p className="mb-6 lg:text-lg text-gray-300 leading-relaxed">{text}</p>
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600" />
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="min-h-screen bg-black p-8 md:p-12">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Loved by the world's best teams
        </h2>
        <p className="text-gray-400 text-lg">
          See what industry leaders are saying about our platform
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;