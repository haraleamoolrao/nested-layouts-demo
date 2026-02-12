export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Understanding Next.js Nested Layouts',
      excerpt: 'Learn how to create powerful layout hierarchies in your Next.js applications.',
      date: 'Feb 10, 2024',
      category: 'Tutorial'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Tips and tricks for building beautiful UIs with Tailwind CSS utility classes.',
      date: 'Feb 8, 2024',
      category: 'CSS'
    },
    {
      id: 3,
      title: 'TypeScript Best Practices',
      excerpt: 'Write better, more maintainable code with these TypeScript patterns.',
      date: 'Feb 5, 2024',
      category: 'TypeScript'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Home</h2>
      
      <div className="mb-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="font-semibold text-blue-900 mb-2">🎯 Current Layout Stack:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-800">
            <li>Root Layout (app/layout.tsx) - Blue header/footer</li>
            <li>Blog Layout (app/blog/layout.tsx) - Purple sidebar</li>
            <li>Blog Page (app/blog/page.tsx) - This content</li>
          </ol>
        </div>
      </div>

      <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <p className="text-purple-800 text-sm">
          🎨 <strong>Compare:</strong> Go back to Dashboard to see how the same root layout 
          can have completely different nested layouts! The blog has purple styling while 
          dashboard has green.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Featured Posts</h3>
      
      <div className="space-y-4">
        {featuredPosts.map((post) => (
          <article key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{post.title}</h4>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                {post.category}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{post.date}</span>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
