import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
// import {
//   signInAuthUserWithEmailAndPassword,
//   signInWithGooglePopup,
// } from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  //navigation
  const users = useSelector(state => state.user_func)
  const login_id = useSelector(state => state.login_id)
  const dispatch = useDispatch()
  const { login } = bindActionCreators(actioncreators, dispatch)
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  ////////////////////////////
  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   birthday: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const inputs = [

    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }

  ];
  ////////////////////////////
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      console.log(formFields);
      console.log(users)
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === formFields.email) {
          login(i)
          console.log(login_id)
          resetFormFields();
          navigate('/home');
          return
        }
      }
      resetFormFields();
      alert("login failed")
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found, check your username and try again...')
      }
      if (error.code === 'auth/wrong-password') {
        alert('Wrong password, check your password and try again...')
      }
      console.log('user sign in failed', error);
    }


  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });

    // setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
        /> */}
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={handleSubmit}
          >
            With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
