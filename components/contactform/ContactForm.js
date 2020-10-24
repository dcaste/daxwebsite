import styles from './ContactForm.module.scss';
import btnStyles from '../buttonsComponents/Btn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../image/Image';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
	const formik = useFormik({
		initialValues: {
			yourName: '',
			yourEmail: '',
			yourMessage: '',
		},
		onSubmit: (values) => {
			formik.resetForm;
			formik.setSubmitting(false);
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
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
	);
};

export default Form;
