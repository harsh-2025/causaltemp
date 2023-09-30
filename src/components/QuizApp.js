// // import React, { useState, useEffect } from "react";
// // import axios from "axios";


// // import StartPage from "./StartPage";
// // import Question from "./Question";
// // import Result from "./Result";
// // import Timer from "./Timer";
// // import QuestionNavigation from "./QuestionNavigation"; // Import the QuestionNavigation component
// // import QuestionIndexBar from "./QuestionIndexBar";
// // import QuestionNumberBox from "./QuestionNumberBox";
// // import SubmitPopup from "./SubmitPopup";

// // function QuizApp() {
// //     const totalQuestions = 15;
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //     const [userAnswers, setUserAnswers] = useState([]);
// //     const [showSubmitPopup, setShowSubmitPopup] = useState(false);

// //   const [score, setScore] = useState(0);
// //     const [email, setEmail] = useState("");
// //     const [showAnalysis, setShowAnalysis] = useState(false);

// //   const [quizStarted, setQuizStarted] = useState(false);
// //   const [quizInProgress, setQuizInProgress] = useState(false);
// //   const [visitedQuestions, setVisitedQuestions] = useState([]);

// // const [attemptedQuestions, setAttemptedQuestions] = useState(
// //     Array.from({ length: totalQuestions }, () => false)
// //   );
// //   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
// //   const [quizData, setQuizData] = useState([]); // Store fetched quiz questions

// //   const calculateAnalysis = () => {
// //     const analysis = quizData.map((questionData, index) => {
// //       const userSelectedOption = userAnswers[index];
// //       const isCorrect = userSelectedOption === questionData.answer;
// //       const marksObtained = isCorrect ? 1 : 0;

// //       return {
// //         question: questionData.question,
// //         options: questionData.options,
// //         correctAnswer: questionData.answer,
// //         userSelectedOption,
// //         marksObtained,
// //       };
// //     });

// //     return analysis;
// //   };

// //   const handleStartQuiz = async (userEmail) => {
// //     setEmail(userEmail);
// //     setQuizStarted(true);
// //     setVisitedQuestions(new Array(quizData.length).fill(false));
// //     setAttemptedQuestions(new Array(quizData.length).fill(false));
// //     // Fetch quiz questions from the API
// //     try {
// //       const response = await axios.get(
// //         "https://opentdb.com/api.php?amount=15"
// //       );
// //       const fetchedQuestions = response.data.results;

// //       // Process the fetched data to create quizData array
// //       const formattedQuestions = fetchedQuestions.map((question) => {
// //         const options = [...question.incorrect_answers, question.correct_answer];
// //         return {
// //           question: question.question,
// //           options: options.sort(() => Math.random() - 0.5), // Shuffle options
// //           answer: question.correct_answer,
// //         };
// //       });

// //       setQuizData(formattedQuestions);
// //       setQuizInProgress(true); // Start the quiz after fetching questions
// //       setVisitedQuestions(new Array(formattedQuestions.length).fill(false));
// //       setAttemptedQuestions(new Array(formattedQuestions.length).fill(false));
// //     } catch (error) {
// //       console.error("Error fetching quiz questions:", error);
// //     }
// //   };
  
  

// // const handleAnswerClick = (selectedAnswer) => {
// //     // Check if the selected answer is correct
// //     if (selectedAnswer === quizData[currentQuestion].answer) {
// //       setScore(score + 1);
// //     }
  
// //     // Mark the current question as attempted
// //     const updatedAttemptedQuestions = [...attemptedQuestions];
// //     updatedAttemptedQuestions[currentQuestion] = true;
// //     setAttemptedQuestions(updatedAttemptedQuestions);
  
// //     // Move to the next question
// //     setCurrentQuestion(currentQuestion + 1);
  
// //     // Mark the next question as visited
// //     if (currentQuestion + 1 < quizData.length) {
// //       const updatedVisitedQuestions = [...visitedQuestions];
// //       updatedVisitedQuestions[currentQuestion + 1] = true;
// //       setVisitedQuestions(updatedVisitedQuestions);
// //     }
// //   };
  

// // const handleOptionClick = (selectedAnswer) => {
// //     if (currentQuestion === totalQuestions - 1) {
// //       // Show the submit popup for the last question
// //       setShowSubmitPopup(true);
// //     } else {
// //       // Handle other question clicks (e.g., update answers, move to the next question)
// //       // Update answers, e.g., set selectedAnswer in your state
// //       // ...
  
// //       // Move to the next question
// //       if (currentQuestion + 1 < totalQuestions) {
// //         setCurrentQuestion(currentQuestion + 1);
// //       }
      
// //       // Check if all questions are attempted, and if so, show the submit popup
// //       const allQuestionsAttempted = attemptedQuestions.every((attempted) => attempted);
// //       if (allQuestionsAttempted) {
// //         setShowSubmitPopup(true);
// //       }
// //     }
// //   };
  
  
// //   const handlePopupSubmit = () => {
// //     // Handle the submission logic, e.g., calculate the score
// //     // ...
  
// //     // Close the popup
// //     setShowSubmitPopup(false);
// //   };
  
// //   const handlePopupContinue = () => {
// //     // Handle continuing to the next question
// //     // You can close the popup and move to the next question here
// //     setShowSubmitPopup(false);
  
// //     // Move to the next question
// //     if (currentQuestion + 1 < totalQuestions) {
// //       setCurrentQuestion(currentQuestion + 1);
// //     }
// //   };
  
// //   const handleQuizTimeout = () => {
// //     // Auto-submit the quiz when the timer reaches zero
// //     setQuizInProgress(false);
// //   };

// //   const handleQuestionNavigation = (index) => {
// //     setSelectedQuestionIndex(index);
// //     setCurrentQuestion(index); // Update the current question
// //   };

// //   return (
// //     <div className="quiz-app">
// //       {!quizStarted ? (
// //         <StartPage onStartQuiz={handleStartQuiz} />
// //       ) : currentQuestion < quizData.length && quizInProgress ? (
// //         <>
// //           <h1>Quiz</h1>
// //           <Timer onTimeout={handleQuizTimeout} />
// //           <QuestionNavigation
// //             quizData={quizData}
// //             currentQuestion={currentQuestion}
// //             onSelectQuestion={handleQuestionNavigation}
// //           />
// //           <Question
// //   question={quizData[currentQuestion].question}
// //   options={quizData[currentQuestion].options}
// //   onAnswerClick={handleAnswerClick}
// //   selectedQuestionIndex={selectedQuestionIndex}
// //   visitedQuestions={visitedQuestions}
// //   attemptedQuestions={attemptedQuestions}
// //   currentQuestionIndex={currentQuestion}
// //                       />
// //                       <SubmitPopup
// //         isOpen={showSubmitPopup}
// //         onRequestClose={() => setShowSubmitPopup(false)}
// //         onSubmit={handlePopupSubmit}
// //         onContinue={handlePopupContinue}
// //       />

// //                       <QuestionNumberBox
// //   totalQuestions={totalQuestions}
// //   currentQuestion={currentQuestion}
// //   onQuestionClick={handleQuestionNavigation}
// //   attemptedQuestions={attemptedQuestions}
// // />

// //         </>
// //       ) : (
// //         <Result score={score} totalQuestions={quizData.length} email={email} quizData={quizData}/>
// //       )}
// //     </div>
// //   );
// // }

// // export default QuizApp;
// // // score, totalQuestions, email, quizData

import React, { useState, useEffect } from "react";
import axios from "axios";

import StartPage from "./StartPage";
import Question from "./Question";
import Result from "./Result";
import Timer from "./Timer";
import QuestionNavigation from "./QuestionNavigation"; // Import the QuestionNavigation component
import QuestionNumberBox from "./QuestionNumberBox";
import SubmitPopup from "./SubmitPopup";

function QuizApp() {
  const totalQuestions = 15;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const handleShowResultClick = () => {
    setShowResult(true);
  };
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizInProgress, setQuizInProgress] = useState(false);
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState(
    Array.from({ length: totalQuestions }, () => false)
  );
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [quizData, setQuizData] = useState([]); // Store fetched quiz questions

  // State variable to control the visibility of the analysis
  const [showAnalysis, setShowAnalysis] = useState(false);

  // State variable to store the analysis data
//   const [analysisData, setAnalysisData] = useState([]);

  // Function to calculate the detailed analysis
  const calculateAnalysis = () => {
    const analysis = quizData.map((questionData, index) => {
      const userSelectedOption = userAnswers[index];
      const isCorrect = userSelectedOption === questionData.answer;
      const marksObtained = isCorrect ? 1 : 0;

      return {
        question: questionData.question,
        options: questionData.options,
        correctAnswer: questionData.answer,
        userSelectedOption,
        marksObtained,
      };
    });

    return analysis;
  };

  const handleStartQuiz = async (userEmail) => {
    setEmail(userEmail);
    setQuizStarted(true);
    setVisitedQuestions(new Array(quizData.length).fill(false));
    setAttemptedQuestions(new Array(quizData.length).fill(false));
    // Fetch quiz questions from the API
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=15"
      );
      const fetchedQuestions = response.data.results;

      // Process the fetched data to create quizData array
      const formattedQuestions = fetchedQuestions.map((question) => {
        const options = [...question.incorrect_answers, question.correct_answer];
        return {
          question: question.question,
          options: options.sort(() => Math.random() - 0.5), // Shuffle options
          answer: question.correct_answer,
        };
      });

      setQuizData(formattedQuestions);
      setQuizInProgress(true); // Start the quiz after fetching questions
      setVisitedQuestions(new Array(formattedQuestions.length).fill(false));
      setAttemptedQuestions(new Array(formattedQuestions.length).fill(false));
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    // Check if the selected answer is correct
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const isCorrect = selectedAnswer === quizData[currentQuestion].answer;
    const currentQuestionData = quizData[currentQuestion];

    // Update analysisData with user's choice and marks obtained
    const updatedAnalysisData = [...analysisData];
    updatedAnalysisData[currentQuestion] = {
      userSelectedOption: selectedAnswer,
      marksObtained: isCorrect ? 1 : 0, // Assuming 1 mark for a correct answer, 0 for incorrect
    };
  //   const updatedAnalysisData = [...analysisData];
  // updatedAnalysisData[currentQuestion] = {
  //   ...currentQuestionData,
  //   userSelectedOption: selectedAnswer,
  // };
    setAnalysisData(updatedAnalysisData);

    // Mark the current question as attempted
    const updatedAttemptedQuestions = [...attemptedQuestions];
    updatedAttemptedQuestions[currentQuestion] = true;
    setAttemptedQuestions(updatedAttemptedQuestions);

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);

    // Mark the next question as visited
    if (currentQuestion + 1 < quizData.length) {
      const updatedVisitedQuestions = [...visitedQuestions];
      updatedVisitedQuestions[currentQuestion + 1] = true;
      setVisitedQuestions(updatedVisitedQuestions);
    }
  };

  const handleOptionClick = (selectedAnswer) => {
    if (currentQuestion === totalQuestions - 1) {
      // Show the submit popup for the last question
      setShowSubmitPopup(true);
    } else {
      // Handle other question clicks (e.g., update answers, move to the next question)
      // Update answers, e.g., set selectedAnswer in your state
      // ...

      // Move to the next question
      if (currentQuestion + 1 < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
      }

      // Check if all questions are attempted, and if so, show the submit popup
      const allQuestionsAttempted = attemptedQuestions.every(
        (attempted) => attempted
      );
      if (allQuestionsAttempted) {
        setShowSubmitPopup(true);
      }
    }
  };

  const handlePopupSubmit = () => {
    // Handle the submission logic, e.g., calculate the score
    // ...

    // Calculate and store the analysis data
    const analysis = calculateAnalysis();
    setAnalysisData(analysis);

    // Close the popup
    setShowSubmitPopup(false);

    // Show the analysis when the popup is closed
      setShowAnalysis(true);
      setShowResult(true);

  };

  const handlePopupContinue = () => {
    // Handle continuing to the next question
    // You can close the popup and move to the next question here
    setShowSubmitPopup(false);

    // Move to the next question
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setShowResult(false);

  };
  const [analysisData, setAnalysisData] = useState(
    Array.from({ length: totalQuestions }, () => ({
      userSelectedOption: null,
      marksObtained: 0,
    }))
  );
  const handleQuizTimeout = () => {
    // Auto-submit the quiz when the timer reaches zero
    setQuizInProgress(false);

    // Calculate and store the analysis data
    const analysis = calculateAnalysis();
    setAnalysisData(analysis);

    // Show the analysis when the quiz times out
    setShowAnalysis(true);
  };

  const handleQuestionNavigation = (index) => {
    setSelectedQuestionIndex(index);
    setCurrentQuestion(index); // Update the current question
  };

  return (
    <div className="quiz-app">
      {!quizStarted ? (
        <StartPage onStartQuiz={handleStartQuiz} />
      ) : currentQuestion < quizData.length && quizInProgress ? (
        <>
          <h1>Quiz</h1>
          <Timer onTimeout={handleQuizTimeout} />
          <QuestionNavigation
            quizData={quizData}
            currentQuestion={currentQuestion}
            onSelectQuestion={handleQuestionNavigation}
          />
                      <Question
                                  // onShowResultClick={handleShowResultClick} // Pass the function to the Question component

            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            onAnswerClick={handleAnswerClick}
            // selectedQuestionIndex={selectedQuestionIndex}
            selectedOptions={userAnswers[currentQuestion] || []} // Ensure selectedOptions is defined

            visitedQuestions={visitedQuestions}
            attemptedQuestions={attemptedQuestions}
            currentQuestionIndex={currentQuestion}
          />
          <SubmitPopup
            isOpen={showSubmitPopup}
            onRequestClose={() => setShowSubmitPopup(false)}
            onSubmit={handlePopupSubmit}
            onContinue={handlePopupContinue}
          />
          <QuestionNumberBox
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
            onQuestionClick={handleQuestionNavigation}
            attemptedQuestions={attemptedQuestions}
          />
          {showAnalysis && (
            <Result
                score={score}
                index={currentQuestion}
              totalQuestions={quizData.length}
              email={email}
              quizData={quizData}
              analysisData={analysisData}
            />
          )}
        </>
      ) : (
//         <Result
//   score={score}
//   totalQuestions={quizData.length}
//   email={email}
//   quizData={quizData}
//   analysisData={analysisData}
//   showResult={showResult} // Pass the showResult state
// />
<Result
score={score}
totalQuestions={quizData.length}
email={email}
quizData={quizData}
analysisData={analysisData}
/>

      )}
    </div>
  );
}

export default QuizApp;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import StartPage from "./StartPage";
// import Question from "./Question";
// import Result from "./Result";
// import Timer from "./Timer";
// import QuestionNavigation from "./QuestionNavigation";
// import QuestionIndexBar from "./QuestionIndexBar";
// import QuestionNumberBox from "./QuestionNumberBox";
// import SubmitPopup from "./SubmitPopup";

// function QuizApp() {
//   const totalQuestions = 15;
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [showSubmitPopup, setShowSubmitPopup] = useState(false);
//   const [score, setScore] = useState(0);
//   const [email, setEmail] = useState("");
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [quizInProgress, setQuizInProgress] = useState(false);
//   const [visitedQuestions, setVisitedQuestions] = useState([]);
//   const [attemptedQuestions, setAttemptedQuestions] = useState(
//     Array.from({ length: totalQuestions }, () => false)
//   );
//   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
//   const [quizData, setQuizData] = useState([]);
//   const [showResultPage, setShowResultPage] = useState(false); // Track whether to show the result page

//   const handleStartQuiz = async (userEmail) => {
//     setEmail(userEmail);
//     setQuizStarted(true);
//     setVisitedQuestions(new Array(totalQuestions).fill(false));
//     setAttemptedQuestions(new Array(totalQuestions).fill(false));
//     // Fetch quiz questions from the API
//     try {
//       const response = await axios.get(
//         "https://opentdb.com/api.php?amount=15"
//       );
//       const fetchedQuestions = response.data.results;

//       // Process the fetched data to create quizData array
//       const formattedQuestions = fetchedQuestions.map((question) => {
//         const options = [...question.incorrect_answers, question.correct_answer];
//         return {
//           question: question.question,
//           options: options.sort(() => Math.random() - 0.5),
//           answer: question.correct_answer,
//         };
//       });

//       setQuizData(formattedQuestions);
//       setQuizInProgress(true);
//       setVisitedQuestions(new Array(formattedQuestions.length).fill(false));
//       setAttemptedQuestions(new Array(formattedQuestions.length).fill(false));
//     } catch (error) {
//       console.error("Error fetching quiz questions:", error);
//     }
//   };

//   const handleAnswerClick = (selectedAnswer) => {
//     if (selectedAnswer === quizData[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     const updatedAttemptedQuestions = [...attemptedQuestions];
//     updatedAttemptedQuestions[currentQuestion] = true;
//     setAttemptedQuestions(updatedAttemptedQuestions);

//     setCurrentQuestion(currentQuestion + 1);

//     if (currentQuestion + 1 < quizData.length) {
//       const updatedVisitedQuestions = [...visitedQuestions];
//       updatedVisitedQuestions[currentQuestion + 1] = true;
//       setVisitedQuestions(updatedVisitedQuestions);
//     }
//   };

//   const handleOptionClick = (selectedAnswer) => {
//     if (currentQuestion === totalQuestions - 1) {
//       setShowSubmitPopup(true);
//     } else {
//       if (currentQuestion + 1 < totalQuestions) {
//         setCurrentQuestion(currentQuestion + 1);
//       }

//       const allQuestionsAttempted = attemptedQuestions.every(
//         (attempted) => attempted
//       );
//       if (allQuestionsAttempted) {
//         setShowSubmitPopup(true);
//       }
//     }
//   };

//   const handlePopupSubmit = () => {
//     setShowSubmitPopup(false);
//     setShowResultPage(true); // Show the result page after submission
//   };

//   const handlePopupContinue = () => {
//     setShowSubmitPopup(false);

//     if (currentQuestion + 1 < totalQuestions) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleQuizTimeout = () => {
//     setQuizInProgress(false);
//     setShowResultPage(true); // Automatically show the result page on timeout
//   };

//   const handleQuestionNavigation = (index) => {
//     setSelectedQuestionIndex(index);
//     setCurrentQuestion(index);
//   };

//   return (
//     <div className="quiz-app">
//       <div className="submit-button-container">
//         {currentQuestion === totalQuestions - 1 && !showResultPage && (
//           <button onClick={handlePopupSubmit}>Submit</button>
//         )}
//       </div>

//       {!quizStarted ? (
//         <StartPage onStartQuiz={handleStartQuiz} />
//       ) : currentQuestion < quizData.length && quizInProgress ? (
//         <>
//           <h1>Quiz</h1>
//           <Timer onTimeout={handleQuizTimeout} />
//           <QuestionNavigation
//             quizData={quizData}
//             currentQuestion={currentQuestion}
//             onSelectQuestion={handleQuestionNavigation}
//           />
//           <Question
//             question={quizData[currentQuestion].question}
//             options={quizData[currentQuestion].options}
//             onAnswerClick={handleAnswerClick}
//             selectedQuestionIndex={selectedQuestionIndex}
//             visitedQuestions={visitedQuestions}
//             attemptedQuestions={attemptedQuestions}
//             currentQuestionIndex={currentQuestion}
//           />
//           <SubmitPopup
//             isOpen={showSubmitPopup}
//             onRequestClose={() => setShowSubmitPopup(false)}
//             onSubmit={handlePopupSubmit}
//             onContinue={handlePopupContinue}
//           />
//           <QuestionNumberBox
//             totalQuestions={totalQuestions}
//             currentQuestion={currentQuestion}
//             onQuestionClick={handleQuestionNavigation}
//             attemptedQuestions={attemptedQuestions}
//           />
//         </>
//       ) : (
//         showResultPage && (
//           <Result
//             score={score}
//             totalQuestions={quizData.length}
//             email={email}
//             quizData={quizData}
//           />
//         )
//       )}
//     </div>
//   );
// }

// export default QuizApp;
