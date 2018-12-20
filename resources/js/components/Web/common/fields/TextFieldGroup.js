import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ id, name, label, type, value, placeholder, error, onChange }) => {
  return (
    <div className="form-group">
      { label && <label htmlFor={id}>{label}</label> }
      <input
        id={id}
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      { error && <div className='invalid-feedback'>{error}</div> }
    </div>
  );
}

TextFieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
