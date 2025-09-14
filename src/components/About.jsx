// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4 text-lg">
              I'm a junior accountant who enjoys working with numbers and making sure everything adds up right. 
              I have a solid understanding of accounting principles, 
              and I focus on delivering accurate financial reports and analysis.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              I'm comfortable using different accounting software and like keeping financial records neat and organized. 
              I also look for ways to make processes smoother and help save costs.
            </p>
            <p className="text-gray-600 text-lg">
              Outside of work, I like keeping up with new financial regulations, 
              volunteering in financial literacy programs, and spending time outdoors.
            </p>
          </div>
          
          <div className="md:w-1/2 bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Personal Details</h3>
            
            <div className="space-y-3">
              <div className="flex">
                <div className="w-1/3 text-gray-600">Name:</div>
                <div className="w-2/3 font-medium">Prerak Ghimire</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Location:</div>
                <div className="w-2/3 font-medium">Koteshwor, Kathmandu, Nepal</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Email:</div>
                <div
                  className="w-2/3 font-medium cursor-pointer hover:text-violet-600"
                  onClick={() => window.location.href = "mailto:prerakghimire123@gmail.com"}
                >
                  prerakghimire123@gmail.com
                </div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Phone:</div>
                <div
                  className="w-2/3 font-medium cursor-pointer hover:text-violet-600"
                  onClick={() => window.location.href = "tel:+9779862274149"}
                >
                  +977 (98) 62274149
                </div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Status:</div>
                <div className="w-2/3 font-medium text-green-500">Available for opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About