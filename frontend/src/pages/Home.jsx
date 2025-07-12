
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Send, Play, Sparkles, Moon, Sun } from 'lucide-react';


function Home() {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [message, setMessage] = useState('');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  React.useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handellogout =() => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    setName('');
    setTimeout(() => {
      navigate('/login'); // Use React Router navigation
      console.log('Navigating to login page...');
    }, 2000);
     // Assuming you have a navigate function from react-router-dom

  }



  return (
     <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                BHAI-LOG AI
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:bg-opacity-80 transition-all`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
              🇮🇳 India's First Hinglish AI Bhai
            </span>
          </div>
          
          <h2 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Your <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Digital Bhai</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Jo Samjhega Tumhe</span> 🤝
          </h2>
          
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Memes banao, roast karo, flirt karo - BHAI-LOG AI tumhara perfect
            digital buddy hai! <span className="text-purple-500 font-medium">Hinglish mein baat karta hai</span> aur tumhare
            <span className="text-pink-500 font-medium"> emotions ko samjhata hai</span> 🔥
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all flex items-center space-x-2 shadow-lg"
              onClick={() => navigate('/signup')}
            >
              <Sparkles className="w-5 h-5" />
              <span>Try Now - FREE</span>
            </button>
            <button className={`border-2 ${isDark ? 'border-purple-400 text-purple-400 hover:bg-purple-400' : 'border-purple-500 text-purple-500 hover:bg-purple-500'} hover:text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center space-x-2`}>
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className={`max-w-2xl mx-auto ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden`}>
          {/* Chat Header */}
          <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} px-6 py-4 border-b ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <div>
                <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>BHAI-LOG AI</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}>Online & Ready to Chat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs">
                Make a meme on coding life
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'} ${isDark ? 'text-gray-200' : 'text-gray-800'} px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs`}>
                <p className="mb-2">
                  Dekh bhai: "When you write 'Hello World' and feel like Sundar Pichai" 😂
                  📱
                </p>
                <div className="text-sm">
                  <p className="font-medium">*Meme Template*: Drake pointing meme</p>
                  <p>Top: Documentation padhna</p>
                  <p>Bottom: Stack Overflow copy-paste</p>
                  <p>🤣</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} px-6 py-4 border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type karo bhai... 💬"
                className={`flex-1 ${isDark ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              <button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                onClick={() => setMessage('')}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>






    
  )
}

export default Home

