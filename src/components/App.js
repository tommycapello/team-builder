import '../App.css';
import React, { useState } from 'react'
import Form from './Form.js'

const memberData = [
  {name: 'Tommy', email: 'asdf@gmail.com', role: 'Front-End' },
  {name: 'John', email: 'jkl;@yahoo.com', role: 'Back-End' },
  {name: 'Gary', email: 'rewqe@aol.com', role: 'Designer' }
]

const initialValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [members, setMembers] = useState(memberData)
  const [values, setValues] = useState(initialValues)

  const change = evt => {
    const {name, value} = evt.target
    setValues({...values, [name]: value })

  }

  const submit = evt => {
    evt.preventDefault()
    const newMember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role.trim(),
    }
    setMembers(members.concat(newMember))
    setValues(initialValues)
  }


  return (
    <div className="App">
      <h1> Members App </h1>

      <Form
      submit = {submit}
      change = {change}
      values = {values} />

      {members.map((member, index) => {
        return (
          <div key={index}>
            <h2>Name: {member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
