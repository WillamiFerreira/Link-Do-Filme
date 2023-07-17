function LogicalTextInput({className, name, onChange}){

    return(
        <input className={className} type="text" name={name} id="movieName" onChange={onChange} />
    )
}
export default LogicalTextInput;