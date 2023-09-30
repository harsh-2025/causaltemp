// // import React from "react";

// // function Result({ score, totalQuestions, email }) {
// //   return (
// //     <div className="result">
// //       <h2>Quiz Result</h2>
// //       <p>Hello, {email}!</p>
// //       <p>You have completed the quiz.</p>
// //       <p>Your Score: {score} / {totalQuestions}</p>
// //       <p>
// //         {score === totalQuestions
// //           ? "Congratulations! You got all the questions correct."
// //           : "Well done! You've completed the quiz."}
// //       </p>
// //       <p>Thank you for participating!</p>
// //     </div>
// //   );
// // }

// // export default Result;
// import React from "react";

// function Result({ score, totalQuestions, email, quizData }) {
//   // Calculate the percentage score
//   const percentageScore = (score / totalQuestions) * 100;

//   return (
//     <div className="result">
//       <h1>Quiz Result</h1>
//       <p>Email: {email}</p>
//       <p>Total Questions: {totalQuestions}</p>
//       <p>Score: {score}</p>
//       <p>Percentage Score: {percentageScore}%</p>

//       {/* Display the analysis for each question */}
//       {/* <div className="result-analysis">
//         {quizData.map((questionData, index) => (
//           <div key={index} className="question-analysis">
//             <h3>Question {index + 1}</h3>
//             <p>{questionData.question}</p>
//             <p>Options: {questionData.options.join(", ")}</p>
//             <p>Correct Answer: {questionData.answer}</p>
//             <p>User Selected Option: {questionData.userSelectedOption}</p>
//             <p>Marks Obtained: {questionData.marksObtained}</p>
//           </div>
//         ))}
//       </div> */}
//       <div className="result-analysis">
//   {quizData && quizData.length > 0 ? (
//     quizData.map((questionData, index) => (
//       <div key={index} className="question-analysis">
//         {/* Render question details here */}
//         <h3>Question {index + 1}</h3>
//             <p>{questionData.question}</p>
//             <p>Options: {questionData.options.join(", ")}</p>
//             <p>Correct Answer: {questionData.answer}</p>
//             <p>User Selected Option: {questionData.userSelectedOption}</p>
//             <p>Marks Obtained: {questionData.marksObtained}</p>
//       </div>
//     ))
//   ) : (
//     <p>No quiz data available</p>
//   )}
// </div>

//     </div>
//   );
// }

// export default Result;

import React, { useState } from "react";
import { Link } from "react-router-dom";
function getOptionLetter(index) {
  return String.fromCharCode(65 + index);
}
function Result({ score, totalQuestions, email, quizData, analysisData }) {
  // State variable to control the visibility of the result
  const [showResult, setShowResult] = useState(false);
  const totalQuestionsAttempted = analysisData.filter(
    (questionData) => questionData.userSelectedOption !== ""
  ).length;
  // Function to toggle the visibility of the result
  const toggleResult = () => {
    setShowResult(!showResult);
  };
  const reattemptQuiz = () => {
    // Refresh the page after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="result">
      <h1>Result</h1>
      <p>Email: {email}</p>
      <p>Score: {score}</p>

      <p>Total Questions: {totalQuestions}</p>

      {/* Button to show/hide the result */}
      <button onClick={toggleResult}>
        {showResult ? "Hide Result" : "Show Result"}
      </button>
      <button onClick={reattemptQuiz}>Reattempt Quiz</button>

{/* Add a link to navigate back to the quiz */}


      {/* Display the analysis only when showResult is true */}
      {showResult && (
       
        <div className="result-analysis">
  {quizData.map((questionData, index) => (
    <div key={index} className="question-analysis">
      <h3>Question {index + 1}</h3>
      <p>{questionData.question}</p>
      <p>Options:</p>

              {questionData.options.map((option, optionIndex) => (
                // <li key={optionIndex}>
                //   {getOptionLetter(optionIndex)}: {option}
                // </li>
                <li
                key={optionIndex}
                className={
                  questionData.answer === option
                    ? "correct-answer"
                    : analysisData[index].userSelectedOption === option
                    ? "user-selected-answer"
                    : ""
                }
              >
                {getOptionLetter(optionIndex)}: {option}
              </li>
              ))}

        {/* {questionData.options.join(", ")}</p> */}
      <p>Correct Answer: {questionData.answer}</p>
      <p>User Selected Answer: {analysisData[index].userSelectedOption}</p>
      <p>Marks Obtained: {analysisData[index].marksObtained}</p>
      <hr></hr>
    </div>
  ))}
</div>

      )}
    </div>
  );
}

export default Result;
