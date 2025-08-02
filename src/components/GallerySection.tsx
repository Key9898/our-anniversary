import React from 'react'
import AnniOne from '../assets/Anni_one.png'
import AnniTwo from '../assets/Anni_two.png'
import AnniThree from '../assets/Anni_three.png'
import AnniFour from '../assets/Anni_four.png'
import AnniFive from '../assets/Anni_five.png'

interface GallerySectionProps {
  currentImageIndex: number
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>
  isSlideShowPaused: boolean
  setIsSlideShowPaused: React.Dispatch<React.SetStateAction<boolean>>
  onNavigateToLetter: () => void
}

const GallerySection: React.FC<GallerySectionProps> = ({
  currentImageIndex,
  setCurrentImageIndex,
  isSlideShowPaused,
  setIsSlideShowPaused,
  onNavigateToLetter
}) => {
  // Images for gallery
  const galleryImages = [
    AnniOne,
    AnniTwo,
    AnniThree,
    AnniFour,
    AnniFive,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => {
          const positionClasses = [`floating-pos-${i + 1}`, `anim-duration-${3 + (i % 4)}`];

          return (
            <div
              key={i}
              className={`gallery-twinkle-star text-yellow-300 text-2xl opacity-40 ${positionClasses.join(' ')}`}
            >
              ✨
            </div>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-gray-600 text-lg">A collection of moments that make our love story special</p>
        </div>

        <div className="relative">
          {/* Main slideshow container */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${index === currentImageIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
                  }`}
                onMouseEnter={() => setIsSlideShowPaused(true)}
                onMouseLeave={() => setIsSlideShowPaused(false)}
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className={`w-full h-full object-contain transition-transform duration-500 ${isSlideShowPaused && index === currentImageIndex
                    ? 'scale-110'
                    : 'scale-100'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Beautiful Memory</h3>
                  <p className="text-white/80">A moment to cherish forever</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-pink-500 scale-125'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
                title={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={() => setCurrentImageIndex((prev: number) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
            title="Previous image"
          >
            <span className="text-2xl">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setCurrentImageIndex((prev: number) => (prev + 1) % galleryImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
            title="Next image"
          >
            <span className="text-2xl">›</span>
          </button>
        </div>

        {/* Back to letter button */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onNavigateToLetter}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Love Letter 💌
          </button>
        </div>
      </div>
    </div>
  )
}

export default GallerySection