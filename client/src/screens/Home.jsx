import axios from "axios";
import { useEffect, useState } from "react";
import { getAllArt } from "../services";
import Art from "../components/Art";

const Home = () => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    getAllArt().then((fetchedArt) => setArtPieces(fetchedArt));
  }, []);

  return (
    <section id="home-body">
      {artPieces.map((artPiece) => (
        <Art key={artPiece.id} artPiece={artPiece} />
      ))}
    </section>
  );
};

export default Home;
