import styles from './Form.module.scss';
import btnStyles from './../buttons/Btn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../image/Image';
import { useFormik } from 'formik';

const validate = (values) => {
	const errors = {};
	if (!values.yourName) {
		errors.yourName = 'This field is required';
	}

	if (!values.yourMessage) {
		errors.yourMessage = 'This field is required';
	}

	if (!values.yourEmail) {
		errors.yourEmail = 'This field is required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.yourEmail)
	) {
		errors.yourEmail = 'Invalid email address';
	}

	return errors;
};

const Form = () => {
	const formik = useFormik({
		initialValues: {
			yourName: '',
			yourEmail: '',
			yourMessage: '',
		},
		validate,
		onSubmit: (values) => {},
	});

	return (
		<div className={styles.formComponent}>
			<Image
				src_lg='/assets/img/avatar.jpg'
				alt='Dax Castellón'
				isRounded={true}
			/>
			<p className={styles.formSocial}>
				<a
					href='https://www.linkedin.com/in/daxcastellonmeyrat/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={['fab', 'linkedin']} />
				</a>
				<a
					href='https://github.com/dcaste/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={['fab', 'github']} className='marginLeft' />
				</a>
			</p>

			<form
				method='POST'
				onSubmit={formik.handleSubmit}
				className={styles.formWrapper}
				data-netlify='true'
				name='contactMe'
				action='/thank-you'
			>
				<p>
					<label htmlFor='yourName' className={styles.label}>
						Name
					</label>
					<input
						className={styles.input}
						id='yourName'
						name='yourName'
						type='text'
						{...formik.getFieldProps('yourName')}
					/>
				</p>
				{formik.touched.yourName && formik.errors.yourName ? (
					<p className={styles.error}>{formik.errors.yourName}</p>
				) : null}
				<p>
					<label htmlFor='yourEmail' className={styles.label}>
						Email
					</label>
					<input
						className={styles.input}
						id='yourEmail'
						name='yourEmail'
						type='yourEmail'
						{...formik.getFieldProps('yourEmail')}
					/>
				</p>
				{formik.touched.yourEmail && formik.errors.yourEmail ? (
					<p className={styles.error}>{formik.errors.yourEmail}</p>
				) : null}
				<p>
					<label htmlFor='yourMessage' className={styles.label}>
						Message
					</label>
					<textarea
						className={styles.input}
						id='yourMessage'
						name='yourMessage'
						type='yourMessage'
						rows='8'
						{...formik.getFieldProps('yourMessage')}
					/>
				</p>
				{formik.touched.yourMessage && formik.errors.yourMessage ? (
					<p className={styles.error}>{formik.errors.yourMessage}</p>
				) : null}
				<p>
					<button type='submit' className={btnStyles.btn}>
						Send Message
					</button>
				</p>
			</form>
		</div>
	);
};

export default Form;
