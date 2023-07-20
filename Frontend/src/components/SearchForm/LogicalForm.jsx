import axios from 'axios';
import useMovieStore from '../../stories';
import { useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import { Button } from "../Button/Button";
import { TextInput } from "../FormFields/TextInput/TextInput";


function LogicalForm({className}) {
    const {movieName, selectedMovie, setMovieName, setSelectedMovie, setReset} = useMovieStore();
    //const location = useLocation();
    //const url = window.location.href;
    //console.log(url)

    function handleInputChange(e){
        let value = e.target.value;
        //setReset();
        setMovieName(value)
    }
    //console.log(movieName)

    const handleSubmit = useEffect(() => {
        setSelectedMovie(undefined)
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api-link-do-filme.onrender.com/${location.search}`);
                //const res = await axios.get(`http://localhost:3000/${location.search}`);
                setSelectedMovie(res.data)
            } catch (err) {
                console.log(err)
            }
            
            
        };
        fetchData();
    }, []);

    


    return (
        <form className={className}  onSubmit={handleSubmit}>
            <TextInput onChange={handleInputChange} name='s' />
            <Button>F</Button>
        </form>
    )

}

export default LogicalForm;