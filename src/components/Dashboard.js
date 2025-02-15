// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
        
//     };

//     const openOverlay = () => {
//         if (window.electron) {
//           window.electron.openOverlay(); // Call IPC function
//         } else {
//           console.warn("Electron API not available");
//         }
//     };

//     return (
//         <div>
//             <h2>Welcome to the Dashboard</h2>
//             <button onClick={openOverlay}>Transcribe</button>
            
//         </div>
//     );
// };

// export default Dashboard;



import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(true); // To show loading state

    const navigate = useNavigate();


    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";

        //localStorage.removeItem("token");
        //navigate("/");
    };


    const openOverlay = () => {
        if (window.electron) {
            window.electron.openOverlay(); // Call IPC function
        } else {
            console.warn("Electron API not available");
        }
    };


    // Fetch user info from the API (simulating a backend call)
    useEffect(() => {
        const fetchUserData = async () => {
            // Assuming you have an API endpoint to get user details
            const token = localStorage.getItem("token"); // Use token to authenticate the request
            try {
                const response = await fetch("/api/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach token in the header
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserName(data.name); // Assuming the response has a 'name' field
                } else {
                    console.error("Failed to fetch user data");
                    setUserName("Guest"); // Default to "Guest" if the API call fails
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUserName("Guest");
            } finally {
                setLoading(false); // Stop loading once the data is fetched
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2 className="logo">LiveScribe</h2>
                <nav>
                    <ul>
                        <li className="nav-item" onClick={openOverlay}>
                            <i className="bi bi-chat-left-text" ></i> Transcript
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-file-earmark-bar-graph"></i> Summary
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-gear"></i> History
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-question-circle"></i> Support & Guide
                        </li>
                    </ul>
                </nav>
                <button className="logout-btn" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i> Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <div className="header">
                    <h1>Start Your Transcript.</h1>
                    <div className="user-info">
                        {/* Profile Section */}
                        <div className="profile">
                            <span>
                                {loading ? "Loading..." : userName || "Guest"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Upload Box */}
                <div className="upload-box">
                    <i className="bi bi-play-circle-fill"></i>
                    <p>Start</p>
                    <i className="bi bi-stop-circle"></i>
                    <p className="file-size">Stop</p>
                </div>

                {/* Recent Articles */}
                <div className="articles-container">
                    {[].map((article, index) => (
                        <div key={index} className="article">
                            <h3>{article.title}</h3>
                            <p>{article.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;