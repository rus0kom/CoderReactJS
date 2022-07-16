import React from "react";
import ItemCount from "./ItemCount";
import data from "../data/ItemsData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer(props) {
    const ItemsDATABASE = { data };
    const [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items);

    useEffect(
        () => {
            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(ItemsDATABASE);     
                    },
                    2000);
            });
        
            promiseItems.then(
                (respuesta)  => {
                    setItems(ItemsDATABASE);
                }
            ).catch(
                (errorMsg) => console.error(errorMsg)
            )
        },
        []
    )
    


return (
    <ItemList items={items}/>
);


}

// 1- crear promesa y que retorne los datos
// 2- guardar en un estado
// 3- enviarlos a un componente hijo "ItemList"



// desafio anterior

/* const ItemListContainer = ({ greeting }) => {
    const onAddItem = (count) => {
        console.log(typeof count);
        alert (`${count} items will be added to the cart!`);
    };
    return <ItemCount stock={5} initial={1} onAdd={onAddItem}></ItemCount>
     }; */



export default ItemListContainer;