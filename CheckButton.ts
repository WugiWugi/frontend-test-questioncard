props: disabled, onClick, loading

render:
  button:
    text: "Check Answer"
    disabled if disabled
    loading spinner if loading
    onClick -> onClick