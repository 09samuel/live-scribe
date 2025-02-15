import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







// import React, { useState } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import "./App.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div className="app-container">
//       <div className="left-side">
//         {/* Combined Login and Register inside one block */}
//         <div className="auth-block">
//           <Login setIsAuthenticated={setIsAuthenticated} />
//           <Register />
//         </div>
//       </div>
//       <div className="right-side">
//         <h1>LiveScribe</h1>
//         <p className="welcome-text">Real-time speech-to-text transcript with a beautiful and intuitive interface</p>
//         <p className="new-line">
//           <i className="bi bi-mic"></i> Live transcript with high accuracy
//         </p>
//         <p className="new-line">
//           <i className="bi bi-mic"></i> Save and manage your transcripts
//         </p>
//         <p className="new-line">
//           <i className="bi bi-mic"></i> Easy to use interface
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;