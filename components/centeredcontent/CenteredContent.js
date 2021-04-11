import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Title from '@/title/Title';
import styles from './CenteredContent.module.scss';

const CenteredContent = ({ props: { content, title, style } }) => {
	return (
		<div className={classNames(style, styles.CenteredContent)}>
			{title && <Title props={title} />}
			<ReactMarkdown source={content} className={styles.Content} />
		</div>
	);
};

CenteredContent.propTypes = {
	content: PropTypes.string.isRequired,
	title: PropTypes.object,
	style: PropTypes.string,
};

CenteredContent.defaultProps = {
	content: 'Please add missing content',
};

export default CenteredContent;
