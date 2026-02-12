export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Nested Layouts Demo! 👋
          </h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              This page uses <strong>ONLY the Root Layout</strong>. Notice the blue header, 
              navigation, and footer that appear on all pages.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">🎯 Layout Hierarchy:</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Root Layout (app/layout.tsx) - Blue header/nav/footer</li>
                <li>Home Page (app/page.tsx) - This content</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              What are Nested Layouts?
            </h3>
            <p className="text-gray-600 mb-4">
              Nested layouts allow you to create different layout structures for different 
              sections of your app. Each route segment can have its own layout that wraps 
              its children.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">📊 Dashboard Section</h4>
                <p className="text-sm text-green-800">
                  Has its own layout with a sidebar and different styling
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">📝 Blog Section</h4>
                <p className="text-sm text-purple-800">
                  Has its own layout with a different sidebar and navigation
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                💡 <strong>Tip:</strong> Click on "Dashboard" or "Blog" in the navigation 
                to see how nested layouts work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
