import React, { useEffect, useState } from 'react';
import './style.css';

function Favorite({ setSearchValueInput }) {
  let dataFromLocalStorage = JSON.parse(localStorage.getItem('favorite-film'));
  console.log(dataFromLocalStorage);

  const [array, setArray] = useState([]);

  useEffect(() => {
    let promise = [];
    dataFromLocalStorage.map((id) => {

      return promise.push(
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(
          (res) => res.json()
        )
      );
      
    });
    Promise.all(promise)
      .then((res) => setArray(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(array);
  return (
    <div className="page">
      <h1>Your in Favorite</h1>
      {array
        ? array.map((ele, index) => {
            return (
              <div className="card">
                <div>
                  <a href={ele.data.movie.url}>
                    <img src={ele.data.movie.medium_cover_image} alt="" />
                  </a>
                </div>
                <div></div>
                <p>{ele.data.movie.title}</p>
                <p>summary :{ele.data.movie.summary}</p>
                <p>Date Uploaded :{ele.data.movie.date_uploaded}</p>
                <p>Type of Film :{ele.data.movie.genres[0]}</p>
              </div>
            );
          })
        : 'Loading ...'}
    </div>
  );
}

export default Favorite;
