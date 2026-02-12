export default function BlogPostsPage() {
  const posts = [
    { id: 1, title: 'Getting Started with Next.js', views: 1234, comments: 23 },
    { id: 2, title: 'Understanding Nested Layouts', views: 892, comments: 15 },
    { id: 3, title: 'Tailwind CSS Utilities', views: 2341, comments: 45 },
    { id: 4, title: 'TypeScript Tips and Tricks', views: 1567, comments: 32 },
    { id: 5, title: 'React Server Components', views: 3210, comments: 67 },
    { id: 6, title: 'Building Responsive UIs', views: 987, comments: 12 },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Blog Posts</h2>
      
      <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <p className="text-purple-800 text-sm">
          ✨ <strong>Notice:</strong> The blog sidebar stayed the same! Only this content area changed 
          when you navigated from Blog Home to All Posts.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>👁️ {post.views}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Key Layout Benefits</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>✓ Sidebar doesn't re-render when switching pages</li>
          <li>✓ Navigation state is preserved</li>
          <li>✓ Improved performance and user experience</li>
          <li>✓ Shared layout logic for the entire blog section</li>
        </ul>
      </div>
    </div>
  )
}
