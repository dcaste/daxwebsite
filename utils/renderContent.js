/**
 * Function that returns the rendered HTML content.
 *
 * Reads each item coming from the CMS, calls its component dinamycally and then return the HTML to be rendered.
 */

// Dynamic utility that loads components.
import dynamic from 'next/dynamic';

export default function renderContent(item) {
	// Assigns an item ID required by REACT.
	const itemId = item.__component + item.id;

	switch (item.__component) {
		// Title component.
		case 'typography.title':
			const Title = dynamic(() => import('@/title/Title'));
			const icon = item.Icon ? item.Icon : null;
			const alignment = item.alignment ? item.alignment : 'left';

			return (
				<Title
					Tag={item.tag}
					copyMain={item.copyMain}
					copySecondary={item.copySecondary}
					icon={icon}
					alignment={alignment}
					key={itemId}
				/>
			);

		// Card component.
		case 'layout.card':
			const Card = dynamic(() => import('@/card/Card'));
			return <Card key={itemId}>{item.content}</Card>;

		// Centered Content.
		case 'typography.centered-content':
			const ReactMarkdown = dynamic(() => import('react-markdown'));
			return (
				<div className='centeredContent' key={itemId}>
					<ReactMarkdown source={item.content} />
				</div>
			);

		// Split Content Component
		case 'layout.split-content':
			const SplitContent = dynamic(() => import('@/splitcontent/SplitContent'));
			return <SplitContent props={item} key={itemId} />;

		default:
			return <p key={itemId}>Component not found</p>;
	}
}
