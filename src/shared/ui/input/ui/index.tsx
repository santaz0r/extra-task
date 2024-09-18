import { forwardRef } from 'react';
import Text from './text';
import Textarea from './textarea';
import { InputTypes } from '../../types';

export const Input = forwardRef<HTMLInputElement & HTMLTextAreaElement, InputTypes>(({ type, ...inputProps }, ref) => {
  const inputs = {
    text: <Text type={type} {...inputProps} ref={ref} />,
    tel: <Text type={type} {...inputProps} ref={ref} />,
    textarea: <Textarea type={type} {...inputProps} ref={ref} />,
  };
  return inputs[type];
});
