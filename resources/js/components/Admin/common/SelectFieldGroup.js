import React from 'react'
import PropTypes from 'prop-types'
import { ucfirst } from '../utils/helper'

const SelectFieldGroup = ({ id, name, label, options, value, multiple, error, onChange }) => {
  return (
    <div className="form-group">
      { label && <label htmlFor={id}>{label}</label> }
      <select
        id={id}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      >
        { options.map((option, index) => (
          <option key={index}>{ucfirst(option)}</option>
          )) }
      </select>
      { error && <div className='invalid-feedback'>{error}</div> }
    </div>
  );
}

SelectFieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string
}


export default SelectFieldGroup
