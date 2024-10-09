import React from "react";

export default function Blog({image, imageStyle}){
    return(
        <div>
           <img src={image} alt="Blog" style={imageStyle}/>
        </div>
    )
}