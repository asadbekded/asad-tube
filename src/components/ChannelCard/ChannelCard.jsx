import { CheckCircle } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './ChannelCard.css';


export default function ChannelCard({video}) {
    return (
		<li className='channel__card-item'>
			<Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}>
				<div className='channel__card-context'>
					<img
						src={video?.snippet?.thumbnails?.high?.url}
						alt={video?.snippet?.title}
						className='channel__card-img'
					/>
					<h3 className='channel__card-title'>
						{video?.snippet?.title}{' '}
						<CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
					</h3>
					{video?.statistics?.subscriberCount && (
						<p className='channel__card-text'>
							{parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
						</p>
					)}
				</div>
			</Link>
		</li>
	)
}
