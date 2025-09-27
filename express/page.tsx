'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Express() {
  const [activeTab, setActiveTab] = useState('basics');

  const features = [
    {
      name: "Fast & Minimal",
      description: "Lightweight framework with excellent performance",
      icon: "ri-flashlight-line",
      color: "blue"
    },
    {
      name: "Flexible Routing",
      description: "Powerful routing system for RESTful APIs",
      icon: "ri-route-line",
      color: "green"
    },
    {
      name: "Middleware Support",
      description: "Extensive middleware ecosystem for added functionality",
      icon: "ri-links-line",
      color: "purple"
    },
    {
      name: "Template Engines",
      description: "Support for multiple template engines",
      icon: "ri-code-view",
      color: "orange"
    },
    {
      name: "Error Handling",
      description: "Built-in error handling mechanisms",
      icon: "ri-shield-check-line",
      color: "red"
    },
    {
      name: "HTTP Utilities",
      description: "Rich set of HTTP utility methods",
      icon: "ri-global-line",
      color: "indigo"
    }
  ];

  const middlewareExamples = [
    {
      name: "CORS Middleware",
      description: "Enable Cross-Origin Resource Sharing",
      code: `const cors = require('cors');
app.use(cors());

// Custom CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));`
    },
    {
      name: "Body Parser",
      description: "Parse incoming request bodies",
      code: `// Built-in middleware (Express 4.16+)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());`
    },
    {
      name: "Morgan Logger",
      description: "HTTP request logger middleware",
      code: `const morgan = require('morgan');

// Basic logging
app.use(morgan('combined'));

// Custom format
app.use(morgan(':method :url :status :response-time ms'));`
    },
    {
      name: "Static Files",
      description: "Serve static files",
      code: `// Serve static files from 'public' directory
app.use(express.static('public'));

// Custom path
app.use('/assets', express.static('public/assets'));`
    }
  ];

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
              <Link href="/express" className="text-indigo-600 font-medium cursor-pointer">
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
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Express.js%20web%20framework%20visualization%20with%20server%20architecture%2C%20API%20endpoints%2C%20routing%20diagrams%2C%20modern%20web%20development%2C%20green%20and%20black%20color%20scheme%2C%20network%20connections%2C%20professional%20backend%20technology%20illustration&width=1200&height=500&seq=express1&orientation=landscape')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Express.js
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Build fast, scalable web applications and APIs with Node.js web framework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('basics')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Start Learning
            </button>
            <button 
              onClick={() => setActiveTab('routing')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Learn Routing
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
              onClick={() => setActiveTab('routing')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'routing' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Routing
            </button>
            <button
              onClick={() => setActiveTab('middleware')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'middleware' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Middleware
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'api' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              API Development
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Basics Tab */}
        {activeTab === 'basics' && (
          <div>
            {/* What is Express */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Express.js?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Express.js is a fast, unopinionated, minimalist web framework for Node.js
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="bg-green-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Minimal Setup:</strong> Get started with just a few lines of code</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Flexible:</strong> Unopinionated framework allows creative freedom</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Performance:</strong> Fast and lightweight architecture</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Community:</strong> Large ecosystem of middleware and plugins</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Express.js%20framework%20architecture%20diagram%20showing%20middleware%20stack%2C%20routing%20system%2C%20HTTP%20request%20flow%2C%20modern%20web%20server%20structure%2C%20green%20and%20white%20design%2C%20clean%20technical%20illustration&width=600&height=400&seq=express2&orientation=landscape"
                    alt="Express.js Architecture"
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

            {/* Getting Started */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting Started</h2>
              <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Installation</h3>
                  <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm mb-4">
                    npm install express
                  </div>
                  <p className="text-blue-700">Install Express.js in your Node.js project</p>
                </div>

                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Hello World Server</h3>
                  <div className="bg-green-900 text-green-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}</pre>
                  </div>
                </div>

                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Run Your Server</h3>
                  <div className="bg-purple-900 text-purple-100 p-4 rounded-lg font-mono text-sm mb-4">
                    node server.js
                  </div>
                  <p className="text-purple-700">Start your Express server and visit http://localhost:3000</p>
                </div>
              </div>
            </section>

            {/* Project Structure */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Project Structure</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
<pre>{`my-express-app/
│
├── app.js              # Main application file
├── package.json        # Project dependencies
├── .env               # Environment variables
│
├── routes/            # Route definitions
│   ├── index.js
│   ├── users.js
│   └── api.js
│
├── models/           # Database models
│   └── User.js
│
├── middleware/       # Custom middleware
│   ├── auth.js
│   └── validation.js
│
├── controllers/      # Route handlers
│   └── userController.js
│
├── public/          # Static files
│   ├── css/
│   ├── js/
│   └── images/
│
└── views/           # Template files
    ├── index.ejs
    └── layout.ejs`}</pre>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Routing Tab */}
        {activeTab === 'routing' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Express.js Routing</h2>
              <p className="text-xl text-gray-600">Learn how to handle different HTTP methods and URL patterns</p>
            </div>

            <div className="space-y-12">
              {/* Basic Routing */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Basic Routing</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const express = require('express');
const app = express();

// GET request
app.get('/', (req, res) => {
  res.send('GET request to homepage');
});

// POST request
app.post('/users', (req, res) => {
  res.send('POST request to create user');
});

// PUT request
app.put('/users/:id', (req, res) => {
  res.send(\`PUT request to update user \${req.params.id}\`);
});

// DELETE request
app.delete('/users/:id', (req, res) => {
  res.send(\`DELETE request to remove user \${req.params.id}\`);
});

// Handle all HTTP methods
app.all('/secret', (req, res) => {
  res.send('Secret area accessible via any method');
});`}</pre>
                  </div>
                </div>
              </section>

              {/* Route Parameters */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Route Parameters</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">URL Parameters</h4>
                    <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Single parameter
app.get('/users/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  res.json({
    userId: req.params.userId,
    postId: req.params.postId
  });
});`}</pre>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Query Parameters</h4>
                    <div className="bg-green-900 text-green-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// URL: /search?q=nodejs&limit=10
app.get('/search', (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit || 5;
  
  res.json({
    query: query,
    limit: limit,
    results: []
  });
});`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Route Patterns */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Route Patterns</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Optional parameters
app.get('/posts/:year/:month?', (req, res) => {
  res.json({
    year: req.params.year,
    month: req.params.month || 'all'
  });
});

// Wildcard routes
app.get('/files/*', (req, res) => {
  res.send(\`File path: \${req.params[0]}\`);
});

// Regular expressions
app.get(/.*fly$/, (req, res) => {
  res.send('Ends with "fly"');
});

// Route with conditions
app.get('/users/:id(\\\\d+)', (req, res) => {
  res.send(\`Numeric user ID: \${req.params.id}\`);
});`}</pre>
                  </div>
                </div>
              </section>

              {/* Express Router */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Express Router</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">routes/users.js</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const express = require('express');
const router = express.Router();

// Middleware for all user routes
router.use((req, res, next) => {
  console.log('User routes accessed');
  next();
});

router.get('/', (req, res) => {
  res.json({ users: [] });
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

router.post('/', (req, res) => {
  res.json({ message: 'User created' });
});

module.exports = router;`}</pre>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">app.js</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const express = require('express');
const userRoutes = require('./routes/users');

const app = express();

// Use router
app.use('/api/users', userRoutes);

// Routes will be:
// GET /api/users
// GET /api/users/:id
// POST /api/users

app.listen(3000);`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Middleware Tab */}
        {activeTab === 'middleware' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Express.js Middleware</h2>
              <p className="text-xl text-gray-600">Functions that execute during the request-response cycle</p>
            </div>

            <div className="space-y-12">
              {/* What is Middleware */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is Middleware?</h3>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-purple-700 mb-4">
                        Middleware functions are functions that have access to the request object (req), 
                        the response object (res), and the next function in the application's request-response cycle.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-purple-600"></i>
                          <span>Execute code during request processing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-purple-600"></i>
                          <span>Modify request and response objects</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-purple-600"></i>
                          <span>End the request-response cycle</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-purple-600"></i>
                          <span>Call next middleware in the stack</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://readdy.ai/api/search-image?query=Express.js%20middleware%20stack%20diagram%20showing%20request%20flow%20through%20multiple%20middleware%20functions%2C%20purple%20and%20blue%20color%20scheme%2C%20technical%20illustration%20of%20web%20server%20architecture&width=500&height=300&seq=middleware1&orientation=landscape"
                        alt="Middleware Flow"
                        className="rounded-lg shadow-lg w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Custom Middleware */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Custom Middleware</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Basic middleware function
const myMiddleware = (req, res, next) => {
  console.log('Request received at:', new Date().toISOString());
  next(); // Call next middleware
};

// Use middleware globally
app.use(myMiddleware);

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token logic here
  req.user = { id: 1, name: 'John Doe' };
  next();
};

// Use on specific routes
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});`}</pre>
                  </div>
                </div>
              </section>

              {/* Popular Middleware */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Middleware</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {middlewareExamples.map((middleware, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{middleware.name}</h4>
                      <p className="text-gray-600 mb-4">{middleware.description}</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre>{middleware.code}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Error Handling Middleware */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Error Handling Middleware</h3>
                <div className="bg-red-50 p-8 rounded-lg">
                  <p className="text-red-700 mb-4">Error handling middleware functions have four parameters: (err, req, res, next)</p>
                  <div className="bg-red-900 text-red-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Development vs Production
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({
      error: err.message,
      stack: err.stack
    });
  } else {
    res.status(500).json({
      error: 'Something went wrong!'
    });
  }
};

// Use error handler (must be last)
app.use(errorHandler);

// Throwing errors in routes
app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong');
  error.status = 400;
  next(error); // Pass to error handler
});`}</pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* API Tab */}
        {activeTab === 'api' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">REST API Development</h2>
              <p className="text-xl text-gray-600">Build RESTful APIs with Express.js and best practices</p>
            </div>

            <div className="space-y-12">
              {/* REST Principles */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">REST API Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <i className="ri-global-line text-3xl text-blue-600 mb-3"></i>
                    <h4 className="font-semibold text-blue-800 mb-2">Stateless</h4>
                    <p className="text-blue-700 text-sm">Each request contains all needed information</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <i className="ri-route-line text-3xl text-green-600 mb-3"></i>
                    <h4 className="font-semibold text-green-800 mb-2">Resource-Based</h4>
                    <p className="text-green-700 text-sm">URLs represent resources, not actions</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <i className="ri-code-s-slash-line text-3xl text-purple-600 mb-3"></i>
                    <h4 className="font-semibold text-purple-800 mb-2">HTTP Methods</h4>
                    <p className="text-purple-700 text-sm">Use standard HTTP verbs correctly</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <i className="ri-file-code-line text-3xl text-orange-600 mb-3"></i>
                    <h4 className="font-semibold text-orange-800 mb-2">JSON Format</h4>
                    <p className="text-orange-700 text-sm">Consistent data representation</p>
                  </div>
                </div>
              </section>

              {/* Complete API Example */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete User API</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// In-memory data store (use database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
let nextId = 3;

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedUsers = users.slice(startIndex, endIndex);
  
  res.json({
    users: paginatedUsers,
    totalUsers: users.length,
    currentPage: page,
    totalPages: Math.ceil(users.length / limit)
  });
});

// GET /api/users/:id - Get user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ user });
});

// POST /api/users - Create new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required' 
    });
  }
  
  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ 
      error: 'Email already exists' 
    });
  }
  
  const newUser = {
    id: nextId++,
    name,
    email
  };
  
  users.push(newUser);
  
  res.status(201).json({ 
    message: 'User created successfully',
    user: newUser 
  });
});

// PUT /api/users/:id - Update user
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { name, email } = req.body;
  
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  
  res.json({ 
    message: 'User updated successfully',
    user: users[userIndex] 
  });
});

// DELETE /api/users/:id - Delete user
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users.splice(userIndex, 1);
  
  res.json({ message: 'User deleted successfully' });
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});`}</pre>
                  </div>
                </div>
              </section>

              {/* HTTP Status Codes */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">HTTP Status Codes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">2xx Success</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-mono text-green-600">200</span> OK</div>
                      <div><span className="font-mono text-green-600">201</span> Created</div>
                      <div><span className="font-mono text-green-600">204</span> No Content</div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">3xx Redirection</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-mono text-yellow-600">301</span> Moved Permanently</div>
                      <div><span className="font-mono text-yellow-600">302</span> Found</div>
                      <div><span className="font-mono text-yellow-600">304</span> Not Modified</div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">4xx Client Error</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-mono text-red-600">400</span> Bad Request</div>
                      <div><span className="font-mono text-red-600">401</span> Unauthorized</div>
                      <div><span className="font-mono text-red-600">404</span> Not Found</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">5xx Server Error</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-mono text-gray-600">500</span> Internal Server Error</div>
                      <div><span className="font-mono text-gray-600">502</span> Bad Gateway</div>
                      <div><span className="font-mono text-gray-600">503</span> Service Unavailable</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* API Testing */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Testing Your API</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-indigo-800 mb-4">Using cURL</h4>
                    <div className="bg-indigo-900 text-indigo-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`# GET all users
curl http://localhost:3000/api/users

# POST new user
curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice","email":"alice@example.com"}'

# PUT update user
curl -X PUT http://localhost:3000/api/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Updated Name"}'`}</pre>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-800 mb-4">Using Postman</h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Create collections for different endpoints</li>
                      <li>• Set up environment variables</li>
                      <li>• Write automated tests</li>
                      <li>• Generate API documentation</li>
                      <li>• Mock server responses</li>
                    </ul>
                    <div className="mt-4">
                      <img 
                        src="https://readdy.ai/api/search-image?query=Postman%20API%20testing%20interface%20showing%20HTTP%20requests%2C%20JSON%20responses%2C%20test%20collections%2C%20modern%20API%20development%20tool%2C%20purple%20and%20white%20design&width=400&height=250&seq=postman1&orientation=landscape"
                        alt="Postman Interface"
                        className="rounded-lg shadow-sm w-full object-cover object-top"
                      />
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
            Ready to Master Node.js?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Now that you understand Express.js, let's dive deeper into Node.js fundamentals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nodejs" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Learn Node.js
            </Link>
            <Link href="/react" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Master React
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}