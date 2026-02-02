# QuestionCard Architecture

## Структура компонентов
QuestionCard
├── QuestionStem (TipTapRenderer)
├── AnswerOptions
├── ActionBar (Check Answer)
├── Explanation (conditional)

## Состояние
- selectedAnswer → хранится в QuestionCard (локально)
- isChecked → хранится в QuestionCard (локально)

## Логика сброса
- При смене questionId:
    - selectedAnswer = null
    - isChecked = false

## Быстрые клики
- Кнопки AnswerOptions и CheckAnswer временно disabled, пока обработка не завершена