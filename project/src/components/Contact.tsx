import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Send, MapPin, Phone, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Toast {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [toast, setToast] = useState<Toast>({
    show: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_oqkeleu",
        "template_qsh6h4a",
        {
          from_name: formData.name,
          to_name: "Shivendra Tripathi",
          from_email: formData.email,
          to_email: "shivendrat1105@gmail.com",
          message: formData.message,
        },
        'p5D5Yw30Vw2XEpjy9'
      );

      showToast("Thank you. I will get back to you as soon as possible.", "success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      showToast("Oops! Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Toast Notification */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${toast.show
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <div
          className={`${toast.type === 'success'
              ? 'bg-gradient-to-r from-green-500 to-green-600'
              : 'bg-gradient-to-r from-red-500 to-red-600'
            } rounded-lg shadow-2xl p-6 max-w-md w-full mx-auto flex items-center space-x-4`}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="w-6 h-6 text-white" />
          ) : (
            <XCircle className="w-6 h-6 text-white" />
          )}
          <p className="text-white font-medium">{toast.message}</p>
        </div>
      </div>

      {/* Main Content with Blur Effect when Toast is shown */}
      <div className={`transition-all duration-300 ${toast.show ? 'blur-sm' : 'blur-0'}`}>
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Get in Touch
        </h2>

        <p className="text-center text-gray-400 mb-12 text-lg">
          "Great things never come from comfort zones. Let's collaborate and create something amazing together!"
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Contact"
              className="rounded-xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-[#151625] rounded-xl p-8 border border-purple-900/30 w-full max-w-lg mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0B14] border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0B14] border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0A0B14] border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-300"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;