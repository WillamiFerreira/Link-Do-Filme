import axios from 'axios';

import { Button } from "../Button/Button";
import { TextInput } from "../FormFields/TextInput/TextInput";
import { useState } from "react";


function LogicalForm({className}) {
    const [movieName, setMovieName] = useState('')

    function handleInputChange(e){
        let value = e.target.value
        setMovieName(value)

    }

    function handleSubmit(e){
        e.preventDefault()
        axios.get(`http://localhost:3000/?s=${movieName}`)
        .then(res => console.log(res.data))//res deve ser o objeto que representa o objeto
        .catch(err => console.log(err))
    }

    console.log(movieName)
    return (
        <form className={className} onSubmit={handleSubmit}>
            <TextInput onChange={handleInputChange} name='name' />
            <Button type='submit' >F</Button>
        </form>
    )

}

export default LogicalForm;