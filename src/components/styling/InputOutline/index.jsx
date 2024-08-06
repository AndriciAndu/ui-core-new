import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* order of imports is important to properly set cascade from modules */
import styles from './index.module.css';
import underlineStyles from './variants/underline.module.css';
import focusUnderlineStyles from './variants/focusUnderline.module.css';


const InputOutline = (props) => {
  const {
    children,
    className,
    error,
    variant,
    ...restProps
  } = props;

  if (!children) {
    return null;
  }

  const variants = {
    underline: underlineStyles?.underline,
    'focus-underline': focusUnderlineStyles?.['focus-underline'],
  };

  const labelClassNames = classNames({
    [styles.inputOutline]: true,
    [variants[variant]]: variants[variant],
    [styles.error]: error,
    [className]: className,
  });

  return (
    <span
      {...restProps}
      className={labelClassNames}
    >
      {children}
    </span>
  );
};

InputOutline.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  error: PropTypes.bool,
  variant: PropTypes.oneOf(['underline', 'focus-underline']),
};

InputOutline.defaultProps = {
  children: null,
  className: undefined,
  error: false,
  variant: undefined,
};

export default InputOutline;
