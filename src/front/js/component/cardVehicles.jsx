import React from "react";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <img className="rounded img-thumbnail img-center" src="https://lumiere-a.akamaihd.net/v1/images/databank_bwingfighter_01_169_460cc528.jpeg?region=0%2C0%2C1560%2C878" alt="Vehicle Image" />
                    <br />
                    <h3 className="card-title mt-2 text-center">{props.name}</h3>
                    <p className="card-text text-center mb-2"><em>Information</em>
                        <ul className="text-start ms-5">
                            <div key={props.uid}>Model: {props.model}</div>
                            <div key={props.uid}>Manufacturer: {props.manufacturer}</div>
                        </ul>
                    </p>
                    <div className="text-center">
                        <Link to={`/vehicles/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                        <button className="btn btn-outline-warning ms-5"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardVehicle;
