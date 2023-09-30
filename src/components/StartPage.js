import React, { useState } from "react";

function StartPage({ onStartQuiz }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the email address if needed
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    // Pass the email address to the parent component
    onStartQuiz(email);
  };

  return (
    <div className="start-page">
      <h1>Welcome to the Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}

export default StartPage;
