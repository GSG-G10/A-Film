import React, { useEffect, useState } from 'react';
import './style.css'

function HomePage({ searchValue }) {
  const [fetchingData, setFetchingData] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://crossorig.in/https://yts.am/api/v2/list_movies.json?limit=15&sort_by=year&query_term=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('hhhhhhhhhhhhhhhhhhh',data.data.movies);
        data.data ? setFetchingData(data.data.movies) : setFetchingData([])
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  return (
    
    <section className='page'>
        {console.log(fetchingData)}
      {fetchingData
        ? fetchingData.map((ele, index) => {
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
                  <button> Add to Favorite</button>
                </div>
              </div>
            )
          })
        : null}
      <div>
        hi home {searchValue}
      </div>
    </section>
  );
}

// const MovieCard = (props) => {
//   return (
//       <div className="card">
//           <a href={props.url} target="_blank" rel="noreferrer">
//               <img src={props.image} alt={props.name}
//                   className="image"
//               />
//           </a>
//           <div className="card-body">
//               <a href={props.url} target="_blank" className="movie-name" rel="noreferrer">{props.name}</a>
//               <div className="movie-description">
//                   <svg className="svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"></path></g></svg>
//                   <span className="rating">{props.rating}</span>
//                   <span className="space">|</span>
//                   <span className="year">{props.year}</span>
//               </div>
//               <div className="genres">{props.genres.join(', ')}</div>
//           </div>
//       </div>
//   );
// }

export default HomePage;
