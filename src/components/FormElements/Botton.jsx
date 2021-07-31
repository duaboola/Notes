// import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ text, type }) => (
    <div>
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3" />
            {text}
        </button>
    </div>
);

export default Button;
