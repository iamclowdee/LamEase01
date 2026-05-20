import { useState } from "react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <nav>
        <div className="logo">
        <h1><a href="/">LamEase</a></h1>
        </div>
        <div className="nav-links">
            <li>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Process</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </li>
        </div>
        <div className="nav-buttons">
            <button onClick={() => setDarkMode(!darkMode)} 
                    className="theme-button">
                    {darkMode ? "☀️" : "🌑"}
            </button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar