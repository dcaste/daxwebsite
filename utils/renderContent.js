/**
 * Function that returns the rendered HTML content.
 *
 * Reads each item coming from the CMS, calls its component dinamycally and then return the HTML to be rendered.
 */

// Dynamic utility that loads components.
import dynamic from 'next/dynamic';
import getitemKey from './misc';

export default function renderContent(item) {
	switch (item.__component) {
		// Title component.
		case 'typography.title':
			const Title = dynamic(() => import('@/title/Title'));
			return <Title props={item} key={getitemKey(item.__component, item.id)} />;

		// Card component.
		case 'layout.card':
			const Card = dynamic(() => import('@/card/Card'));
			return (
				<Card key={getitemKey(item.__component, item.id)}>{item.content}</Card>
			);

		// Centered Content.
		case 'typography.centered-content':
			const ReactMarkdown = dynamic(() => import('react-markdown'));
			return (
				<div
					className='centeredContent'
					key={getitemKey(item.__component, item.id)}
				>
					<ReactMarkdown source={item.content} />
				</div>
			);

		// Split Content Component
		case 'layout.split-content':
			const SplitContent = dynamic(() => import('@/splitcontent/SplitContent'));
			return (
				<SplitContent
					props={item}
					key={getitemKey(item.__component, item.id)}
				/>
			);

		default:
			return <p key={getitemKey(item.style, item.id)}>Component not found</p>;
	}
}
