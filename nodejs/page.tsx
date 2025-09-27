
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NodeJS() {
  const [activeTab, setActiveTab] = useState('basics');

  const features = [
    {
      name: "Event-Driven",
      description: "Non-blocking I/O operations using event loops",
      icon: "ri-flashlight-line",
      color: "green"
    },
    {
      name: "Single-Threaded",
      description: "Uses single-threaded event loop for concurrency",
      icon: "ri-cpu-line",
      color: "blue"
    },
    {
      name: "Cross-Platform",
      description: "Runs on Windows, macOS, Linux, and more",
      icon: "ri-global-line",
      color: "purple"
    },
    {
      name: "NPM Ecosystem",
      description: "Largest package ecosystem with millions of modules",
      icon: "ri-box-3-line",
      color: "orange"
    },
    {
      name: "Fast Execution",
      description: "Built on Chrome's V8 JavaScript engine",
      icon: "ri-speed-line",
      color: "red"
    },
    {
      name: "Scalable",
      description: "Handle thousands of concurrent connections",
      icon: "ri-line-chart-line",
      color: "indigo"
    }
  ];

  const modules = [
    {
      name: "File System (fs)",
      description: "Read and write files",
      code: `const fs = require('fs');

// Read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('output.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File saved!');
});`
    },
    {
      name: "HTTP Module",
      description: "Create HTTP servers and clients",
      code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`
    },
    {
      name: "Path Module",
      description: "Work with file and directory paths",
      code: `const path = require('path');

console.log(path.join('/users', 'john', 'documents'));
// Output: /users/john/documents

console.log(path.extname('file.txt'));
// Output: .txt

console.log(path.basename('/path/to/file.txt'));
// Output: file.txt`
    },
    {
      name: "OS Module",
      description: "Operating system related utilities",
      code: `const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Directory:', os.homedir());`
    }
  ];

  // Function to download code as file
  const downloadCode = (code, filename) => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
              <Link href="/nodejs" className="text-indigo-600 font-medium cursor-pointer">
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
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Node.js%20runtime%20environment%20visualization%20with%20JavaScript%20engine%2C%20event%20loop%20architecture%2C%20server-side%20development%2C%20green%20and%20black%20color%20scheme%2C%20modern%20backend%20technology%20illustration%2C%20code%20execution%20flow&width=1200&height=500&seq=nodejs1&orientation=landscape')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Node.js
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Build scalable server-side applications with JavaScript runtime environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('basics')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Start Learning
            </button>
            <button 
              onClick={() => setActiveTab('modules')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Core Modules
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveTab('basics')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'basics' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Basics
            </button>
            <button
              onClick={() => setActiveTab('modules')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'modules' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Core Modules
            </button>
            <button
              onClick={() => setActiveTab('npm')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'npm' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              NPM & Packages
            </button>
            <button
              onClick={() => setActiveTab('async')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'async' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Async Programming
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Basics Tab */}
        {activeTab === 'basics' && (
          <div>
            {/* What is Node.js */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Node.js?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Node.js is a JavaScript runtime built on Chrome's V8 engine for server-side development
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="bg-green-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Key Characteristics</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>JavaScript Everywhere:</strong> Use JS for both frontend and backend</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Non-blocking I/O:</strong> Asynchronous operations for better performance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Event-driven:</strong> Uses events and callbacks for handling operations</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Cross-platform:</strong> Runs on multiple operating systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Node.js%20architecture%20diagram%20showing%20V8%20engine%2C%20event%20loop%2C%20callback%20queue%2C%20single-threaded%20model%2C%20server-side%20JavaScript%20execution%2C%20green%20and%20blue%20technical%20illustration&width=600&height=400&seq=nodejs2&orientation=landscape"
                    alt="Node.js Architecture"
                    className="rounded-lg shadow-lg w-full object-cover object-top"
                  />
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all">
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`${feature.icon} text-${feature.color}-600 text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Installation */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Installation & Setup</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Windows</h3>
                  <ol className="space-y-2 text-blue-700">
                    <li>1. Visit nodejs.org</li>
                    <li>2. Download Windows Installer</li>
                    <li>3. Run the .msi file</li>
                    <li>4. Follow installation wizard</li>
                    <li>5. Verify with <code className="bg-blue-100 px-2 py-1 rounded text-sm">node --version</code></li>
                  </ol>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">macOS</h3>
                  <div className="space-y-3">
                    <div className="bg-green-900 text-green-100 p-3 rounded font-mono text-sm">
                      # Using Homebrew<br/>
                      brew install node
                    </div>
                    <div className="bg-green-900 text-green-100 p-3 rounded font-mono text-sm">
                      # Verify installation<br/>
                      node --version<br/>
                      npm --version
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Linux (Ubuntu)</h3>
                  <div className="bg-purple-900 text-purple-100 p-4 rounded font-mono text-sm">
                    # Update package index<br/>
                    sudo apt update<br/><br/>
                    # Install Node.js<br/>
                    sudo apt install nodejs npm<br/><br/>
                    # Check versions<br/>
                    node --version<br/>
                    npm --version
                  </div>
                </div>
              </div>
            </section>

            {/* First Node.js Program */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your First Node.js Program</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">hello.js</h3>
                      <button 
                        onClick={() => downloadCode(`// Your first Node.js program
console.log('Hello, Node.js!');
console.log('Current time:', new Date());

// Access command line arguments
console.log('Arguments:', process.argv);

// Environment variables
console.log('Node version:', process.version);
console.log('Platform:', process.platform);`, 'hello.js')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm whitespace-nowrap"
                      >
                        <i className="ri-download-line mr-2"></i>
                        Download
                      </button>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
<pre>{`// Your first Node.js program
console.log('Hello, Node.js!');
console.log('Current time:', new Date());

// Access command line arguments
console.log('Arguments:', process.argv);

// Environment variables
console.log('Node version:', process.version);
console.log('Platform:', process.platform);`}</pre>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Run the Program</h3>
                    <div className="bg-green-900 text-green-100 p-4 rounded-lg font-mono text-sm mb-4">
                      node hello.js
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Expected Output:</h4>
                      <div className="font-mono text-sm text-gray-700">
                        Hello, Node.js!<br/>
                        Current time: 2024-01-15T10:30:45.123Z<br/>
                        Arguments: [ '/usr/bin/node', '/path/to/hello.js' ]<br/>
                        Node version: v18.17.0<br/>
                        Platform: darwin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* REPL */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Node.js REPL</h2>
              <div className="bg-indigo-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">Interactive Shell</h3>
                    <p className="text-indigo-700 mb-4">
                      REPL (Read-Eval-Print Loop) allows you to run JavaScript code interactively in the terminal.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <i className="ri-terminal-line text-indigo-600"></i>
                        <span>Test code snippets quickly</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-code-s-slash-line text-indigo-600"></i>
                        <span>Explore Node.js APIs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-bug-line text-indigo-600"></i>
                        <span>Debug and experiment</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Start REPL</h4>
                    <div className="bg-indigo-900 text-indigo-100 p-4 rounded-lg font-mono text-sm">
<pre>{`$ node
> console.log('Hello from REPL!')
Hello from REPL!
undefined
> 2 + 3
5
> const os = require('os')
undefined
> os.platform()
'darwin'
> .exit`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Global Objects */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Global Objects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="text-lg font-semibold mb-4">Process Object</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Current working directory
console.log(process.cwd());

// Environment variables
console.log(process.env.NODE_ENV);

// Exit the process
process.exit(0);

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});`}</pre>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="text-lg font-semibold mb-4">__dirname & __filename</h4>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Current directory path
console.log(__dirname);
// Output: /Users/john/myapp

// Current file path
console.log(__filename);
// Output: /Users/john/myapp/server.js

// Construct paths
const path = require('path');
const configPath = path.join(__dirname, 'config.json');`}</pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Modules Tab */}
        {activeTab === 'modules' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Node.js Core Modules</h2>
              <p className="text-xl text-gray-600">Built-in modules that come with Node.js installation</p>
            </div>

            <div className="space-y-12">
              {modules.map((module, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{module.name}</h3>
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      <button 
                        onClick={() => downloadCode(module.code, `${module.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-example.js`)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm whitespace-nowrap"
                      >
                        <i className="ri-download-line mr-2"></i>
                        Download Code
                      </button>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre>{module.code}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* More Core Modules */}
              <section className="mt-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Other Important Modules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">crypto</h4>
                    <p className="text-blue-700 text-sm mb-3">Cryptographic functionality</p>
                    <div className="bg-blue-900 text-blue-100 p-3 rounded font-mono text-xs">
                      const crypto = require('crypto');<br/>
                      const hash = crypto.createHash('sha256');<br/>
                      hash.update('Hello World');<br/>
                      console.log(hash.digest('hex'));<br/>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">url</h4>
                    <p className="text-green-700 text-sm mb-3">URL parsing utilities</p>
                    <div className="bg-green-900 text-green-100 p-3 rounded font-mono text-xs">
                      const url = require('url');<br/>
                      const parsed = url.parse('https://example.com/path');<br/>
                      console.log(parsed.hostname);
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">querystring</h4>
                    <p className="text-purple-700 text-sm mb-3">Parse query strings</p>
                    <div className="bg-purple-900 text-purple-100 p-3 rounded font-mono text-xs">
                      const qs = require('querystring');<br/>
                      const parsed = qs.parse('name=John&age=30');<br/>
                      console.log(parsed.name);
                    </div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">events</h4>
                    <p className="text-orange-700 text-sm mb-3">Event emitter class</p>
                    <div className="bg-orange-900 text-orange-100 p-3 rounded font-mono text-xs">
                      const EventEmitter = require('events');<br/>
                      const emitter = new EventEmitter();<br/>
                      emitter.on('data', console.log);
                    </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">stream</h4>
                    <p className="text-red-700 text-sm mb-3">Streaming data interfaces</p>
                    <div className="bg-red-900 text-red-100 p-3 rounded font-mono text-xs">
                      const fs = require('fs');<br/>
                      const stream = fs.createReadStream('file.txt');<br/>
                      stream.pipe(process.stdout);
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-indigo-800 mb-3">util</h4>
                    <p className="text-indigo-700 text-sm mb-3">Utility functions</p>
                    <div className="bg-indigo-900 text-indigo-100 p-3 rounded font-mono text-xs">
                      const util = require('util');<br/>
                      const debuglog = util.debuglog('app');<br/>
                      debuglog('Debug message');
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* NPM Tab */}
        {activeTab === 'npm' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">NPM & Package Management</h2>
              <p className="text-xl text-gray-600">Node Package Manager - the world's largest software registry</p>
            </div>

            <div className="space-y-12">
              {/* What is NPM */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is NPM?</h3>
                <div className="bg-red-50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-red-700 mb-4">
                        NPM (Node Package Manager) is the default package manager for Node.js, providing access to hundreds of thousands of packages.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <i className="ri-download-line text-red-600"></i>
                          <span>Install packages easily</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-settings-line text-red-600"></i>
                          <span>Manage dependencies</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-share-line text-red-600"></i>
                          <span>Publish your own packages</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-refresh-line text-red-600"></i>
                          <span>Handle version updates</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://readdy.ai/api/search-image?query=NPM%20package%20manager%20interface%20showing%20package%20installation%2C%20dependency%20tree%2C%20version%20management%2C%20red%20and%20white%20color%20scheme%2C%20software%20registry%20visualization&width=500&height=300&seq=npm1&orientation=landscape"
                        alt="NPM Package Manager"
                        className="rounded-lg shadow-lg w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Basic NPM Commands */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential NPM Commands</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Project Management</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm init
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Initialize a new project</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm init -y
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Quick init with defaults</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm install
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Install all dependencies</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Package Installation</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm install package-name
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Install a package</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm install -g package-name
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Install globally</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm install --save-dev package-name
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Install as dev dependency</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Package Information</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm list
                        </div>
                        <p className="text-sm text-gray-600 mt-1">List installed packages</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm outdated
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Check for outdated packages</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm audit
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Check for vulnerabilities</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Package Management</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm update
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Update packages</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm uninstall package-name
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Remove a package</p>
                      </div>
                      <div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                          npm run script-name
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Run npm script</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* package.json */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Understanding package.json</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Example package.json</h4>
                      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "keywords": ["nodejs", "express", "api"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.5.0"
  }
}`}</pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Fields Explained</h4>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-blue-600">dependencies:</strong>
                          <p className="text-sm text-gray-600">Packages required in production</p>
                        </div>
                        <div>
                          <strong className="text-purple-600">devDependencies:</strong>
                          <p className="text-sm text-gray-600">Packages needed only for development</p>
                        </div>
                        <div>
                          <strong className="text-green-600">scripts:</strong>
                          <p className="text-sm text-gray-600">Custom commands you can run with npm run</p>
                        </div>
                        <div>
                          <strong className="text-orange-600">main:</strong>
                          <p className="text-sm text-gray-600">Entry point of your application</p>
                        </div>
                        <div>
                          <strong className="text-red-600">version:</strong>
                          <p className="text-sm text-gray-600">Current version (follows semantic versioning)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Popular Packages */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Node.js Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">lodash</h4>
                    <p className="text-blue-700 text-sm mb-3">Utility library for common programming tasks</p>
                    <div className="bg-blue-900 text-blue-100 p-3 rounded font-mono text-xs">
                      npm install lodash
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">axios</h4>
                    <p className="text-green-700 text-sm mb-3">Promise-based HTTP client</p>
                    <div className="bg-green-900 text-green-100 p-3 rounded font-mono text-xs">
                      npm install axios
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">moment</h4>
                    <p className="text-purple-700 text-sm mb-3">Parse, validate, and format dates</p>
                    <div className="bg-purple-900 text-purple-100 p-3 rounded font-mono text-xs">
                      npm install moment
                    </div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">bcrypt</h4>
                    <p className="text-orange-700 text-sm mb-3">Password hashing library</p>
                    <div className="bg-orange-900 text-orange-100 p-3 rounded font-mono text-xs">
                      npm install bcrypt
                    </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">dotenv</h4>
                    <p className="text-red-700 text-sm mb-3">Load environment variables from .env file</p>
                    <div className="bg-red-900 text-red-100 p-3 rounded font-mono text-xs">
                      npm install dotenv
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-indigo-800 mb-3">nodemon</h4>
                    <p className="text-indigo-700 text-sm mb-3">Auto-restart server on file changes</p>
                    <div className="bg-indigo-900 text-indigo-100 p-3 rounded font-mono text-xs">
                      npm install -g nodemon
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Async Tab */}
        {activeTab === 'async' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Asynchronous Programming</h2>
              <p className="text-xl text-gray-600">Master callbacks, promises, and async/await in Node.js</p>
            </div>

            <div className="space-y-12">
              {/* Callbacks */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Callbacks</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Basic Callback Pattern</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const fs = require('fs');

// Asynchronous file reading with callback
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

console.log('This runs first!');`}</pre>
                    </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-4">Callback Hell</h4>
                    <div className="bg-red-900 text-red-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Nested callbacks - avoid this!
fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) throw err;
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err;
    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) throw err;
      console.log(data1 + data2 + data3);
    });
  });
});`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Promises */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Promises</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Creating Promises</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const fs = require('fs');
const util = require('util');

// Promisify callback-based function
const readFileAsync = util.promisify(fs.readFile);

// Or create your own promise
function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}`}</pre>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Using Promises</h4>
                    <div className="bg-green-900 text-green-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Chain promises
readFileAsync('file1.txt')
  .then(data1 => {
    console.log('File 1:', data1);
    return readFileAsync('file2.txt');
  })
  .then(data2 => {
    console.log('File 2:', data2);
    return readFileAsync('file3.txt');
  })
  .then(data3 => {
    console.log('File 3:', data3);
  })
  .catch(err => {
    console.error('Error:', err);
  });`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Async/Await */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Async/Await</h3>
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-4">Clean Async Code</h4>
                      <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const fs = require('fs').promises;

async function readMultipleFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    const data3 = await fs.readFile('file3.txt', 'utf8');
    
    console.log('Combined:', data1 + data2 + data3);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readMultipleFiles();`}</pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-4">Parallel Execution</h4>
                      <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`async function readFilesParallel() {
  try {
    // Run all file reads concurrently
    const [data1, data2, data3] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8'),
      fs.readFile('file3.txt', 'utf8')
    ]);
    
    console.log('All files read:', {data1, data2, data3});
  } catch (error) {
    console.error('Error:', error);
  }
}

readFilesParallel();`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Event Loop */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Understanding the Event Loop</h3>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-800 mb-4">How it Works</h4>
                      <div className="space-y-3 text-purple-700">
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                          <span><strong>Call Stack:</strong> Executes synchronous code</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                          <span><strong>Web APIs:</strong> Handle async operations</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                          <span><strong>Callback Queue:</strong> Stores completed callbacks</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                          <span><strong>Event Loop:</strong> Moves callbacks to call stack</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://readdy.ai/api/search-image?query=Node.js%20event%20loop%20diagram%20showing%20call%20stack%2C%20callback%20queue%2C%20web%20APIs%2C%20event%20loop%20cycle%2C%20purple%20and%20blue%20technical%20illustration%2C%20asynchronous%20execution%20flow&width=500&height=300&seq=eventloop1&orientation=landscape"
                        alt="Event Loop"
                        className="rounded-lg shadow-lg w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Error Handling */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Error Handling in Async Code</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="text-lg font-semibold mb-4">Try-Catch with Async/Await</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`async function handleErrors() {
  try {
    const data = await fs.readFile('nonexistent.txt', 'utf8');
    console.log(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found');
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});`}</pre>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-800 mb-4">Promise Error Handling</h4>
                    <div className="bg-orange-900 text-orange-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Multiple promise error handling
Promise.allSettled([
  fs.readFile('file1.txt', 'utf8'),
  fs.readFile('file2.txt', 'utf8'),
  fs.readFile('file3.txt', 'utf8')
])
.then(results => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`File \${index + 1}:\`, result.value);
    } else {
      console.error(\`File \${index + 1} error:\`, result.reason);
    }
  });
});`}</pre>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Complete Your MERN Journey!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            You've mastered the fundamentals. Now optimize your development with VS Code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vscode" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              VS Code Setup
            </Link>
            <Link href="/basics" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Review Basics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
