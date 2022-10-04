import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { emailPattern, passwordPattern } from '../../helpers/patterns';

import styles from './register.module.scss';

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
		console.log(data);
	};

	return (
		<main className={styles['register__wrapper']}>
			<form onSubmit={handleSubmit(submitData)}>
				<input
					{...register('name', {
						required: {
							value: true,
							message: 'Field is required',
						},
					})}
					type='text'
					placeholder='Full Name'
				/>
				{errors.name && <p>{errors.name.message}</p>}
				<input
					{...register('email')}
					type='text'
					placeholder='E-mail Address'
				/>
				{errors.email && <p>{errors.email.message}</p>}
				<input
					{...register('password')}
					type='password'
					placeholder='Password'
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<input
					{...register('rePass')}
					type='password'
					placeholder='Confirm Password'
				/>
				{errors.rePass && <p>{errors.rePass.message}</p>}
				<button className={styles['register__btn']}>Register</button>
				<button
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					Register with Google
				</button>
				<div>
					Already have an account? <Link to='/login'>Login</Link> now.
				</div>
			</form>
		</main>
	);
};

export default Register;
