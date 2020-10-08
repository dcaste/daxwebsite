import PropTypes from 'prop-types';
import Link from 'next/link';

const BtnGroup = ({ btnMainLink, btnMainCopy, btnSecLink, btnSecCopy }) => {
	return (
		<div className='BtnGroup'>
			<Link href={btnMainLink} className='btn marginRight'>
				<a>{btnMainCopy}</a>
			</Link>
			<Link href={btnSecLink} className='btn-hollow'>
				<a>{btnSecCopy}</a>
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
