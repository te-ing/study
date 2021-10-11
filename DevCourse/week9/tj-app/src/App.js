import Box from "./components/Box";
import useToggle from "./hooks/useToggle";
import useHover from "./hooks/useHover";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [on, toggle]  = useToggle();
  const [ref, isHover] = useHover();
  const keyPressed = useKeyPress('a');
  return (
    <div>
      <button onClick={toggle}>{on ? 'True':'False'}</button>

      {isHover ? 'hover':'mouseout'}
      <Box ref={ref}/>

      {keyPressed && "Pressed"}
    </div>
  );
}

export default App;

