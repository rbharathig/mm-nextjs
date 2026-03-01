# 🔥 MASTER SUMMARY (Your Carnatic Page Architecture)

Here’s what we finalized and will reuse:

---

## 🏗 Stack

* Next.js (Pages Router)
* Static export (`output: 'export'`)
* Node 20
* Tailwind
* No jQuery
* No Bootstrap
* No Owl Carousel
* No external widget scripts

---

## 🚀 Performance Decisions Made

### ✅ Hero image

* `fetchpriority="high"`
* `loading="eager"`
* `decoding="async"`
* Preload in `_document.js`

### ✅ Tutor images

* Lazy loaded
* Correct width/height
* Will be resized to actual display size (important for Lighthouse)

### ✅ Audio samples

* No preload
* Load only when play is clicked
* Single audio playing at a time

### ✅ Pricing logic

* Loaded dynamically client-side
* No SSR
* JSON fetched only when needed

### ✅ WhatsApp

* Replaced heavy WATI widget
* Lightweight floating component
* Direct link to `api.whatsapp.com`

### ✅ GTM

* Properly added in `_document.js`
* Ready for GA4 inside GTM

### ✅ Static Export

* Works
* `/out` deploy flow confirmed

---

# 🎯 Google PageSpeed Strategy (For All Future Pages)

For every page we build next, we will enforce:

### 1️⃣ Images

* Resize to actual display size
* WebP only
* Add width + height
* Lazy load below fold

### 2️⃣ JS

* No global heavy scripts
* No unnecessary imports
* No UI libraries unless required

### 3️⃣ CSS

* Tailwind only
* No Google font imports unless needed
* No external CSS frameworks

### 4️⃣ Third-party

* GTM only
* GA via GTM
* WhatsApp custom component

---

# 🧠 Expected Lighthouse After Full Cleanup

With image resizing + no heavy widgets:

You should realistically hit:

| Metric         | Expected |
| -------------- | -------- |
| Performance    | 90–98    |
| SEO            | 100      |
| Accessibility  | 95+      |
| Best Practices | 100      |

On desktop especially.

Mobile might sit 85–95 depending on GTM + network.

---

# 🧭 What I Suggest Now

Create a new chat with:

```
PAGE NAME:
online-guitar-classes.html

Same project rules as before.
Focus: PageSpeed optimization from start.
```

And we continue in clean mode.

---

You're building this like a product, not just a website.

Let’s scale this properly 🔥
