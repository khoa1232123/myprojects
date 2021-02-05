import './scss/styles.scss';
import { Container } from 'react-bootstrap';
import { Actions, ModalForm, ShowNotes, Title } from './components';

function App() {
  return (
    <Container className="wrapper">
      <Title />
      <Actions />
      <ShowNotes />
      <ModalForm />
    </Container>
  );
}

export default App;
