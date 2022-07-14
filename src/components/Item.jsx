import { useEffect, useState } from "react";



function Item() {
const [item,setItem]= useState([])



    useEffect(()=>{
       getItem(); 
    },[])

    const getItem = async()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        setItem(data.recipes)
    }
  return (
    <div>
      {item.map((recipe)=>{
        return(
        <div key={recipe.id} >
          <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Item
