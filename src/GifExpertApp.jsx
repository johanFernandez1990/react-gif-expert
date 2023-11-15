import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpert = () => {
    const [categories, setCategories] = useState(["One Punch",])
    
    const onAddCategory = (newCategory) =>  {
        
        if(categories.includes(newCategory))return;
        
        setCategories ([...categories, newCategory])
    
    }
    return (
      <>
      {/* {titulo} */}
      <h1>GifExpertApp</h1>
     
     {/* {imput} */}
     <AddCategory 
        // setCategories={setCategories}
        onNewCategory ={ event => onAddCategory (event) }
     />

     
     {/* {listado de gif} */}
     
     
        {
        categories.map( (category) => (
             
                <GifGrid Key ={ category } 
                category={category}/>
             ))
        }
    
     
     
     
      </>
  )
}
