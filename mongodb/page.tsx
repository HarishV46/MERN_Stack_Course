'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MongoDB() {
  const [activeTab, setActiveTab] = useState('basics');

  const features = [
    {
      name: "Document-Oriented",
      description: "Store data in flexible, JSON-like BSON documents",
      icon: "ri-file-text-line",
      color: "green"
    },
    {
      name: "Dynamic Schema",
      description: "No need to define schema beforehand, add fields as needed",
      icon: "ri-code-s-slash-line",
      color: "blue"
    },
    {
      name: "Horizontal Scaling",
      description: "Easily scale across multiple servers",
      icon: "ri-equalizer-line",
      color: "purple"
    },
    {
      name: "Rich Query Language",
      description: "Powerful query capabilities with aggregation framework",
      icon: "ri-search-line",
      color: "orange"
    },
    {
      name: "High Performance",
      description: "Fast read and write operations with indexing",
      icon: "ri-speed-line",
      color: "red"
    },
    {
      name: "Built-in Replication",
      description: "Automatic failover and data redundancy",
      icon: "ri-shield-check-line",
      color: "indigo"
    }
  ];

  const operations = [
    {
      operation: "Create Document",
      code: `// Insert a single document
await db.collection('users').insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  createdAt: new Date()
});

// Insert multiple documents
await db.collection('users').insertMany([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
]);`
    },
    {
      operation: "Read Documents",
      code: `// Find all documents
const users = await db.collection('users').find({}).toArray();

// Find with filter
const user = await db.collection('users').findOne({
  email: "john@example.com"
});

// Find with multiple conditions
const activeUsers = await db.collection('users').find({
  age: { $gte: 18 },
  status: "active"
}).toArray();`
    },
    {
      operation: "Update Documents",
      code: `// Update single document
await db.collection('users').updateOne(
  { email: "john@example.com" },
  { $set: { age: 31, lastLogin: new Date() } }
);

// Update multiple documents
await db.collection('users').updateMany(
  { status: "inactive" },
  { $set: { status: "archived" } }
);`
    },
    {
      operation: "Delete Documents",
      code: `// Delete single document
await db.collection('users').deleteOne({
  email: "john@example.com"
});

// Delete multiple documents
await db.collection('users').deleteMany({
  status: "archived"
});`
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
              <Link href="/mongodb" className="text-indigo-600 font-medium cursor-pointer">
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
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=MongoDB%20database%20visualization%20with%20document%20structure%2C%20JSON%20data%20flowing%20through%20network%20connections%2C%20green%20and%20black%20color%20scheme%2C%20modern%20database%20architecture%2C%20data%20nodes%20and%20clusters%2C%20professional%20database%20technology%20illustration&width=1200&height=500&seq=mongo1&orientation=landscape')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master MongoDB
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Learn NoSQL database fundamentals, document modeling, and integration with Node.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('basics')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Start Learning
            </button>
            <button 
              onClick={() => setActiveTab('operations')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              CRUD Operations
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
              onClick={() => setActiveTab('setup')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'setup' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Setup
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'operations' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              CRUD Operations
            </button>
            <button
              onClick={() => setActiveTab('integration')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'integration' 
                  ? 'bg-green-100 text-green-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Node.js Integration
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Basics Tab */}
        {activeTab === 'basics' && (
          <div>
            {/* What is MongoDB */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What is MongoDB?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="bg-green-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Key Characteristics</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Schema-less:</strong> No predefined structure required</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Document-based:</strong> Data stored as BSON documents</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>Scalable:</strong> Horizontal scaling with sharding</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-600 mt-1"></i>
                        <span className="text-green-700"><strong>High Performance:</strong> Optimized for read/write operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=MongoDB%20document%20structure%20visualization%20showing%20JSON-like%20BSON%20documents%20with%20nested%20objects%20and%20arrays%2C%20database%20collection%20diagram%2C%20green%20color%20scheme%2C%20clean%20technical%20illustration%20of%20NoSQL%20data%20structure&width=600&height=400&seq=mongo2&orientation=landscape"
                    alt="MongoDB Document Structure"
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

            {/* Document vs Relational */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">MongoDB vs SQL Databases</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">MongoDB (NoSQL)</h3>
                  <div className="bg-green-900 text-green-100 p-4 rounded-lg font-mono text-sm mb-4">
{`{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "coding", "gaming"]
}`}
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• Flexible schema</li>
                    <li>• Nested documents</li>
                    <li>• Arrays supported</li>
                    <li>• JSON-like structure</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">SQL Database</h3>
                  <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm mb-4">
{`Users Table:
+----+----------+------------------+
| id | name     | email            |
+----+----------+------------------+
| 1  | John Doe | john@example.com |
+----+----------+------------------+

Addresses Table:
+----+---------+----------+-------+--------+
| id | user_id | street   | city  | zip    |
+----+---------+----------+-------+--------+
| 1  | 1       | 123 Main | NYC   | 10001  |
+----+---------+----------+-------+--------+`}
                  </div>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Fixed schema</li>
                    <li>• Separate tables</li>
                    <li>• Joins required</li>
                    <li>• Normalized structure</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">When to Use MongoDB</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Great For:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-green-600 mt-1"></i>
                      <span>Rapid application development</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-green-600 mt-1"></i>
                      <span>Content management systems</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-green-600 mt-1"></i>
                      <span>Real-time analytics</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-green-600 mt-1"></i>
                      <span>IoT applications</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-green-600 mt-1"></i>
                      <span>Mobile applications</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Consider Alternatives For:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-line text-red-600 mt-1"></i>
                      <span>Complex transactions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-line text-red-600 mt-1"></i>
                      <span>Heavy reporting needs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-line text-red-600 mt-1"></i>
                      <span>Strict data consistency</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-line text-red-600 mt-1"></i>
                      <span>Complex joins</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-line text-red-600 mt-1"></i>
                      <span>Legacy system integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Setup Tab */}
        {activeTab === 'setup' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MongoDB Setup Guide</h2>
              <p className="text-xl text-gray-600">Get MongoDB running locally and in the cloud</p>
            </div>

            <div className="space-y-12">
              {/* Local Installation */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Local Installation</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Windows</h4>
                    <div className="space-y-3 text-sm">
                      <div>1. Download MongoDB Community Server</div>
                      <div>2. Run the installer</div>
                      <div>3. Add to PATH environment</div>
                      <div>4. Start MongoDB service</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">macOS</h4>
                    <div className="bg-green-900 text-green-100 p-3 rounded font-mono text-sm">
                      brew tap mongodb/brew<br/>
                      brew install mongodb-community<br/>
                      brew services start mongodb-community
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-800 mb-4">Linux (Ubuntu)</h4>
                    <div className="bg-purple-900 text-purple-100 p-3 rounded font-mono text-sm">
                      sudo apt update<br/>
                      sudo apt install mongodb<br/>
                      sudo systemctl start mongodb
                    </div>
                  </div>
                </div>
              </section>

              {/* MongoDB Atlas */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">MongoDB Atlas (Cloud)</h3>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Atlas?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Free tier available (512MB)</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Automatic scaling</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Built-in security</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Global deployment</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://readdy.ai/api/search-image?query=MongoDB%20Atlas%20cloud%20dashboard%20interface%20showing%20database%20clusters%2C%20monitoring%20graphs%2C%20and%20configuration%20panels%2C%20modern%20cloud%20database%20management%20interface%2C%20green%20and%20white%20design&width=500&height=300&seq=atlas1&orientation=landscape"
                        alt="MongoDB Atlas"
                        className="rounded-lg shadow-lg w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="text-lg font-semibold mb-4">Setup Steps:</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                      <span>Create account at <strong>mongodb.com/atlas</strong></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                      <span>Create a new cluster (choose Free tier)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                      <span>Configure database user and IP whitelist</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                      <span>Get connection string</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* MongoDB Compass */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">MongoDB Compass (GUI Tool)</h3>
                <div className="bg-indigo-50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-indigo-700 mb-4">
                        MongoDB Compass is the official GUI for MongoDB that makes it easy to explore and manipulate your data.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <i className="ri-eye-line text-indigo-600"></i>
                          <span>Visual query builder</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-bar-chart-line text-indigo-600"></i>
                          <span>Real-time performance metrics</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-edit-line text-indigo-600"></i>
                          <span>Document editing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-search-line text-indigo-600"></i>
                          <span>Index management</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://readdy.ai/api/search-image?query=MongoDB%20Compass%20GUI%20interface%20showing%20document%20explorer%2C%20query%20builder%2C%20and%20database%20collections%2C%20clean%20modern%20database%20management%20tool%20interface%2C%20blue%20and%20white%20design%20scheme&width=500&height=300&seq=compass1&orientation=landscape"
                        alt="MongoDB Compass"
                        className="rounded-lg shadow-lg w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Connection String */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connection Strings</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Local MongoDB</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                      mongodb://localhost:27017/mydatabase
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">MongoDB Atlas</h4>
                    <div className="bg-green-900 text-green-100 p-4 rounded-lg font-mono text-sm">
                      mongodb+srv://username:password@cluster.mongodb.net/mydatabase
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Operations Tab */}
        {activeTab === 'operations' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CRUD Operations</h2>
              <p className="text-xl text-gray-600">Master Create, Read, Update, and Delete operations in MongoDB</p>
            </div>

            <div className="space-y-12">
              {operations.map((op, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{op.operation}</h3>
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{op.code}</pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Query Operators */}
            <section className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Common Query Operators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Comparison Operators</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><span className="text-blue-600">$eq</span> - Equal to</div>
                    <div><span className="text-blue-600">$ne</span> - Not equal to</div>
                    <div><span className="text-blue-600">$gt</span> - Greater than</div>
                    <div><span className="text-blue-600">$gte</span> - Greater than or equal</div>
                    <div><span className="text-blue-600">$lt</span> - Less than</div>
                    <div><span className="text-blue-600">$lte</span> - Less than or equal</div>
                    <div><span className="text-blue-600">$in</span> - In array</div>
                    <div><span className="text-blue-600">$nin</span> - Not in array</div>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Logical Operators</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><span className="text-green-600">$and</span> - Logical AND</div>
                    <div><span className="text-green-600">$or</span> - Logical OR</div>
                    <div><span className="text-green-600">$not</span> - Logical NOT</div>
                    <div><span className="text-green-600">$nor</span> - Logical NOR</div>
                    <div><span className="text-green-600">$exists</span> - Field exists</div>
                    <div><span className="text-green-600">$type</span> - Field type</div>
                    <div><span className="text-green-600">$regex</span> - Regular expression</div>
                    <div><span className="text-green-600">$size</span> - Array size</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Aggregation Pipeline */}
            <section className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aggregation Pipeline</h3>
              <div className="bg-purple-50 p-8 rounded-lg">
                <p className="text-purple-700 mb-6">
                  The aggregation pipeline allows you to process data through multiple stages for complex queries and transformations.
                </p>
                <div className="bg-purple-900 text-purple-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Group users by age and count
db.users.aggregate([
  {
    $match: { status: "active" }
  },
  {
    $group: {
      _id: "$age",
      count: { $sum: 1 },
      avgSalary: { $avg: "$salary" }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
]);`}</pre>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Integration Tab */}
        {activeTab === 'integration' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Node.js Integration</h2>
              <p className="text-xl text-gray-600">Connect MongoDB with your Node.js backend using Mongoose</p>
            </div>

            <div className="space-y-12">
              {/* Installation */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Installation & Setup</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Install Dependencies</h4>
                  <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm">
                    npm install mongoose dotenv
                  </div>
                </div>
              </section>

              {/* Connection */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Database Connection</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// config/database.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;`}</pre>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800"><strong>Environment Variable (.env):</strong></p>
                  <div className="bg-yellow-100 p-2 rounded font-mono text-sm mt-2">
                    MONGODB_URI=mongodb://localhost:27017/mydatabase
                  </div>
                </div>
              </section>

              {/* Schema Definition */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schema Definition</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter valid email']
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [120, 'Age cannot exceed 120']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);`}</pre>
                  </div>
                </div>
              </section>

              {/* Express Routes */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Express Routes with MongoDB</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({ isActive: true });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;`}</pre>
                  </div>
                </div>
              </section>

              {/* Complete App Structure */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Express App</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'MongoDB API Server Running' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</pre>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Best Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Do's</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Use environment variables for connection strings</li>
                      <li>• Implement proper error handling</li>
                      <li>• Use schema validation</li>
                      <li>• Create indexes for frequently queried fields</li>
                      <li>• Use connection pooling</li>
                      <li>• Implement pagination for large datasets</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Don't store sensitive data in plain text</li>
                      <li>• Don't ignore validation errors</li>
                      <li>• Don't fetch all documents without limits</li>
                      <li>• Don't use synchronous operations</li>
                      <li>• Don't ignore connection errors</li>
                      <li>• Don't forget to close connections</li>
                    </ul>
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
            Ready to Build with Express.js?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Now that you understand MongoDB, let's create powerful APIs with Express.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/express" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Learn Express.js
            </Link>
            <Link href="/nodejs" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Master Node.js
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}