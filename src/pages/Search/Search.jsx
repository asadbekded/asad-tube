import './Search.css';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'
import VideoComp from '../../components/VideoComp/VideoComp';

export default function Search() {
    const [video, setVideo] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const getData = async () => {
            try{
                const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
                setVideo(data.data.items);
            } catch (error){
                console.log(error);
            }
        }
        getData()
    }, [id])
  return (
    <div className='container'>
      <div className='search__content' >
        <h2 className='search__title'><span className='home__spn'>{id.toUpperCase()}</span></h2>
        <VideoComp videos={video} />
      </div>
    </div>
  )
}
