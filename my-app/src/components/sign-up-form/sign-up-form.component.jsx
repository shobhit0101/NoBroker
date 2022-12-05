import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actioncreators} from '../../state/actioncreators'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
  username:'',
  email:'',
  password:'',
  posted_property:[],
  message:[]
}

const SignUpForm = () => {
  const users=useSelector(state=>state.user_func)
  const [confirmPassword, setconfirmPassword] = useState('')
  const dispatch=useDispatch()
  const{register}=bindActionCreators(actioncreators,dispatch)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password} = formFields;

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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // await createUserDocumentFromAuth(user, { displayName });
      // console.log(formFields);
      register(formFields)
      console.log(users)
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  const handleconfirmpasswordChange=(e)=>{
    setconfirmPassword(e.target.value)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
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
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
