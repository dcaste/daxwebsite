import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './BtnLink.module.scss';

function BtnLink({ props: { copy, URL, target, style } }) {
	return target === '_blank' ? (
		<a className={styles[style]} href={URL} target={target}>
			{copy}
		</a>
	) : (
		<Link href={URL}>
			<a className={styles[style]} target={target}>
				{copy}
			</a>
		</Link>
	);
}

BtnLink.propTypes = {
	copy: PropTypes.string,
	URL: PropTypes.string,
	target: PropTypes.string,
	style: PropTypes.string,
};

BtnLink.defaultProps = {
	copy: 'Copy goes here',
	URL: '#',
	target: '_self',
	style: 'btnMain',
};

export default BtnLink;
