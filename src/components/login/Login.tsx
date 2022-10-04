import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './login.module.scss';

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const passwordPattern =
// 	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

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
			<form onSubmit={handleSubmit(submitForm)}>
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
				<button>Login</button>
				<div>
					Don't have an account?
					<Link to='/register'>Register</Link> now.
				</div>
			</form>
		</main>
	);
};

export default Login;
