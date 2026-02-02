props: explanation, show, demoMode

render:
  if !show: render null
  else if demoMode: <DemoOverlay />
  else if explanation exists: render explanation
  else: display "Объяснение недоступно"