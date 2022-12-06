import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actioncreators} from '../../state/actioncreators'
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
  const users=useSelector(state=>state.user_func)
  const login_id=useSelector(state=>state.login_id)
  const dispatch=useDispatch()
  const{login}=bindActionCreators(actioncreators,dispatch)
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      console.log(formFields);
      console.log(users)
      for(let i=0;i<users.length;i++){
        if(users[i].email===formFields.email){
          login(i)
          console.log(login_id)
          resetFormFields();
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
    // navigate('/home')
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
          onClick={handleSubmit }
          >
            With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
