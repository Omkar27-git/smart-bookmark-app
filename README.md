
# 📘 Smart Bookmark App

## 🚀 Problem Statement

Managing useful links across different browsers and devices can be difficult and insecure.
This project solves that problem by providing a **secure, real-time personal bookmark manager** where users can save, view, and delete their bookmarks privately.

Each user can access only their own bookmarks, and updates are reflected instantly across multiple tabs using real-time synchronization.

---

## ✨ Features Implemented

* 🔐 Google OAuth authentication using Supabase
* 👤 Private bookmarks per user (Row Level Security)
* ➕ Add new bookmarks
* 🗑 Delete bookmarks
* ⚡ Real-time updates across tabs
* 📱 Responsive design (mobile, tablet, desktop)
* 🔔 Toast notifications for user feedback
* 🎨 Clean modern UI with Tailwind CSS

---

## 🧠 Tech Stack

**Frontend**

* Next.js (App Router)
* React.js
* Tailwind CSS
* Lucide React (icons)
* React Hot Toast

**Backend / Services**

* Supabase Authentication (Google OAuth)
* Supabase PostgreSQL
* Supabase Realtime
* Row Level Security (RLS)

---

## 🔐 Security

Row Level Security (RLS) policies ensure:

* Users can only view their own bookmarks
* Users can only insert their own bookmarks
* Users can only delete their own bookmarks

This guarantees complete data isolation between users.

---

## 📂 Project Structure

```
src/
 ├── app/
 │    ├── page.js
 │    └── dashboard/
 │         └── page.js
 │
 ├── components/
 │    ├── LoginButton.jsx
 │    ├── BookmarkForm.jsx
 │    └── BookmarkList.jsx
 │
 └── lib/
      └── supabase.js
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## 🖥️ Run Locally

```bash
# Clone the repository
git clone <>

# Navigate to project
cd smart-bookmark

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open:

```
http://localhost:3000
```

---

## 🌐 Live Demo

🔗 Live Site:https://smart-bookmark-app-eta-nine.vercel.app/
🔗 GitHub Repo: https://github.com/Omkar27-git/smart-bookmark-app

---

## 🧪 Realtime Behavior

* Open the app in two tabs
* Add or delete a bookmark in one tab
* The other tab updates automatically without refresh

---

## 📈 Approach

The application was built using a **component-driven architecture** with Supabase handling authentication, database, and realtime subscriptions.

Key focus areas:

* Secure per-user data isolation using RLS
* Clean and responsive UI
* Real-time synchronization across clients
* Maintainable and scalable folder structure

---

## 🙌 Author

**Omkar**

---



