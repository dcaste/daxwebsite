import PropTypes from 'prop-types';
import { getItemKey } from '@/utils/misc';
import styles from './BtnGroup.module.scss';
import BtnLink from '@/comp/btnlink/BtnLink';

const BtnGroup = ({ props }) => {
	return (
		<div className={styles.BtnGroup}>
			{props.map((item) => (
				<BtnLink props={item} key={getItemKey(item.style, item.id)} />
			))}
		</div>
	);
};

BtnGroup.propTypes = {
	props: PropTypes.array.isRequired,
};

export default BtnGroup;
