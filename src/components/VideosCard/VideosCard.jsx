import './Videos.css';
import moment from 'moment/moment';
import { Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function VideosCard({video}) {

  return (
    <li className='video__item'>
        <Link to={`/video/${video.id.videoId}`}>
        <img className='video__img' src={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} width={360} height={180}/>
        <div className='video__content'>
            <div>
            <p className='video__data'>
                {moment(video?.snippet?.publishedAt).fromNow()}
            </p>
            <h3 className='video__title'>{video?.snippet?.title.slice(0, 50)}</h3>
            <p className='video__text'>{video?.snippet?.description.slice(0, 70)}...</p>
            </div>
        </div>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`} className='link__avatar'>
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <p className='video__channel'>{video?.snippet?.channelTitle}</p>
          <CheckCircle sx={{fontSize: '12px', color: 'gray', ml:'5px'}} />
        </Link>
    </li>
  )
}
