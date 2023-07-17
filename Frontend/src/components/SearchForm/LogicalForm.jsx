import axios from 'axios';
import useMovieStore from '../../stories';

import { Button } from "../Button/Button";
import { TextInput } from "../FormFields/TextInput/TextInput";


function LogicalForm({className}) {
    const {movieName, selectedMovie, setMovieName, setSelectedMovie, setReset} = useMovieStore();

    function handleInputChange(e){
        let value = e.target.value;
        setReset();
        setMovieName(value)
    }
    //console.log(movieName)

    function handleSubmit(e){
        e.preventDefault()
        axios.get(`http://localhost:3000/?s=${movieName}`)
        .then(res => setSelectedMovie(res.data))//res deve ser o objeto que representa o objeto
        .catch(err => console.log(err))

        console.log(selectedMovie);
    }


    return (
        <form className={className} onSubmit={handleSubmit}>
            <TextInput onChange={handleInputChange} name='name' />
            <Button type='submit' >F</Button>
        </form>
    )

}

export default LogicalForm;