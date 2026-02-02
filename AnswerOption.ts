props: answer, selected, onClick, disabled

render:
  button:
    text: answer.text
    highlighted if selected
    disabled if disabled
    onClick -> onClick