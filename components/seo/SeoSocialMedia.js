import { SocialProfileJsonLd } from 'next-seo';

function SeoBasic({ SocialMedia, personalInfo }) {
	console.log(SocialMedia);
	const mediaProfiles = SocialMedia.map((profiles) => profiles.url);
	console.log(mediaProfiles);

	return (
		<>
			{personalInfo && (
				<SocialProfileJsonLd
					type='Person'
					name={personalInfo.name}
					email={personalInfo.email}
					jobTitle={personalInfo.jobTitle}
					url={personalInfo.websiteURL}
					sameAs={mediaProfiles}
				/>
			)}
		</>
	);
}

export default SeoBasic;
