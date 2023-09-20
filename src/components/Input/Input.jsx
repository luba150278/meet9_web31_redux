import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './Input.module.css';
import axios from 'axios';

function Input() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const handlerChange =  (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });   
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('https://dummyjson.com/users/add', {
      ...formData,
    });
    console.log(res.data)
  };

  return (
    <Form onSubmit={handlerSubmit} className={styles.form}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handlerChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handlerChange}
        />
      </Form.Group>
      <Button type='sumbit' className="mt-3">Sumbit</Button>
    </Form>
  );
}

export default Input;
