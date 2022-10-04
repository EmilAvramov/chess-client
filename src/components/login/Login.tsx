import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from './Login.module.scss'

const Login = () => {

	const {
		login, 
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldFocusError: true,
	})

	const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	const submitForm = (data:any) => {
		console.log('logged with ' + data)
	}

	return (
		<main className={styles['login__wrapper']}>
			<div className={styles['login__container']}>
				<form
					onSubmit={handleSubmit(submitForm)}
					className={styles['login__form']}
				>
					<input
						{...login('email', {
							required: {
								value: true,
								message: 'Field is required',
							},
							validate: (value:string) =>
								pattern.test(value) || 'Invalid email address',
						})}
						type='text'
						className={
							errors.email
								? styles['login__textBox_error']
								: styles['login__textBox']
						}
						placeholder='E-mail Address'
					/>
					{errors.email && (
						<p className={styles['login__error']}>
							{errors.email.message}
						</p>
					)}
					<input
						{...login('password', {
							required: {
								value: true,
								message: 'Field is required',
							},
						})}
						type='password'
						className={
							errors.password
								? styles['login__textBox_error']
								: styles['login__textBox']
						}
						placeholder='Password'
					/>
					{errors.password && (
						<p className={styles['login__error']}>
							{errors.password.message}
						</p>
					)}
					<button className={styles['login__btn']}>Login</button>
					<button
						className={`${styles['login__btn']} ${styles['login__google']}`}
						onClick={(e) => {
							e.preventDefault();
							
						}}
					>
						Login with Google
					</button>
					<div>
						Don't have an account?{' '}
						<Link to='/register' className={styles['login__link']}>
							Register
						</Link>{' '}
						now.
					</div>
				</form>
			</div>
		</main>
	);
};

export default Login;
