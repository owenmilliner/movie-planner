const MovieList = ({movies}) => {
    return (
      <section id="MovieList">
          <p>Movies</p>
          {/* <ul>
              {Object.entries(movies).map(movie => (
                    <li key={movie[0]}>
                        <ul>
                            <li>{movie[1].title}</li>
                            <li>{movie[1].year}</li>
                            <li>{movie[1].franchise}</li>
                            <li>{movie[1].genre}</li>
                            <li>{movie[1].rating}</li>
                        </ul>
                    </li>
              ))}
          </ul> */}

          {Object.entries(movies).map(movie => (
          <table>
              <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Franchise</th>
                  <th>Genre</th>
                  <th>Rating</th>
              </tr>
                  <td>{movie[1].title}</td>
                  <td>{movie[1].year}</td>
                  <td>{movie[1].franchise}</td>
                  <td>{movie[1].genre}</td>
                  <td>{movie[1].rating}</td>
          </table>
          ))}
      </section>
    );
  };
  
  export default MovieList;
  