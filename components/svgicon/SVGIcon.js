import {
	RiArrowDropRightLine,
	RiArrowDropUpLine,
	RiBriefcase4Fill,
	RiCheckFill,
	RiCheckboxBlankCircleFill,
	RiCheckboxCircleFill,
	RiCloseFill,
	RiExternalLinkFill,
	RiGithubFill,
	RiInformationFill,
	RiInstagramFill,
	RiLinkedinBoxFill,
	RiMenuFill,
	RiYoutubeFill,
} from 'react-icons/ri';

import {
	FaClipboardCheck,
	FaExclamationTriangle,
	FaFighterJet,
	FaLaptopCode,
	FaUsers,
} from 'react-icons/fa';

const SVGIcon = ({ icon, className }) => {
	switch (icon) {
		case 'ArrowRight':
			return <RiArrowDropRightLine className={className} />;
			break;

		case 'ArrowUp':
			return <RiArrowDropUpLine className={className} />;
			break;

		case 'Briefcase':
			return <RiBriefcase4Fill className={className} />;
			break;

		case 'Dot':
			return <RiCheckboxBlankCircleFill className={className} />;
			break;

		case 'CheckCircle':
			return <RiCheckboxCircleFill className={className} />;
			break;

		case 'Check':
			return <RiCheckFill className={className} />;
			break;

		case 'Close':
			return <RiCloseFill className={className} />;
			break;

		case 'ExternalLink':
			return <RiExternalLinkFill className={className} />;
			break;

		case 'GitHub':
			return <RiGithubFill className={className} />;
			break;

		case 'Info':
			return <RiInformationFill className={className} />;
			break;

		case 'LinkedIn':
			return <RiLinkedinBoxFill className={className} />;
			break;

		case 'Menu':
			return <RiMenuFill className={className} />;
			break;

		case 'YouTube':
			return <RiYoutubeFill className={className} />;
			break;

		case 'Instagram':
			return <RiInstagramFill className={className} />;
			break;

		case 'ClipBoard':
			return <FaClipboardCheck className={className} />;
			break;

		case 'Exclamation':
			return <FaExclamationTriangle className={className} />;
			break;

		case 'Jet':
			return <FaFighterJet className={className} />;
			break;

		case 'LaptopCode':
			return <FaLaptopCode className={className} />;
			break;

		case 'Users':
			return <FaUsers className={className} />;
			break;

		default:
			return <RiInformationFill className={className} />;
			break;
	}
};

export default SVGIcon;
