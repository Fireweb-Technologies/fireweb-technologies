"use client";

import { useState, useEffect } from "react";

interface PricingData {
  webDevelopment: ServiceCategory;
  digitalMarketing: ServiceCategory;
}

interface ServiceCategory {
  title: string;
  description: string;
  packages: Package[];
}

interface Package {
  name: string;
  description: string;
  features: string[];
  pricing: {
    USD: PriceInfo;
    INR: PriceInfo;
  };
  popular: boolean;
}

interface PriceInfo {
  amount: number;
  currency: string;
  period?: string;
  region: string;
}

const Pricing = () => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<"USD" | "INR">("USD");
  const [activeCategory, setActiveCategory] = useState<
    "webDevelopment" | "digitalMarketing"
  >("webDevelopment");

  useEffect(() => {
    fetch("/data/pricing.json")
      .then((response) => response.json())
      .then((data) => setPricingData(data))
      .catch((error) => console.error("Error loading pricing data:", error));
  }, []);

  useEffect(() => {
    // Auto-detect region based on locale (simplified)
    const userLocale = navigator.language || navigator.languages[0];
    if (userLocale.includes("IN") || userLocale.includes("in")) {
      setSelectedRegion("INR");
    }
  }, []);

  if (!pricingData) {
    return (
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading pricing information...</p>
          </div>
        </div>
      </section>
    );
  }

  const currentCategory = pricingData[activeCategory];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our
            commitment to quality and exceptional support.
          </p>

          {/* Region Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedRegion("USD")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedRegion === "USD"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                International ($)
              </button>
              <button
                onClick={() => setSelectedRegion("INR")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedRegion === "INR"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                India (₹)
              </button>
            </div>
          </div>

          {/* Category Selector */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveCategory("webDevelopment")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeCategory === "webDevelopment"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setActiveCategory("digitalMarketing")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeCategory === "digitalMarketing"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Digital Marketing
              </button>
            </div>
          </div>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {currentCategory.title}
          </h3>
          <p className="text-gray-600">{currentCategory.description}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentCategory.packages.map((pkg, index) => {
            const pricing = pkg.pricing[selectedRegion];
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  pkg.popular
                    ? "border-2 border-blue-500 scale-105"
                    : "border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h4>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {pricing.currency}
                      {pricing.amount.toLocaleString()}
                    </span>
                    {pricing.period && (
                      <span className="text-gray-600 ml-2">
                        {pricing.period}
                      </span>
                    )}
                    <div className="text-sm text-gray-500 mt-1">
                      Pricing for {pricing.region}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200 ${
                      pkg.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We understand that every business is unique. If our standard
              packages don&apos;t perfectly fit your needs, we&apos;d be happy
              to create a custom solution just for you.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
