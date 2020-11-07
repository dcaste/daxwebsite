import styles from './ContactForm.module.scss';
import btnStyles from '../buttonsComponents/Btn.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: (e) => {
			// alert(JSON.stringify(values, null, 2));
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
		},
	});
	const sendEmail = (e) => {
		e.preventDefault();

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
	};
	return (
		<form onSubmit={sendEmail} id='ContactForm'>
			<label htmlFor='email'>Email Address</label>
			<input
				id='email'
				name='email'
				type='email'
				onChange={formik.handleChange}
				value={formik.values.email}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ContactForm;
