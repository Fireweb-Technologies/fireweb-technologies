import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Digital Presence
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We create stunning websites and powerful digital marketing
              strategies that drive real results for your business. From concept
              to launch, we&apos;re your partners in digital success.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="#services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
              >
                View Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-0 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
