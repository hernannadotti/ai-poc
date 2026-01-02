const LandingPage = () => {
  const year = new Date().getFullYear();

  const stats = [
    { value: '3.5k', label: 'Job done successfully' },
    { value: '2.8k+', label: 'World wide clients' },
    { value: '12+', label: 'Years experience' },
    { value: '30+', label: 'Trusted company' },
  ];

  const processItems = [
    {
      title: 'High velocity',
      description: 'Implementation is very high velocity approximately over 4,100 meters',
    },
    {
      title: 'High quality',
      description: 'Implementation is very high velocity approximately over 4,100 meters',
    },
    {
      title: 'Efficient',
      description: 'Excellence, objective, extremely good or impressive in a way that is unusual',
    },
    {
      title: 'Ego-Free',
      description: 'Take your ego out of the equation and boost your company thrust',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">Ardio</span>
            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
              R
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-600 transition">About Studio</a>
            <a href="#work" className="hover:text-purple-600 transition">Work</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
              New
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Driver Revenue<br />
              Digital Marketing<br />
              Agency That
            </h1>
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Our Office</p>
                <p className="font-medium">Agency - Sales Germany</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Latest Project</p>
                <p className="font-medium">Design Product for Wind</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
              Scroll down
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20"></div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 relative">
              <div className="aspect-square bg-gray-300 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-6 left-6 right-6">
              <svg viewBox="0 0 400 100" className="w-full h-auto">
                <path d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50" stroke="#EF4444" strokeWidth="3" fill="none" />
                <path d="M0,50 Q50,80 100,50 T200,50 T300,50 T400,50" stroke="#000000" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Experience</h2>
              <div>
                <h3 className="text-xl font-bold mb-2">Web design</h3>
                <p className="text-gray-600">
                  Web design refers to the design of websites that are displayed on the internet
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Description</h3>
              <p className="text-gray-600 mb-6">
                Web design is nothing more than meaningful appearance of website. The process involves layout, design and communication of your website.
              </p>
              <h3 className="text-lg font-bold mb-4">Work</h3>
              <p className="text-gray-600 mb-6">Our Portfolio of completed works</p>
              <button className="px-6 py-3 bg-white border-2 border-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition flex items-center gap-2">
                Check Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-10 top-0 w-32 h-32 bg-red-500 rounded-full opacity-30"></div>
            <div className="absolute -bottom-10 left-20 w-24 h-24 bg-purple-600 rounded-full opacity-30"></div>
            <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8">
              <div className="aspect-video bg-gray-800 rounded-lg shadow-2xl"></div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-600 mb-8">How we are work on this part. This is our work process.</p>
            <div className="grid grid-cols-2 gap-6">
              {processItems.map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Minimalist and Design</h2>
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button className="px-6 py-2 bg-white rounded-full text-sm font-medium border-2 border-purple-600 text-purple-600">
              All
            </button>
            <button className="px-6 py-2 bg-white rounded-full text-sm font-medium hover:border-2 hover:border-purple-600 transition">
              Mobile design
            </button>
            <button className="px-6 py-2 bg-white rounded-full text-sm font-medium hover:border-2 hover:border-purple-600 transition">
              Web design
            </button>
            <button className="px-6 py-2 bg-white rounded-full text-sm font-medium hover:border-2 hover:border-purple-600 transition">
              Motion design
            </button>
            <button className="px-6 py-2 bg-white rounded-full text-sm font-medium hover:border-2 hover:border-purple-600 transition">
              Illustration design
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100"></div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">Mobile design</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                    <span>By Prodint Jak</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition">
                    Full Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">Ardio</span>
              <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-xs">
                R
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-8">Subscribe to get the<br />latest updates</h2>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:border-purple-600"
              />
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition flex items-center gap-2">
                Subscribe
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="#EF4444" strokeWidth="2" fill="none" />
              <path d="M0,120 Q50,170 100,120 T200,120" stroke="#F59E0B" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>&copy; {year} AI POC for IPG - Azure DevOps Integration</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
