import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Alert from '@/alert/Alert';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
	// Submit Button Value
	const [btnSubmitValue, setBtnSubmitValue] = useState('Send message');

	// Form Response (success or error)
	const [formResponse, setFormResponse] = useState('neutral');

	const sendEmail = () => {
		setBtnSubmitValue('Sending...');

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
				'contactMe',
				process.env.NEXT_PUBLIC_EMAILJS_USER
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
					setFormResponse('success');
					setBtnSubmitValue('Send message');
				},
				function (error) {
					console.log('FAILED...', error);
					setFormResponse('error');
					setBtnSubmitValue('Send message');
				}
			);
	};

	const handleReset = () => {
		setFormResponse('neutral');
		setBtnSubmitValue('Send message');
	};

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
			onSubmit={(setSubmitting) => {
				sendEmail();
				setSubmitting(false);
			}}
		>
			{(formik) => (
				<Form
					onSubmit={formik.handleSubmit}
					className={styles.formWrapper}
					name='contactMe'
					id='contactMe'
				>
					<p>
						Feel free to reach out if you're looking for a developer, have a
						question, or just want to connect.
					</p>
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
					{formResponse === 'neutral' && (
						<p>
							<button type='submit' className={styles.BtnMain}>
								{btnSubmitValue}
							</button>
						</p>
					)}
					{formResponse === 'success' && (
						<Alert severity='success'>
							<p>
								👍 Thank you for contacting me, your message has been
								succesfully delivered! I will answer as soon as posible.
							</p>
						</Alert>
					)}
					{formResponse === 'error' && (
						<Alert severity='error'>
							<p>
								😟 There was a problem sending this message. Please send me a
								direct Email message or try again in a couple of minutes.
							</p>
							<p>
								<button
									type='reset'
									className={styles.BtnMain}
									onClick={handleReset}
								>
									OK
								</button>
							</p>
						</Alert>
					)}
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
