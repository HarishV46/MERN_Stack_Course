'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ReactPage() {
  const [activeTab, setActiveTab] = useState('basics');

  const concepts = [
    {
      name: "Components",
      description: "Reusable UI building blocks that encapsulate logic and presentation",
      icon: "ri-puzzle-line",
      color: "blue"
    },
    {
      name: "JSX",
      description: "JavaScript syntax extension that allows HTML-like code in JavaScript",
      icon: "ri-code-s-slash-line",
      color: "green"
    },
    {
      name: "Props",
      description: "Properties passed from parent to child components for data flow",
      icon: "ri-arrow-right-line",
      color: "purple"
    },
    {
      name: "State",
      description: "Local component data that can change over time and trigger re-renders",
      icon: "ri-database-line",
      color: "orange"
    },
    {
      name: "Hooks",
      description: "Functions that let you use state and lifecycle features in functional components",
      icon: "ri-function-line",
      color: "red"
    },
    {
      name: "Virtual DOM",
      description: "React's efficient way of updating the UI by comparing virtual representations",
      icon: "ri-window-line",
      color: "indigo"
    }
  ];

  const hooks = [
    {
      name: "useState",
      description: "Manages local component state",
      code: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};`
    },
    {
      name: "useEffect",
      description: "Handles side effects and lifecycle events",
      code: `useEffect(() => {
  // Component did mount
  fetchData();
  
  return () => {
    // Component will unmount cleanup
    cleanup();
  };
}, [dependency]); // Dependency array`
    },
    {
      name: "useContext",
      description: "Consumes context values without prop drilling",
      code: `const ThemeContext = createContext();

const MyComponent = () => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Content</div>;
};`
    },
    {
      name: "useReducer",
      description: "Manages complex state logic with reducer pattern",
      code: `const [state, dispatch] = useReducer(reducer, initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};`
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
              <Link href="/express" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                Express
              </Link>
              <Link href="/react" className="text-indigo-600 font-medium cursor-pointer">
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20React%20development%20environment%20with%20component%20trees%2C%20JSX%20code%2C%20virtual%20DOM%20visualization%2C%20blue%20gradient%20background%2C%20interactive%20UI%20elements%2C%20React%20logo%20elements%2C%20clean%20developer%20workspace%20with%20multiple%20monitors%20showing%20component%20hierarchy&width=1200&height=500&seq=react1&orientation=landscape')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master React Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Build modern, interactive user interfaces with components, hooks, and state management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('basics')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Start Learning
            </button>
            <button 
              onClick={() => setActiveTab('hooks')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap"
            >
              Learn Hooks
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
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Basics
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'components' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Components
            </button>
            <button
              onClick={() => setActiveTab('hooks')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'hooks' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hooks
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'api' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              API Integration
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Basics Tab */}
        {activeTab === 'basics' && (
          <div>
            {/* What is React */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What is React?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  React is a JavaScript library for building user interfaces, especially web applications
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-blue-600 mt-1"></i>
                        <span className="text-blue-700"><strong>Component-Based:</strong> Build encapsulated components</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-blue-600 mt-1"></i>
                        <span className="text-blue-700"><strong>Virtual DOM:</strong> Efficient updates and rendering</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-blue-600 mt-1"></i>
                        <span className="text-blue-700"><strong>Declarative:</strong> Describe what UI should look like</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="ri-check-line text-blue-600 mt-1"></i>
                        <span className="text-blue-700"><strong>Learn Once, Write Anywhere:</strong> Web, mobile, desktop</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=React%20component%20tree%20visualization%20showing%20parent%20and%20child%20components%20with%20data%20flow%20arrows%2C%20modern%20UI%20design%20with%20blue%20color%20scheme%2C%20clean%20technical%20illustration%20of%20component%20hierarchy%20and%20props%20flow&width=600&height=400&seq=react2&orientation=landscape"
                    alt="React Components"
                    className="rounded-lg shadow-lg w-full object-cover object-top"
                  />
                </div>
              </div>
            </section>

            {/* Core Concepts */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Concepts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {concepts.map((concept, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all">
                    <div className={`w-12 h-12 bg-${concept.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`${concept.icon} text-${concept.color}-600 text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{concept.name}</h3>
                    <p className="text-gray-600">{concept.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hello World Example */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your First React Component</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple Function Component</h3>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`import React from 'react';

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}

export default Welcome;`}</pre>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Using the Component</h3>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Sarah" />
      <Welcome name="Mike" />
      <Welcome name="React Developer" />
    </div>
  );
}

export default App;`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* JSX Syntax */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">JSX Syntax Rules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">JSX Rules</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Return single parent element</li>
                    <li>• Use className instead of class</li>
                    <li>• Close all tags (self-closing for empty elements)</li>
                    <li>• Use camelCase for attributes</li>
                    <li>• Embed expressions with curly braces</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Examples</h3>
                  <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm">
<pre>{`// Valid JSX
<div className="container">
  <h1>{title}</h1>
  <img src={imageUrl} alt="description" />
  <button onClick={handleClick}>
    Click me
  </button>
</div>`}</pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Create React App */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting Started</h2>
              <div className="bg-indigo-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Create React App</h3>
                <p className="text-indigo-700 mb-4">
                  The easiest way to start a new React project with zero configuration:
                </p>
                <div className="bg-indigo-900 text-indigo-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`# Create new React app
npx create-react-app my-react-app

# Navigate to project
cd my-react-app

# Start development server
npm start

# Build for production
npm run build`}</pre>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === 'components' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">React Components</h2>
              <p className="text-xl text-gray-600">Build reusable UI components with props and composition</p>
            </div>

            <div className="space-y-12">
              {/* Functional vs Class Components */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Functional vs Class Components</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-8 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Functional Component (Recommended)</h4>
                    <div className="bg-green-900 text-green-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`}</pre>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Class Component (Legacy)</h4>
                    <div className="bg-blue-900 text-blue-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => 
          this.setState({count: this.state.count + 1})
        }>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Props */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Props - Component Communication</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Parent Component</h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
<pre>{`function App() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg"
  };
  
  return (
    <div>
      <UserCard 
        user={user}
        isOnline={true}
        onClick={handleUserClick}
      />
    </div>
  );
}`}</pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Child Component</h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
<pre>{`function UserCard({ user, isOnline, onClick }) {
  return (
    <div 
      className="user-card"
      onClick={() => onClick(user.id)}
    >
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span className={isOnline ? 'online' : 'offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conditional Rendering */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Conditional Rendering</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold mb-3">If-Else with Ternary Operator</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
<pre>{`function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
}`}</pre>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold mb-3">Conditional Display with &&</h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
<pre>{`function Notifications({ notifications }) {
  return (
    <div>
      {notifications.length > 0 && (
        <div className="notification-badge">
          {notifications.length}
        </div>
      )}
      <h2>Dashboard</h2>
    </div>
  );
}`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* List Rendering */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Rendering Lists</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// Usage
const todos = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Build an app", completed: false },
  { id: 3, text: "Deploy to production", completed: false }
];`}</pre>
                  </div>
                </div>
              </section>

              {/* Event Handling */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Event Handling</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}`}</pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Hooks Tab */}
        {activeTab === 'hooks' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">React Hooks</h2>
              <p className="text-xl text-gray-600">Use state and other React features in functional components</p>
            </div>

            <div className="space-y-12">
              {hooks.map((hook, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{hook.name}</h3>
                  <p className="text-gray-600 mb-6">{hook.description}</p>
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{hook.code}</pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Hooks */}
            <section className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Custom Hooks</h3>
              <div className="bg-purple-50 p-8 rounded-lg">
                <p className="text-purple-700 mb-6">
                  Create your own hooks to share stateful logic between components:
                </p>
                <div className="bg-purple-900 text-purple-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`// Custom hook for API data fetching
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Using the custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}</pre>
                </div>
              </div>
            </section>

            {/* Hook Rules */}
            <section className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Rules of Hooks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Do's</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Only call hooks at the top level</li>
                    <li>• Only call hooks from React functions</li>
                    <li>• Use the same order in every render</li>
                    <li>• Follow naming convention (use...)</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Don't call hooks inside loops</li>
                    <li>• Don't call hooks inside conditions</li>
                    <li>• Don't call hooks inside nested functions</li>
                    <li>• Don't call hooks from regular JavaScript functions</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* API Integration Tab */}
        {activeTab === 'api' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Integration</h2>
              <p className="text-xl text-gray-600">Connect your React app to backend APIs and manage data</p>
            </div>

            <div className="space-y-12">
              {/* Fetch API */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Fetch API</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}`}</pre>
                  </div>
                </div>
              </section>

              {/* Axios Alternative */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Using Axios</h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-blue-700 mb-3">Install Axios for better HTTP client features:</p>
                  <div className="bg-blue-900 text-blue-100 p-3 rounded font-mono text-sm">
                    npm install axios
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// API service functions
export const userService = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(\`/users/\${id}\`),
  create: (userData) => api.post('/users', userData),
  update: (id, userData) => api.put(\`/users/\${id}\`, userData),
  delete: (id) => api.delete(\`/users/\${id}\`)
};

// Usage in component
function UserManager() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    userService.getAll()
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);
  
  const createUser = async (userData) => {
    try {
      const response = await userService.create(userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };
  
  return (
    <div>
      {/* User list and form components */}
    </div>
  );
}`}</pre>
                  </div>
                </div>
              </section>

              {/* Form Handling */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Form Handling with API</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const newUser = await response.json();
        setMessage('User created successfully!');
        setFormData({ name: '', email: '', password: '' });
      } else {
        const error = await response.json();
        setMessage(\`Error: \${error.message}\`);
      }
    } catch (error) {
      setMessage(\`Network error: \${error.message}\`);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Creating...' : 'Create User'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}`}</pre>
                  </div>
                </div>
              </section>

              {/* Error Boundaries */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Error Handling</h3>
                <div className="bg-red-50 p-8 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Error Boundary</h4>
                  <div className="bg-red-900 text-red-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
<pre>{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <UserList />
    </ErrorBoundary>
  );
}`}</pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Full-Stack Applications?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Now that you know React, let's connect it with Express.js and MongoDB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/express" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Learn Express.js
            </Link>
            <Link href="/nodejs" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Master Node.js
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}