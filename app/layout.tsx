import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nested Layouts Demo',
  description: 'Learn how nested layouts work in Next.js',
}
{/*Hello world*/}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* ROOT LAYOUT - This wraps the entire app */}
        <div className="min-h-screen flex flex-col">
          {/* Global Header */}
          <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold">🎯 Nested Layouts Demo</h1>
              <p className="text-blue-100 text-sm mt-1">Root Layout - Appears on ALL pages</p>
            </div>
          </header>

          {/* Global Navigation */}
          <nav className="bg-blue-500 text-white">
            <div className="container mx-auto px-4 py-3">
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:text-blue-200 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-blue-200 transition">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-200 transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content Area - Children will render here */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-6 text-center">
              <p className="text-sm">© 2024 Nested Layouts Demo - Root Layout Footer</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
