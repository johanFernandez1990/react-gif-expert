
import { getGift } from "../helpers/GetGift";
import { useEffect,useState } from "react";





export const useFechtGif = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState( true );
    
    
    const getImages = async () => {
    const newImages = await getGift ( category );
    // console.log(newImages);
    setImages(newImages);
    setIsLoading(false);


}  

    
  


    useEffect (() => {
    getImages();
    },[])

    return{
        images,
        isLoading,
    }
  
    
}
  
  
  
  
  
  
    







