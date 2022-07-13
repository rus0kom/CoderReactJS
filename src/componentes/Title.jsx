import React, { useState } from "react";

const Title = () => {
    const [title, setTitle] = useState("Titulo de tienda");
    const [subtitle, setSubtitle] = useState("Subtitulo de tienda");

    const updateTitle = () => {
        setTitle("Nuevo titulo");
    };
    const updateSubtitle = () => {
        setSubtitle("Nuevo Subtitulo");
    };
    return (
        <>
            <h1>{title}</h1>
            <button onClick={updateTitle}>Actualizar titulo</button>
            <h2>{subtitle}</h2>
            <button onClick={updateSubtitle}>Actualizar titulo</button>
        </>
    );
};

export default Title;