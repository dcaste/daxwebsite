import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from '@/title/Title';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
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
				{props.LeftTitle && (
					<Title
						Tag={props.LeftTitle.tag}
						copyMain={props.LeftTitle.copyMain}
						copySecondary={props.LeftTitle.copySecondary}
						alignment={props.LeftTitle.alignment}
						icon={props.LeftTitle.Icon}
					/>
				)}
				{props.LeftContent && <ReactMarkdown source={props.LeftContent} />}
				{props.LeftPicture && (
					<Image
						src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.LeftPicture.image.url}`}
						alt={props.LeftPicture.image.alternativetext}
						width={props.LeftPicture.image.width}
						height={props.LeftPicture.image.height}
						className={props.LeftPicture.style}
					/>
				)}
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
