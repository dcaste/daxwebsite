import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const NavMenu = (props) => {
	const { id, element } = props;

	const content = () => {
		return (
			<nav className='NavMenu'>
				<Link href='/' className='logo'>
					<a>
						<span className='TextRed'>Dax</span>Castellón
					</a>
				</Link>
				<ul className='NavLinks'>
					<li className='NavItem'>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className='NavItem'>
						<Link href='/portfolio/'>
							<a>Portfolio</a>
						</Link>
					</li>
					<li className='NavItem'>
						<Link href='/about/'>
							<a>About Me</a>
						</Link>
					</li>
					<li className='NavItem'>
						<Link href='/contact/'>
							<a>Contact Me</a>
						</Link>
					</li>
					<li className='NavItem SocialIcon'>
						<a href='https://www.linkedin.com/in/daxcastellonmeyrat/'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li className='NavItem SocialIcon'>
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

export default NavMenu;
