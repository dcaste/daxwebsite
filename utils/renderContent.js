/**
 * Function that returns the rendered HTML content.
 *
 * Reads each item coming from the CMS, calls its component dinamycally and then return the HTML to be rendered.
 */

// Dynamic utility that loads components.
import dynamic from 'next/dynamic';
import { getItemKey } from './misc';

export default function renderContent(item) {
	switch (item.__component) {
		// Title component.
		case 'typography.title':
			const Title = dynamic(() => import('@/comp/title/Title'));
			return <Title props={item} key={getItemKey(item.__component, item.id)} />;

		// Card component.
		case 'layout.card':
			const Card = dynamic(() => import('@/comp/card/Card'));
			return <Card key={getItemKey(item.__component, item.id)} props={item} />;

		// Centered Content.
		case 'typography.centered-content':
			const CenteredContent = dynamic(() =>
				import('@/comp/centeredcontent/CenteredContent')
			);
			return (
				<CenteredContent
					key={getItemKey(item.__component, item.id)}
					props={item}
				/>
			);

		// Split Content Component
		case 'layout.split-content':
			const SplitContent = dynamic(() =>
				import('@/comp/splitcontent/SplitContent')
			);
			return (
				<SplitContent
					props={item}
					key={getItemKey(item.__component, item.id)}
				/>
			);

		// Feature List.
		case 'layout.feature-list':
			const FeatureList = dynamic(() =>
				import('@/comp/featurelist/FeatureList')
			);
			return (
				<FeatureList key={getItemKey(item.__component, item.id)} props={item} />
			);

		// Image Container.
		case 'global.res-picture':
			const ImageContainer = dynamic(() =>
				import('@/comp/imagecontainer/ImageContainer')
			);
			return (
				<ImageContainer
					key={getItemKey(item.__component, item.id)}
					props={item}
				/>
			);

		default:
			return <p key={getItemKey(item.style, item.id)}>Component not found</p>;
	}
}
