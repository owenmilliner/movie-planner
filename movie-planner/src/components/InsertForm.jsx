const InsertForm = () => {
    return (
      <section id="InsertForm">
          <form id="movieForm">
              <div className="formSections">
              <label htmlFor="title">Movie Title:</label>
              <label htmlFor="date">Year of Release:</label>
              <label htmlFor="franchise">Franchise:</label>
              <label htmlFor="genre">Genre:</label>
              <label htmlFor="rating">Star Rating:</label>
              <label htmlFor="favourite">Add to Favourites:</label>
              </div>

              <div className="formSections">
              <input type="text" id="title"></input>
              <input type="number" min="1900" max="2021" id="date"></input>
              <input type="text" id="franchise"></input>
              <input type="text" id="genre"></input>
              <input type="number" min="0" max="5" step="0.5" id="rating"></input>
              <input type="checkbox" id="favourite"></input>
              <button id="addTasks" type="submit">Add</button>
              </div>

          </form>
          <br/>
      </section>
    );
  };
  
  export default InsertForm;
  