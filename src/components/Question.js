import React from "react";
import "../App.css"
// function Question({
//   question,
//   options,
//   onAnswerClick,
//   selectedQuestionIndex,
//   visitedQuestions,
//   attemptedQuestions,
//   currentQuestionIndex,
// }) {
//   return (
//     <div className="quiz-question">
//       <h2>Question {currentQuestionIndex + 1}</h2>
//       <p>{question}</p>
//       <div className="answer-options">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`answer ${
//               selectedQuestionIndex === index ? "selected" : ""
//             } ${visitedQuestions[index] ? "visited" : ""} ${
//               attemptedQuestions[index] ? "attempted" : ""
//             }`}
//             onClick={() => onAnswerClick(option)}
//           >
//             {option}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function Question({
//     question,
//     options,
//     onAnswerClick,
//     selectedOption,
//     currentQuestionIndex,
//   }) {
//     const optionLetters = ["A", "B", "C", "D"]; // Add more letters as needed
  
//     const handleOptionClick = (option) => {
//       // Call the parent component's onAnswerClick function to handle the selected option
//       onAnswerClick(option);
//     };
  
//     return (
//       <div className="quiz-question">
//         <h2>Question {currentQuestionIndex + 1}</h2>
//         <p>{question}</p>
//         <div className="answer-options">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className={`answer ${
//                 selectedOption === option ? "selected" : ""
//               }`}
//               onClick={() => handleOptionClick(option)}
//             >
//               <input
//                 type="radio"
//                 id={`option-${index}`}
//                 name={`question-${currentQuestionIndex}-option`}
//                 value={option}
//                 checked={selectedOption === option}
//                 readOnly
//               />
//               <label htmlFor={`option-${index}`}>
//                 {optionLetters[index]}. {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
// export default Question;

// import React from "react";

// import React, { useState } from "react";
import ResultButton from "./ResultButton"; // Import the ResultButton component
import { useState } from "react";
import SubmitDialog from "./SubmitDialog"; // Import the SubmitDialog component
// // import React, { useState } from "react";
// // import React, { useState } from "react";
// import React, { useState } from "react";

// import React, { useState } from "react";

// import React, { useState } from "react";



// export default Question;

// export default Question;

function Question({
  question,
  options,
  onAnswerClick,
  selectedOption,
  currentQuestionIndex,
  onNextQuestionClick,
}) {
  const optionLetters = ["A", "B", "C", "D"];
  const [isSubmitDialogOpen, setSubmitDialogOpen] = useState(false);

  // const handleOptionClick = (option) => {
  //   if (!selectedOption) {
  //     onAnswerClick(option);
  //   }
  // };
  const handleOptionClick = (option) => {
    if (!selectedOption) {
      onAnswerClick(option);
      // Add the 'selected-option' class to the clicked option
      document.getElementById(`option-${options.indexOf(option)}`).classList.add("selected-option");
    }
  };
  
  const handleSubmitClick = () => {
    if (selectedOption) {
      // Submit the answer and move to the next question
      onNextQuestionClick();
    } else {
      // Show a message or handle the case where the user hasn't selected an option
      alert("Please select an option before submitting.");
    }
  };

  return (
    <div className="quiz-question">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{question}</p>
      <div className="answer-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`answer ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            <input
              type="radio"
              id={`option-${index}`}
              name={`question-${currentQuestionIndex}-option`}
              value={option}
              checked={selectedOption === option}
              
            />
            <label htmlFor={`option-${index}`}>
              {optionLetters[index]}. {option}
            </label>
          </div>
        ))}
      </div>
      {/* <button onClick={handleSubmitClick}>Submit</button> */}
    </div>
  );
}

export default Question;

// function Question({
//   question,
//   options,
//   onAnswerClick,
//   selectedOption,
//   currentQuestionIndex,
// }) {
//   const optionLetters = ["A", "B", "C", "D"];
//   const [isSubmitDialogOpen, setSubmitDialogOpen] = useState(false); // State to control the dialog

//   const handleResultButtonClick = () => {
//     setSubmitDialogOpen(true); // Open the dialog when the Result button is clicked
//   };

//   const handleCancelSubmit = () => {
//     setSubmitDialogOpen(false); // Close the dialog when "Cancel" is clicked
//   };

//   const handleConfirmSubmit = () => {
//     // Implement your logic for submitting the quiz here
//     // For example, calculate the score and show the result
//     // ...

//     setSubmitDialogOpen(false); // Close the dialog after submission
//     // Move to the next question after submission
//     onAnswerClick(null); // Pass null as the selected option to move to the next question
//   };

//   const handleOptionClick = (option) => {
//     if (!selectedOption) {
//       // Only allow selecting an option if no option is already selected
//       onAnswerClick(option);
//     }
//   };

//   return (
//     <div className="quiz-question">
//       <h2>Question {currentQuestionIndex + 1}</h2>
//       <p>{question}</p>
//       <div className="answer-options">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`answer ${
//               selectedOption === option ? "selected" : ""
//             }`}
//             onClick={() => handleOptionClick(option)}
//           >
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${currentQuestionIndex}-option`}
//               value={option}
//               checked={selectedOption === option}
//               readOnly
//             />
//             <label htmlFor={`option-${index}`}>
//               {optionLetters[index]}. {option}
//             </label>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleResultButtonClick} className="result-button">
//         Result
//       </button>
//       <SubmitDialog
//         isOpen={isSubmitDialogOpen}
//         onCancel={handleCancelSubmit}
//         onConfirm={handleConfirmSubmit}
//       />
//     </div>
//   );
// }

// export default Question;

// function Question({
//   question,
//   options,
//   onAnswerClick,
//   selectedOption,
//   currentQuestionIndex,
// }) {
//   const optionLetters = ["A", "B", "C", "D"];
//   const [isSubmitDialogOpen, setSubmitDialogOpen] = useState(false); // State to control the dialog

//   const handleResultButtonClick = () => {
//     setSubmitDialogOpen(true); // Open the dialog when the Result button is clicked
//   };

//   const handleCancelSubmit = () => {
//     setSubmitDialogOpen(false); // Close the dialog when "Cancel" is clicked
//   };

//   const handleConfirmSubmit = () => {
//     // Implement your logic for submitting the quiz here
//     // For example, calculate the score and show the result
//     // ...

//     setSubmitDialogOpen(false); // Close the dialog after submission
//   };
//   const handleOptionClick = (option) => {
//     onAnswerClick(option);
//   };

//   return (
//     <div className="quiz-question">
//       <h2>Question {currentQuestionIndex + 1}</h2>
//       <p>{question}</p>
//       <div className="answer-options">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`answer ${
//               selectedOption === option ? "selected" : ""
//             }`}
//             onClick={() => handleOptionClick(option)}
//           >
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${currentQuestionIndex}-option`}
//               value={option}
//               checked={selectedOption === option}
//               readOnly
//             />
//             <label htmlFor={`option-${index}`}>
//               {optionLetters[index]}. {option}
//             </label>
//           </div>
//         ))}
//       </div>
//       <ResultButton onClick={handleResultButtonClick}/>
//       <SubmitDialog
//         isOpen={isSubmitDialogOpen}
//         onCancel={handleCancelSubmit}
//         onConfirm={handleConfirmSubmit}
//       />
//     </div>
//   );
// }




// export default Question;


















// import React from "react";

// function Question({

//   question,
//   options,
//   onAnswerClick,
//   selectedQuestionIndex,
//   visitedQuestions,
//   attemptedQuestions,
//   currentQuestionIndex,
//   onShowResultClick, // Add this prop
// })
// {
//   return (
//     <div className="question-container">
//       <div className="question-content">
//         {/* Question content */}
//         <p>{question}</p>
//         {/* Options */}
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`option ${
//               selectedQuestionIndex === currentQuestionIndex &&
//               visitedQuestions[currentQuestionIndex]
//                 ? option === attemptedQuestions[currentQuestionIndex]
//                   ? option === "correct_answer"
//                     ? "correct"
//                     : "incorrect"
//                   : option === "correct_answer"
//                   ? "correct"
//                   : ""
//                 : ""
//             }`}
//             onClick={() => onAnswerClick(option)}
//           >
//             {option}
//           </div>
//         ))}
//         {/* Show Result button */}
//         {currentQuestionIndex === 15 - 1 && (
//           <button className="show-result-button" onClick={onShowResultClick}>
//             Show Result
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Question;

