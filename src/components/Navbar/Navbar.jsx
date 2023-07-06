import './Navbar.css';
import {category} from '../../constans/index';

export default function Navbar({selectedCategoryHandle, selectCategory}) {
  return (
    <div>
        <div className='category__box'>
            {
                category.map(el => (
                    <button className='category__btn'
                    key={el.name}
                    style={{backgroundColor: el.name === selectCategory && '#821a1a', color:  el.name === selectCategory && '#fff'}}
                    onClick={() => selectedCategoryHandle(el.name)}>
                        <span style={el.name === selectCategory ? {color: '#fff'} : {color: '#821a1a'}} className='category__spn'>{el.icon}</span>
                        <p className='category__text'>{el.name}</p>
                    </button>
                ))
            }
        </div>
    </div>
  )
}
