import React from "react";
import data from "../data/ItemsData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const { name } = useParams();
    console.log(name)
    const ItemsDATABASE = { data };
    const [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items);

    useEffect(
        () => {
            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(data);     
                    },
                    2000);
            });
        
            promiseItems.then(
                (respuesta)  => {
                    const products = respuesta;
                    if(name) {
                        setItems(data.filter((product)   => product.category == name));
                    } else {
                        setItems(products);
                    }
                }, [name]
            ).catch(
                (errorMsg) => console.error(errorMsg)
            )
        },
        []
    );
    


return (
    <ItemList items={items}/>
);


}

export default ItemListContainer;