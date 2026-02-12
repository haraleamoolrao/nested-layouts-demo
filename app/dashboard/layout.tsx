import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-green-50 min-h-[calc(100vh-200px)]">
      {/* DASHBOARD LAYOUT - This wraps all dashboard pages */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-green-100 border-l-4 border-green-600 p-4 mb-6">
          <h2 className="text-xl font-bold text-green-900">
            📊 Dashboard Layout (Level 2)
          </h2>
          <p className="text-green-700 text-sm mt-1">
            This layout wraps all pages under /dashboard/*
          </p>
        </div>

        <div className="flex gap-6">
          {/* Dashboard Sidebar */}
          <aside className="w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <h3 className="font-semibold text-gray-800 mb-4">Dashboard Menu</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/dashboard" 
                    className="block px-4 py-2 rounded hover:bg-green-100 text-gray-700 hover:text-green-900 transition"
                  >
                    📈 Overview
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/dashboard/analytics" 
                    className="block px-4 py-2 rounded hover:bg-green-100 text-gray-700 hover:text-green-900 transition"
                  >
                    📊 Analytics
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/dashboard/users" 
                    className="block px-4 py-2 rounded hover:bg-green-100 text-gray-700 hover:text-green-900 transition"
                  >
                    👥 Users
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/dashboard/settings" 
                    className="block px-4 py-2 rounded hover:bg-green-100 text-gray-700 hover:text-green-900 transition"
                  >
                    ⚙️ Settings
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-6 p-3 bg-green-50 rounded text-xs text-green-800">
              <strong>Layout Behavior:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Sidebar persists</li>
                <li>Only content changes</li>
                <li>No re-render of layout</li>
              </ul>
            </div>
          </aside>

          {/* Dashboard Content Area */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
