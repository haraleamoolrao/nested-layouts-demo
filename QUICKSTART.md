# 🚀 Quick Start Guide

## Step 1: Install Dependencies

```bash
cd nested-layouts-demo
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- All necessary dependencies

## Step 2: Run the Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

## Step 3: Open in Browser

Navigate to **http://localhost:3000**

## Step 4: Explore the App

### Home Page (/)
- Shows only the Root Layout
- Blue header and footer
- No nested layouts

### Dashboard (/dashboard)
- Click "Dashboard" in the navigation
- Notice the green sidebar appears
- Try clicking:
  - Analytics
  - Users
  - Settings
- **Watch**: The sidebar doesn't re-render!

### Blog (/blog)
- Click "Blog" in the navigation
- Notice the purple sidebar (different from dashboard!)
- Try clicking:
  - All Posts
  - Categories
- **Watch**: Different layout, same root header/footer

## 🎯 What to Notice

1. **Layout Persistence**
   - When you navigate within Dashboard, the green sidebar stays
   - When you navigate within Blog, the purple sidebar stays
   - The blue header/footer ALWAYS stays

2. **Layout Switching**
   - Going from Dashboard → Blog changes the nested layout
   - But the root layout persists

3. **Performance**
   - Only the content area re-renders
   - Layouts don't re-mount unnecessarily

## 📁 Key Files to Study

1. **`app/layout.tsx`** - Root layout (wraps everything)
2. **`app/dashboard/layout.tsx`** - Dashboard layout (wraps dashboard pages)
3. **`app/blog/layout.tsx`** - Blog layout (wraps blog pages)
4. **`app/dashboard/page.tsx`** - Example page

## 💡 Try This

1. Open browser DevTools
2. Navigate between dashboard pages
3. Watch the React DevTools - only the content component updates!

## 🛠️ Modify It

Want to experiment? Try:

1. **Add a new section:**
   - Create `app/shop/layout.tsx`
   - Create `app/shop/page.tsx`
   - Add navigation link in `app/layout.tsx`

2. **Change styling:**
   - Edit Tailwind classes in any layout
   - Change the color themes

3. **Add more pages:**
   - Create new folders under dashboard or blog
   - Add corresponding `page.tsx` files

## 📚 Next Steps

Once you understand the basics:
- Add state management in layouts
- Implement loading states
- Add error boundaries
- Create dynamic routes

Happy coding! 🎉
