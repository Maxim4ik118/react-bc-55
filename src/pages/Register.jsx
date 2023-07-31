import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button/Button';

import { registerThunk } from 'redux/userReducer';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    if (!userData) return;

    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const name = children.userName.value;
    const email = children.userEmail.value;
    const password = children.userPassword.value;

    dispatch(registerThunk({ name, email, password }));
    evt.currentTarget.reset();
  };

  return (
    <div>
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            placeholder="Adrian Cross"
            name="userName"
            type="text"
            required
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            placeholder="across@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            placeholder="examplepwd12345"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </label>
        <br />
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
