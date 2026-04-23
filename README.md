# 🚀 Portfolio — Viral Template Style

A fully editable HTML/CSS/JS portfolio inspired by the Viral Framer template.
No frameworks required — open directly in VS Code and edit freely!

---

## 📁 File Structure

```
portfolio/
├── index.html      ← Main page structure (content lives here)
├── style.css       ← All visual styles, colors, fonts, layout
├── script.js       ← Interactions: cursor, scroll animations, nav
├── images/         ← Put your photos and project images here
└── README.md       ← This file
```

---

## ✏️ How to Customize

### 1. Personal Info — `index.html`
- Replace **"Your Name"** with your actual name
- Update the **nav logo** (`YN.`) with your initials
- Edit the **hero headline** and tagline
- Fill in your **bio** in the About section
- Update **project titles, tags, and links**
- Replace **testimonials** with real client quotes
- Update **email and social links** throughout

### 2. Colors & Fonts — `style.css` (top of file)
```css
:root {
  --accent:   #FF5E1A;   /* ← Main accent (orange) — change me! */
  --accent-2: #C8FF00;   /* ← Secondary accent (lime)            */
  --accent-3: #9B5DE5;   /* ← Tertiary accent (purple)           */
  --bg:       #0c0c0c;   /* ← Page background                    */
  --text:     #f0f0f0;   /* ← Main text color                    */
}
```

### 3. Adding Project Images
Replace the placeholder `<div class="project-placeholder">` with:
```html
<img src="images/project1.jpg" alt="Project Name">
```

### 4. Adding Your Photo (About section)
Replace `<div class="about-img-placeholder">` with:
```html
<img src="images/me.jpg" alt="Your Name">
```

### 5. Contact Form
The form currently shows a success message. To make it actually send emails:

**Option A — Formspree (free, easy):**
1. Sign up at https://formspree.io
2. Get your form ID
3. In `script.js`, uncomment and update the fetch call

**Option B — EmailJS:**
1. Sign up at https://emailjs.com
2. Follow their SDK setup guide

---

## 🌐 To Run Locally

Simply open `index.html` in your browser, or use the VS Code Live Server extension:
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## 🚀 To Deploy

- **Netlify**: Drag the folder to https://app.netlify.com/drop
- **Vercel**: `vercel --prod` in the folder
- **GitHub Pages**: Push to a repo, enable Pages in settings

---

## 🎨 Design Credits
Inspired by the Viral template by Hamza Ehsan on Framer Marketplace.
Fonts: Syne (headings) + DM Sans (body) via Google Fonts.
