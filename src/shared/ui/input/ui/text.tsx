import { forwardRef } from 'react';
import { InputTypes } from '../../types';
import { IMaskInput } from 'react-imask';

import styles from './styles.module.scss';

const Text = forwardRef<HTMLInputElement, InputTypes>(
  ({ type, label, field, errors, value = '', maxLength, ...inputProps }, ref) => {
    return (
      <div className={styles.input}>
        <label className={styles.label} htmlFor={field}>
          {label}
        </label>

        {type !== 'tel' && (
          <div className={styles.length}>
            {value?.length ?? 0} / {maxLength}
          </div>
        )}

        {type === 'tel' ? (
          <IMaskInput mask="+7 (000) 000-00-00" {...inputProps} inputRef={ref} />
        ) : (
          <input type={type} id={field} {...inputProps} ref={ref} />
        )}

        <p className={styles.error}>{errors && errors}</p>
      </div>
    );
  }
);

export default Text;
