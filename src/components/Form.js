import React from 'react'

function Form(props) {

const { submit, change, values} = props

return (
<form className="form container" onSubmit={submit}>
    <div className="form-group inputs">
        <label>
        Name
            <input
            name='name'
            type='text'
            onChange={change}
            value={values.name}
            placeholder='Name'
            />
        </label>
        <label>
        Email
            <input
            name='email'
            type='text'
            onChange={change}
            value={values.email}
            placeholder='Email'
            />
        </label>
        <label>
        Role
            <select
            name='role'
            value={values.role}
            onChange={change}>
                <option value=''>------select Role------</option>
                <option value='Front-End'>Front-End</option>
                <option value='Back-End'>Back-End</option>
                <option value='Designer'>Designer</option>
            </select>
        </label>
        <div className='submit'>
            <button>Submit</button>
        </div>
    </div>
</form>
    )
}


export default Form;