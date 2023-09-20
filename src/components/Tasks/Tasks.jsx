import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import styles from './Tasks.module.css';
import { useState } from 'react';
import {
  addTask,
  deleteTask,
  editCompleted,
  editTask,
} from '../../share/reducers/tasks.reducer';

export default function Tasks() {
  const [newTask, setNewTask] = useState('');
  const [visibleId, setVisibleId] = useState(0);
  const [changeTask, setChangeTask] = useState({ completed: false, title: '' });

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    setVisibleId(item.id);
    setChangeTask({ completed: item.completed, title: item.title });
  };

  const taskEdit = (e, id) => {
    e.preventDefault();
    dispatch(
      editTask({ id, title: changeTask.title, completed: changeTask.completed })
    );
    setVisibleId(0);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.newTask}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>New task</Form.Label>
          <Form.Control
            placeholder='newTask'
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' onClick={() => dispatch(addTask(newTask))}>
          Add new task
        </Button>
      </div>

      {tasks.tasks.length > 0 && (
        <div className={styles.taskList}>
          {tasks.tasks.map((item) =>
            visibleId !== item.id ? (
              <div key={item.id} className={styles.item}>
                <div className='d-flex align-items-center gap-2'>
                  <Form.Check
                    type='checkbox'
                    checked={item.completed}
                    onChange={() =>
                      dispatch(editCompleted({ id: item.id, title: '' }))
                    }
                  />
                  <h3>{item.title}</h3>
                </div>
                <div className='d-flex align-items-center gap-3'>
                  <Button variant='success' onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => dispatch(deleteTask(item.id))}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ) : (
              <Form
                key={item.id}
                onSubmit={(e) => taskEdit(e, item.id)}
                className={styles.form}
              >
                <Form.Check
                  type='checkbox'
                  checked={changeTask.completed}
                  onChange={() =>
                    setChangeTask({
                      ...changeTask,
                      completed: !changeTask.completed,
                    })
                  }
                />

                <Form.Group>
                  <Form.Control
                    value={changeTask.title}
                    onChange={(e) =>
                      setChangeTask({ ...changeTask, title: e.target.value })
                    }
                  />
                </Form.Group>

                <Button variant='primary' type='submit'>
                  Edit Task
                </Button>
              </Form>
            )
          )}
        </div>
      )}
    </div>
  );
}
