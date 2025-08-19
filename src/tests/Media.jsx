import { useState } from "react";
import { FiPlay, FiImage, FiVideo, FiArrowRight, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample data
  const photoAlbums = [
    {
      id: 1,
      title: "Learning in Action",
      description: "Classroom activities and group projects",
      coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      count: 24,
      photos: Array(12).fill().map((_, i) => ({
        id: i + 1,
        url: `https://source.unsplash.com/random/800x600/?school,classroom,${i}`
      }))
    },
    {
      id: 2,
      title: "Celebrations & Events",
      description: "Birthdays, cultural days, and special occasions",
      coverImage: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      count: 18,
      photos: Array(12).fill().map((_, i) => ({
        id: i + 1,
        url: `https://source.unsplash.com/random/800x600/?celebration,party,${i}`
      }))
    },
    {
      id: 3,
      title: "Outdoor Fun",
      description: "Playground adventures and field trips",
      coverImage: "https://images.unsplash.com/photo-1541692641319-981f79b3a9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      count: 32,
      photos: Array(12).fill().map((_, i) => ({
        id: i + 1,
        url: `https://source.unsplash.com/random/800x600/?playground,outdoor,${i}`
      }))
    },
    {
      id: 4,
      title: "Creative Moments",
      description: "Art, crafts, and music sessions",
      coverImage: "https://images.unsplash.com/photo-1577896851231-70ef1888c2a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      count: 15,
      photos: Array(12).fill().map((_, i) => ({
        id: i + 1,
        url: `https://source.unsplash.com/random/800x600/?art,craft,${i}`
      }))
    }
  ];

  const videos = [
    {
      id: 1,
      title: "A Day at Paramount Schools",
      description: "From morning circle to afternoon play",
      thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "2:15"
    },
    {
      id: 2,
      title: "Annual Cultural Day",
      description: "Celebrating diversity through music and dance",
      thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "3:42"
    },
    {
      id: 3,
      title: "STEM Fair 2025",
      description: "Young scientists showcase their projects",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "1:58"
    },
    {
      id: 4,
      title: "Art Exhibition",
      description: "Creative expressions from our students",
      thumbnail: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "2:30"
    }
  ];

  const featuredMoments = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      caption: "Graduation Day 2025"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      caption: "Science Fair Winners"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      caption: "Cultural Day Performances"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Children learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo & Video Gallery</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              A glimpse into the everyday joy, learning, and celebrations at Paramount Schools.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === "photos" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}
            >
              <FiImage className="inline mr-2" /> Photo Albums
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === "videos" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}
            >
              <FiVideo className="inline mr-2" /> Video Highlights
            </button>
          </div>
        </div>

        {/* Photo Albums Section */}
        {activeTab === "photos" && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Photo Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photoAlbums.map((album) => (
                <motion.div
                  key={album.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{album.title}</h3>
                        <p className="text-white/90 text-sm">{album.description}</p>
                        <div className="flex items-center text-white/80 text-xs mt-2">
                          <FiImage className="mr-1" /> {album.count} photos
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Video Highlights Section */}
        {activeTab === "videos" && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Video Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <FiPlay className="text-blue-600 text-2xl" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">{video.title}</h3>
                      <p className="text-white/80 text-sm">{video.description}</p>
                      <div className="flex items-center text-white/70 text-xs mt-1">
                        <FiVideo className="mr-1" /> {video.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Moments Carousel */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredMoments.map((moment) => (
              <div key={moment.id} className="relative group overflow-hidden rounded-xl">
                <img
                  src={moment.image}
                  alt={moment.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium">{moment.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">See the Paramount Experience</h2>
          <p className="text-xl text-blue-100 mb-8">
            Want to see our vibrant community in person? Book a school tour today!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Schedule a Visit
          </button>
        </div>
      </div>

      {/* Album Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full bg-white rounded-xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedAlbum.title}</h3>
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600">{selectedAlbum.description}</p>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedAlbum.photos.map((photo) => (
                  <div key={photo.id} className="rounded-lg overflow-hidden">
                    <img
                      src={photo.url}
                      alt=""
                      className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-zoom-in"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-xl overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-black">
              {/* In a real implementation, you would embed your video player here */}
              <div className="w-full h-96 flex items-center justify-center text-white">
                <div className="text-center">
                  <FiPlay className="text-6xl mx-auto mb-4" />
                  <p>Video Player Would Appear Here</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;