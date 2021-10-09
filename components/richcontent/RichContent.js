import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styles from './RichContent.module.scss';

function RichContent({ props: { content, alignment, style } }) {
	return (
		<div className={styles[style]} style={{ textAlign: alignment }}>
			<ReactMarkdown source={content} />
		</div>
	);
}

export default RichContent;
