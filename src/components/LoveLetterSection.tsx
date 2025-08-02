import React from 'react'

interface LoveLetterSectionProps {
  onNavigateToGallery: () => void
}

const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({ onNavigateToGallery }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center p-2 md:p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => {
          const positionClasses = [`floating-pos-${i + 1}`, `anim-duration-${4 + (i % 3)}`];
          
          return (
            <div
              key={i}
              className={`love-letter-floating-element ${positionClasses.join(' ')}`}
            >
              <span className="text-pink-200 text-4xl opacity-30">
                {['💝', '🌹', '💕', '✨', '💖', '🦋', '🌸', '💫'][i]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-pink-100 transform hover:scale-105 transition-all duration-500">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-3 md:mb-4 animate-pulse">
              <span className="text-2xl md:text-3xl">💌</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2 md:mb-3">
              My Dearest Cutie Pie
            </h2>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed space-y-3 md:space-y-4">
            <p className="text-base md:text-lg text-center italic text-pink-600 mb-4 md:mb-6">
              "Every moment with you feels like a beautiful dream that I never want to wake up from."
            </p>
            
            <p className="text-sm md:text-base">
              For our first anniversary, I wanted to do something special. I started this project so that we can look back and smile whenever we want. While I was adding our photos, I remembered many sweet memories. Even though we are in a long-distance relationship, I miss you so much every day.
            </p>
            
            <p className="text-sm md:text-base">
              From the first time I saw you, I liked you. But I was too shy and scared, so I kept my feelings inside and loved you quietly. Every time I looked at you, my heart felt happy, even on hard days. Slowly, we made more memories together, and then I decided to tell you my feelings.
            </p>
            
            <p className="text-sm md:text-base">
              Please believe that I'm always trying for you. I'm doing my best to be near you one day. I want to live this life with you. When you are by my side, I can face anything. I hope we will grow old together and stay strong through everything. I will never let go of you.
            </p>
            
            <p className="text-center font-semibold text-pink-600 text-sm md:text-base">
              Here's to many more years of love, laughter, and beautiful memories together.
            </p>
            
            <p className="text-right italic text-gray-600 text-sm md:text-base">
              Forever yours,<br/>
              With all my love 💕
            </p>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={onNavigateToGallery}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg"
            >
              When you miss me 💖
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoveLetterSection