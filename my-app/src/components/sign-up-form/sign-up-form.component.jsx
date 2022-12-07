import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { useNavigate } from 'react-router-dom';
import { SignUpContainer } from './sign-up-form.styles';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const defaultFormFields = {
  username: '',
  email: '',
  password: '',
  posted_property: [],
  message: []
}

const SignUpForm = () => {
  const users=useSelector(state=>state.user_func)
  const [usersstate, setusersstate] = useState(users)
  const [confirmPassword, setconfirmPassword] = useState('')
  const dispatch = useDispatch()
  const { register } = bindActionCreators(actioncreators, dispatch)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password } = formFields;

  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    // {
    //   id: 4,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      // await createUserDocumentFromAuth(user, { displayName });
      // console.log(formFields);
      
      setusersstate(usersstate.concat(formFields))
      console.log(usersstate)
      const resp = await fetch('http://localhost:5000/clear', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const response = await fetch('http://localhost:5000/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usersstate.concat(formFields))
      });
      
      register(formFields)
      resetFormFields();
      navigate('/home');

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }

  };
  const handleconfirmpasswordChange = (e) => {
    setconfirmPassword(e.target.value)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });

    // setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formFields[input.name]}
            onChange={handleChange}
          />

        ))}

        {/* <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='username'
          value={username}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleconfirmpasswordChange}
          name='confirmPassword'
          value={confirmPassword}
        /> */}
        <FormInput
          label='Confirm Password'
          type='password'
          placeholder="Confirm Password"
          required
          onChange={handleconfirmpasswordChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
      <li ><i class="fa fa-external-link"></i><Link className='navLink' to="/chat">chat</Link></li>
    </SignUpContainer>
  );
};

export default SignUpForm;
