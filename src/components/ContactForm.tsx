import React, { useState } from 'react';
import { Mail, User, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
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
    setSubmitStatus('idle');
    
    try {
      // Use deployed backend URL or fallback to local development
      const apiUrl = import.meta.env.PROD 
        ? 'https://your-app-name.railway.app/api/contact'  // Replace with your Railway URL
        : '/api/contact';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        onSubmit(formData);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', message: '' });
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again, or contact me directly at danieltanaka0420@gmail.com');
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
    
    // Clear status when user starts editing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  // Success state
  if (submitStatus === 'success') {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-white/80 mb-4">
          {statusMessage}
        </p>
        <p className="text-white/60 text-sm">
          I'll get back to you as soon as possible, typically within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitStatus('idle');
            setStatusMessage('');
          }}
          className="mt-4 text-green-400 hover:text-green-300 transition-colors text-sm underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-red-400 font-medium mb-1">Failed to Send Message</h4>
            <p className="text-red-300 text-sm">{statusMessage}</p>
          </div>
        </div>
      )}

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
            disabled={isSubmitting}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
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
            disabled={isSubmitting}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
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
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={isSubmitting}
          rows={6}
          maxLength={1000}
          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
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
          {formData.message.length}/1000 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
          isSubmitting
            ? 'bg-purple-500/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <div className="mt-4 text-center">
        <p className="text-white/60 text-sm">
          All fields marked with * are required. You'll receive a confirmation email after sending.
        </p>
        <p className="text-white/50 text-xs mt-2">
          Having trouble? Email me directly at{' '}
          <a href="mailto:danieltanaka0420@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
            danieltanaka0420@gmail.com
          </a>
        </p>
      </div>
    </form>
  );
}