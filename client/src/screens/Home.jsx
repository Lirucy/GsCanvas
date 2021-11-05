import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAllArt } from "../services";
import Art from "../components/Art";

const Home = () => {
    const [artPieces, setArtPieces] = useState([])

    useEffect(() => {
        getAllArt().then((fetchedArt) => setArtPieces(fetchedArt))
        
    }, [])
    
    
    return (
        <section className="home-body">
            <h1>G's Canvas</h1>
            <article className="all-art">
                {artPieces.map((artPiece) => (
                    <Art key={artPiece.id} artPiece={artPiece} />
                ))}
            </article>
        </section>
    );
};

export default Home;