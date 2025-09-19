# 🌗 Theme Switcher using React Context + Tailwind

A simple mini project demonstrating how to use **React Context API** to manage and toggle between **Light** 🌞 and **Dark** 🌙 themes with Tailwind CSS.

---

## 📸 Screenshot
  Ligth Theme

  <img width="1909" height="1007" alt="image" src="https://github.com/user-attachments/assets/03a00332-8f22-4b96-ad96-0a45cb272310" />

  Dark Theme

  <img width="1907" height="994" alt="image" src="https://github.com/user-attachments/assets/806f8d0b-9ac6-419b-af95-4de3487f40a5" />
---

## 🚀 Features
- ✅ Global theme management with **React Context API**  
- ✅ Smooth Light/Dark theme switching  
- ✅ Tailwind CSS utility classes for fast styling  
- ✅ Responsive and modern UI  

---

## 🛠️ Tech Stack
- [React](https://react.dev/) ⚛️  
- [Tailwind CSS](https://tailwindcss.com/) 🎨  
- Context API for state management  

---

## 📂 Project Structure
    src
    ├── Components
    
       ├── Button.jsx # Theme toggle buttons
       └── Card.jsx # Demo card with theme-aware styling
    
    ├── Contexts
    
       ├── ThemeContext.js
       └── ThemeContextProvider.jsx
    
    ├── App.jsx
    
    └── index.js

🎮 How it works

The ThemeContextProvider wraps the app and manages the theme (light or dark).

When you click on the buttons, it updates the theme and applies the correct Tailwind classes to <html>.

The UI updates instantly with smooth transitions.
### Note: Don't forget to add " @custom-variant dark (&:where(.dark, .dark *)); " in input.css
