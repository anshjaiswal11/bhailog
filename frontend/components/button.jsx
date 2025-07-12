import React from 'react';

function Button({ onClick, label='Try For Free'}) {
  return (
    <>
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
        type="button"
      >
        {label}
      </button>
    </>
  );
}

export { Button };
// This Button component can be used in your React application to create a styled button.
// You can import it and use it like this:      