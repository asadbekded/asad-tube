import './Video.css';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material'
import { ApiService } from '../../service/api.service'
import ReactPlayer from 'react-player'
import VideoComp from '../../components/VideoComp/VideoComp'

export default function Video() {
	const { id } = useParams()
    const [videoDetail, setVideoDetail] = useState(null)
	const [relatedVideo, setRelatedVideo] = useState([])

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
				setVideoDetail(data.data.items[0])
				const relatedData = await ApiService.fetching(
					`search?part=snippet&relatedToVideoId=${id}&type=video`
				)
				setRelatedVideo(relatedData.data.items)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [id])


	return (
		<div className='container'>
		<div className='video__content-page'>
		<Box className='just__box' display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
				<Box className='just__player' width={{ xs: '100%', md: '75%' }}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						className='react-player'
						controls
					/>
					{videoDetail?.snippet?.tags.map((item, idx) => (
						<Chip
							label={item}
							key={idx}
							sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
							deleteIcon={<Tag />}
							onDelete={() => {}}
							variant='outlined'
						/>
					))}
					<Typography className='just__title' variant='h5' fontWeight='bold' p={2}>
						{videoDetail?.snippet?.title}
					</Typography>
					<Typography variant='subtitle2' p={2} sx={{ opacity: '.7' }}>
						{videoDetail?.snippet?.description}
					</Typography>
					<Stack className='just__content' direction='row' gap='20px' alignItems='center' py={1} px={2}>
						<Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
							<Visibility />
							{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
						</Stack>
						<Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
							<FavoriteOutlined />
							{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
						</Stack>
						<Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
							<MarkChatRead />
							{parseInt(videoDetail?.statistics?.commentCount).toLocaleString()} comment
						</Stack>
					</Stack>
					<Stack direction='row' py={1} px={2}>
						<Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
							<Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
								<Avatar
									alt={videoDetail?.snippet?.channelTitle}
									src={videoDetail?.snippet?.thumbnails?.default?.url}
								/>
								<Typography variant='subtitle2' color='gray'>
									{videoDetail?.snippet?.channelTitle}
									<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
								</Typography>
							</Stack>
						</Link>
					</Stack>
				</Box>
				<div className='video__page-box'>
					<VideoComp videos={relatedVideo} />
				</div>
		</Box>
		</div>
		</div>
	)
}
