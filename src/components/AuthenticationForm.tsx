import React from 'react';
import { firebaseApp, AppContext } from '../App';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Link } from 'react-router-dom';
import NavigationButton from './NavigationButton';

interface AuthenticationFormState {
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthenticationForm: React.FC<{ registering?: boolean }> = props => {
  const { registering } = props;

  const [state, setState] = React.useState<AuthenticationFormState>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, confirmPassword } = state;
  const [error, setError] = React.useState();

  const { user } = React.useContext(AppContext);

  console.log(error);

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(reason => setError(reason));
  };

  const handleInput = (credential: keyof AuthenticationFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [credential]: event.target.value });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4"
        onSubmit={login}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Username"
            value={email}
            onChange={handleInput('email')}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={handleInput('password')}
          />
          {registering && (
            <>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="******************"
                value={confirmPassword}
                onChange={handleInput('confirmPassword')}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </>
          )}
        </div>
        <div className="flex items-center justify-between">
          <NavigationButton type="submit">
            {!registering ? 'Login' : 'Register'}
          </NavigationButton>
          {!registering && (
            <a
              className="inline-block align-baseline font-bold tex-lg text-green-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          )}
        </div>
        {error && <div className="text-red-600 mt-5">{error.message}</div>}
      </form>
      <div className="mt-6 mx-auto text-center">
        Don't have an account? Register <Link className="text-green-500 font-bold" to="/register">here</Link>
      </div>
    </div>
  );
};

export default AuthenticationForm;
