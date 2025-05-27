"use client"
import React, { useState } from 'react';
import { Play, Download, MoreHorizontal, Search, Bell, User, Home, Bookmark, Settings, Filter, Heart, Zap, Sparkles, Skull, Star, Moon } from 'lucide-react';

const StreamingApp = () => {
  const [currentPage, setCurrentPage] = useState('storyy');

  // Interface Storyy
  const StoryyInterface = () => (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-4 bg-black/20 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 bg-orange-500 rounded"></div>
          <span className="text-sm">storyy.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5" />
          <div className="flex items-center space-x-2 bg-black/30 rounded-full px-3 py-1">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <span className="text-sm">Arif Maulana</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <div className="w-64 p-4 bg-black/20 backdrop-blur-md">
          {/* Navigation */}
          <div className="flex space-x-6 mb-6">
            <button className="text-white border-b-2 border-orange-500 pb-1">Movies</button>
            <button className="text-gray-400">TV Series</button>
            <button className="text-gray-400">Animation</button>
            <button className="text-gray-400">Mistery</button>
            <button className="text-gray-400">More</button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search movies"
              className="w-full bg-black/30 rounded-full pl-10 pr-4 py-2 text-sm"
            />
          </div>

          {/* New Trailer */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium">New Trailer</span>
              <span className="text-xs text-gray-400">Sort by Today</span>
            </div>
            
            <div className="space-y-3">
              <div className="relative group cursor-pointer">
                <div className="w-full h-24 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg"></div>
                <Play className="absolute inset-0 m-auto w-8 h-8 bg-black/50 rounded-full p-2" />
                <div className="absolute bottom-2 left-2">
                  <p className="text-xs font-medium">The Last Kingdom: Seven</p>
                  <p className="text-xs text-gray-400">Kings Must Die</p>
                </div>
              </div>
              
              <div className="relative group cursor-pointer">
                <div className="w-full h-24 bg-gradient-to-r from-red-900 to-orange-900 rounded-lg"></div>
                <Play className="absolute inset-0 m-auto w-8 h-8 bg-black/50 rounded-full p-2" />
                <div className="absolute bottom-2 left-2">
                  <p className="text-xs font-medium">The Super Mario Bros.</p>
                  <p className="text-xs text-gray-400">Movies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Watching */}
          <div>
            <h3 className="text-sm font-medium mb-3">Continue Watching</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-blue-800 rounded"></div>
                <div>
                  <p className="text-xs">Dark Season 3</p>
                  <p className="text-xs text-gray-400">Season 3</p>
                </div>
                <Play className="w-4 h-4 ml-auto" />
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-yellow-800 rounded"></div>
                <div>
                  <p className="text-xs">Transformers - Da...</p>
                  <p className="text-xs text-gray-400">Movies</p>
                </div>
                <Play className="w-4 h-4 ml-auto" />
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-blue-600 rounded"></div>
                <div>
                  <p className="text-xs">Lupin Season 2</p>
                  <p className="text-xs text-gray-400">Season 2</p>
                </div>
                <Play className="w-4 h-4 ml-auto" />
              </div>
            </div>
          </div>

          {/* Side Icons */}
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
            <Home className="w-6 h-6 p-1 bg-white/10 rounded" />
            <Heart className="w-6 h-6 p-1" />
            <Bookmark className="w-6 h-6 p-1" />
            <User className="w-6 h-6 p-1" />
            <Settings className="w-6 h-6 p-1" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Hero Section */}
          <div className="relative mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Now Trending</span>
            </div>
            
            <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-red-900 rounded-xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10">
                <div className="flex space-x-2 mb-4">
                  <span className="px-2 py-1 bg-white/20 rounded text-xs">Animation</span>
                  <span className="px-2 py-1 bg-white/20 rounded text-xs">Adventure</span>
                </div>
                
                <h1 className="text-4xl font-bold mb-4">Spider-Man:<br />Across the Spider-Verse</h1>
                <p className="text-gray-300 mb-6 max-w-md">
                  Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.
                </p>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium">
                    <Play className="w-4 h-4" />
                    <span>Watch</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur rounded-full">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Abstract spider-verse design */}
              <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full transform rotate-45"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500 rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>

          {/* You might like */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">You might like</h2>
              <button className="text-sm text-gray-400">See all</button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="group cursor-pointer">
                <div className="relative mb-3">
                  <div className="w-full h-40 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg"></div>
                  <Play className="absolute inset-0 m-auto w-12 h-12 bg-black/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs">Fantasy</span>
                </div>
                <h3 className="font-medium mb-1">The Flash (2023)</h3>
                <p className="text-sm text-gray-400">Barry Allen uses his super speed to change the past, but...</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative mb-3">
                  <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"></div>
                  <Play className="absolute inset-0 m-auto w-12 h-12 bg-black/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs">Mistery</span>
                </div>
                <h3 className="font-medium mb-1">Manifest</h3>
                <p className="text-sm text-gray-400">When a commercial airliner suddenly reappears after being missing for five years...</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative mb-3">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
                  <Play className="absolute inset-0 m-auto w-12 h-12 bg-black/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs">Animation</span>
                </div>
                <h3 className="font-medium mb-1">Elemental</h3>
                <p className="text-sm text-gray-400">Ember Lullaby and Wade Ripple in a city where fire-, water-, earth-...</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative mb-3">
                  <div className="w-full h-40 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg"></div>
                  <Play className="absolute inset-0 m-auto w-12 h-12 bg-black/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs">Sci-fi</span>
                </div>
                <h3 className="font-medium mb-1">Interstellar</h3>
                <p className="text-sm text-gray-400">Earth's future has been riddled by disasters, famine, and drought. There is only one way...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Interface Flix.id
  const FlixInterface = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-black/10 backdrop-blur-md">
        <h1 className="text-2xl font-bold">Flix.id</h1>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 bg-black rounded-full px-4 py-2">
            <button className="text-white">Movie</button>
            <button className="text-gray-400">Series</button>
            <button className="text-gray-400">Originals</button>
          </div>
          <Search className="w-5 h-5" />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Sarah J</p>
              <p className="text-xs text-gray-300">Premium</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Hero Banners */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">The<br />Adventure of<br />Blue Sword</h2>
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <Play className="w-4 h-4" />
                <span>Let Play Moview</span>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Recalling the<br />journey of Dol's<br />exciting story</h2>
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <Play className="w-4 h-4" />
                <span>Let Play Moview</span>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 right-12 w-32 h-32 bg-orange-400 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex space-x-3 mb-8">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full">
            <Zap className="w-4 h-4" />
            <span>Trending</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-300">
            <Zap className="w-4 h-4" />
            <span>Action</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-300">
            <Heart className="w-4 h-4" />
            <span>Romance</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Animation</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-300">
            <Skull className="w-4 h-4" />
            <span>Horror</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-300">
            <Star className="w-4 h-4" />
            <span>Special</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-300">
            <Moon className="w-4 h-4" />
            <span>Drakor</span>
          </button>
        </div>

        {/* Trending Animation */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending in Animation</h2>
            <div className="flex space-x-2">
              <Filter className="w-5 h-5" />
              <span className="w-5 h-5 border border-white/30 rounded"></span>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <div className="group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-green-700 to-red-700"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="font-medium mb-1">Loetoeng Kasarung</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>7.8</span>
                </div>
                <span>2023</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-orange-600"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="font-medium mb-1">Gajah Langka</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>6.0</span>
                </div>
                <span>2023</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-red-600 to-yellow-600"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="font-medium mb-1">Si Kang Satay</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>7.1</span>
                </div>
                <span>2023</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-blue-700"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="font-medium mb-1">Mommy Cat</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>7.8</span>
                </div>
                <span>2023</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-red-600"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="font-medium mb-1">Hijaber Cantiq</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>6.1</span>
                </div>
                <span>2023</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-red-800"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="font-medium mb-1">Xatra- X</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>6.5</span>
                </div>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Navigation between interfaces */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2 bg-black/50 backdrop-blur rounded-lg p-2">
        <button 
          onClick={() => setCurrentPage('storyy')}
          className={`px-4 py-2 rounded-md transition-colors ${currentPage === 'storyy' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          Storyy Interface
        </button>
        <button 
          onClick={() => setCurrentPage('flix')}
          className={`px-4 py-2 rounded-md transition-colors ${currentPage === 'flix' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          Flix.id Interface
        </button>
      </div>

      {/* Render current interface */}
      {currentPage === 'storyy' ? <StoryyInterface /> : <FlixInterface />}
    </div>
  );
};

export default StreamingApp;