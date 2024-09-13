import { forwardRef } from 'react';
import SelectInput from './select';
import { SelectTypes } from '../../types';

export const Select = forwardRef<HTMLSelectElement, SelectTypes>(
  ({ type, field, options, errors, ...inputProps }, ref) => {
    const selects = {
      select: <SelectInput field={field} options={options} errors={errors} {...inputProps} ref={ref} />,
    };
    return type && selects[type];
  }
);
