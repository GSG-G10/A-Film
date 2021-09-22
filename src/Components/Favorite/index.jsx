import React from 'react';
import './style.css';

// import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
// https://yts.mx/api/v2/movie_details.json?movie_id=35165

function Favorite({setSearchValueInput}) {

  let dataFromLocalStorage = localStorage.getItem('favorite-film')
  console.log(dataFromLocalStorage)


  return (
    <section className='page'>
      {dataFromLocalStorage
        ? dataFromLocalStorage.map((ele, index) => {
          
            return (
              <div className='card'>
                <a href={ele.url}>
                  <img src={ele.medium_cover_image} alt="" />
                </a>
                <p>{ele.title}</p>
                <p>
                summary :{ele.summary}
                </p>
                <p>
                Date Uploaded :{ele.date_uploaded}
                </p>
                <p>
                Type of Film :{ele.genres[0]}
                </p>
                <div>
                  <button onClick={() => addDataLocal(ele.id)}> Add to Favorite</button>
                </div>
              </div>
            )
          })
        : null}

    </section>
  );
}

export default Favorite;




