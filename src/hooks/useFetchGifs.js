import { useEffect, useState } from 'react';
import { getGifs } from '@helpers/getGifs'

export const useFetchGifs = ( category ) => {
 
    const [allImages, setAllImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState( true );
    const imagesPerPage = 12;

    const getImages = async() => {
        const newImages = await getGifs( category, 36 ); // Exactamente 3 páginas
        setAllImages(newImages);
        setCurrentPage(1);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getImages();
    }, [category]); 

    const totalPages = Math.ceil(allImages.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const currentImages = allImages.slice(startIndex, startIndex + imagesPerPage);

    return {
        images: currentImages,
        isLoading,
        currentPage,
        totalPages,
        setCurrentPage
    }

}