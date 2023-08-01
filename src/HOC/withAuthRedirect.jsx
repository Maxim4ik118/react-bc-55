import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = SomeComponent => {
  const PrivateComponent = props => {
    const userData = useSelector(state => state.user.userData);

    return userData ? (
      <SomeComponent {...props} />
    ) : (
      <Navigate replace={true} to={'/login'} />
    );
  };

  return PrivateComponent;
};

export default withAuthRedirect;
