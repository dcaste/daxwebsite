import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BtnGroup = ({ btnMainLink, btnMainCopy, btnSecLink, btnSecCopy }) => {
	return (
		<div className='BtnGroup'>
			<Link to={btnMainLink} className='btn marginRight'>
				{btnMainCopy}
			</Link>
			<Link to={btnSecLink} className='btn-hollow'>
				{btnSecCopy}
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
