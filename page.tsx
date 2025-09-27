
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600" style={{fontFamily: "Pacifico, serif"}}>
                MERN Stack
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/basics" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
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
      <div 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20developer%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20React%20components%2C%20MongoDB%20database%20interface%2C%20Node.js%20terminal%2C%20and%20VS%20Code%20editor%20with%20dark%20theme%2C%20professional%20software%20development%20environment%2C%20clean%20minimalist%20setup%20with%20blue%20and%20purple%20lighting&width=1200&height=600&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master MERN Stack Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Complete guide to MongoDB, Express.js, React, and Node.js with VS Code setup and best practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/basics" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Start Learning
            </Link>
            <Link href="/vscode" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              VS Code Setup
            </Link>
          </div>
        </div>
      </div>

      {/* Technologies Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The MERN Stack Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn each technology step by step with practical examples and VS Code integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/mongodb" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-database-2-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">MongoDB</h3>
                <p className="text-gray-600 text-center">
                  NoSQL database for flexible data storage and retrieval
                </p>
              </div>
            </Link>

            <Link href="/express" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-server-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Express.js</h3>
                <p className="text-gray-600 text-center">
                  Fast web framework for Node.js backend development
                </p>
              </div>
            </Link>

            <Link href="/react" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-reactjs-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">React</h3>
                <p className="text-gray-600 text-center">
                  Modern frontend library for building user interfaces
                </p>
              </div>
            </Link>

            <Link href="/nodejs" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-nodejs-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Node.js</h3>
                <p className="text-gray-600 text-center">
                  JavaScript runtime for server-side development
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* VS Code Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfect VS Code Setup
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Optimize your development environment with the best extensions, themes, and configurations for MERN stack development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Essential extensions for React, Node.js, and MongoDB</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Debugging configuration for full-stack applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700">Code snippets and shortcuts for faster development</p>
                </div>
              </div>
              <Link href="/vscode" className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
                Setup Guide
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=VS%20Code%20editor%20interface%20showing%20MERN%20stack%20project%20structure%20with%20React%20components%2C%20Node.js%20files%2C%20MongoDB%20connection%2C%20dark%20theme%20with%20syntax%20highlighting%2C%20multiple%20tabs%20open%2C%20integrated%20terminal%2C%20file%20explorer%20sidebar%2C%20modern%20developer%20workspace&width=600&height=400&seq=vscode1&orientation=landscape"
                alt="VS Code Setup"
                className="rounded-lg shadow-lg w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our structured path from beginner to advanced MERN stack developer
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation & Setup</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the basics of each technology and set up your development environment with VS Code.
                  </p>
                  <Link href="/basics" className="text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer">
                    Start Here →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Backend Development</h3>
                  <p className="text-gray-600 mb-4">
                    Master Node.js and Express.js to build robust server-side applications and APIs.
                  </p>
                  <Link href="/nodejs" className="text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer">
                    Learn Backend →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Database Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Connect your application to MongoDB and learn data modeling and operations.
                  </p>
                  <Link href="/mongodb" className="text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer">
                    Database Guide →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Frontend Development</h3>
                  <p className="text-gray-600 mb-4">
                    Build dynamic user interfaces with React and connect to your backend APIs.
                  </p>
                  <Link href="/react" className="text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer">
                    React Tutorial →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your MERN Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of developers who have mastered full-stack development with our comprehensive guide
          </p>
          <Link href="/basics" className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
            Begin Learning Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: "Pacifico, serif"}}>
                MERN Stack Guide
              </h3>
              <p className="text-gray-400 mb-4">
                Your complete resource for learning MongoDB, Express.js, React, and Node.js development with VS Code.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/mongodb" className="hover:text-white cursor-pointer">MongoDB</Link></li>
                <li><Link href="/express" className="hover:text-white cursor-pointer">Express.js</Link></li>
                <li><Link href="/react" className="hover:text-white cursor-pointer">React</Link></li>
                <li><Link href="/nodejs" className="hover:text-white cursor-pointer">Node.js</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/basics" className="hover:text-white cursor-pointer">Getting Started</Link></li>
                <li><Link href="/vscode" className="hover:text-white cursor-pointer">VS Code Setup</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MERN Stack Guide. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
