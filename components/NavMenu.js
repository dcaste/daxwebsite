import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const navMenu = (props) => {
	const { element } = props;
	const id = element === 'header' ? 'navHeader' : 'navFooter';

	const content = () => {
		return (
			<nav className='navMenu'>
				<Link href='/'>
					<a className='logo'>
						<span className='textRed'>Dax</span>Castellón
					</a>
				</Link>
				<ul className='navLinks'>
					<li className='navItem'>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className='navItem'>
						<Link href='/portfolio'>
							<a>Portfolio</a>
						</Link>
					</li>
					<li className='navItem'>
						<Link href='/about'>
							<a>About Me</a>
						</Link>
					</li>
					<li className='navItem'>
						<Link href='/contact'>
							<a>Contact Me</a>
						</Link>
					</li>
					<li className='navItem socialIcon'>
						<a href='https://www.linkedin.com/in/daxcastellonmeyrat/'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li className='navItem socialIcon'>
						<a href='https://github.com/dcaste/'>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</li>
				</ul>
			</nav>
		);
	};

	return element === 'header' ? (
		<header id={id}>{content()}</header>
	) : (
		<footer id={id}>{content()}</footer>
	);
};

export default navMenu;
