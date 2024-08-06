import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from './index';


const UncontrolledTextInput = (props) => {
  const {
    value: propsValue,
    onChange,
    ...restProps
  } = props;

  const [value, setValue] = useState(propsValue);

  const _onChange = useCallback((newValue) => {
    setValue(newValue);
    onChange?.(newValue);
  }, [onChange]);

  return (
    <TextInput
      value={value}
      onChange={_onChange}
      {...restProps}
    />
  );
};

UncontrolledTextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

UncontrolledTextInput.defaultProps = {
  value: '',
  onChange: undefined,
};

export default UncontrolledTextInput;
