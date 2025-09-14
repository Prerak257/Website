// src/components/Hero.jsx
import Prerak from '../assets/prerak.jpg';
import Resume from '../assets/Resume_Prerak.pdf';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Prerak Ghimire
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-700 mb-6">
              Account Assistant
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto md:mx-0">
              Detail-oriented accounting professional with expertise in financial
              reporting, tax preparation, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-700 hover:bg-purple-600 hover:cursor-pointer text-white px-6 py-3 rounded-lg transition-colors shadow-md duration-300 delay-10"
              >
                Contact Me
              </button>
              <button
                onClick={() => window.open(Resume, "_blank")}
                className="border border-blue-700 text-blue-700 hover:bg-purple-600 hover:cursor-pointer hover:text-white hover:border-transparent px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md duration-300 delay-50"
              >
                View CV
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="bg-blue-200 rounded-full p-2 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="bg-gray-300 rounded-full w-60 h-60 md:w-72 md:h-72 flex items-center justify-center overflow-hidden">
                <img
                  src={Prerak}
                  alt="Prerak Ghimire"
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
