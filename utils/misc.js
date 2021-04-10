// Miscellaneous functions.

// Returns the proper Item Key needed for REACT.
export function getItemKey(itemName, itemId) {
	const key = itemName + itemId;
	return key;
}

// Returns the proper Font Awesome icon class.
export function renderIcon(iconName) {
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

		case 'faGithub':
			renderedIcon = ['fab', 'github'];
			break;

		default:
			renderedIcon = ['fas', iconLibrary[iconName]];
			break;
	}

	return renderedIcon;
}
