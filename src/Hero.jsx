import React from 'react'
import { BookOpen, AlertCircle, SquarePen } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';


function Hero() {

  const {loginWithRedirect} = useAuth0()

  return (

    <div className="min-h-screen  bg-[#fefcff] relative">
        
      <div className="container mx-auto px-4 py-4 " style={{
            backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)`,
             }}>
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <SquarePen className="w-8 h-8 text-teal-400" />
            <span className="text-2xl font-bold text-gray-800">QuickNotes</span>
          </div>
          <button 
            className="px-6 py-2 bg-teal-400 text-white rounded-lg hover:bg-[#22aac2] transition-colors font-medium shadow-md hover:shadow-lg cursor-pointer"

            onClick={(e)=>loginWithRedirect()}
          >
            Sign In
          </button>
        </header>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Personal Note-Taking Space
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Capture your thoughts and ideas instantly. Simple, fast, and always accessible.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-teal-400 text-white rounded-lg hover:bg-[#22aac2] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl mb-12 cursor-pointer">
            Get Started Free
          </button>

          {/* Important Notice */}
          <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <h3 className="font-semibold text-amber-900 mb-2">Data Storage Notice</h3>
              <p className="text-amber-800 text-base leading-relaxed">
                The data is stored in your own browser's local storage, so you cannot access the data on another device. Your notes are private and stored locally on this device only.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-neutral-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">Instant access to your notes without any loading time</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-neutral-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Private</h3>
              <p className="text-gray-600 text-sm">Your notes stay on your device, never sent to any server</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-neutral-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simple & Clean</h3>
              <p className="text-gray-600 text-sm">Distraction-free interface to focus on your writing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero