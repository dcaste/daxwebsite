import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './BtnLink.module.scss';

function BtnLink({ props: { copy, url, target, style } }) {
	return target === '_blank' ? (
		<a className={styles[style]} href={url} target={target}>
			{copy}
		</a>
	) : (
		<Link href={url}>
			<a className={styles[style]} target={target}>
				{copy}
			</a>
		</Link>
	);
}

BtnLink.propTypes = {
	copy: PropTypes.string,
	url: PropTypes.string,
	target: PropTypes.string,
	style: PropTypes.string,
};

BtnLink.defaultProps = {
	copy: 'Copy goes here',
	url: '#',
	target: '_self',
	style: 'btnMain',
};

export default BtnLink;
