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
        enqueueAlert("You are now logged in!", { variant: "success" })
      )
      .catch(reason => enqueueAlert(reason.message, { variant: "error" }));
  };

  const signup = (data: Record<string, any>) => {
    if (data.password !== data.confirm) {
      enqueueAlert("Passwords do not match", { variant: "error" });
    } else {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() =>
          enqueueAlert("Account created! You are now logged in.", {
            variant: "success"
          })
        )
        .catch(reason => enqueueAlert(reason.message, { variant: "error" }));
    }
  };

  const oAuthGoogle = () => {
    firebaseApp
      .auth()
      .signInWithRedirect(googleAuthProvider)
      .catch(reason => enqueueAlert(reason.message, { variant: "error" }));
  };

  React.useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="w-full">
      <form
        className="pb-8 mb-4"
        onSubmit={handleSubmit(registering ? signup : login)}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-lg font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            ref={register({ required: "Eamil required" })}
          />
          {validationErrors.email && (
            <div className="mt-1 text-red-600">
              {(validationErrors.email as FieldError).message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-lg font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            ref={register({
              required: "Password required",
              minLength: {
                value: 6,
                message: "Must be minimum of 6 characters"
              }
            })}
          />
          {validationErrors.password && (
            <div className="mt-1 text-red-600">
              {(validationErrors.password as FieldError).message}
            </div>
          )}
        </div>
        {registering && (
          <div className="mb-4">
            <label
              className="block mb-2 text-lg font-bold text-gray-700"
              htmlFor="confirm-password"
            >
              Retype Password
            </label>
            <input
              name="confirm"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="******************"
              ref={register({
                required: "Please retype password",
                minLength: {
                  value: 6,
                  message: "Must be minimum of 6 characters"
                }
              })}
            />
            {validationErrors.confirm && (
              <div className="mt-1 text-red-600">
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
            <div className="inline-block w-8">
              <FontAwesomeIcon icon="envelope" />
            </div>
            {` `}
            {!registering ? "Log in" : "Sign up with email"}
          </Button>
          {!registering && (
            <Link
              className="inline-block text-lg font-bold text-green-500 align-baseline hover:text-blue-800"
              to="/reset-password"
            >
              Forgot Password?
            </Link>
          )}
        </div>
        <div className="mx-auto text-lg font-bold text-center">or</div>
        <div className="mt-4 mb-8">
          <button
            className="block w-full px-4 py-2 mb-3 text-xl font-semibold text-left text-white bg-red-600 border border-gray-400 rounded shadow hover:bg-red-700"
            type="button"
            onClick={oAuthGoogle}
          >
            <div className="inline-block w-8">
              <FontAwesomeIcon icon={["fab", "google"]} />
            </div>
            {` `}
            {registering ? "Sign up with Google" : "Log in with Google"}
          </button>
          {/* <button
            className="block w-full px-4 py-2 my-3 text-xl font-semibold text-left text-white border border-gray-400 rounded shadow bg-twitter hover:bg-twitter-darker"
            type="button"
          >
            <div className="inline-block w-8">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </div>
            {` `}
            {registering ? "Sign up with Twitter" : "Log in with Twitter"}
          </button> */}
        </div>
        {!registering && (
          <div className="mx-auto mt-8 text-center">
            Don't have an account? Register{" "}
            <Link className="font-bold text-green-500" to="/signup">
              here
            </Link>
          </div>
        )}
      </form>
      {/* {error && <div className="mt-5 text-red-600">{error.message}</div>} */}
    </div>
  );
};

export default AuthenticationForm;
