import { useState } from 'react';
import { ChevronRight, Calendar, User, Mail, Facebook, Instagram, Youtube, Heart, Star, Users } from 'lucide-react';

const NewsBlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts', icon: '🌟' },
    { id: 'parenting', label: 'Parenting Tips', icon: '🍼' },
    { id: 'development', label: 'Child Development', icon: '🧠' },
    { id: 'school', label: 'School Updates', icon: '🏫' },
    { id: 'community', label: 'Community', icon: '🌍' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Emotional Intelligence in Toddlers",
      excerpt: "Learn practical strategies to help your child understand and express their emotions in healthy ways.",
      image: "https://images.unsplash.com/photo-1674671260878-74f4681d6e1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnVpbGRpbmclMjBFbW90aW9uYWwlMjBJbnRlbGxpZ2VuY2UlMjBpbiUyMFRvZGRsZXJzfGVufDB8fDB8fHww",
      category: 'development',
      date: 'Aug 15, 2025',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: "New Playground Equipment Installed!",
      excerpt: "We're excited to announce our new sensory playground equipment designed for inclusive play.",
      image: "/api/placeholder/300/200",
      category: 'school',
      date: 'Aug 12, 2025',
      author: 'Admin Team',
      readTime: '2 min read'
    },
    {
      id: 3,
      title: "Summer Reading Tips for Young Learners",
      excerpt: "Keep your child engaged with reading during the summer break with these fun activities.",
      image: "/api/placeholder/300/200",
      category: 'parenting',
      date: 'Aug 10, 2025',
      author: 'Ms. Emily Chen',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: "Community Garden Project Success",
      excerpt: "Our families came together to create a beautiful learning garden for our students.",
      image: "/api/placeholder/300/200",
      category: 'community',
      date: 'Aug 8, 2025',
      author: 'Parent Committee',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: "Understanding Your Child's Learning Style",
      excerpt: "Discover how to identify and support your child's unique approach to learning and growth.",
      image: "/api/placeholder/300/200",
      category: 'development',
      date: 'Aug 5, 2025',
      author: 'Dr. Michael Torres',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: "Healthy Lunch Box Ideas",
      excerpt: "Creative and nutritious meal ideas that your kids will actually want to eat.",
      image: "/api/placeholder/300/200",
      category: 'parenting',
      date: 'Aug 3, 2025',
      author: 'Nutritionist Lisa Park',
      readTime: '4 min read'
    }
  ];

  const communityHighlights = [
    {
      image: "/api/placeholder/250/200",
      title: "Art Exhibition Day",
      description: "Students showcase their creative masterpieces"
    },
    {
      image: "/api/placeholder/250/200", 
      title: "Family Picnic 2025",
      description: "Annual community gathering in the park"
    },
    {
      image: "/api/placeholder/250/200",
      title: "Science Fair Winners",
      description: "Celebrating young innovators and discoveries"
    },
    {
      image: "https://images.unsplash.com/photo-1563962585448-ec03efbcadb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnVpbGRpbmclMjBFbW90aW9uYWwlMjBJbnRlbGxpZ2VuY2UlMjBpbiUyMFRvZGRsZXJzfGVufDB8fDB8fHww",
      title: "Reading Buddy Program",
      description: "Older students mentor younger readers"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = () => {
    if (email.trim()) {
      alert('Thank you for subscribing! Welcome to our community 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Latest News & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Parenting Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay updated with school activities, parenting tips, and child development resources
            </p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 text-red-400 mr-1" />
                    <span>Trusted by 2,000+ families</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://plus.unsplash.com/premium_photo-1658506615359-443126faf9ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SGVscGluZyUyMFlvdXIlMjBDaGlsZCUyMEJ1aWxkJTIwQ29uZmlkZW5jZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Featured article"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4 w-fit">
                ⭐ Featured Article
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Helping Your Child Build Confidence
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Discover simple yet powerful ways to encourage self-esteem and resilience in your little ones. Our child development experts share practical strategies you can implement today.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">Aug 16, 2025</span>
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Sarah Johnson</span>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center w-fit">
                Read Full Article
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {categories.find(cat => cat.id === post.category)?.icon} {categories.find(cat => cat.id === post.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Community Highlights */}
      <div className="bg-white/50 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Community Highlights</h2>
            <p className="text-gray-600 text-lg">Celebrating our amazing school community moments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✨ Don't Miss Updates!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get parenting tips & school news straight to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 2,000+ families in our community • Unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Footer Snippet */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {category.icon} {category.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@ourschool.edu</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Learning Lane, Education City</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Our School. Made with ❤️ for our amazing community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsBlogSection;