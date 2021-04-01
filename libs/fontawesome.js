// Custom Font Awesome library
import { library, config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import {
	faAngleRight,
	faAngleUp,
	faFighterJet,
	faCircle,
	faClipboardCheck,
	faBriefcase,
	faUsers,
	faExternalLinkAlt,
	faCheck,
	faCheckCircle,
	faInfoCircle,
	faTimes,
	faExclamationTriangle,
	faBars,
	faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

import {
	faLinkedin,
	faGithub,
	faInstagramSquare,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faAngleRight,
	faAngleUp,
	faFighterJet,
	faCircle,
	faClipboardCheck,
	faBriefcase,
	faUsers,
	faExternalLinkAlt,
	faCheck,
	faCheckCircle,
	faInfoCircle,
	faTimes,
	faExclamationTriangle,
	faBars,
	faLaptopCode,
	faLinkedin,
	faInstagramSquare,
	faYoutube,
	faGithub
);

export default function renderIcon(iconName) {
	const iconLibrary = {
		faAngleRight: 'angle-right',
		faAngleUp: 'angle-up',
		faFighterJet: 'fighter-jet',
		faCircle: 'circle',
		faClipboardCheck: 'clipboard-check',
		faBriefcase: 'briefcase',
		faUsers: 'users',
		faExternalLinkAlt: 'external-links-alt',
		faCheck: 'check',
		faCheckCircle: 'check-circle',
		faInfoCircle: 'info-circle',
		faTimes: 'times',
		faExclamationTriangle: 'exclamation-triangle',
		faBars: 'bars',
		faLaptopCode: 'laptop-code',
		faLinkedin: 'linkedin',
		faInstagramSquare: 'instagram-square',
		faYoutube: 'youtube',
		faGithub: 'github',
	};

	let renderedIcon = ['fas', ''];

	switch (iconName) {
		case 'faInstagramSquare':
			renderedIcon = ['fab', 'instagram-square'];
			break;

		case 'faYoutube':
			renderedIcon = ['fab', 'youtube'];
			break;

		case 'faLinkedin':
			renderedIcon = ['fab', 'linkedin'];
			break;

		case 'faLinkedin':
			renderedIcon = ['fab', 'linkedin'];
			break;

		default:
			renderedIcon = ['fas', iconLibrary[iconName]];
			break;
	}

	return renderedIcon;
}
