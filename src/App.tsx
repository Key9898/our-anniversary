import React, { useState } from 'react'
import LoginSection from './components/LoginSection'
import LoveLetterSection from './components/LoveLetterSection'
import GallerySection from './components/GallerySection'

function App() {
  const [currentSection, setCurrentSection] = useState<'login' | 'letter' | 'gallery'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSlideShowPaused, setIsSlideShowPaused] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'nilar.win.p.92@gmail.com' && password === '2091986key') {
      setCurrentSection('letter')
    } else {
      alert('Invalid credentials!')
    }
  }

  const scrollToSection = (section: 'letter' | 'gallery') => {
    setCurrentSection(section)
  }

  // Auto slideshow effect
  React.useEffect(() => {
    if (currentSection === 'gallery' && !isSlideShowPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % 5) // 5 images
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [currentSection, isSlideShowPaused])



  return (
    <div className="font-sans">
      {currentSection === 'login' && (
        <LoginSection
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onLogin={handleLogin}
        />
      )}
      {currentSection === 'letter' && (
        <LoveLetterSection
          onNavigateToGallery={() => scrollToSection('gallery')}
        />
      )}
      {currentSection === 'gallery' && (
        <GallerySection
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          isSlideShowPaused={isSlideShowPaused}
          setIsSlideShowPaused={setIsSlideShowPaused}
          onNavigateToLetter={() => scrollToSection('letter')}
        />
      )}
    </div>
  )
}

export default App
