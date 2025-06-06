import React, { useState } from 'react';
import './App.css';

function App() {
  const [guessedNumber, setGuessedNumber] = useState('');
  const [lastGuessedNumber, setLastGuessedNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guessedNumber.trim() !== '') {
      setLastGuessedNumber(guessedNumber);
      setGuessedNumber('');
    }
  };

  const handleInputChange = (e) => {
    setGuessedNumber(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 tracking-tight">
          Number Guessing Game
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Guess Number */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                🎯 Guess a Number
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="number"
                    value={guessedNumber}
                    onChange={handleInputChange}
                    placeholder="Enter any number..."
                    className="w-full px-6 py-4 text-2xl font-semibold text-center bg-white/20 backdrop-blur border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                >
                  Make Your Guess! 🚀
                </button>
              </form>
              
              <p className="text-white/70 mt-6 text-lg">
                Enter any number and watch it appear in the other window!
              </p>
            </div>
          </div>

          {/* Right Panel - Last Guessed Number */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center h-full flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                🔮 Last Guessed Number
              </h2>
              
              <div className="flex-1 flex items-center justify-center">
                {lastGuessedNumber !== null ? (
                  <div className="animate-bounce-in">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 md:p-12 shadow-2xl transform scale-110">
                      <div className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
                        {lastGuessedNumber}
                      </div>
                      <div className="text-white/90 text-lg md:text-xl">
                        Your latest guess! ✨
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center opacity-75">
                    <div className="text-8xl mb-6">🤔</div>
                    <div className="text-white/60 text-xl md:text-2xl">
                      No guesses yet...
                    </div>
                    <div className="text-white/50 text-lg mt-2">
                      Make your first guess to see it appear here!
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/60 text-lg">
            ✨ Real-time synchronization between two windows ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;