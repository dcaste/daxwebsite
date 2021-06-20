import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useState } from 'react';

import Alert from '@/comp/alert/Alert';
import ImageContainer from '@/comp/imagecontainer/ImageContainer';
import SocialLinks from '@/comp/sociallinks/SocialLinks';

import styles from './ContactForm.module.scss';
import btnStyles from '../btnlink/BtnLink.module.scss';

const ContactForm = ({
	props: { picture, email, headline, id, jobTitle, name, socialLinks },
}) => {
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
					setFormResponse('success');
					setBtnSubmitValue('Send message');
				},
				function (error) {
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
		<div className={styles.wrapper}>
			<div className={styles.contactInfo}>
				{picture?.id && <ImageContainer props={picture} />}
				{name && <p className={styles.name}>{name}</p>}
				{jobTitle && <p>{jobTitle}</p>}
				{email && <p>{email}</p>}
				{socialLinks && (
					<div className={styles.socialLinks}>
						<SocialLinks props={socialLinks} />
					</div>
				)}
			</div>

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
						name='contactMe'
						id='contactMe'
						className={styles.formWrapper}
					>
						{headline && <p className='lead'>{headline}</p>}

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
								<button type='submit' className={btnStyles.btnMain}>
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
										className={btnStyles.btnMain}
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
		</div>
	);
};

export default ContactForm;
