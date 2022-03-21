import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ items, onDeleteQuestion, onUpdateAnswer }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {items.map((item =>
          <QuestionItem
            key={item.id}
            question={item}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateAnswer={onUpdateAnswer}
          />))}
      </ul>
    </section>
  );
}

export default QuestionList;
