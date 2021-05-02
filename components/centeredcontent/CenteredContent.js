import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Title from '@/comp/title/Title';
import styles from './CenteredContent.module.scss';

const CenteredContent = ({ props: { content, title, alignment, style } }) => {
	return (
		<div
			className={classNames(style, styles.CenteredContent)}
			style={{ textAlign: alignment }}
		>
			{title && <Title props={title} />}
			<ReactMarkdown source={content} className={styles.Content} />
		</div>
	);
};

CenteredContent.propTypes = {
	content: PropTypes.string.isRequired,
	title: PropTypes.object,
	style: PropTypes.string,
	alignment: PropTypes.string,
};

CenteredContent.defaultProps = {
	content: 'Please add missing content',
	alignment: 'center',
};

export default CenteredContent;
