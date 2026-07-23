import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Send, MapPin, Phone, CheckCircle, XCircle, Terminal } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
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
    setIsSubmitting(true);

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

      showToast("Thank you! Your message has been sent successfully. I will get back to you soon.", "success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      showToast("Oops! Something went wrong. Please check your network and try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${
          toast.show ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div
          className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl shadow-2xl border ${
            toast.type === 'success'
              ? 'bg-[#0f172a] border-emerald-500/20 text-emerald-400'
              : 'bg-[#0f172a] border-rose-500/20 text-rose-400'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
          )}
          <p className="text-sm font-medium text-slate-200">{toast.message}</p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Interested in collaborating or hiring? Drop a message below and let's construct something impact-driven.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-900/30 border border-slate-900 flex-1 flex flex-col justify-center gap-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-blue-500/5 rounded-full blur-[50px] pointer-events-none" />

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">Email Direct</span>
                <a href="mailto:shivendrat1105@gmail.com" className="text-base text-slate-200 hover:text-cyan-400 font-medium transition-colors">
                  shivendrat1105@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">Location</span>
                <span className="text-base text-slate-200 font-medium">
                  Nagpur / Hyderabad, India
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">Contact Number</span>
                <a href="tel:+916390669975" className="text-base text-slate-200 hover:text-cyan-400 font-medium transition-colors">
                  +91-6390669975
                </a>
              </div>
            </div>
          </motion.div>

          {/* Inspirational quotes panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl border border-slate-900 bg-slate-950/40 text-center flex items-center justify-center gap-3"
          >
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="text-sm font-mono text-slate-400 italic">
              "Building high-performance, robust systems, one line at a time."
            </p>
          </motion.div>
        </div>

        {/* Right Side: Contact Form Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-[#0f172a]/30 backdrop-blur-md border border-slate-900 rounded-3xl p-8 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-slate-950/50 border border-slate-900 hover:border-slate-800 rounded-2xl text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-slate-950/50 border border-slate-900 hover:border-slate-800 rounded-2xl text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Message Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-slate-950/50 border border-slate-900 hover:border-slate-800 rounded-2xl text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm font-medium resize-none"
                  placeholder="Describe your project requirements or work opportunities here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 border border-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;