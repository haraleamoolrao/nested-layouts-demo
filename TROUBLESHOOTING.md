# 🔧 Troubleshooting Guide

## Common Errors and Solutions

### 1. JSX Expression Error / Unexpected Token

**Error Message:**
```
Unexpected token, expected ","
```

**Cause:** Apostrophes in JSX text need to be escaped.

**Solution:** Use `&apos;` or `'` or extract to a variable:

```tsx
// ❌ Wrong
<p>Don't do this</p>

// ✅ Correct - Option 1
<p>Don&apos;t do this</p>

// ✅ Correct - Option 2
<p>{"Don't do this"}</p>

// ✅ Correct - Option 3
const text = "Don't do this";
<p>{text}</p>
```

### 2. Module Not Found

**Error Message:**
```
Module not found: Can't resolve 'react'
```

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 3. Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### 4. ESLint Errors

**Error Message:**
```
Warning: Using `<img>` could result in slower LCP...
```

**Solution:** Use Next.js Image component:

```tsx
// ❌ Wrong
<img src="/photo.jpg" alt="Photo" />

// ✅ Correct
import Image from 'next/image'
<Image src="/photo.jpg" alt="Photo" width={500} height={300} />
```

### 5. Hydration Errors

**Error Message:**
```
Text content does not match server-rendered HTML
```

**Common Causes:**
- Using browser-only APIs (localStorage, window) on first render
- Incorrect nesting (e.g., `<p>` inside `<p>`)
- Different client/server rendering

**Solution:**
```tsx
// ❌ Wrong
export default function Page() {
  const user = localStorage.getItem('user')
  return <div>{user}</div>
}

// ✅ Correct
'use client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [user, setUser] = useState('')
  
  useEffect(() => {
    setUser(localStorage.getItem('user') || '')
  }, [])
  
  return <div>{user}</div>
}
```

### 6. CSS Not Loading

**Issue:** Tailwind classes not applying

**Solution:**
1. Check `tailwind.config.ts` includes all content paths:
```ts
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
```

2. Ensure `globals.css` has Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Restart dev server:
```bash
npm run dev
```

### 7. TypeScript Errors

**Error Message:**
```
Property 'children' does not exist on type...
```

**Solution:** Properly type React components:

```tsx
// ✅ Correct
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
```

### 8. Link Not Working

**Issue:** Next.js Link not navigating

**Solution:**
```tsx
// ❌ Wrong
import Link from 'next/link'
<Link href="/about"><a>About</a></Link>

// ✅ Correct (Next.js 13+)
import Link from 'next/link'
<Link href="/about">About</Link>
```

## Quick Fixes

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### Update Dependencies
```bash
npm update next react react-dom
```

### Check Node Version
```bash
node -v  # Should be 18.17 or higher
```

### Verify File Structure
```
app/
├── layout.tsx        # ✅ Must exist
├── page.tsx          # ✅ Must exist for route
└── dashboard/
    ├── layout.tsx    # ✅ Optional nested layout
    └── page.tsx      # ✅ Must exist for /dashboard route
```

## Still Having Issues?

1. **Check the Browser Console** - Often shows helpful error details
2. **Check Terminal** - Server errors appear here
3. **Read the Full Error Message** - Stack trace usually points to the problem
4. **Search the Error** - Copy exact error message to Google/Stack Overflow
5. **Check Next.js Docs** - https://nextjs.org/docs

## Common Gotchas

1. **File naming is case-sensitive**
   - `layout.tsx` ✅
   - `Layout.tsx` ❌

2. **Default exports are required**
   ```tsx
   // ✅ Correct
   export default function Page() {}
   
   // ❌ Wrong
   export function Page() {}
   ```

3. **Async components only in Server Components**
   ```tsx
   // ✅ Server Component (default)
   export default async function Page() {
     const data = await fetch(...)
   }
   
   // ❌ Client Component
   'use client'
   export default async function Page() {} // Error!
   ```

4. **Client Components need 'use client' directive**
   ```tsx
   // If using hooks, add at the top:
   'use client'
   import { useState } from 'react'
   ```

---

Need more help? Check the [Next.js Documentation](https://nextjs.org/docs) or ask in their [Discord](https://nextjs.org/discord).
