import { motion } from "framer-motion";
import { FiAward, FiHeart, FiUsers, FiBookOpen } from "react-icons/fi";

const TeachersStaff = () => {
  // Sample staff data
  const staffMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Head Teacher",
      qualifications: "M.Ed in Early Childhood Education",
      experience: "12 years",
      bio: "Passionate about creating inclusive learning environments.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "STEM Specialist",
      qualifications: "B.Sc in Elementary Education",
      experience: "8 years",
      bio: "Loves making science fun and accessible for young learners.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Amina Diallo",
      role: "Language Arts",
      qualifications: "M.A in Child Development",
      experience: "10 years",
      bio: "Specializes in multilingual early literacy programs.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Music & Movement",
      qualifications: "B.A in Music Education",
      experience: "6 years",
      bio: "Believes music is essential for cognitive development.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      name: "Emily Wong",
      role: "Kindergarten Lead",
      qualifications: "M.Ed in Special Education",
      experience: "9 years",
      bio: "Dedicated to differentiated learning strategies.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      name: "Thomas Okafor",
      role: "Physical Education",
      qualifications: "B.Sc in Sports Science",
      experience: "5 years",
      bio: "Promotes active lifestyles through play-based learning.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const stats = [
    { icon: <FiUsers className="text-2xl" />, label: "Staff-to-Child Ratio", value: "1:8" },
    { icon: <FiAward className="text-2xl" />, label: "Certified Teachers", value: "100%" },
    { icon: <FiBookOpen className="text-2xl" />, label: "Years Experience", value: "8.5 avg" },
    { icon: <FiHeart className="text-2xl" />, label: "Specialized Programs", value: "12+" }
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdf2f8] to-[#f9fafb] min-h-screen">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Teachers & Staff</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated and qualified educators who nurture your child's growth.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-pink-500 mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Teaching Philosophy */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Teaching Philosophy</h2>
          <p className="text-gray-600 mb-4">
            At Paramount Schools, we believe every child learns differently. Our educators are trained in 
            <span className="font-semibold text-pink-500"> play-based, child-centered approaches</span> that foster 
            curiosity while meeting developmental milestones. We combine:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              <span>Individualized learning plans</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              <span>Social-emotional development</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              <span>Multisensory teaching methods</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              <span>Cultural responsiveness</span>
            </li>
          </ul>
          <p className="text-gray-600">
            Our low student-teacher ratio ensures each child receives the attention they need to thrive.
          </p>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff) => (
            <motion.div
              key={staff.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{staff.name}</h3>
                  <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {staff.role}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FiAward className="mr-1 text-pink-500" />
                  <span>{staff.qualifications}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FiBookOpen className="mr-1 text-pink-500" />
                  <span>{staff.experience} experience</span>
                </div>
                <p className="text-gray-600 text-sm">{staff.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Joining Our Team?</h2>
          <p className="text-xl text-pink-100 mb-8">
            We're always looking for passionate educators who share our vision for child-centered learning.
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-lg">
            View Current Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachersStaff;