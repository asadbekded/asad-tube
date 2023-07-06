import './Home.css';
import  {  useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { ApiService } from '../../service/api.service';
import VideoComp from '../../components/VideoComp/VideoComp';

export default function Home() {
  const [selectCategory, setSelectCategory] = useState('New');
  const [video, setVideos] = useState([]);
  const selectedCategoryHandle = category => setSelectCategory(category);


  useEffect(() => {
   ApiService.fetching(`search?part=snippet&q=${selectCategory}`)
   .then(res => setVideos(res.data.items))
   .catch(err => console.log(err))
  }, [selectCategory])

  return (
    <>
      <Navbar selectedCategoryHandle={selectedCategoryHandle} selectCategory={selectCategory}/>
        <div className='container'>
          <h1 className='home__title'>{selectCategory} <span className='home__spn'>vidio</span></h1>

          <VideoComp videos={video}/>
        </div>
    </>
  )
}
