import React from 'react';
import { FieldError, useForm } from 'react-hook-form';

import Button from '../components/Button';
import useAlert from '../hooks/useAlert';
import firebaseApp from '../util/firebaseApp';

const ResetPassword: React.FC = () => {
  const { register, handleSubmit, errors: validationErrors } = useForm();
  const { enqueueAlert } = useAlert();
  const sendPasswordResetEmail = (data: Record<string, any>) => {
    firebaseApp
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() =>
        enqueueAlert(`Password reset link sent to ${data.email}`, {
          variant: 'success',
        })
      )
      .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
  };
  return (
    <div className="w-full">
      <form
        className="pb-8 mb-4"
        onSubmit={handleSubmit(sendPasswordResetEmail)}
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
          <div className="mt-8 mb-4">
            <Button className="text-2xl text-left" type="submit" fullwidth>
              Send reset link
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
