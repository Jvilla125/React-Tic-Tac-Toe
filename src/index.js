import React from "react";
import ReactDom from "react-dom/client"
import './index.css';

class Board extends React.Component{
    renderSquare(i){
        return <Square value={i}/>
    }
}