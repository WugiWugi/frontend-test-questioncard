props: answers[], selected, onSelect, disabled

render:
  for each answer in answers:
    <AnswerOption 
      answer={answer} 
      selected={selected===answer.id} 
      onClick={() => onSelect(answer.id)} 
      disabled={disabled} 
    />