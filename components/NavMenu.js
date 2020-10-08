import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const NavMenu = (props) => {
	const { id, element } = props;

	const content = () => {
		return (
			<nav className='NavMenu'>
				<Link to='/' className='logo'>
					<span className='TextRed'>Dax</span>Castellón
				</Link>
				<ul className='NavLinks'>
					<li className='NavItem'>
						<NavLink exact to='/'>
							Home
						</NavLink>
					</li>
					<li className='NavItem'>
						<NavLink to='/portfolio/'>Portfolio</NavLink>
					</li>
					<li className='NavItem'>
						<NavLink to='/about/'>About Me</NavLink>
					</li>
					<li className='NavItem'>
						<NavLink to='/contact/'>Contact Me</NavLink>
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
