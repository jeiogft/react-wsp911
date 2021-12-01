import React from "react";
import "./style.css";
import React, { Component } from 'react';
import React, { useState } from 'react';

//Los hooks solo van dentro de funciones asi que la creamos y se la pasamos al render
export function Doyou(){
  const [countLikes,setCountLikes] =useState(100);
  const [countDislikes,setCountDislikes] =useState(25);
  return (
    <div>
        <button className="like-button" onClick={ ()=>setCountLikes(countLikes+1)}>
          Like| {countLikes}
        </button>
        <button className="counter-button" onClick={ ()=>setCountDislikes(countDislikes+1)}>
          Dislike |{countDislikes}
        </button>
      </div>
  )
}

export default class App extends Component {
  constructor() {
    super();
  }
  render() {

  return (
    <div className="app">
       {/*Meteriamos los 4 estilos de botones en styles css*/}
       <Doyou/>
    </div>
  );
}
}