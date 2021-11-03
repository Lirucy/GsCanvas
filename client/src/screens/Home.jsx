import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAllArt } from "../services";

const Home = (props) => {
    const [artPieces, setArtPieces] = useState([])

    useEffect(() => {
        getAllArt().then((fetchedArt) => setArtPieces(fetchedArt))
    }, [])
    
    return (
        <section className="home-body">
            <div className="all-art">
                {artPieces.map((artPiece) => (
                    <Art key={artPiece.id} artPiece={artPiece} user={props.user} />
                ))}
            </div>
        </section>
    );
};

export default Home;