import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FieldError, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import Button from '../components/Button';
import useAlert from '../hooks/useAlert';
import firebaseApp, { googleAuthProvider } from '../util/firebaseApp';

const AuthenticationForm: React.FC<{
  registering?: boolean;
}> = props => {
  const { registering } = props;
  const history = useHistory();
  const { register, handleSubmit, errors: validationErrors } = useForm();
  const [user] = useAuthState(firebaseApp.auth());
  const { enqueueAlert } = useAlert();

  const login = (data: Record<string, any>) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() =>
        enqueueAlert('You are now logged in!', { variant: 'success' })
      )
      .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
  };

  const signup = (data: Record<string, any>) => {
    if (data.password !== data.confirm) {
      enqueueAlert('Passwords do not match', { variant: 'error' });
    } else {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() =>
          enqueueAlert('Account created! You are now logged in.', {
            variant: 'success',
          })
        )
        .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
    }
  };

  const oAuthGoogle = () => {
    firebaseApp
      .auth()
      .signInWithRedirect(googleAuthProvider)
      .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
  };

  if (user) {
    history.push('/');
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
            placeholder="Email"
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
          <Button
            className="text-2xl text-left"
            type="submit"
            fullwidth={registering}
          >
            <div className="w-8 inline-block">
              <FontAwesomeIcon icon="envelope" />
            </div>
            {` `}
            {!registering ? 'Log in' : 'Sign up with email'}
          </Button>
          {!registering && (
            <Link
              className="inline-block align-baseline font-bold text-lg text-green-500 hover:text-blue-800"
              to="/reset-password"
            >
              Forgot Password?
            </Link>
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
      {/* {error && <div className="text-red-600 mt-5">{error.message}</div>} */}
    </div>
  );
};

export default AuthenticationForm;
