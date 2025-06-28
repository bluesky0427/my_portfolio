import React, { useState } from 'react';
import { Mail, User, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:danieltanaka0420@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      onSubmit(formData);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-white/80">
          Thank you for reaching out. Your default email client should have opened with your message. 
          I'll get back to you as soon as possible!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${
              errors.name 
                ? 'border-red-500 focus:ring-red-500/50' 
                : 'border-white/20 focus:border-purple-500 focus:ring-purple-500/50'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${
              errors.email 
                ? 'border-red-500 focus:ring-red-500/50' 
                : 'border-white/20 focus:border-purple-500 focus:ring-purple-500/50'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone Field */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-white font-medium mb-2">
          <Phone className="w-4 h-4 inline mr-2" />
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500/50 transition-all"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-white font-medium mb-2">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message 
              ? 'border-red-500 focus:ring-red-500/50' 
              : 'border-white/20 focus:border-purple-500 focus:ring-purple-500/50'
          }`}
          placeholder="Tell me about your project, collaboration ideas, or just say hello! I'd love to hear from you."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
        <p className="text-white/50 text-sm mt-1">
          {formData.message.length}/500 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
          isSubmitting
            ? 'bg-purple-500/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-white/60 text-sm text-center mt-4">
        Your message will open in your default email client. All fields marked with * are required.
      </p>
    </form>
  );
}