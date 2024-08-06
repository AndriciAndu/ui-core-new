import React from 'react';
import PropTypes from 'prop-types';

import BaseInput from '../base/Input';
import InputOutline from '../styling/InputOutline';

import styles from './index.module.css';


const TextInput = (props) => {
  const {
    className,
    error,
    inputClassName,
    type,
    value,
    variant,
    onChange,
    ...restProps
  } = props;

  return (
    <label>
      <InputOutline
        className={inputClassName}
        error={error}
        variant={variant}
      >
        <BaseInput
          {...restProps}
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
        />
      </InputOutline>
    </label>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  inputClassName: PropTypes.string,
  multiline: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
  value: PropTypes.string,
  variant: PropTypes.oneOf(['underline', 'focus-underline']),
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  className: undefined,
  error: false,
  inputClassName: undefined,
  multiline: false,
  type: 'text',
  value: undefined,
  variant: undefined,
  onChange: () => undefined,
};

export default TextInput;

export { default as UncontrolledTextInput } from './uncontrolled';
