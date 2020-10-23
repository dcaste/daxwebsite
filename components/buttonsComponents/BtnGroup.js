import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './BtnGroup.module.scss';
import stylesBtn from './Btn.module.scss';

const BtnGroup = ({ btnMainLink, btnMainCopy, btnSecLink, btnSecCopy }) => {
	return (
		<div className={styles.BtnGroup}>
			<Link href={btnMainLink}>
				<a className={stylesBtn.btn}>{btnMainCopy}</a>
			</Link>
			<Link href={btnSecLink}>
				<a className={`${stylesBtn.btnHollow} marginLeft`}>{btnSecCopy}</a>
			</Link>
		</div>
	);
};

BtnGroup.propTypes = {
	btnMainLink: PropTypes.string.isRequired,
	btnMainCopy: PropTypes.string.isRequired,
	btnSecLink: PropTypes.string.isRequired,
	btnSecCopy: PropTypes.string.isRequired,
};

export default BtnGroup;
