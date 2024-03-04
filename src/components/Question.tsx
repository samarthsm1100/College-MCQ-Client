function Question({question}:{question:QuestionListProps}) {
  return (
    <div className="">
      <h1>Q.{question.index} {question.question_statement}</h1>
    </div>
  )
}

export default Question
