
'use client';

import Link from 'next/link';

export default function Basics() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="cursor-pointer">
              <h1 className="text-2xl font-bold text-indigo-600" style={{fontFamily: "Pacifico, serif"}}>
                MERN Stack
              </h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/basics" className="text-indigo-600 font-medium cursor-pointer">
                Basics
              </Link>
              <Link href="/mongodb" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                MongoDB
              </Link>
              <Link href="/express" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                Express
              </Link>
              <Link href="/react" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                React
              </Link>
              <Link href="/nodejs" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                Node.js
              </Link>
              <Link href="/vscode" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                VS Code
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MERN Stack Fundamentals
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the core concepts and architecture of MongoDB, Express.js, React, and Node.js
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What is MERN Stack */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the MERN Stack?</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  MERN is a popular full-stack JavaScript framework that consists of four main technologies:
                  <strong> MongoDB, Express.js, React, and Node.js</strong>. This combination allows developers 
                  to build complete web applications using only JavaScript.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-database-2-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">MongoDB</h3>
                  <p className="text-gray-600">NoSQL database that stores data in flexible, JSON-like documents</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-server-line text-gray-600 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Express.js</h3>
                  <p className="text-gray-600">Minimal web framework for Node.js that handles server-side logic</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-reactjs-line text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">React</h3>
                  <p className="text-gray-600">Frontend library for building interactive user interfaces</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-nodejs-line text-green-700 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Node.js</h3>
                  <p className="text-gray-600">JavaScript runtime environment for server-side development</p>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">MERN Stack Architecture</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=MERN%20stack%20architecture%20diagram%20showing%20data%20flow%20between%20React%20frontend%2C%20Node.js%20Express%20backend%2C%20and%20MongoDB%20database%2C%20clean%20technical%20illustration%20with%20arrows%20and%20connections%2C%20modern%20web%20development%20architecture%20visualization&width=800&height=400&seq=arch1&orientation=landscape"
                  alt="MERN Architecture"
                  className="w-full rounded-lg mb-6 object-top"
                />
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Frontend (React)</h4>
                      <p className="text-gray-600">User interface that handles user interactions and displays data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Backend (Node.js + Express)</h4>
                      <p className="text-gray-600">Server-side logic, API endpoints, and business logic</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Database (MongoDB)</h4>
                      <p className="text-gray-600">Data storage and retrieval with flexible document structure</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prerequisites */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prerequisites</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Before You Start</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-yellow-600 mt-1"></i>
                    <span className="text-yellow-700">Basic knowledge of HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-yellow-600 mt-1"></i>
                    <span className="text-yellow-700">Understanding of ES6+ JavaScript features</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-yellow-600 mt-1"></i>
                    <span className="text-yellow-700">Familiarity with command line/terminal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-check-line text-yellow-600 mt-1"></i>
                    <span className="text-yellow-700">Basic understanding of HTTP requests and REST APIs</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Development Environment */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up Your Environment</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-4">Required Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <i className="ri-nodejs-line text-green-600 text-xl"></i>
                      <div>
                        <div className="font-semibold">Node.js</div>
                        <div className="text-sm text-gray-600">v18 or higher</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <i className="ri-npmjs-line text-red-600 text-xl"></i>
                      <div>
                        <div className="font-semibold">npm/yarn</div>
                        <div className="text-sm text-gray-600">Package manager</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <i className="ri-code-line text-blue-600 text-xl"></i>
                      <div>
                        <div className="font-semibold">VS Code</div>
                        <div className="text-sm text-gray-600">Code editor</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <i className="ri-git-branch-line text-orange-600 text-xl"></i>
                      <div>
                        <div className="font-semibold">Git</div>
                        <div className="text-sm text-gray-600">Version control</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Setup Commands</h3>
                  <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm">
                    <div className="mb-2"># Install Node.js from nodejs.org</div>
                    <div className="mb-2"># Verify installation</div>
                    <div className="mb-2">node --version</div>
                    <div className="mb-2">npm --version</div>
                    <div className="mb-2"></div>
                    <div className="mb-2"># Create new project</div>
                    <div>npx create-react-app my-mern-app</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose MERN Stack?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-javascript-line text-yellow-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Single Language</h4>
                      <p className="text-gray-600 text-sm">Use JavaScript for both frontend and backend development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-speed-line text-green-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Fast Development</h4>
                      <p className="text-gray-600 text-sm">Rapid prototyping and development with reusable components</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-team-line text-blue-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Large Community</h4>
                      <p className="text-gray-600 text-sm">Extensive community support and resources</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-scales-3-line text-purple-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Scalable</h4>
                      <p className="text-gray-600 text-sm">Easy to scale applications as they grow</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-open-source-line text-red-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Open Source</h4>
                      <p className="text-gray-600 text-sm">All technologies are free and open source</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-smartphone-line text-indigo-500 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Mobile Ready</h4>
                      <p className="text-gray-600 text-sm">Build responsive web apps that work on mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Navigation */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <a href="#" className="block text-gray-600 hover:text-indigo-600 py-1">What is MERN?</a>
                  <a href="#" className="block text-gray-600 hover:text-indigo-600 py-1">Architecture</a>
                  <a href="#" className="block text-gray-600 hover:text-indigo-600 py-1">Prerequisites</a>
                  <a href="#" className="block text-gray-600 hover:text-indigo-600 py-1">Setup Environment</a>
                  <a href="#" className="block text-gray-600 hover:text-indigo-600 py-1">Benefits</a>
                </nav>
              </div>

              {/* Next Steps */}
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <Link href="/vscode" className="block bg-white p-3 rounded-lg hover:shadow-sm cursor-pointer">
                    <div className="font-semibold text-indigo-600">VS Code Setup</div>
                    <div className="text-sm text-gray-600">Configure your editor</div>
                  </Link>
                  <Link href="/nodejs" className="block bg-white p-3 rounded-lg hover:shadow-sm cursor-pointer">
                    <div className="font-semibold text-indigo-600">Learn Node.js</div>
                    <div className="text-sm text-gray-600">Backend fundamentals</div>
                  </Link>
                  <Link href="/react" className="block bg-white p-3 rounded-lg hover:shadow-sm cursor-pointer">
                    <div className="font-semibold text-indigo-600">Master React</div>
                    <div className="text-sm text-gray-600">Frontend development</div>
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Helpful Resources</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <i className="ri-book-line text-green-600"></i>
                    <span>Official Documentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-video-line text-green-600"></i>
                    <span>Video Tutorials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-github-line text-green-600"></i>
                    <span>Sample Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-question-line text-green-600"></i>
                    <span>Community Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start with setting up your VS Code environment for optimal MERN development
          </p>
          <Link href="/vscode" className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
            Setup VS Code
          </Link>
        </div>
      </div>
    </div>
  );
}
