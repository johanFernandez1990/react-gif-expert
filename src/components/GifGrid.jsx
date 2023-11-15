import { useEffect, useState } from "react";
// import { getGift } from "../helpers/GetGift";
import { GifGridItem } from "./GifGridItem";
import { useFechtGif } from "../Hooks/useFechtGif";;


export const GifGrid = ({ category }) => {

const {images, isLoading } = useFechtGif(category);
  
  console.log ({images,isLoading});

  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && (<h2>...cargando</h2>)
      }
      
      
      <div className="card-grid" >
        
        {
            images.map ( ( image ) => (
              <GifGridItem 
                key={ image.id }
                  {...image }
              />
  
            ))
          }
      </div>
    </>
  )
}
  





 
    
    

              

   
    
