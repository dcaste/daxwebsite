import styles from './Card.module.scss';
import classNames from 'classnames';

const Card = ({ children, className }) => {
	return <div className={classNames(className, styles.card)}>{children}</div>;
};

export default Card;
