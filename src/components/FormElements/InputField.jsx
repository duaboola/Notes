import PropTypes from 'prop-types';

export const InputField = ({ name, label, placeholder, type, register }) => (
    <div>
        {label && <label htmlFor="app-input-field">{label}</label>}
        <br />
        {type === 'textarea' ? (
            <textarea placeholder={placeholder} name={name} defaultValue={name} />
        ) : (
            <input
                className="peer placeholder-transparent text-gray-600 text-sm h-4 mb-6 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(label, { required: true })}
            />
        )}
    </div>
);

InputField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    register: PropTypes.func.isRequired,
};

InputField.defaultProps = {
    name: '',
    label: '',
    placeholder: '',
    type: 'text',
};

export default InputField;
