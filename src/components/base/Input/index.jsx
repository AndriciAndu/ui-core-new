import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.css';


const Input = (props) => {
  const {
    className,
    error,
    innerRef,
    multiline,
    onChange,
    ...restProps
  } = props;

  const _onChange = useCallback((e) => {
    e.preventDefault();

    onChange(e.target.value);
  }, [onChange]);

  const Element = multiline ? 'textarea' : 'input';

  const ariaInvalidProp = { 'aria-invalid': (error || undefined) };
  const classes = classNames(styles.input, className);

  return (
    <Element
      {...ariaInvalidProp}
      {...restProps}
      ref={innerRef}
      className={classes}
      onChange={_onChange}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  multiline: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: undefined,
  error: false,
  innerRef: undefined,
  multiline: false,
  value: '',
  onChange: () => undefined,
};

export default Input;
