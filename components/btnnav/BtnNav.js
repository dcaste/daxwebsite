import styles from './BtnNav.module.scss';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const BtnNav = ({ open, toggle }) => {
	return (
		<button className={styles.btnNav} onClick={toggle}>
			{open ? <SVGIcon icon={'Close'} /> : <SVGIcon icon={'Menu'} />}
		</button>
	);
};

export default BtnNav;
