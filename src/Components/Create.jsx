import { useState } from "react"; // import usestate function to let us use the state in the component

function Create (){

    const [title, setTitle] = useState(''); // variable used to store the title and a variable to set the title
    const [year, setYear] = useState(''); // variable used to store the year and a variable to set the year
    const [poster, setPoster] = useState(''); // variable used to store the poster and a variable to set the poster
    
    

    const handleSubmit = (e) => { // function called when you submit the form below
        e.preventDefault();
        console.log(title, year, poster, imdbID, type ); // when called, the function will print the inputted values for title, year, and poster
    }

    return (

        <div>
            <h2>This is my Create Component. </h2>
            <form onSubmit={handleSubmit}> {/*when the form submits, call the handleSubmit function to print to the screen */}

                <div className="form-group"> {/* div to hold the title input field */}
                    <label> Add Movie Title: </label> {/*label */}
                    <input type="text" className="form-control" value = {title} onChange={(e) => setTitle(e.target.value)}/> {/*input field for the title, when the value changes, set the title variable to the new value*/}
                </div>

                <div className="form-group">
                    <label> Add Movie Year: </label>  {/*label */}
                    <input type="text" className="form-control" value = {year} onChange={(e) => setYear(e.target.value)}/> {/*input field for the year, when the value changes, set the year variable to the new value*/}
                </div>

                <div className="form-group">
                    <label> Add Movie Poster: </label> {/* label */}
                    <input type="text" className="form-control" value = {poster} onChange={(e) => setPoster(e.target.value)}/> {/*input field for the poster, when the value changes, set the poster variable to the new value*/}
                </div>

                <br></br>

                <input type="submit" value="Add Movie"></input> {/*submit the form and call the handleSubmit function to print the values to the screen */}
            
            </form>
        </div>
        
        
    );
}

export default Create;