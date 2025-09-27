
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VSCode() {
  const [activeTab, setActiveTab] = useState('extensions');

  const extensions = [
    {
      name: "ES7+ React/Redux/React-Native snippets",
      description: "JavaScript and React/Redux snippets in ES7+ with Babel plugin features",
      category: "React",
      icon: "ri-reactjs-line",
      color: "blue"
    },
    {
      name: "Auto Rename Tag",
      description: "Automatically rename paired HTML/XML tags",
      category: "HTML",
      icon: "ri-code-s-slash-line",
      color: "green"
    },
    {
      name: "MongoDB for VS Code",
      description: "Connect to MongoDB and Atlas directly from VS Code",
      category: "Database",
      icon: "ri-database-2-line",
      color: "green"
    },
    {
      name: "REST Client",
      description: "REST Client for Visual Studio Code",
      category: "API",
      icon: "ri-server-line",
      color: "purple"
    },
    {
      name: "Prettier - Code formatter",
      description: "Code formatter using prettier",
      category: "Formatting",
      icon: "ri-brush-line",
      color: "pink"
    },
    {
      name: "ESLint",
      description: "Integrates ESLint JavaScript into VS Code",
      category: "Linting",
      icon: "ri-bug-line",
      color: "red"
    },
    {
      name: "GitLens",
      description: "Supercharge Git capabilities built into VS Code",
      category: "Git",
      icon: "ri-git-branch-line",
      color: "orange"
    },
    {
      name: "Thunder Client",
      description: "Lightweight Rest API Client for VS Code",
      category: "API",
      icon: "ri-flashlight-line",
      color: "yellow"
    }
  ];

  const snippets = [
    {
      prefix: "rafce",
      description: "React Arrow Function Component Export",
      code: `const ComponentName = () => {
  return (
    <div>
      
    </div>
  )
}

export default ComponentName`
    },
    {
      prefix: "usestate",
      description: "useState Hook",
      code: `const [state, setState] = useState(initialState)`
    },
    {
      prefix: "useeffect",
      description: "useEffect Hook",
      code: `useEffect(() => {
  
}, [dependency])`
    },
    {
      prefix: "api",
      description: "Fetch API Template",
      code: `const fetchData = async () => {
  try {
    const response = await fetch('/api/endpoint');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`
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
              <Link href="/react" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                React
              </Link>
              <Link href="/nodejs" className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                Node.js
              </Link>
              <Link href="/vscode" className="text-indigo-600 font-medium cursor-pointer">
                VS Code
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect VS Code Setup for MERN
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Optimize your development environment with essential extensions, themes, and configurations
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveTab('extensions')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
                >
                  View Extensions
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
                >
                  Settings Guide
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=VS%20Code%20editor%20with%20dark%20theme%20showing%20MERN%20stack%20project%2C%20multiple%20tabs%20open%20with%20React%20components%2C%20Node.js%20server%20files%2C%20MongoDB%20connection%2C%20integrated%20terminal%20at%20bottom%2C%20file%20explorer%20sidebar%2C%20extensions%20panel%20visible%2C%20modern%20developer%20workspace%20setup&width=600&height=400&seq=vscode2&orientation=landscape"
                alt="VS Code Setup"
                className="rounded-lg shadow-xl w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('extensions')}
            className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === 'extensions' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Extensions
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === 'settings' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab('snippets')}
            className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === 'snippets' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Snippets
          </button>
        </div>

        {/* Extensions Tab */}
        {activeTab === 'extensions' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Extensions</h2>
              <p className="text-xl text-gray-600">Must-have VS Code extensions for MERN stack development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extensions.map((ext, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${ext.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <i className={`${ext.icon} text-${ext.color}-600 text-xl`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">{ext.name}</h3>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full bg-${ext.color}-100 text-${ext.color}-800 mb-2`}>
                        {ext.category}
                      </span>
                      <p className="text-gray-600 text-sm">{ext.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Quick Installation</h3>
              <p className="text-blue-700 mb-4">Install all essential extensions at once:</p>
              <div className="bg-blue-900 text-blue-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                code --install-extension dsznajder.es7-react-js-snippets<br/>
                code --install-extension formulahendry.auto-rename-tag<br/>
                code --install-extension mongodb.mongodb-vscode<br/>
                code --install-extension humao.rest-client<br/>
                code --install-extension esbenp.prettier-vscode<br/>
                code --install-extension dbaeumer.vscode-eslint<br/>
                code --install-extension eamodio.gitlens<br/>
                code --install-extension rangav.vscode-thunder-client
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">VS Code Configuration</h2>
              <p className="text-xl text-gray-600">Optimize your settings for MERN development</p>
            </div>

            <div className="space-y-8">
              {/* Editor Settings */}
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Editor Settings</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "editor.fontSize": 14,
  "editor.fontFamily": "Fira Code, Monaco, monospace",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "workbench.colorTheme": "One Dark Pro"
}`}
                </div>
              </div>

              {/* File Association */}
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">File Associations</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "files.associations": {
    "*.jsx": "javascriptreact",
    "*.tsx": "typescriptreact"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}`}
                </div>
              </div>

              {/* Integrated Terminal */}
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Terminal Configuration</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.shell.windows": "C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.copyOnSelection": true
}`}
                </div>
              </div>

              {/* Debug Configuration */}
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Debug Configuration (.vscode/launch.json)</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch React App",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceFolder}/node_modules/.bin/react-scripts",
      "args": ["start"],
      "env": {
        "BROWSER": "none"
      }
    },
    {
      "name": "Launch Node.js Server",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceFolder}/server/index.js",
      "env": {
        "NODE_ENV": "development"
      }
    }
  ]
}`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Snippets Tab */}
        {activeTab === 'snippets' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Snippets</h2>
              <p className="text-xl text-gray-600">Speed up development with these handy shortcuts</p>
            </div>

            <div className="space-y-6">
              {snippets.map((snippet, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{snippet.description}</h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-mono rounded">
                        {snippet.prefix}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{snippet.code}</pre>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Custom Snippet Setup</h3>
              <p className="text-green-700 mb-4">Create your own snippets for faster development:</p>
              <div className="space-y-2 text-green-700">
                <div className="flex items-center space-x-2">
                  <span className="font-mono bg-green-100 px-2 py-1 rounded text-sm">Ctrl+Shift+P</span>
                  <span>→ "Preferences: Configure User Snippets"</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono bg-green-100 px-2 py-1 rounded text-sm">Select</span>
                  <span>→ "javascript.json" or "javascriptreact.json"</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono bg-green-100 px-2 py-1 rounded text-sm">Add</span>
                  <span>→ Your custom snippets</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workspace Setup */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Workspace Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-folder-3-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Project Structure</h3>
              <p className="text-gray-600 text-sm">Organize frontend and backend in separate folders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-terminal-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multiple Terminals</h3>
              <p className="text-gray-600 text-sm">Run frontend and backend servers simultaneously</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-git-branch-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Version Control</h3>
              <p className="text-gray-600 text-sm">Integrated Git support with GitLens extension</p>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Keyboard Shortcuts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Quick Open</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+P</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Command Palette</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+P</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Go to Line</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+G</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle Sidebar</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+B</kbd>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Editing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Format Document</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Shift+Alt+F</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Multiple Cursors</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Alt+↓</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Duplicate Line</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Shift+Alt+↓</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Comment Toggle</span>
                  <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+/</kbd>
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
            Start Building with MERN
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Now that your VS Code is optimized, let's dive into the technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nodejs" className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Learn Node.js
            </Link>
            <Link href="/react" className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer">
              Master React
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
