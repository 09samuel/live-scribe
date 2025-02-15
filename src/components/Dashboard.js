import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const handleTranscribe = () => {
        window.electron.send("open-overlay"); // Secure IPC call
    };

    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <button onClick={handleTranscribe}>Transcribe</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
