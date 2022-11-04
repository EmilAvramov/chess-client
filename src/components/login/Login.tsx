import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { emailPattern } from '../../helpers/misc/patterns';
import styles from '../../styles/components/Login.module.scss';
import { useLogin } from '../../hooks/useLogin';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/Auth.context';

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

	const { userData, provideDetails, error } = useLogin();
	const { setAuth } = useAuth();
	const navigate = useNavigate();

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
		provideDetails(data.email, data.password);
	};

	useEffect(() => {
		if (userData) {
			setAuth(true);
			navigate('/');
		}
	}, [navigate, setAuth, userData]);

	return (
		<main className={styles['login__wrapper']}>
			<form
				onSubmit={handleSubmit(submitForm)}
				className={styles['login__form']}
			>
				{error && <p className={styles['error__message']}>{error}</p>}
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
