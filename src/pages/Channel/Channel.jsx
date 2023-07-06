import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { ApiService } from '../../service/api.service'
import ChannelCard from '../../components/ChannelCard/ChannelCard'
import VideoComp from '../../components/VideoComp/VideoComp'
import './Channel.css'

export default function Channel() {
    const [channelDetail, setChannelDetail] = useState()
	const [videos, setVideos] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
				setChannelDetail(dataChannelDetail.data.items[0])
				const dataVideo = await ApiService.fetching(
					`search?channelId=${id}&part=snippet%2Cid&order=date`
				)
				setVideos(dataVideo.data?.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [id])

	return (
		<div className='container'>
        <div className='channel__content'>
		<Box>
			<Box>
				<Box
					width={'100%'}
					height={'150px'}
					zIndex={10}
					sx={{
						backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<ChannelCard video={channelDetail} marginTop={'-100px'} />
			</Box>
			<Container>
				<VideoComp videos={videos} />
			</Container>
		</Box>
		</div>
        </div>
	)
}
