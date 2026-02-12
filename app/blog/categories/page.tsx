export default function CategoriesPage() {
  const categories = [
    { name: 'Tutorial', count: 24, color: 'bg-blue-100 text-blue-800' },
    { name: 'CSS', count: 15, color: 'bg-green-100 text-green-800' },
    { name: 'TypeScript', count: 18, color: 'bg-purple-100 text-purple-800' },
    { name: 'React', count: 32, color: 'bg-red-100 text-red-800' },
    { name: 'Next.js', count: 28, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Performance', count: 12, color: 'bg-pink-100 text-pink-800' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Categories</h2>
      
      <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <p className="text-purple-800 text-sm">
          🔄 <strong>Layout Switching:</strong> Try going back to the Dashboard section. 
          You&apos;ll see the layout completely changes from purple (blog) to green (dashboard), 
          but the blue root layout stays the same!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${category.color}`}>
                {category.name}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{category.count}</p>
            <p className="text-sm text-gray-500">posts</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Nested Layout Structure</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-gray-700">Root Layout - Wraps everything (Blue header/footer)</span>
          </div>
          <div className="flex items-center gap-2 ml-6">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-gray-700">Blog Layout - Wraps /blog/* (Purple sidebar)</span>
          </div>
          <div className="flex items-center gap-2 ml-12">
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
            <span className="text-gray-700">Page Content - Individual pages</span>
          </div>
        </div>
      </div>
    </div>
  );
}
