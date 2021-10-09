import styles from './CopyRight.module.scss';

const CopyRight = () => {
	return (
		<p className={styles.content}>
			<span>© {new Date().getFullYear()}, Dax Castellón Meyrat</span>
		</p>
	);
};

export default CopyRight;
