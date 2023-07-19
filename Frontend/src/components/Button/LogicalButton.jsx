function LogicalButton({children, 
                        className,
                        onClick,
                        onMouseDown,
                        onMouseUp,
                        onTouchStart,
                        onTouchEnd,

                    }){
    return(
        <button 
            className={className} 
            onClick={onClick} 
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        
        >{children}</button>
    )
}

export default LogicalButton