# 🚀 Task 6: Modern Responsive Blog Application

## 🎯 Overview
A fully responsive, modern React blog application built with **Vite** and **TypeScript**. This project demonstrates advanced front-end architecture, utilizing **Redux Toolkit** for state management, **React Router (RouterProvider)** for navigation, and pure **Tailwind CSS** for styling and theming.

## ✨ Core Features

### 🌗 1. Native Dark & Light Mode
- Implemented Dark/Light mode entirely using **Tailwind CSS** classes (`dark:` variant).
- Zero external libraries or pure CSS files were used, keeping the bundle size light and the styling consistent.

### 📱 2. Pixel-Perfect Responsiveness
- The application layout adapts seamlessly to all screen sizes (Mobile, Tablet, and Desktop).
- Built completely without standard `.css` files, relying strictly on Tailwind's utility classes for structural and responsive design.

### 🧠 3. Advanced State Management (Redux)
- Managed the entire application state using **Redux Toolkit**.
- The store holds a mock JSON array of **20 detailed blog posts**.
- **Data Structure:** Each post is structured properly with a main image, categories, and content sections (each containing text and an image).

### 🔢 4. Custom Pagination System
- Built a dynamic, custom pagination system from scratch.
- **No external pagination libraries** were used. The logic (slicing arrays, calculating total pages, and tracking current pages) is entirely handled within the Redux reducers.
- Features isolated state management, allowing different sections to paginate independently.

### 🏗️ 5. Clean Architecture & Component Design
- Scalable folder structure and reusable React components.
- Strong typed data passing using **TypeScript Props** and Interfaces.
- Clean routing architecture using React Router's new `createBrowserRouter` (RouterProvider).

## 💻 Tech Stack
- **Framework:** React 18 (via Vite)
- **Language:** TypeScript
- **State Management:** Redux Toolkit (RTK)
- **Routing:** React Router DOM (v6)
- **Styling:** Tailwind CSS

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/rashahatoum/task-6-adv.git](https://github.com/rashahatoum/task-6-adv.git)