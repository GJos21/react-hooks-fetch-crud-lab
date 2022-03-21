import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log("fetch questions")
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((items) => setQuestions(items));
  }, []);

  function handleNewQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedId) {
    const updatedList = questions.filter((item) =>
      item.id !== deletedId
    )
    setQuestions(updatedList);
  }

  function handleUpdateAnswer(id, correctAnswer) {
    questions.map((item) =>
      item.id === id
        ? { ...item, "correctIndex": correctAnswer }
        : item
    )

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form"
        ? <QuestionForm onNewQuestion={handleNewQuestion} />
        : <QuestionList
          items={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateAnswer={handleUpdateAnswer}
        />}
    </main>
  );
}

export default App;
