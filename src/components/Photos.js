import React, {useEffect, useState} from "react";
import dog2 from './dog2.jpg';
import dog3 from './dog3.jpg';
import dog4 from './dog4.jpg';
import dog5 from './dog5.jpg';
import dog6 from './dog6.jpg';
import dog8 from './dog8.jpg';


function Photos({ setLoading }) {
    const imagesToLoad = [
        dog2,
        dog3,
        dog4,
        dog5,
        dog6,
        dog8
    ];

    const [loadedImages, setLoadedImages] = useState([]);

    const preloadImages = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
        });
    };

    useEffect(() => {
        const loadImages = async () => {
            try {
                const loaded = await Promise.all(imagesToLoad.map(src => preloadImages(src)));
                setLoadedImages(loaded);
                setLoading(false);
            } catch (error) {
                console.error('Error loading images:', error);
                setLoading(false);
            }
        };

        loadImages();
    }, [imagesToLoad, setLoading]);

    return (
        <div className='flex photos center'>
            {loadedImages.length > 0 ? (
                <>
                    <div className='photo'>
                        <img src={loadedImages[3]} alt="dog5" />
                    </div>
                    <div className='photo flex column'>
                        <img src={loadedImages[2]} alt="dog4" />
                    </div>
                    <div className='photo'>
                        <img src={loadedImages[0]} alt="dog2" />
                        <img src={loadedImages[4]} alt="dog6" />
                    </div>
                    <div className='photo flex column'>
                        <img src={loadedImages[5]} alt="dog8" />
                    </div>
                    <div className='photo'>
                        <img src={loadedImages[1]} alt="dog3" />
                    </div>
                </>
            ) : (
                <div>Loading images...</div>
            )}
        </div>
    );
}

export default Photos;