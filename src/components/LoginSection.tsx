import React, { useState } from 'react'

interface LoginSectionProps {
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  onLogin: (e: React.FormEvent) => void
}

const LoginSection: React.FC<LoginSectionProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  onLogin
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Floating hearts animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => {
            const positionClasses = [`floating-pos-${i + 1}`, `anim-duration-${2 + (i % 3)}`];
            
            return (
              <div
                key={i}
                className={`login-floating-heart ${positionClasses.join(' ')}`}
              >
                <span className="text-pink-300 text-2xl">💕</span>
              </div>
            );
          })}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-100 transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-4 animate-pulse">
              <span className="text-3xl">💖</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
              Our Anniversary
            </h1>
            <p className="text-gray-600">Enter to celebrate our love story</p>
          </div>

          <form onSubmit={onLogin} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">📧</span>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 bg-white/50"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔒</span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 bg-white/50"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                title={showPassword ? "Hide password" : "Show password"}
              >
                <span className="text-lg">
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Step Into US 💕
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSection