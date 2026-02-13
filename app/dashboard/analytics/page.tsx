{/*This is the analytics page*/}
export default function AnalyticsPage() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Analytics</h2>
      
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-800 text-sm">
          ✨ <strong>Notice:</strong> The dashboard sidebar didn&apos;t re-render when you clicked here. 
          Only this content area changed!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Page Views</h3>
          <div className="text-3xl font-bold text-gray-900">25,467</div>
          <div className="text-sm text-green-600 mt-1">↑ 12% from last week</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Bounce Rate</h3>
          <div className="text-3xl font-bold text-gray-900">34.2%</div>
          <div className="text-sm text-red-600 mt-1">↓ 3% from last week</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg. Session</h3>
          <div className="text-3xl font-bold text-gray-900">3:42</div>
          <div className="text-sm text-green-600 mt-1">↑ 8% from last week</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Conversions</h3>
          <div className="text-3xl font-bold text-gray-900">892</div>
          <div className="text-sm text-green-600 mt-1">↑ 15% from last week</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Traffic Sources</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Direct</span>
              <span className="font-semibold">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Organic Search</span>
              <span className="font-semibold">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Social Media</span>
              <span className="font-semibold">25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
