import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureList = (props) => {
	const [config, itemList] = props.data;
	const TitleTag = config.titleTag;
	const SubTitleTag = config.subtitleTag;
	const linkURL = config.link;

	return (
		<section className='featureList'>
			<TitleTag className='featureList__Title'>
				{config.title}
				<span className='textRed'> {config.titleRed}</span>
			</TitleTag>

			{itemList.items.map((item) => (
				<div className='featureItem' key={item.id}>
					<span className='fa-stack fa-2x featureIcon'>
						<FontAwesomeIcon icon='circle' className='fa-stack-2x' />
						<FontAwesomeIcon
							icon={item.icon}
							className='fa-stack-1x fa-inverse'
						/>
					</span>
					<SubTitleTag>{item.title}</SubTitleTag>
					<p>{item.copy}</p>
				</div>
			))}

			<p className='featureList__Title'>
				<Link to={linkURL}>
					{config.linkCopy}
					<FontAwesomeIcon icon='angle-right' className='marginLeft' />
				</Link>
			</p>
		</section>
	);
};

export default FeatureList;
