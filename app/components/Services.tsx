const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Development",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Native iOS Apps",
        "Native Android Apps",
        "React Native",
        "Flutter Development",
        "App Store Optimization",
        "Push Notifications",
      ],
    },
    {
      icon: "🚀",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful, user-centered designs that convert visitors into customers",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration",
      features: [
        "Shopify Development",
        "WooCommerce",
        "Custom E-commerce",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management",
      ],
    },
    {
      icon: "⚙️",
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and support to keep your digital assets running smoothly",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Backup Management",
        "Technical Support",
        "Content Updates",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your
            business succeed in the digital world. From web development to
            digital marketing, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your project and see how we can help you
              achieve your digital goals.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
