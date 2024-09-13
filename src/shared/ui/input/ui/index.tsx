import { forwardRef } from 'react';
import Text from './text';
import Textarea from './textarea';
import { InputTypes } from '../../types';

export const Input = forwardRef<HTMLInputElement & HTMLTextAreaElement, InputTypes>(
  ({ type, field, errors, ...inputProps }, ref) => {
    const inputs = {
      text: <Text type={type} field={field} errors={errors} {...inputProps} ref={ref} />,
      tel: <Text type={type} field={field} errors={errors} {...inputProps} ref={ref} />,
      textarea: <Textarea type={type} field={field} errors={errors} {...inputProps} ref={ref} />,
    };
    return type && inputs[type];
  }
);
