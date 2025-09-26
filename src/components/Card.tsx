type CardProps={
    title:string,
    children: React.ReactNode
}


const Card=({title,children}:CardProps)=>{
    return (
        <>
        <div className="card text-center">
            <h2>{title}</h2>
            {children}
            <p> lorem ipsum</p>
        </div>
        </>
    )
}

export default Card;