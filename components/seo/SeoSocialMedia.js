import { SocialProfileJsonLd, NextSeo } from 'next-seo';

function SeoBasic({ socialMedia, personalInfo }) {
	if (!socialMedia) {
		return null;
	}

	return (
		<>
			{personalInfo && (
				<SocialProfileJsonLd
					type='Person'
					name={personalInfo.name}
					email={personalInfo.email}
					jobTitle={personalInfo.jobTitle}
					url={socialMedia.website}
					sameAs={[
						'http://www.facebook.com/your-profile',
						'http://instagram.com/yourProfile',
						'http://www.linkedin.com/in/yourprofile',
						'http://plus.google.com/your_profile',
					]}
				/>
			)}
		</>
	);
}

export default SeoBasic;
