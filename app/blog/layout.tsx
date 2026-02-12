import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-purple-50 min-h-[calc(100vh-200px)]">
      {/* BLOG LAYOUT - This wraps all blog pages */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-purple-100 border-l-4 border-purple-600 p-4 mb-6">
          <h2 className="text-xl font-bold text-purple-900">
            📝 Blog Layout (Level 2)
          </h2>
          <p className="text-purple-700 text-sm mt-1">
            This layout wraps all pages under /blog/* - Notice different styling from Dashboard!
          </p>
        </div>

        <div className="flex gap-6">
          {/* Blog Sidebar */}
          <aside className="w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <h3 className="font-semibold text-gray-800 mb-4">Blog Navigation</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/blog" 
                    className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700 hover:text-purple-900 transition"
                  >
                    🏠 Blog Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/posts" 
                    className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700 hover:text-purple-900 transition"
                  >
                    📄 All Posts
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/categories" 
                    className="block px-4 py-2 rounded hover:bg-purple-100 text-gray-700 hover:text-purple-900 transition"
                  >
                    🏷️ Categories
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-6 p-4 bg-purple-50 rounded">
              <h4 className="font-semibold text-purple-900 mb-2 text-sm">Recent Posts</h4>
              <ul className="space-y-2 text-xs text-purple-800">
                <li>• Getting Started with Next.js</li>
                <li>• Understanding Layouts</li>
                <li>• Tailwind CSS Tips</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-purple-800">
              <strong>Different from Dashboard:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Purple theme</li>
                <li>Different sidebar content</li>
                <li>Blog-specific navigation</li>
              </ul>
            </div>
          </aside>

          {/* Blog Content Area */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
