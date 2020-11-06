import styles from './ContactForm.module.scss';
import btnStyles from '../buttonsComponents/Btn.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { emailjs, init } from 'emailjs-com';

//init('user_OJTvyK60CS34CyVDlIKv5');

const CCForm = () => {
	return (
		<Formik
			initialValues={{ yourName: '', yourEmail: '', yourMessage: '' }}
			validationSchema={Yup.object({
				yourName: Yup.string().required('This field is required'),
				yourMessage: Yup.string().required('This field is required'),
				yourEmail: Yup.string()
					.email('Invalid email address')
					.required('This field is required'),
			})}
			onSubmit={(values, { setSubmitting }) => {
				emailjs
					.sendForm(
						'service_ae6ncmb',
						'template_vk9xbjj',
						e.target,
						'user_OJTvyK60CS34CyVDlIKv5'
					)
					.then(
						(result) => {
							console.log(result.text);
						},
						(error) => {
							console.log(error.text);
						}
					);

				alert('donde');
				setSubmitting(false);
			}}
		>
			{(formik) => (
				<Form
					onSubmit={formik.handleSubmit}
					className={styles.formWrapper}
					name='contactMe'
					id='contactForm'
				>
					<p>
						<label htmlFor='yourName' className={styles.label}>
							Name
						</label>
						<Field
							className={styles.input}
							id='yourName'
							name='yourName'
							type='text'
						/>
						<ErrorMessage
							name='yourName'
							component='span'
							className={styles.error}
						/>
					</p>
					<p>
						<label htmlFor='yourEmail' className={styles.label}>
							Email
						</label>
						<Field
							className={styles.input}
							id='yourEmail'
							name='yourEmail'
							type='email'
						/>
						<ErrorMessage
							name='yourEmail'
							component='span'
							className={styles.error}
						/>
					</p>
					<p>
						<label htmlFor='yourMessage' className={styles.label}>
							Message
						</label>
						<Field
							className={styles.input}
							id='yourMessage'
							name='yourMessage'
							as='textarea'
							rows='8'
						/>
						<ErrorMessage
							name='yourMessage'
							component='span'
							className={styles.error}
						/>
					</p>
					<p>
						<button type='submit' className={btnStyles.btn}>
							Send Message
						</button>
					</p>
				</Form>
			)}
		</Formik>
	);
};

export default CCForm;
