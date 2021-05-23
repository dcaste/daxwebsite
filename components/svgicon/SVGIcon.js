import {
	RiArrowDropRightLine,
	RiArrowDropUpLine,
	RiBriefcase4Fill,
	RiCheckFill,
	RiCheckboxBlankCircleFill,
	RiCheckboxCircleFill,
	RiCloseCircleFill,
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

const SVGIcon = ({ icon }) => {
	switch (icon) {
		case 'ArrowRight':
			return <RiArrowDropRightLine />;
			break;

		case 'ArrowUp':
			return <RiArrowDropUpLine />;
			break;

		case 'Briefcase':
			return <RiBriefcase4Fill />;
			break;

		case 'Dot':
			return <RiCheckboxBlankCircleFill />;
			break;

		case 'CheckCircle':
			return <RiCheckboxCircleFill />;
			break;

		case 'Check':
			return <RiCheckFill />;
			break;

		case 'Close':
			return <RiCloseCircleFill />;
			break;

		case 'ExternalLink':
			return <RiExternalLinkFill />;
			break;

		case 'GitHub':
			return <RiGithubFill />;
			break;

		case 'Info':
			return <RiInformationFill />;
			break;

		case 'LinkedIn':
			return <RiLinkedinBoxFill />;
			break;

		case 'Menu':
			return <RiMenuFill />;
			break;

		case 'YouTube':
			return <RiYoutubeFill />;
			break;

		case 'Instagram':
			return <RiInstagramFill />;
			break;

		case 'ClipBoard':
			return <FaClipboardCheck />;
			break;

		case 'Exclamation':
			return <FaExclamationTriangle />;
			break;

		case 'Jet':
			return <FaFighterJet />;
			break;

		case 'LaptopCode':
			return <FaLaptopCode />;
			break;

		case 'Users':
			return <FaUsers />;
			break;

		default:
			return <RiInformationFill />;
			break;
	}
};

export default SVGIcon;
