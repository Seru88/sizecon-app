import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import NavigationButton from '../components/Button';
import { useForm, FieldError } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseApp from '../util/firebaseApp';
import { googleAuthProvider } from '../util/firebaseApp';

const AuthenticationForm: React.FC<{ registering?: boolean }> = props => {
  const { registering } = props;

  const [error, setError] = React.useState();

  const { register, handleSubmit, errors: validationErrors } = useForm();

  const [user] = useAuthState(firebaseApp.auth());

  const login = (data: Record<string, any>) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .catch(reason => setError(reason));
  };

  const signup = (data: Record<string, any>) => {
    if (data.password !== data.confirm) {
      setError({ message: 'Passwords do not much.' });
    } else {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .catch(reason => setError(reason));
    }
  };

  const oAuthGoogle = () => {
    firebaseApp
      .auth()
      .signInWithRedirect(googleAuthProvider)
      .catch(reason => setError(reason));
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-full">
      <form
        className="pb-8 mb-4"
        onSubmit={handleSubmit(registering ? signup : login)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Username"
            ref={register({ required: 'Eamil required' })}
          />
          {validationErrors.email && (
            <div className="text-red-600 mt-1">
              {(validationErrors.email as FieldError).message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            ref={register({
              required: 'Password required',
              minLength: {
                value: 6,
                message: 'Must be minimum of 6 characters',
              },
            })}
          />
          {validationErrors.password && (
            <div className="text-red-600 mt-1">
              {(validationErrors.password as FieldError).message}
            </div>
          )}
        </div>
        {registering && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="confirm-password"
            >
              Retype Password
            </label>
            <input
              name="confirm"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="******************"
              ref={register({
                required: 'Please retype password',
                minLength: {
                  value: 6,
                  message: 'Must be minimum of 6 characters',
                },
              })}
            />
            {validationErrors.confirm && (
              <div className="text-red-600 mt-1">
                {(validationErrors.confirm as FieldError).message}
              </div>
            )}
          </div>
        )}
        <div className="flex items-center justify-between mt-8 mb-4">
          <NavigationButton type="submit" fullwidth={registering}>
            <div className="w-8 inline-block">
              <FontAwesomeIcon icon="envelope" />
            </div>
            {` `}
            {!registering ? 'Log in' : 'Sign up with email'}
          </NavigationButton>
          {!registering && (
            <a
              className="inline-block align-baseline font-bold tex-lg text-green-500 hover:text-blue-800"
              href="https://example.com"
            >
              Forgot Password?
            </a>
          )}
        </div>
        <div className="mx-auto text-lg font-bold">or</div>
        <div className="mt-4 mb-8">
          <button
            className=" bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 mb-3 w-full block border border-gray-400 rounded shadow text-xl text-left"
            type="button"
            onClick={oAuthGoogle}
          >
            <div className="w-8 inline-block">
              <FontAwesomeIcon icon={['fab', 'google']} />
            </div>
            {` `}
            {registering ? 'Sign up with Google' : 'Log in with Google'}
          </button>
          <button
            className=" bg-twitter hover:bg-twitter-darker text-white font-semibold py-2 px-4 my-3 w-full block border border-gray-400 rounded shadow text-xl text-left"
            type="button"
          >
            <div className="w-8 inline-block">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </div>
            {` `}
            {registering ? 'Sign up with Twitter' : 'Log in with Twitter'}
          </button>
        </div>
        {!registering && (
          <div className="mt-8 mx-auto text-center">
            Don't have an account? Register{' '}
            <Link className="text-green-500 font-bold" to="/signup">
              here
            </Link>
          </div>
        )}
      </form>
      {error && <div className="text-red-600 mt-5">{error.message}</div>}
    </div>
  );
};

export default AuthenticationForm;
