# QuestionCard Logic (Pseudocode)

## Выбор ответа
onSelectAnswer(answer):
    selectedAnswer = answer
    enable CheckAnswerButton

## Проверка ответа
onCheckAnswer():
    if selectedAnswer:
        isChecked = true
        show Explanation
        disable CheckAnswerButton
        disable AnswerOptions

## Смена вопроса
onQuestionChange():
    selectedAnswer = null
    isChecked = false
    enable CheckAnswerButton
    enable AnswerOptions