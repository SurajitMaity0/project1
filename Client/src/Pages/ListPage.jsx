import React, { useContext } from 'react'
import './styles/ListPage.sass'
import MainContext from '../Context/MainContext.js';
import { NavLink } from 'react-router-dom';
const ListPage = () => {
  const {data} = useContext(MainContext);
  data.map((i) => {
    console.log(i.title);
  });

  return (
      <>
        <div className='ListPage'>
          {data.map((item) => (
            <div className="keybox" key={item.id}>
              <img src={item.image?.url || ''} alt={item.title}/>
              <h2>{item.title}</h2>
              <h3>{item.titleType}</h3>
            </div>
          ))}

        </div>
      </>
  )
}

export default ListPage;