import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { emailPattern, passwordPattern } from '../../helpers/misc/patterns';
import { useRegister } from '../../hooks/useRegister';

import styles from '../../styles/components/Register.module.scss';

type FormValues = {
	name: string;
	email: string;
	password: string;
	rePass: string;
};

const Register = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Field is required'),
		email: Yup.string()
			.required('Field is required')
			.matches(emailPattern, { message: 'Enter a valid email' }),
		password: Yup.string()
			.required('Field is required')
			.matches(passwordPattern, {
				message:
					'Password must contain 1 symbol, 1 number, 1 special character and be at least 8 characters long',
			}),
		rePass: Yup.string()
			.required('Field is required')
			.oneOf(
				[Yup.ref('password'), null],
				'Confirm password does not match'
			),
	});

	const { userData, provideDetails, error } = useRegister();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const submitData = (data: {
		name: string;
		email: string;
		password: string;
	}) => {
		provideDetails(data.name, data.email, data.password);
		console.log(userData);
	};

	useEffect(() => {
		localStorage.setItem('name', JSON.stringify(userData?.name));
		localStorage.setItem('email', JSON.stringify(userData?.email));
		localStorage.setItem('token', JSON.stringify(userData?.token));
	}, [userData]);

	return (
		<main className={styles['register__wrapper']}>
			<form
				onSubmit={handleSubmit(submitData)}
				className={styles['register__form']}
			>
				{error && <p className={styles['error__message']}>{error}</p>}
				<input
					{...register('name', {
						required: {
							value: true,
							message: 'Field is required',
						},
					})}
					type='text'
					placeholder='Full Name'
					className={styles['register__form_input']}
				/>
				{errors.name && (
					<p className={styles['register__form_error']}>
						{errors.name.message}
					</p>
				)}
				<input
					{...register('email')}
					type='text'
					placeholder='E-mail Address'
					className={styles['register__form_input']}
				/>
				{errors.email && (
					<p className={styles['register__form_error']}>
						{errors.email.message}
					</p>
				)}
				<input
					{...register('password')}
					type='password'
					placeholder='Password'
					className={styles['register__form_input']}
				/>
				{errors.password && (
					<p className={styles['register__form_error']}>
						{errors.password.message}
					</p>
				)}
				<input
					{...register('rePass')}
					type='password'
					placeholder='Confirm Password'
					className={styles['register__form_input']}
				/>
				{errors.rePass && (
					<p className={styles['register__form_error']}>
						{errors.rePass.message}
					</p>
				)}
				<button className={styles['register__form_button']}>
					Register
				</button>
				<div className={styles['register__form_sub']}>
					<p className={styles['register__form_subText']}>
						Already have an account?
					</p>
					<Link to='/login' className={styles['register__form_link']}>
						Login now.
					</Link>
				</div>
			</form>
		</main>
	);
};

export default Register;
