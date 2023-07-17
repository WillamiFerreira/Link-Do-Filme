function SearchButton({type, children, onClick, className}) {
    return (  
        <button type={type} className={className} onClick={onClick}>{children}</button>
    );
}

export default SearchButton;