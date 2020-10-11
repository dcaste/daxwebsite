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
			<p className='textBig'>
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
			<div>
				<form>
					<p>
						<label>Title</label>
						<br />
						<label>
							<input type='radio' name='title' value='mr' />
							Mr
						</label>
						<label>
							<input type='radio' name='title' value='mrs' />
							Mrs
						</label>
						<label>
							<input type='radio' name='title' value='miss' />
							Miss
						</label>
					</p>
					<p>
						<label htmlFor=''>Name</label>
						<input type='text' name='' id='' className={styles.input} />
					</p>
					<p>
						<label htmlFor=''>Message</label>
						<br />
						<textarea className={styles.input}></textarea>
					</p>
					<p>
						<button type='submit' className={btnStyles.btn}>
							Send message
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Form;
