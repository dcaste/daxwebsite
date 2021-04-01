/**
 * Function that returns the rendered HTML content.
 * Reads each item from the page, calls its component dinamycally and then return the HTML.
 */

// Dynamic utility that loads components.
import dynamic from 'next/dynamic';

export default function renderContent(item) {
	const itemId = item.__component + item.id;

	switch (item.__component) {
		case 'typography.title':
			const Title = dynamic(() => import('@/title/Title'));
			const icon = item.icon ? item.icon.icon : '';
			const alignment = item.alignment ? item.alignment : 'left';

			return (
				<Title
					Tag={item.tag}
					copyMain={item.copy_main}
					copySecondary={item.copy_secondary}
					icon={icon}
					alignment={alignment}
					key={itemId}
				/>
			);

		case 'layout.card':
			const Card = dynamic(() => import('@/card/Card'));
			return <Card key={itemId}>{item.content}</Card>;

		case 'typography.centered-paragraph':
			return (
				<p className='textCentered' key={itemId}>
					{item.content}
				</p>
			);

		default:
			return <p key={itemId}>CARD</p>;
	}
}
