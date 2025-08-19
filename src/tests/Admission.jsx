// import React from 'react';

// const AdmissionsPage = () => {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <div className="relative h-96 bg-blue-900 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <img 
//           src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//           alt="Students at school" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admissions & Fees</h1>
//           <p className="text-xl text-white max-w-2xl mb-8">
//             Join our vibrant learning community — discover how to enroll, fees, and support programs.
//           </p>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
//             Apply Now
//           </button>
//         </div>
//       </div>

//       {/* Enrollment Procedure */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Enrollment Procedure</h2>
        
//         <div className="flex flex-col md:flex-row gap-12">
//           {/* Left Column - Timeline */}
//           <div className="md:w-1/2">
//             <div className="space-y-8">
//               {/* Step 1 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
//                   <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
//                   <p className="text-gray-600">Complete our online form or visit us in-person to begin the process.</p>
//                 </div>
//               </div>
              
//               {/* Step 2 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
//                   <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">School Tour & Interview</h3>
//                   <p className="text-gray-600">Visit our campus and meet with our admissions team.</p>
//                 </div>
//               </div>
              
//               {/* Step 3 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
//                   <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Acceptance Notification</h3>
//                   <p className="text-gray-600">Receive your admission decision within 2 weeks.</p>
//                 </div>
//               </div>
              
//               {/* Step 4 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
//                   <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">4</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Payment & Orientation</h3>
//                   <p className="text-gray-600">Complete registration and attend new student orientation.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column - Image */}
//           <div className="md:w-1/2 flex items-center">
//             <img 
//               src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//               alt="Students in classroom" 
//               className="rounded-lg shadow-lg w-full h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Age Eligibility */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Age Eligibility</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Nursery Card */}
//             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
//               <div className="bg-pink-100 text-pink-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
//                 2-3
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Nursery</h3>
//               <p className="text-gray-600">Our nurturing program for the youngest learners.</p>
//             </div>
            
//             {/* Kindergarten Card */}
//             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
//               <div className="bg-purple-100 text-purple-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
//                 4-5
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Kindergarten</h3>
//               <p className="text-gray-600">Foundational learning through play and exploration.</p>
//             </div>
            
//             {/* Primary Card */}
//             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
//               <div className="bg-blue-100 text-blue-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
//                 6-12
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Primary</h3>
//               <p className="text-gray-600">Comprehensive academic and social development.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Registration Forms */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Registration Forms</h2>
        
//         <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
//             Download Form (PDF)
//           </button>
//           <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
//             Fill Online Registration
//           </button>
//         </div>
        
//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto">
//           <h4 className="font-semibold text-yellow-800 mb-2">Required Documents:</h4>
//           <ul className="list-disc pl-5 text-yellow-800">
//             <li>Birth certificate</li>
//             <li>Immunization records</li>
//             <li>2 passport photos</li>
//             <li>Previous school records (if applicable)</li>
//           </ul>
//         </div>
//       </section>

//       {/* Tuition & Fee Structure */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Tuition & Fee Structure</h2>
          
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
//               <thead className="bg-blue-900 text-white">
//                 <tr>
//                   <th className="py-4 px-6 text-left">Program</th>
//                   <th className="py-4 px-6 text-left">Tuition (per term)</th>
//                   <th className="py-4 px-6 text-left">Registration Fee</th>
//                   <th className="py-4 px-6 text-left">Materials Fee</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 <tr className="hover:bg-gray-50">
//                   <td className="py-4 px-6 font-medium">Nursery</td>
//                   <td className="py-4 px-6">$500</td>
//                   <td className="py-4 px-6">$50</td>
//                   <td className="py-4 px-6">$75</td>
//                 </tr>
//                 <tr className="hover:bg-gray-50">
//                   <td className="py-4 px-6 font-medium">Kindergarten</td>
//                   <td className="py-4 px-6">$650</td>
//                   <td className="py-4 px-6">$50</td>
//                   <td className="py-4 px-6">$100</td>
//                 </tr>
//                 <tr className="hover:bg-gray-50">
//                   <td className="py-4 px-6 font-medium">Primary</td>
//                   <td className="py-4 px-6">$800</td>
//                   <td className="py-4 px-6">$50</td>
//                   <td className="py-4 px-6">$125</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
          
//           <div className="mt-8 text-center">
//             <p className="text-gray-600 mb-4">* Fees are subject to change. Sibling discounts available.</p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
//               Request Detailed Quote
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Sponsorship Programs */}
//       <section className="py-16 bg-blue-900 text-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Programs</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {/* Need-based */}
//             <div className="bg-blue-800 p-6 rounded-lg text-center">
//               <div className="bg-white text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Need-based</h3>
//               <p className="text-blue-200">Financial assistance for qualifying families.</p>
//             </div>
            
//             {/* Academic Excellence */}
//             <div className="bg-blue-800 p-6 rounded-lg text-center">
//               <div className="bg-white text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
//               <p className="text-blue-200">Scholarships for outstanding students.</p>
//             </div>
            
//             {/* Community Support */}
//             <div className="bg-blue-800 p-6 rounded-lg text-center">
//               <div className="bg-white text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Community Support</h3>
//               <p className="text-blue-200">Special programs for local community members.</p>
//             </div>
//           </div>
          
//           <div className="text-center">
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
//               Apply for Sponsorship
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
        
//         <div className="space-y-4 max-w-3xl mx-auto">
//           {/* FAQ Item 1 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition duration-300 flex justify-between items-center">
//               <span>When does enrollment open for the next academic year?</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="px-6 py-4 bg-white">
//               <p className="text-gray-600">Enrollment for the next academic year typically opens in January. We recommend applying early as spaces fill quickly.</p>
//             </div>
//           </div>
          
//           {/* FAQ Item 2 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition duration-300 flex justify-between items-center">
//               <span>Do you offer sibling discounts?</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="px-6 py-4 bg-white">
//               <p className="text-gray-600">Yes! We offer a 10% discount on tuition for the second child and 15% for the third child from the same family.</p>
//             </div>
//           </div>
          
//           {/* FAQ Item 3 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition duration-300 flex justify-between items-center">
//               <span>What payment plans are available?</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="px-6 py-4 bg-white">
//               <p className="text-gray-600">We offer monthly, termly, and annual payment options. Monthly payment plans incur a small administrative fee.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6 text-blue-900">Have More Questions?</h2>
//           <p className="text-xl text-gray-600 mb-8">Our admissions team is happy to help with any inquiries.</p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 mr-4">
//             Contact Us
//           </button>
//           <button className="bg-white hover:bg-gray-200 text-blue-600 font-semibold py-3 px-8 rounded-lg border border-blue-600 transition duration-300">
//             Schedule a Tour
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Admissions Policy</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Forms</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">School Tour Booking</a></li>
//               </ul>
//             </div>
            
//             {/* Contact Info */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//               <address className="not-italic text-gray-400">
//                 <p>123 Education Lane</p>
//                 <p>Learning City, LC 12345</p>
//                 <p className="mt-2">Phone: (123) 456-7890</p>
//                 <p>Email: admissions@school.edu</p>
//               </address>
//             </div>
            
//             {/* Social Media */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
            
//             {/* Newsletter */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//               <p className="text-gray-400 mb-4">Subscribe for updates and announcements.</p>
//               <form className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Our School. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AdmissionsPage;



// import React from 'react';

// const BabyAdmissionsPage = () => {
//   return (
//     <div className="font-sans text-gray-800 bg-pink-50">
//       {/* Hero Section */}
//       <div className="relative h-96 bg-pink-400 overflow-hidden">
//         <div className="absolute inset-0 bg-pink-600 opacity-30"></div>
//         <img 
//           src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//           alt="Happy toddlers playing" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-comic">Welcome Little Ones!</h1>
//           <p className="text-xl text-white max-w-2xl mb-8 font-comic">
//             A safe, happy place for your baby to learn and grow
//           </p>
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-pink-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
//             Join Our Family
//           </button>
//         </div>
//       </div>

//       {/* Enrollment Procedure */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-pink-600 font-comic">How To Join Our Playhouse</h2>
        
//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           {/* Left Column - Timeline */}
//           <div className="md:w-1/2">
//             <div className="space-y-8">
//               {/* Step 1 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-pink-200 rounded-full p-3 mr-4">
//                   <div className="bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl">1</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-pink-700">Say Hello!</h3>
//                   <p className="text-gray-600">Fill out our simple form or come visit us for a tour.</p>
//                 </div>
//               </div>
              
//               {/* Step 2 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-blue-200 rounded-full p-3 mr-4">
//                   <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl">2</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-blue-700">Play Date</h3>
//                   <p className="text-gray-600">Bring your little one for a fun visit to meet our teachers.</p>
//                 </div>
//               </div>
              
//               {/* Step 3 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-purple-200 rounded-full p-3 mr-4">
//                   <div className="bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl">3</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-purple-700">Welcome Letter</h3>
//                   <p className="text-gray-600">We'll send you a happy welcome email with next steps.</p>
//                 </div>
//               </div>
              
//               {/* Step 4 */}
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-green-200 rounded-full p-3 mr-4">
//                   <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl">4</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-green-700">First Day Fun!</h3>
//                   <p className="text-gray-600">Pack their favorite lovey and come join the fun!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column - Image */}
//           <div className="md:w-1/2 flex items-center">
//             <img 
//               src="https://images.unsplash.com/photo-1544830798-9bf6a2d37a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//               alt="Baby playing with blocks" 
//               className="rounded-lg shadow-lg w-full h-auto border-8 border-pink-300"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Age Groups */}
//       <section className="py-16 bg-blue-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 font-comic">Our Play Groups</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Tiny Tots Card */}
//             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 border-t-4 border-pink-400">
//               <div className="bg-pink-100 text-pink-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
//                 👶
//               </div>
//               <h3 className="text-2xl font-semibold mb-3 text-pink-600">Tiny Tots</h3>
//               <p className="text-gray-600 mb-4">6 months - 18 months</p>
//               <p className="text-gray-600">Gentle care with lots of cuddles and sensory play.</p>
//             </div>
            
//             {/* Little Explorers Card */}
//             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 border-t-4 border-blue-400">
//               <div className="bg-blue-100 text-blue-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
//                 🧒
//               </div>
//               <h3 className="text-2xl font-semibold mb-3 text-blue-600">Little Explorers</h3>
//               <p className="text-gray-600 mb-4">18 months - 3 years</p>
//               <p className="text-gray-600">Play-based learning and first friendships.</p>
//             </div>
            
//             {/* Preschool Pals Card */}
//             <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 border-t-4 border-purple-400">
//               <div className="bg-purple-100 text-purple-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
//                 �
//               </div>
//               <h3 className="text-2xl font-semibold mb-3 text-purple-600">Preschool Pals</h3>
//               <p className="text-gray-600 mb-4">3 years - 5 years</p>
//               <p className="text-gray-600">Creative learning through stories, art, and music.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Registration */}
//       <section className="py-16 px-4 max-w-6xl mx-auto bg-pink-100 rounded-xl">
//         <h2 className="text-3xl font-bold text-center mb-12 text-pink-600 font-comic">Let's Get Started!</h2>
        
//         <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
//           <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-xl flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//             </svg>
//             Get Forms
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-xl flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//             </svg>
//             Apply Online
//           </button>
//         </div>
        
//         <div className="bg-yellow-100 border-l-8 border-yellow-400 p-6 max-w-2xl mx-auto rounded-lg">
//           <h4 className="font-semibold text-yellow-800 mb-4 text-xl">What We Need:</h4>
//           <ul className="space-y-3 text-yellow-800 text-lg">
//             <li className="flex items-center">
//               <span className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
//               Baby's birth certificate
//             </li>
//             <li className="flex items-center">
//               <span className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
//               Health check-up form
//             </li>
//             <li className="flex items-center">
//               <span className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
//               2 cute photos of your little one
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Tuition */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 font-comic">Our Playhouse Plans</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Part-time Plan */}
//             <div className="bg-pink-100 p-8 rounded-xl shadow-md border-4 border-pink-300 transform hover:scale-105 transition duration-300">
//               <h3 className="text-2xl font-bold text-center mb-4 text-pink-700">Morning Sunshine</h3>
//               <p className="text-center text-gray-600 mb-6">9am - 12pm</p>
//               <p className="text-4xl font-bold text-center mb-6 text-pink-600">$350<span className="text-xl">/month</span></p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center">
//                   <span className="bg-pink-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Healthy snack included
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-pink-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Outdoor playtime
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-pink-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Music & movement
//                 </li>
//               </ul>
//               <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg">
//                 Choose This Plan
//               </button>
//             </div>
            
//             {/* Full-time Plan */}
//             <div className="bg-blue-100 p-8 rounded-xl shadow-md border-4 border-blue-300 transform hover:scale-105 transition duration-300">
//               <h3 className="text-2xl font-bold text-center mb-4 text-blue-700">All-Day Adventure</h3>
//               <p className="text-center text-gray-600 mb-6">8am - 4pm</p>
//               <p className="text-4xl font-bold text-center mb-6 text-blue-600">$650<span className="text-xl">/month</span></p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center">
//                   <span className="bg-blue-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   All Morning Sunshine benefits
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-blue-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Nutritious lunch included
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-blue-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Afternoon naptime
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-blue-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Extended learning activities
//                 </li>
//               </ul>
//               <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg">
//                 Choose This Plan
//               </button>
//             </div>
            
//             {/* Flexible Plan */}
//             <div className="bg-purple-100 p-8 rounded-xl shadow-md border-4 border-purple-300 transform hover:scale-105 transition duration-300">
//               <h3 className="text-2xl font-bold text-center mb-4 text-purple-700">Flexible Friends</h3>
//               <p className="text-center text-gray-600 mb-6">Choose your days</p>
//               <p className="text-4xl font-bold text-center mb-6 text-purple-600">$25<span className="text-xl">/day</span></p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-center">
//                   <span className="bg-purple-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Perfect for part-time needs
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-purple-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Healthy snack included
//                 </li>
//                 <li className="flex items-center">
//                   <span className="bg-purple-300 rounded-full w-5 h-5 flex items-center justify-center mr-3 text-white text-sm">✓</span>
//                   Minimum 2 days/week
//                 </li>
//               </ul>
//               <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg">
//                 Choose This Plan
//               </button>
//             </div>
//           </div>
          
//           <div className="mt-12 text-center">
//             <p className="text-lg text-gray-600 mb-6">We offer sibling discounts and flexible payment options!</p>
//             <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//               </svg>
//               Email Us Questions
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Help With Costs */}
//       <section className="py-16 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 font-comic">We're Here To Help</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {/* Financial Help */}
//             <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center backdrop-blur-sm">
//               <div className="bg-white text-pink-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-4xl">
//                 💖
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Financial Help</h3>
//               <p className="text-pink-100">Scholarships available for qualifying families</p>
//             </div>
            
//             {/* Military */}
//             <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center backdrop-blur-sm">
//               <div className="bg-white text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-4xl">
//                 🪮
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Military Families</h3>
//               <p className="text-blue-100">Special discounts for service members</p>
//             </div>
            
//             {/* Community */}
//             <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center backdrop-blur-sm">
//               <div className="bg-white text-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-4xl">
//                 🤝
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Community Support</h3>
//               <p className="text-purple-100">Local business sponsorships available</p>
//             </div>
//           </div>
          
//           <div className="text-center">
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-pink-800 font-bold py-4 px-10 rounded-full text-xl transition duration-300 shadow-lg">
//               Learn About Help Options
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Parent Questions */}
//       <section className="py-16 px-4 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-pink-600 font-comic">Parent Questions</h2>
        
//         <div className="space-y-4">
//           {/* Question 1 */}
//           <div className="border-2 border-pink-200 rounded-xl overflow-hidden bg-white">
//             <button className="w-full px-6 py-4 text-left font-semibold bg-pink-100 hover:bg-pink-200 transition duration-300 flex justify-between items-center">
//               <span className="text-lg text-pink-700">What should my baby bring each day?</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="px-6 py-4">
//               <p className="text-gray-600">We recommend a diaper bag with extra clothes, diapers, wipes, a lovey or comfort item, and any special bottles or food. We provide healthy snacks!</p>
//             </div>
//           </div>
          
//           {/* Question 2 */}
//           <div className="border-2 border-blue-200 rounded-xl overflow-hidden bg-white">
//             <button className="w-full px-6 py-4 text-left font-semibold bg-blue-100 hover:bg-blue-200 transition duration-300 flex justify-between items-center">
//               <span className="text-lg text-blue-700">How do you handle nap time?</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="px-6 py-4">
//               <p className="text-gray-600">Each child has their own crib or cot in our quiet nap room. We follow your baby's usual nap schedule and use white noise machines to help them rest.</p>
//             </div>
//           </div>
          
//           {/* Question 3 */}
//           <div className="border-2 border-purple-200 rounded-xl overflow-hidden bg-white">
//             <button className="w-full px-6 py-4 text-left font-semibold bg-purple-100 hover:bg-purple-200 transition duration-300 flex justify-between items-center">
//               <span className="text-lg text-purple-700">Can I visit during the day?</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="px-6 py-4">
//               <p className="text-gray-600">Absolutely! We have an open-door policy for parents. We just ask that you call ahead so we can make sure it's a good time for your little one's routine.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Come Visit */}
//       <section className="py-16 bg-pink-100">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6 text-pink-600 font-comic">Come Play With Us!</h2>
//           <p className="text-xl text-gray-600 mb-8">The best way to see if we're the right fit is to visit and feel the happy energy!</p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg text-xl transition duration-300 shadow-md flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               Schedule a Tour
//             </button>
//             <button className="bg-white hover:bg-gray-100 text-pink-600 font-semibold py-4 px-8 rounded-lg text-xl border-2 border-pink-400 transition duration-300 shadow-md flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               Call Us Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-pink-800 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Our Playhouse</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">About Us</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Our Teachers</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Daily Schedule</a></li>
//                 <li><a href="#" className="text-pink-200 hover:text-white transition">Photo Gallery</a></li>
//               </ul>
//             </div>
            
//             {/* Contact Info */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//               <address className="not-italic text-pink-200">
//                 <p>123 Playful Lane</p>
//                 <p>Sunshine City, SC 12345</p>
//                 <p className="mt-2">Phone: (123) 456-7890</p>
//                 <p>Email: hello@littleplayhouse.com</p>
//               </address>
//             </div>
            
//             {/* Social Media */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Follow Our Adventures</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-pink-200 hover:text-white transition text-2xl">
//                   <span className="sr-only">Facebook</span>
//                   <span aria-hidden="true">📘</span>
//                 </a>
//                 <a href="#" className="text-pink-200 hover:text-white transition text-2xl">
//                   <span className="sr-only">Instagram</span>
//                   <span aria-hidden="true">📷</span>
//                 </a>
//                 <a href="#" className="text-pink-200 hover:text-white transition text-2xl">
//                   <span className="sr-only">YouTube</span>
//                   <span aria-hidden="true">▶️</span>
//                 </a>
//               </div>
//               <div className="mt-6">
//                 <h4 className="font-semibold mb-2">Sign up for our newsletter</h4>
//                 <form className="flex">
//                   <input 
//                     type="email" 
//                     placeholder="Your email" 
//                     className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
//                   />
//                   <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg text-pink-800 font-bold">
//                     Join
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-pink-700 mt-8 pt-8 text-center text-pink-200">
//             <p>&copy; {new Date().getFullYear()} Little Playhouse. All rights reserved.</p>
//             <p className="mt-2">Made with ❤️ for little ones</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BabyAdmissionsPage;








import React, { useState } from 'react';
import { 
  CheckCircle, 
  Users, 
  Calendar, 
  Download, 
  ExternalLink, 
  Award, 
  Heart, 
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const AdmissionsFees = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const enrollmentSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application or visit our campus to submit in person.",
      icon: <ExternalLink className="w-6 h-6" />
    },
    {
      step: 2,
      title: "School Tour & Interview",
      description: "Take a personalized tour and meet with our admissions team.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Acceptance Notification",
      description: "Receive your acceptance letter within 5-7 business days.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Payment & Orientation",
      description: "Complete enrollment payment and attend our welcome orientation.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const ageGroups = [
    { program: "Nursery", age: "2-3 years old", color: "bg-pink-100 text-pink-800 border-pink-200" },
    { program: "Kindergarten", age: "4-5 years old", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { program: "Primary", age: "6-12 years old", color: "bg-green-100 text-green-800 border-green-200" }
  ];

  const feeStructure = [
    { program: "Nursery", tuition: "$500", registration: "$50", total: "$550" },
    { program: "Kindergarten", tuition: "$650", registration: "$50", total: "$700" },
    { program: "Primary", tuition: "$800", registration: "$50", total: "$850" }
  ];

  const sponsorshipTypes = [
    {
      title: "Need-based Support",
      description: "Financial assistance for families facing economic challenges",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      title: "Academic Excellence",
      description: "Merit-based scholarships for outstanding academic performance",
      icon: <Award className="w-8 h-8" />,
      color: "bg-yellow-50 border-yellow-200 text-yellow-800"
    },
    {
      title: "Community Support",
      description: "Partnerships with local organizations and community leaders",
      icon: <Star className="w-8 h-8" />,
      color: "bg-purple-50 border-purple-200 text-purple-800"
    }
  ];

  const faqs = [
    {
      question: "When does enrollment open?",
      answer: "Enrollment opens in February for the following academic year. Early applications are encouraged as spaces fill quickly."
    },
    {
      question: "Do you offer sibling discounts?",
      answer: "Yes! We offer a 10% discount on tuition for second child and 15% for third child and beyond from the same family."
    },
    {
      question: "What documents are required for registration?",
      answer: "You'll need a birth certificate, immunization records, previous school records (if applicable), and two passport-sized photos."
    },
    {
      question: "Can I schedule a school tour before applying?",
      answer: "Absolutely! We encourage prospective families to visit our campus. Tours are available Monday through Friday at 10 AM and 2 PM."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The admission process was smooth and welcoming. The staff made us feel like part of the family from day one.",
      role: "Parent of Emma (Grade 2)"
    },
    {
      name: "Michael Chen",
      text: "Excellent communication throughout the enrollment process. They answered all our questions promptly.",
      role: "Parent of David (Kindergarten)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Admissions & Fees
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join our vibrant learning community — discover how to enroll, fees, and support programs
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Apply Now
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Enrollment Procedure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enrollment Procedure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to join our school community
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {enrollmentSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <span>{step.title}</span>
                      <span className="text-blue-500">{step.icon}</span>
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
                  <p className="text-gray-600 mb-6">
                    Begin your enrollment journey today and give your child the education they deserve.
                  </p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Start Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Eligibility */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Age Eligibility</h2>
            <p className="text-xl text-gray-600">Find the right program for your child's age group</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`p-6 text-center border-2 rounded-2xl ${group.color}`}>
                  <h3 className="text-2xl font-bold mb-2">{group.program}</h3>
                  <p className="text-lg font-medium">{group.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration Forms</h2>
            <p className="text-xl text-gray-600 mb-8">Choose your preferred registration method</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <Download className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Form (PDF)</h3>
              <p className="text-gray-600 mb-6">Print and fill out the registration form manually</p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <ExternalLink className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fill Online Registration</h3>
              <p className="text-gray-600 mb-6">Complete your application quickly and securely online</p>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Apply Online
              </button>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documents:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Birth Certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Immunization Card</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Previous School Records</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Two Passport Photos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tuition & Fee Structure</h2>
            <p className="text-xl text-gray-600">Transparent pricing for quality education</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Program</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Tuition (per term)</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Registration Fee</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{fee.program}</td>
                      <td className="px-6 py-4 text-gray-700">{fee.tuition}</td>
                      <td className="px-6 py-4 text-gray-700">{fee.registration}</td>
                      <td className="px-6 py-4 font-bold text-blue-600">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need a custom quote or have questions about fees?</p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Sponsorship Programs */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sponsorship Programs</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Making quality education accessible to every child through our support programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sponsorshipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${type.color}`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Apply for Sponsorship
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common admission questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parent Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from families who've joined our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-xl text-gray-600">Get in touch with our admissions team</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
         </div>
       {/* </div> */}
     </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Admissions Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Registration Forms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">School Tour Booking</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sponsorship Programs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-300">admissions@school.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-300">123 Education St, City</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
                <p className="mt-2">Saturday</p>
                <p>9:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span className="text-sm font-bold">i</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 Our School. All rights reserved. | Empowering minds, building futures.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdmissionsFees;