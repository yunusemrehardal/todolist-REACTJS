import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import {Container,Form,Button,ListGroup} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Container>
      <h1 className='mt-3'>To-Do</h1>
      <Form className="d-flex mt-3">
        <Form.Control className='me-2'/>
        <Button>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Form>
      <ListGroup className='mt-3'>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </Container>
    </div>
  );
}

export default App;
