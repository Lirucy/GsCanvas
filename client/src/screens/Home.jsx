import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAllArt } from "../services";
import Art from "../components/Art";

const Home = () => {
    const [artPieces, setArtPieces] = useState([])

    useEffect(() => {
        getAllArt().then((fetchedArt) => setArtPieces(fetchedArt))
        
    }, [])
    console.log(artPieces)
    
    
    return (
        <section className="home-body">
            <div className="all-art">
                {artPieces.map((artPiece) => (
                    <Art key={artPiece.id} artPiece={artPiece} />
                ))}
            </div>
        </section>
    );
};

export default Home;