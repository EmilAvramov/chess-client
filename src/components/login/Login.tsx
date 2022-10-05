import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './login.module.scss';
import { emailPattern } from '../../helpers/patterns';

type FormValues = {
	email: string;
	password: string;
};

const Login: React.FC = (): JSX.Element => {
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.matches(emailPattern, { message: 'Enter a valid email' })
			.required('Field is required'),
		password: Yup.string().required('Field is required'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const submitForm = (data: FormValues) => {
		console.log(data);
	};

	return (
		<main className={styles['login__wrapper']}>
			<form
				onSubmit={handleSubmit(submitForm)}
				className={styles['login__form']}
			>
				<input
					{...register('email')}
					type='text'
					placeholder='E-mail Address'
					className={styles['login__form_input']}
				/>
				{errors.email && (
					<p className={styles['login__form_error']}>
						{errors.email.message}
					</p>
				)}
				<input
					{...register('password')}
					type='password'
					placeholder='Password'
					className={styles['login__form_input']}
				/>
				{errors.password && (
					<p className={styles['login__form_error']}>
						{errors.password.message}
					</p>
				)}
				<button className={styles['login__form_button']}>Login</button>
				<div className={styles['login__form_sub']}>
					<p className={styles['login__form_subText']}>
						Don't have an account?
					</p>
					<Link to='/register' className={styles['login__form_link']}>
						Register now.
					</Link>{' '}
				</div>
			</form>
		</main>
	);
};

export default Login;
