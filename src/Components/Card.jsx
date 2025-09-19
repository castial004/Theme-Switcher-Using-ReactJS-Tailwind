function Card() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-2xl shadow-xl 
                    bg-white dark:bg-gray-900 dark:text-white 
                    transition-all duration-500">
      <h1 className="text-2xl font-bold text-center mb-3">
        🎨 Theme Switcher Demo
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Toggle between Light 🌞 and Dark 🌙 modes using Context API.
      </p>
    </div>
  );
}

export default Card;
