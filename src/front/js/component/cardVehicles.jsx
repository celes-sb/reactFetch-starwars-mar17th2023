import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = (props) => {
    const { store, actions } = useContext(Context)

    return (
        <div className="card-container d-flex flex-row overflow-scroll bg-white">
            <div className="card-body p-3">
                <img className="img rounded img-thumbnail img-center" src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} alt="Vehicle Image" />
                <h5 className="card-title mt-2 text-center">{props.name}</h5>
                <ul className="text-start ps-4">
                    <li key={`manufacturer${props.uid}`}>Manufacturer: {props.manufacturer}</li>
                    <li key={`model_${props.uid}`}>Model: {props.model}</li>
                </ul>
                <div className="text-center">
                    <Link to={`/vehicles/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                    <button type="button" onClick={() => {
                        actions.addReadLater({
                            name: props.name,
                            uid: props.uid,
                            category: "vehicles",
                            link: `/vehicles/${props.uid}`
                        }
                        )
                    }} className="btn btn-outline-success me-2"><i className="far fa-plus"></i></button>
                    <button type="button" onClick={() => {
                        actions.agregarFavorito({
                            name: props.name,
                            uid: props.uid,
                            category: "vehicles",
                            link: `/vehicles/${props.uid}`
                        }
                        )
                    }} className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
};

export default CardVehicles;
