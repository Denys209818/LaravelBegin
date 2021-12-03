import * as Yup from 'yup';

export default Yup.object({
    email: Yup.string().required('Поле обовязкове!').email('Не коректна пошта!'),
    password: Yup.string().required('Поле обовязкове!').min(6, 'Мінімальна кількість символів - 6!'),
});