state:
  selectedAnswerId = null
  isChecked = false
  isChecking = false
  showExplanation = false

props:
  questionId
  questionData { stem, answers[], explanation }
  userMode ('normal' | 'demo')

handlers:
  onAnswerSelect(answerId)
  onCheckAnswer()
  onQuestionChange(newQuestionId)

render:
  <StemErrorBoundary>
    <QuestionStem stem={questionData.stem} />
  </StemErrorBoundary>
  <AnswerOptions 
    answers={questionData.answers} 
    selected={selectedAnswerId} 
    onSelect={onAnswerSelect} 
    disabled={isChecked} 
  />
  <ActionBar>
    <CheckButton 
      disabled={!selectedAnswerId || isChecking || isChecked} 
      onClick={onCheckAnswer} 
      loading={isChecking} 
    />
  </ActionBar>
  <Explanation 
    explanation={questionData.explanation} 
    show={showExplanation} 
    demoMode={userMode==='demo'} 
  />