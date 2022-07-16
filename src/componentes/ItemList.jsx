import React from "react";


function ItemList( props ) {
    console.log("Render ItemsList", props.items);

    return(
        <>
        <h1>ItemList</h1>
        {
            props.items.map(
                cadaItem => {
                    return ( <div key={cadaItem.id}>
                        <p>{cadaItem.title}</p>
                        <p>{cadaItem.category}</p>
                        <p>{cadaItem.price}</p>
                    </div>
                    )
                } 
             )
        }
        
        </>
    );
}

export default ItemList 