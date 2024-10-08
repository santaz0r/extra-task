import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { SelectTypes } from '../types';

export const Select = forwardRef<HTMLSelectElement, SelectTypes>(
  ({ label, field, options, errors, ...inputProps }, ref) => {
    return (
      <div className={styles.input}>
        <label className={styles.label} htmlFor={field}>
          {label}
        </label>
        <select id={field} {...inputProps} ref={ref}>
          <option className={styles.def_option} disabled={false} value="" key="DEFAULT">
            Выберите тему обращения
          </option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>

        <p className={styles.error}>{errors}</p>
      </div>
    );
  }
);
