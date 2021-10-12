import styled from "@emotion/styled";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TaskProvider";

const Container = styled.div`
width: 400px;
margin: 0 auto;
`

function App() {
  return (
    <TaskProvider>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  )
}

export default App;
