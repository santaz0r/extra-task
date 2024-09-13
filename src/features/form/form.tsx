import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './style.module.scss';
import { Input } from '../../shared/ui/input';
import { Select } from '../../shared/ui/select';
import { themeOptions } from '../../shared/ui/select/select-options';
import { validationSchema } from '../../shared/ui/validSchema';
import { AppealFormData } from '../../shared/ui/types';

export const Form = () => {
  const methods = useForm<AppealFormData>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors, isValid },
  } = methods;

  const hasError = Boolean(Object.keys(errors).length);
  const onSubmit = (data: AppealFormData) => console.log(data);

  return (
    <article className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__body}>
        <h2>Обращение</h2>
        <Input
          label="ФИО"
          type="text"
          field="username"
          placeholder="Введите ФИО..."
          errors={errors.username?.message}
          {...register('username')}
          value={watch('username')}
          maxLength={100}
        />
        <Input
          label="Телефон"
          field="phone"
          type="tel"
          placeholder="Введите телефон"
          errors={errors.phone?.message}
          {...register('phone')}
        />
        <Select
          label="Тема обращения"
          field="theme"
          type="select"
          options={themeOptions}
          errors={errors.theme?.message}
          {...register('theme')}
        />
        <Input
          label="Обращение"
          field="text"
          type="textarea"
          placeholder="Текст обращения"
          errors={errors.text?.message}
          {...register('text')}
          value={watch('text')}
          maxLength={250}
        />

        <div className={styles.btns}>
          <button className={styles.btn_submit} type="submit" disabled={!isValid || hasError}>
            Отправить
          </button>
          <button className={styles.btn_reset} onClick={() => reset()} type="button">
            Сбросить поля
          </button>
        </div>
      </form>

      <div className={styles.form__img}></div>
    </article>
  );
};
