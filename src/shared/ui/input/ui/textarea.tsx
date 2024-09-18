import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { InputTypes } from '../../types';

const Textarea = forwardRef<HTMLTextAreaElement, InputTypes>(
  ({ label, field, errors, value = '', maxLength = 100, ...inputProps }, ref) => {
    return (
      <div className={styles.input}>
        <label className={styles.label} htmlFor={field}>
          {label}
        </label>
        <div className={`${styles.length} ${value.length > maxLength ? styles.max_char_error : ''}`}>
          {value?.length ?? 0} / {maxLength}
        </div>
        <textarea id={field} {...inputProps} ref={ref}></textarea>
        <p className={styles.error}>{errors && errors}</p>
      </div>
    );
  }
);

export default Textarea;
