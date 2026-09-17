import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#101010] border-t border-white/10 px-6 md:px-10 py-4 text-center">
      <p className="text-white/60 text-xs sm:text-sm">
        © {new Date().getFullYear()} Movie
        <span className="text-amber-400 font-semibold">App</span> · Built with
        React &amp; TMDB
      </p>
    </footer>
  )
}

export default Footer
