import styles from './CopyRight.module.scss';

const CopyRight = () => {
	return (
		<p className={styles.copyRight}>
			© {new Date().getFullYear()}, Dax Castellón Meyrat <br />
			Built with <a href='https://nextjs.org/'>NextJS</a>
		</p>
	);
};

export default CopyRight;
