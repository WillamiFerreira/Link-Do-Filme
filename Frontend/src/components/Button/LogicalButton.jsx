function LogicalButton({children, className, type}){
    return(
        <button className={className} type={type} >{children}</button>
    )
}

export default LogicalButton