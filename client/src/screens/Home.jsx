import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {

    const getImages = async () => {
        const response = await axios.get();
    }

    useEffect(() => {
        getImages();
    }, [])
    
    return (
        <div>
        </div>
    );
};

export default Home;