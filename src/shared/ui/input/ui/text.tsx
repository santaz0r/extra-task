import { forwardRef } from 'react';
import { InputTypes } from '../../types';
import { InputMask } from 'react-tiny-mask';

import styles from './styles.module.scss';

const Text = forwardRef<HTMLInputElement, InputTypes>(
  ({ type, label, field, errors, value = '', maxLength = 100, ...inputProps }, ref) => {
    return (
      <div className={styles.input}>
        <label className={styles.label} htmlFor={field}>
          {label}
        </label>

        {type !== 'tel' && (
          <div className={`${styles.length} ${value.length > maxLength ? styles.max_char_error : ''}`}>
            {value?.length ?? 0} / {maxLength}
          </div>
        )}

        {type === 'tel' ? (
          <InputMask mask="+7 (###) ###-##-##" ref={ref} {...inputProps} />
        ) : (
          <input type={type} id={field} {...inputProps} ref={ref} />
        )}

        <p className={styles.error}>{errors && errors}</p>
      </div>
    );
  }
);

export default Text;
