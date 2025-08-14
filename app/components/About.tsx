const About = () => {
  const features = [
    {
      icon: "🎯",
      title: "Strategic Approach",
      description:
        "We develop data-driven strategies tailored to your specific business goals and target audience.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality. We respect your deadlines and budget.",
    },
    {
      icon: "🔧",
      title: "Custom Solutions",
      description:
        "No templates or cookie-cutter solutions. Every project is built from scratch to meet your unique needs.",
    },
    {
      icon: "📈",
      title: "Proven Results",
      description:
        "Our track record speaks for itself with measurable improvements in traffic, conversions, and ROI.",
    },
    {
      icon: "🛡️",
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance to ensure your digital assets remain secure and updated.",
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description:
        "We stay ahead of industry trends and technologies to give you a competitive edge in the market.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Fireweb Technologies?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another web development agency. We&apos;re your
            strategic partners in digital transformation, committed to
            delivering exceptional results that drive business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Websites Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1+</div>
              <div className="text-blue-100">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower businesses of all sizes with cutting-edge digital
              solutions that not only look amazing but also deliver measurable
              results. We believe in building long-term partnerships and helping
              our clients achieve sustainable growth in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
