export default function DashboardPage() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
      
      <div className="mb-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="font-semibold text-blue-900 mb-2">🎯 Current Layout Stack:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-800">
            <li>Root Layout (app/layout.tsx) - Blue header/footer</li>
            <li>Dashboard Layout (app/dashboard/layout.tsx) - Green sidebar</li>
            <li>Dashboard Page (app/dashboard/page.tsx) - This content</li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold mb-2">1,234</h3>
          <p className="text-blue-100">Total Users</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold mb-2">$45.2K</h3>
          <p className="text-green-100">Revenue</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold mb-2">89%</h3>
          <p className="text-purple-100">Satisfaction</p>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Why Nested Layouts?</h3>
        <ul className="text-gray-600 space-y-2">
          <li>
            <strong>Performance:</strong> Only the page content re-renders, not the entire layout
          </li>
          <li>
            <strong>State Preservation:</strong> Layout state (like sidebar open/closed) persists
          </li>
          <li>
            <strong>Code Organization:</strong> Each section has its own layout logic
          </li>
          <li>
            <strong>Flexibility:</strong> Different sections can have completely different UIs
          </li>
        </ul>
      </div>
    </div>
  )
}
