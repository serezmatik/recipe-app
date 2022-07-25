import React, {useContext, useEffect, useState} from "react";

import {GlobalContext} from '../context/GlobalState'

function Favourites () {
    const {favourites} = useContext(GlobalContext)



    return(
        <>

            {favourites.map((name)=> {
                return(<div key={name.id}>
                    <h2>{name.title}</h2>
                        <h3>{name}</h3>
                    </div>)


            })}
        </>
    )
}
export default Favourites