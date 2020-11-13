import styles from './ContactForm.module.scss';
import btnStyles from '../buttonsComponents/Btn.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const ContactForm = () => {
	const [btnSubmitValue, setBtnSubmitValue] = useState('Send message'); // Submit Button Value
	const [btnSubmitError, showSubmitErrMsg] = useState(false); // Error Submit Message

	const clearFormHandler = () => {
		setBtnSubmitValue('Send message');
		showSubmitErrMsg(false);
	};

	const sendEmail = () => {
		setBtnSubmitValue('Sending...');

		emailjs
			.sendForm(
				process.env.emailjsService,
				process.env.emailjsTemplate,
				'contactMe',
				process.env.emailjsUser
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					console.log('FAILED...', error);
					showSubmitErrMsg(true);
				}
			);
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
						{btnSubmitError ? (
							<div className={styles.sendingError}>
								<p>
									There was a problem sending this message. Please send me a
									direct Email message or try again in a couple of minutes.
								</p>
								<p>
									<button
										type='reset'
										className={btnStyles.btn}
										onClick={clearFormHandler}
									>
										OK
									</button>
								</p>
							</div>
						) : (
							<button type='submit' className={btnStyles.btn}>
								{btnSubmitValue}
							</button>
						)}
					</p>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
