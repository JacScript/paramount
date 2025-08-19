// import { useState } from "react";
// import { FiCalendar, FiArrowLeft, FiArrowRight, FiDownload } from "react-icons/fi";

// const EventsCalendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     childName: "",
//     event: "",
//   });

//   // Sample events data
//   const events = [
//     {
//       id: 1,
//       date: new Date(2025, 7, 14),
//       title: "Parent-Teacher Meeting",
//       description: "Discuss your child’s progress with their teachers.",
//       type: "meeting",
//     },
//     {
//       id: 2,
//       date: new Date(2025, 7, 25),
//       title: "Holiday Program",
//       description: "Fun activities for kids during the break!",
//       type: "activity",
//     },
//   ];

//   // Filter events for current month
//   const filteredEvents = events.filter(
//     (event) => event.date.getMonth() === currentMonth
//   );

//   // Handle month navigation
//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   // Handle RSVP form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`✅ You're signed up for ${selectedEvent.title}!`);
//     setSelectedEvent(null);
//     setFormData({ name: "", email: "", childName: "", event: "" });
//   };

//   return (
//     <section className="bg-blue-50 py-12 px-4 md:px-8 rounded-lg">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">Events Calendar</h2>
//         <p className="text-gray-600">
//           Stay updated with our upcoming activities and important dates
//         </p>
//       </div>

//       {/* Month Navigation */}
//       <div className="flex justify-center items-center mb-8">
//         <button
//           onClick={handlePrevMonth}
//           className="p-2 rounded-full hover:bg-blue-100"
//         >
//           <FiArrowLeft className="text-blue-600" />
//         </button>
//         <h3 className="mx-4 text-xl font-semibold text-gray-700">
//           {new Date(currentYear, currentMonth).toLocaleString("default", {
//             month: "long",
//             year: "numeric",
//           })}
//         </h3>
//         <button
//           onClick={handleNextMonth}
//           className="p-2 rounded-full hover:bg-blue-100"
//         >
//           <FiArrowRight className="text-blue-600" />
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Upcoming Events */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <FiCalendar className="mr-2 text-blue-500" /> Upcoming Events
//           </h3>
//           <div className="space-y-4">
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((event) => (
//                 <div
//                   key={event.id}
//                   className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex"
//                 >
//                   <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex flex-col items-center justify-center mr-4 flex-shrink-0">
//                     <span className="font-bold text-lg">
//                       {event.date.getDate()}
//                     </span>
//                     <span className="text-xs">
//                       {event.date.toLocaleString("default", { month: "short" })}
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">
//                       {event.title}
//                     </h4>
//                     <p className="text-gray-600 text-sm mb-2">
//                       {event.description}
//                     </p>
//                     <button
//                       onClick={() => setSelectedEvent(event)}
//                       className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
//                     >
//                       RSVP
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No events scheduled this month.</p>
//             )}
//           </div>
//         </div>

//         {/* Academic Calendar & RSVP */}
//         <div className="space-y-8">
//           {/* Academic Calendar */}
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold mb-4">Academic Calendar</h3>
//             <div className="grid grid-cols-7 gap-1 mb-4">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                 <div key={day} className="text-center text-xs font-medium">
//                   {day}
//                 </div>
//               ))}
//               {/* Placeholder for calendar days */}
//               {Array.from({ length: 31 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className={`text-center p-1 text-sm rounded-full ${
//                     i + 1 === 14 ? "bg-blue-100 text-blue-600" : ""
//                   }`}
//                 >
//                   {i + 1}
//                 </div>
//               ))}
//             </div>
//             <button className="flex items-center text-blue-600 text-sm">
//               <FiDownload className="mr-1" /> Download PDF
//             </button>
//           </div>

//           {/* RSVP Form */}
//           {selectedEvent && (
//             <div className="bg-white p-4 rounded-lg shadow-sm">
//               <h3 className="text-xl font-semibold mb-2">RSVP for Event</h3>
//               <p className="text-gray-600 mb-4">
//                 Sign up for: <span className="font-medium">{selectedEvent.title}</span>
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-3">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-2 border rounded"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-2 border rounded"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Child's Name"
//                     className="w-full p-2 border rounded"
//                     value={formData.childName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, childName: e.target.value })
//                     }
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
//                   >
//                     Reserve My Spot
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsCalendar;




import { useState, useEffect } from "react";
import { FiCalendar, FiArrowLeft, FiArrowRight, FiDownload, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    childName: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample events data
  const events = [
    {
      id: 1,
      date: new Date(2025, 7, 14),
      title: "Parent-Teacher Meeting",
      description: "Discuss your child's progress with their teachers.",
      type: "meeting",
      icon: "👩‍🏫",
    },
    {
      id: 2,
      date: new Date(2025, 7, 25),
      title: "Summer Carnival Day",
      description: "Games, prizes, and fun activities for the whole family!",
      type: "activity",
      icon: "🎪",
    },
    {
      id: 3,
      date: new Date(2025, 7, 30),
      title: "Curriculum Night",
      description: "Learn about this year's academic programs.",
      type: "meeting",
      icon: "📚",
    },
  ];

  // Calendar navigation
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Filter events for current month
  const filteredEvents = events.filter(
    (event) => event.date.getMonth() === currentDate.getMonth()
  );

  // Generate calendar days
  const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", childName: "" });
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <FiCalendar className="text-3xl text-[#06D6A0] mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 font-poppins">Events Calendar</h2>
              <p className="text-gray-600 font-nunito">
                Keep track of our exciting school activities and important dates
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-white/50 transition-colors"
              aria-label="Previous month"
            >
              <FiArrowLeft className="text-gray-700" />
            </button>
            <h3 className="mx-4 text-xl font-semibold text-gray-700 min-w-[180px] text-center">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-white/50 transition-colors"
              aria-label="Next month"
            >
              <FiArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Upcoming Events</h3>
            {filteredEvents.length > 0 ? (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ y: -2 }}
                    className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#FFD166] text-gray-800 rounded-full w-14 h-14 flex flex-col items-center justify-center mr-4 flex-shrink-0"
                    >
                      <span className="font-bold text-lg">{event.date.getDate()}</span>
                      <span className="text-xs uppercase">
                        {event.date.toLocaleString("default", { month: "short" })}
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{event.title}</h4>
                          <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        </div>
                        <span className="text-xl ml-2">{event.icon}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedEvent(event)}
                        className="mt-3 bg-gradient-to-r from-[#06D6A0] to-[#4CC9F0] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                      >
                        RSVP
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-2xl text-center">
                <p className="text-gray-500">No events scheduled this month.</p>
              </div>
            )}
          </div>

          {/* Academic Calendar */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Academic Calendar</h3>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {calendarDays.map((day, index) => {
                  const hasEvent = events.some(
                    (event) =>
                      event.date.getDate() === day &&
                      event.date.getMonth() === currentDate.getMonth()
                  );
                  const eventType = hasEvent
                    ? events.find(
                        (event) =>
                          event.date.getDate() === day &&
                          event.date.getMonth() === currentDate.getMonth()
                      ).type
                    : null;

                  return day ? (
                    <div
                      key={index}
                      className={`text-center p-2 text-sm rounded-full relative ${
                        day === new Date().getDate() &&
                        currentDate.getMonth() === new Date().getMonth()
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {day}
                      {hasEvent && (
                        <span
                          className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                            eventType === "meeting"
                              ? "bg-blue-500"
                              : eventType === "activity"
                              ? "bg-[#FFD166]"
                              : "bg-red-500"
                          }`}
                        ></span>
                      )}
                    </div>
                  ) : (
                    <div key={index} className="p-2"></div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Meetings</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFD166] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Activities</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Holidays</span>
                </div>
              </div>

              <button className="flex items-center text-[#06D6A0] hover:text-[#059B7A] transition-colors text-sm font-medium">
                <FiDownload className="mr-2" />
                Download Academic Calendar PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            >
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">RSVP for {selectedEvent.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {selectedEvent.description}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                          Child's Name
                        </label>
                        <input
                          type="text"
                          id="childName"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06D6A0] focus:border-transparent"
                          value={formData.childName}
                          onChange={(e) =>
                            setFormData({ ...formData, childName: e.target.value })
                          }
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#06D6A0] to-[#4CC9F0] text-white py-3 rounded-full font-medium mt-4 shadow-md hover:shadow-lg transition-all"
                      >
                        Reserve My Spot
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                  >
                    <FiCheck className="text-3xl text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">You're registered!</h3>
                  <p className="text-gray-600 mb-4">
                    We've sent confirmation to {formData.email}
                  </p>
                  <p className="text-sm text-gray-500">
                    For {selectedEvent.title} on{" "}
                    {selectedEvent.date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsCalendar;