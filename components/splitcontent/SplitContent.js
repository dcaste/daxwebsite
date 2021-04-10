import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import Title from '@/title/Title';
import ImageWrapper from '@/imageWrapper/ImageWrapper';
import ProperLink from '@/properlink/ProperLink';
import BtnGroup from '@/btngroup/BtnGroup';

import styles from './SplitContent.module.scss';

const SplitContent = ({ props }) => {
	return (
		<div
			className={classNames(
				styles[`split_${props.Split}`],
				styles[`${props.OrderInMobile}`]
			)}
		>
			<div
				className={styles.ContentLeft}
				style={{
					textAlign: props.LeftContentAlignment,
					justifyContent: props.LeftVerticalAlign,
				}}
			>
				{props?.LeftPicture && <ImageWrapper props={props.LeftPicture} />}
				{props?.LeftTitle && <Title props={props.LeftTitle} />}
				{props?.LeftContent && <ReactMarkdown source={props.LeftContent} />}
				{props?.LeftLink && <ProperLink props={props.LeftLink} />}
				{props?.LeftButtons && <BtnGroup props={props.LeftButtons} />}
			</div>

			<div
				className={styles.ContentRight}
				style={{
					textAlign: props.RightContentAlignment,
					justifyContent: props.RightVerticalAlign,
				}}
			>
				{props.RightContent && <ReactMarkdown source={props.RightContent} />}
			</div>
		</div>
	);
};

SplitContent.propTypes = {
	Split: PropTypes.string.isRequired,
	OrderInMobile: PropTypes.string.isRequired,
	LeftContentAlignment: PropTypes.string.isRequired,
	RightContentAlignment: PropTypes.string.isRequired,
};

SplitContent.defaultProps = {
	Split: 'split_Equal',
	OrderInMobile: 'LeftToRight',
	LeftContentAlignment: 'left',
	RightContentAlignment: 'left',
};

export default SplitContent;
