import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from '@/title/Title';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIcon from '../../libs/fontawesome';
import Image from 'next/image';
import styles from './SplitContent.module.scss';

const SplitContent = ({ props }) => {
	const renderPicture = (picture) => {
		return (
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${picture.image.url}`}
				alt={picture.image.alternativetext}
				width={picture.image.width}
				height={picture.image.height}
				className={picture.style}
			/>
		);
	};

	const renderTitle = (title) => {
		return (
			<Title
				Tag={title.tag}
				copyMain={title.copyMain}
				copySecondary={title.copySecondary}
				alignment={title.alignment}
				icon={title.Icon}
			/>
		);
	};

	const renderLink = (link) => {
		const Tag = link.tag;
		const renderedIcon = link.icon ? renderIcon(link.icon) : null;

		return (
			<Tag className={link.tag_class}>
				{link.target === '_blank' ? (
					<a href={link.url} target={link.target}>
						{link.copy}
						<span className='marginLeft'>
							<FontAwesomeIcon icon={renderedIcon} />
						</span>
					</a>
				) : (
					<Link href={link.url}>
						<a target={link.target}>
							{link.copy}
							<span className='marginLeft'>
								<FontAwesomeIcon icon={renderedIcon} />
							</span>
						</a>
					</Link>
				)}
			</Tag>
		);
	};

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
				{props.LeftPicture && renderPicture(props.LeftPicture)}
				{props.LeftTitle && renderTitle(props.LeftTitle)}
				{props.LeftContent && <ReactMarkdown source={props.LeftContent} />}
				{props.LeftLink && renderLink(props.LeftLink)}
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
