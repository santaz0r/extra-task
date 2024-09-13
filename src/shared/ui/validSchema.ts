import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Имя обязательно')
    .max(100, 'Максимум 100 символов')
    .matches(/^[а-яА-ЯёЁ\s-]*$/, 'Только киррилица, дефис, пробел'),

  phone: yup
    .string()
    .matches(/^[\d ()+-]*$/, 'Только цифры')
    .test('len', 'Должно быть 11 цифр', (val) => val?.replace(/[\s()+-]/g, '').length === 11)
    .required('Телефон обязателен'),

  text: yup.string().required('Текст обязателен').max(250, 'Максимум 250 символов'),
  theme: yup.string().required('Тема обязательна'),
});
