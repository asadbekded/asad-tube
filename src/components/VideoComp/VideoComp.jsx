import { Stack, Box } from '@mui/material'
import VideosCard from '../VideosCard/VideosCard'
import ChannelCard from '../ChannelCard/ChannelCard'
import './VideoComp.css';



export default function VideoComp({videos}) {
    return (
		// <Stack
		// 	width={'100%'}
		// 	direction={'row'}
		// 	flexWrap='wrap'
		// 	justifyContent='start'
		// 	alignItems='start'
		// 	gap={2}
		// >
		// 	{videos.map((item, idx) => (
		// 		<Box key={idx}>
		// 			{item.id.videoId && <VideosCard video={item} />}
		// 			{item.id.channelId && <ChannelCard video={item} />}
		// 		</Box>
		// 	))}
		// </Stack>
		<ul className='video__list'>
			{videos.map((item, idx) => (
				<div className='video__content-list' key={idx}>
					{item.id.videoId && <VideosCard video={item} />}
					{item.id.channelId && <ChannelCard video={item} />}
				</div>
			))}
		</ul>
	)
}
