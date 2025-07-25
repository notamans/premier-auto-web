export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                Premier <span className="text-red-500">Auto</span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                Book Service
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop')`,
          }}
        ></div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            European Vehicle <span className="text-red-500">Specialists</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium automotive services for BMW, Mercedes, Audi, Porsche, and
            more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Service
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automotive services tailored for European luxury
              vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Routine Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Oil changes, brake service, tire rotation, and comprehensive
                inspections to keep your vehicle running perfectly.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Oil & Filter Changes</li>
                <li>• Brake Inspection & Service</li>
                <li>• Tire Services</li>
                <li>• Multi-point Inspections</li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Performance Tuning
              </h3>
              <p className="text-gray-600 mb-4">
                Unlock your vehicle&apos;s full potential with our professional
                performance enhancement services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• ECU Tuning</li>
                <li>• Cold Air Intakes</li>
                <li>• Exhaust Systems</li>
                <li>• Suspension Upgrades</li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Diagnostics & Repair
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced diagnostic equipment and expert technicians to identify
                and fix any issues with precision.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Engine Diagnostics</li>
                <li>• Electrical System Repair</li>
                <li>• Transmission Service</li>
                <li>• Climate Control Repair</li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Detailing & Care
              </h3>
              <p className="text-gray-600 mb-4">
                Premium detailing services to keep your vehicle looking pristine
                inside and out.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Paint Correction</li>
                <li>• Ceramic Coating</li>
                <li>• Interior Deep Clean</li>
                <li>• Paint Protection Film</li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emergency Service
              </h3>
              <p className="text-gray-600 mb-4">
                24/7 roadside assistance and emergency repair services for when
                you need help most.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Roadside Assistance</li>
                <li>• Emergency Repairs</li>
                <li>• Towing Services</li>
                <li>• Mobile Diagnostics</li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fleet Management
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive fleet services for businesses with multiple
                European vehicles.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fleet Maintenance</li>
                <li>• Service Scheduling</li>
                <li>• Cost Management</li>
                <li>• Vehicle Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              European Brands We Service
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise for premium European vehicles
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["BMW", "Mercedes", "Audi", "Porsche", "Volkswagen", "Volvo"].map(
              (brand) => (
                <div
                  key={brand}
                  className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {brand}
                  </div>
                  <div className="text-sm text-gray-500">Expert Service</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Premier Auto?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 20 years of experience specializing in European
                vehicles, we combine traditional craftsmanship with cutting-edge
                technology to provide unparalleled automotive services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Certified Technicians
                    </h3>
                    <p className="text-gray-600">
                      Factory-trained experts with specialized knowledge of
                      European vehicles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      State-of-the-Art Equipment
                    </h3>
                    <p className="text-gray-600">
                      Latest diagnostic tools and equipment specifically for
                      European vehicles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Quality Guarantee
                    </h3>
                    <p className="text-gray-600">
                      All work backed by our comprehensive warranty and
                      satisfaction guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">20+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">5000+</div>
              <div className="text-lg">Vehicles Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-lg">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Exceptional service! They diagnosed and fixed my BMW&apos;s
                complex electrical issue that other shops couldn&apos;t figure
                out. Highly recommended!
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">BMW X5 Owner</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Professional, honest, and thorough. My Mercedes has never run
                better. The team goes above and beyond every time.
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">
                Mercedes C-Class Owner
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Best automotive service I&apos;ve experienced. They treat your
                car like their own and explain everything clearly. Fair pricing
                too!
              </p>
              <div className="font-semibold text-gray-900">Emily Davis</div>
              <div className="text-sm text-gray-500">Audi A4 Owner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Ready to experience premium automotive service?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-red-500 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">
                      123 Auto Service Lane, Automotive District, AD 12345
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-red-500 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">(555) 123-AUTO</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-red-500 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">service@premierauto.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-red-500 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-gray-300">
                      Mon-Fri: 7AM-6PM | Sat: 8AM-4PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Schedule Service</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Schedule Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Premier <span className="text-red-500">Auto</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for European vehicle maintenance, repair,
                and performance enhancement. Experience the difference of
                specialized automotive care.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z.001" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Diagnostics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Performance Tuning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Detailing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Premier Auto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
