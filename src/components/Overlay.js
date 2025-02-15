import React, { useState, useEffect } from "react";

const Overlay = () => {
    const [transcribedText, setTranscribedText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://localhost:5001/update")  // Fetch from Flask server
                .then(response => response.json())
                .then(data => setTranscribedText(data.text))
                .catch(error => console.error("Error fetching text:", error));
        }, 500); // Poll every 500ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center"
        }}>
            {transcribedText || "Listening..."}
        </div>
    );
};

export default Overlay;
