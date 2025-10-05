// src/components/Hero.jsx
import Prerak from '../assets/prerak.jpg';
import Resume from '../assets/Resume_Prerak.pdf';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden pt-20" // Added pt-20 for navbar spacing
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc_25%,transparent_25%),linear-gradient(-45deg,#f8fafc_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8fafc_75%),linear-gradient(-45deg,transparent_75%,#f8fafc_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] opacity-30"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/70 to-white/90"></div>

      <div className="container mx-auto px-6 relative z-10 mt-8"> {/* Added mt-8 for extra spacing */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Prerak <span className="text-blue-600">Ghimire</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mt-4 mx-auto lg:mx-0"></div>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-semibold">
                Account Assistant
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Detail-oriented accounting professional with expertise in financial
              reporting, tax preparation, and compliance. Dedicated to delivering
              accurate financial solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg min-w-[140px] sm:min-w-[160px]"
              >
                Contact Me
              </button>
              <button
                onClick={() => window.open(Resume, "_blank")}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg min-w-[140px] sm:min-w-[160px]"
              >
                View CV
              </button>
            </div>
          </div>

          {/* Image Content - Clean and Professional */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"> {/* Added mt-8 for mobile spacing */}
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] relative">
                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full transform rotate-3 scale-105 opacity-30 group-hover:rotate-6 transition-transform duration-500"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={Prerak}
                    alt="Prerak Ghimire - Account Assistant"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Professional badge element */}
                <div className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
                  <span className="text-sm font-semibold text-green-600">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;