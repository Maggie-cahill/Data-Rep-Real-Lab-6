//Read.js
import Movies from "./Movies";
import { useEffect, useState } from "react"; // import usestate and useefect to let us use the state and perform effects in the background
import axios from "axios"; // import axios to let us get the array from the link

function Read() {
  const [myMovies, setMovies] = useState([]); // create variables for the virtual array and a variable for the function to set the array

  useEffect(() => { // use this function to get the array from the link and set it to the virtual array
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json') // input the specific link where the array is being stored and get the array from it
      .then((response) => {
        console.log(response.data.myArray); // log the array to the console
        setMovies(response.data.myArray); // set the virtual array to the array that was gotten from the link
      })
      .catch((error) => {
        console.log(error); // log error
      });
  }, []);

  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Movies myMovies={myMovies} /> { /* pass the virtual array to the Movies component as a prop */ }
    </div>

  );
}

export default Read;