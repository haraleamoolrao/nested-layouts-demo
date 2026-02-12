# Next.js Nested Layouts Demo 🎯

A practical demonstration of how **nested layouts** work in Next.js 14+ with the App Router, built with TypeScript and Tailwind CSS.

## 📚 What You'll Learn

This project demonstrates:
- How nested layouts work in Next.js App Router
- Layout hierarchy and composition
- How layouts persist during navigation
- Different layout styles for different sections
- Performance benefits of nested layouts

## 🏗️ Project Structure

```
app/
├── layout.tsx                    # Root Layout (Level 1) - Blue theme
├── page.tsx                      # Home page
├── globals.css                   # Global styles
│
├── dashboard/                    # Dashboard section
│   ├── layout.tsx               # Dashboard Layout (Level 2) - Green theme
│   ├── page.tsx                 # Dashboard home
│   ├── analytics/
│   │   └── page.tsx             # Analytics page
│   ├── users/
│   │   └── page.tsx             # Users page
│   └── settings/
│       └── page.tsx             # Settings page
│
└── blog/                         # Blog section
    ├── layout.tsx               # Blog Layout (Level 2) - Purple theme
    ├── page.tsx                 # Blog home
    ├── posts/
    │   └── page.tsx             # All posts page
    └── categories/
        └── page.tsx             # Categories page
```

## 🎨 Layout Hierarchy

```
┌─────────────────────────────────────────┐
│ Root Layout (app/layout.tsx)           │  ← Level 1 (Blue)
│ - Global header                         │    Wraps EVERYTHING
│ - Global navigation                     │
│ - Global footer                         │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Dashboard Layout                  │ │  ← Level 2 (Green)
│  │ (app/dashboard/layout.tsx)        │ │    Wraps /dashboard/*
│  │ - Sidebar navigation              │ │
│  │                                   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │ Page Content                │ │ │  ← Level 3
│  │  │ (app/dashboard/page.tsx)    │ │ │    Individual pages
│  │  └─────────────────────────────┘ │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How to Explore

1. **Start at Home** (`/`)
   - Only uses the Root Layout (blue header/footer)
   - No nested layouts here

2. **Visit Dashboard** (`/dashboard`)
   - Uses Root Layout + Dashboard Layout (green sidebar)
   - Click through Analytics, Users, Settings
   - Notice: Sidebar doesn't re-render!

3. **Visit Blog** (`/blog`)
   - Uses Root Layout + Blog Layout (purple sidebar)
   - Click through Posts, Categories
   - Compare: Different layout from Dashboard!

4. **Switch Between Sections**
   - Go from Dashboard → Blog
   - Notice: The nested layout completely changes
   - But: Root layout (blue header/footer) persists

## 💡 Key Concepts

### What are Nested Layouts?

Nested layouts allow you to create different layout structures for different sections of your app. Each route segment can define its own layout that wraps its children.

### Benefits

1. **Performance**: Only the page content re-renders, not the layout
2. **State Preservation**: Layout state persists during navigation
3. **Code Organization**: Each section has its own layout logic
4. **Flexibility**: Different sections can have completely different UIs

### How It Works

```typescript
// Root Layout (app/layout.tsx)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children} {/* Dashboard or Blog layout renders here */}
        <Footer />
      </body>
    </html>
  )
}

// Dashboard Layout (app/dashboard/layout.tsx)
export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children} {/* Individual page content renders here */}
    </div>
  )
}

// Page (app/dashboard/page.tsx)
export default function DashboardPage() {
  return <div>Dashboard Content</div>
}
```

### Layout Composition

When you visit `/dashboard/analytics`, the component tree looks like:

```
RootLayout
  └─ DashboardLayout
      └─ AnalyticsPage
```

## 📁 File Naming Conventions

- `layout.tsx` - Defines a layout for a segment
- `page.tsx` - Defines a page/route
- Layouts wrap pages and nested layouts
- Layouts are shared between siblings (e.g., all /dashboard/* pages)

## 🎨 Styling

This project uses **Tailwind CSS** for styling:
- Root Layout: Blue theme (`bg-blue-*`)
- Dashboard Layout: Green theme (`bg-green-*`)
- Blog Layout: Purple theme (`bg-purple-*`)

## 🔧 Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## 📖 Learn More

- [Next.js Layouts Documentation](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to explore and modify the code to learn more about nested layouts!

## 📝 License

This is a demo project for educational purposes.

---

Happy learning! 🚀
