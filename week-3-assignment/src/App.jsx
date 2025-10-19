import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./utility/ThemeContext";
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
  //const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
          <ThemeSwitcher />  {/* Add the toggle here */}
          <nav className="flex gap-4">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/tasks">Tasks</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
