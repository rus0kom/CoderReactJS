import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        title: "Titulo de tienda",
     }

     updateTitle = () => {
        this.setState({title: "Titulo cambiado"});
     }
    render() { 
        return <>
            <h1>{this.state.title}</h1>
            <button onClick={this.updateTitle}>Cambiar titulo</button>
        </>
    }
}
 
export default Title;