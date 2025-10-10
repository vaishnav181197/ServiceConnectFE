import React from 'react'

function AppHeader({ title, menu, notific, profile,search,settings }) {
  return (
    <header className="w-full flex justify-between items-center bg-black h-12 px-4">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {!menu && (
          <span className="p-1 border-2 border-white rounded-full">
            <i className="fa-solid fa-arrow-left text-white"></i>
          </span>
        )}

        {menu && <i className="fa-solid fa-bars text-white"></i>}

        <h1 className="text-white text-base sm:text-lg font-medium">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {notific && <i className="fa-solid fa-bell text-white"></i>}
        {profile && <i className="fa-solid fa-user text-white"></i>}
        {search && <i className="fa-solid fa-magnifying-glass text-white"></i>}
        {settings && <i class="fa-solid text-white fa-sliders"></i>}
      </div>
    </header>
  )
}

export default AppHeader
