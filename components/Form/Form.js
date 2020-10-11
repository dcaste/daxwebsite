import styles from './Form.module.scss';
import btnStyles from './../buttons/Btn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../components/image/Image';

const Form = () => {
	return (
		<div className={styles.formComponent}>
			<Image
				src_lg='/assets/img/avatar.jpg'
				alt='Dax Castellón'
				imgClass='rounded'
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

			<form className={styles.formWrapper}>
				<label htmlFor=''>Name</label>
				<input type='text' name='' id='' className={styles.input} />
				<label htmlFor=''>Message</label>
				<textarea className={styles.input} rows='6'></textarea>
				<div>
					<button type='submit' className={btnStyles.btn}>
						Send message
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
