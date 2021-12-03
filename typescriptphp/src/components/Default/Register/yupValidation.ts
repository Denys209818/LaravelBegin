import * as Yup from 'yup';

export default Yup.object({
    name: Yup.string().required('Поле обовязкове!'),
    email: Yup.string().required('Поле обовязкове!')
    .email('Пошта введена не коректна!'),
    password: Yup.string().required('Поле обовязкове!').min(6, 'Найменша кількість символів - 6'),
    password_confirmation: Yup.string().required('Поле обовязкове!')
    .min(6, 'Найменша кількість символів - 6').oneOf([Yup.ref("password")], "Поля не співпадають!"),
});