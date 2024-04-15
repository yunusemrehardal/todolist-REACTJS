import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {Container,Form,Button,ListGroup} from 'react-bootstrap'
import './App.css';
import { First } from 'react-bootstrap/esm/PageItem';

const sampleTodos=[
  {title: "Buy groceries", done: false},
  {title: "Do loundry", done: false},
  {title: "Walk the dog", done: true},
  {title: "Pay Bills", done: true}
];

function App() {

  let initialTodos = sampleTodos;

  useEffect(() => {
    try {
      if (localStorage["data"]) {
        initialTodos = JSON.parse(localStorage["data"]);
      }
    } catch (error) {
    }
    setTodos(initialTodos);
  }, []);

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const save = function(arr)  {
    localStorage["data"] = JSON.stringify(arr);
  };

  const sortAndSetTodos = function(arr) {
    arr.sort((a,b) => a.done - b.done);
    save(arr);
    setTodos(arr);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    let newTodos = [...todos, {title,done: false}];
    sortAndSetTodos(newTodos);
    setTitle("");
  };

  const handleTitleChange = function(event) {
  setTitle(event.target.value);
  };
  
  const update = function(event, index) {
    let newTodos= [...todos];
    newTodos[index].done = event.target.checked;
    sortAndSetTodos(newTodos);
  };

    const handleDelete= function(event,index) {
      let newTodos= [...todos];
      newTodos.splice(index, 1);
      sortAndSetTodos(newTodos);
    };
  return (
    <div className="App">
    <Container>
      <h1 className='mt-3'>To-Do</h1>
      <Form onSubmit={handleSubmit} className="d-flex mt-3">
        <Form.Control value={title} onChange={handleTitleChange} className='me-2' required={true}/>
        <Button variant='success' type='submit'>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Form>
      <ListGroup className='mt-3'>
      {
        todos.map((x,i) => 
        <ListGroup.Item className='d-flex align-items-center' key={i}>
          <input onChange={(e) => update(e, i)} type="checkbox" className='me-2' checked={x.done} />
          <span className='me-auto'>{x.title}</span>
          <Button onClick={(e) => handleDelete(e, i)} variant='danger' size='sm'>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          </ListGroup.Item>
        )
      }
    </ListGroup>
    </Container>
    </div>
  );
}

export default App;
