// Custom Font Awesome library
import { library, config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import {
	faAngleRight,
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
} from '@fortawesome/free-solid-svg-icons';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
	faAngleRight,
	faFighterJet,
	faCircle,
	faClipboardCheck,
	faBriefcase,
	faUsers,
	faExternalLinkAlt,
	faLinkedin,
	faGithub,
	faCheck,
	faCheckCircle,
	faInfoCircle,
	faTimes,
	faExclamationTriangle
);
