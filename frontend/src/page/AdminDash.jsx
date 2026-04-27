import React from 'react'
import SidebarAdmin from '../Components/SidebarAdmin'

function AdminDash() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Sidebar remains fixed on the left */}
      <SidebarAdmin />
      
      {/* 2. Added ml-64 to clear the sidebar width and flex-1 to occupy the rest of the screen */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500">Welcome back. Here is what's happening with your exams today.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Total Users Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Total Users</h3>
              <p className="text-4xl font-bold text-slate-900 mt-1">1,284</p>
            </div>

            {/* Total Exams Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Total Exams</h3>
              <p className="text-4xl font-bold text-slate-900 mt-1">42</p>
            </div>

            {/* Results Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Results Published</h3>
              <p className="text-4xl font-bold text-slate-900 mt-1">315</p>
            </div>

          </div>

          {/* Optional: Add a "Quick Actions" or "Recent Activity" section here later */}
          
        </div>
      </main>
    </div>
  )
}

export default AdminDash