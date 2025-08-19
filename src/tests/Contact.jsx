import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out via phone, email, or our contact form.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          {/* Address Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Office</h3>
                <p className="text-gray-600 mb-4">123 Business Ave, Suite 400<br />San Francisco, CA 94107</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                <div className="flex items-center gap-3 mt-4">
                  <a 
                    href="tel:+15551234567" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="w-5 h-5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">contact@example.com</p>
                <a 
                  href="mailto:contact@example.com" 
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mb-16">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Follow us on social media</h3>
        <div className="flex justify-center gap-4">
          {[
            { icon: <FaFacebook className="w-6 h-6" />, url: "#" },
            { icon: <FaInstagram className="w-6 h-6" />, url: "#" },
            { icon: <FaTwitter className="w-6 h-6" />, url: "#" },
            { icon: <FaLinkedin className="w-6 h-6" />, url: "#" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-50 rounded-xl p-6 text-center">
        <p className="text-lg text-gray-900 mb-2">Need quick support?</p>
        <a 
          href="tel:+15551234567" 
          className="text-xl font-semibold text-blue-600 hover:text-blue-800"
        >
          Call us directly at +1 (555) 123-4567
        </a>
      </div>
    </div>
  );
}