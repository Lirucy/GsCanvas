const Art = (props) => {
    const { title, url } = props.artPiece;
    
    return (
        <article>
            <h3 style={{color: "white"}}>{title}</h3>
            <img src={url} alt="art piece"/>
        </article>
    );
};

export default Art;