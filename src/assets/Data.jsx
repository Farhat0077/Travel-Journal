import React from "react";
export default function Data(props){
    return(
      
      <div className="container ">
       <img src={`/images/${props.item.imageUrl}`}alt="view-imge"/>
       <section >
        <>
        <img src={`images/${props.item. googleMapsLogo}`} alt="location-logo" className="googleMapsLogo" />
        <span  className="location">{props.item.location} </span>
        <a  href={props.item.googleMapsUrl} className="mapLink" >View on Google Map</a>
        </>
        <h1 className="title">{props.item.title}</h1>
        <span className="date">{props.item.startDate}-{props.item.endDate}</span>
        <p className="discription">{props.item.description} </p>
       
       </section>
        </div>
       
       
       
    )
}

