import styles from './CopyRight.module.scss';

const CopyRight = () => {
	return (
		<p className={styles.copyRight}>
			<span>
				© {new Date().getFullYear()}, Dax Castellón Meyrat. Built with{' '}
				<a href='https://nextjs.org/'>NextJS</a>
			</span>
		</p>
	);
};

export default CopyRight;
