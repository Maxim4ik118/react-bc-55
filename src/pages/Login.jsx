import Button from 'components/Button/Button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/userReducer';

const Login = () => {
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
    const email = children.userEmail.value;
    const password = children.userPassword.value;

    dispatch(loginThunk({ email, password }));
    evt.currentTarget.reset();
  };

  return (
    <div>
      <h1>Login into your account</h1>
      <form onSubmit={handleSubmit}>
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
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
