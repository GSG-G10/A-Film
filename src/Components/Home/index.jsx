import React, { useEffect, useState } from 'react';
import './style.css';
import addDataLocal from '../../addDataLocal';

function HomePage({ searchValue }) {
  const [fetchingData, setFetchingData] = useState([]);

  useEffect(() => {
    fetch(
      `https://crossorig.in/https://yts.am/api/v2/list_movies.json?limit=15&sort_by=year&query_term=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        data.data ? setFetchingData(data.data.movies) : setFetchingData([]);
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  return (
    <section className="page">
      {console.log(fetchingData)}
      {fetchingData
        ? fetchingData.map((ele, index) => {
            return (
              <div className="card">
                
                <div>
                  <a href={ele.url}>
                    <img src={ele.medium_cover_image} alt="" />
                  </a>
                </div>
                <div className='information'>
                <p>{ele.title}</p>
                <p>summary :{ele.summary}</p>
                <p>Date Uploaded :{ele.date_uploaded}</p>
                <p>Type of Film :{ele.genres[0]}</p>
                <div>
                  <button onClick={() => addDataLocal(ele.id)}>
                    Add to Favorite
                  </button>
                </div>
              </div>
              </div>
            );
          })
        : 'Loading ...'}
    </section>
  );
}

export default HomePage;
