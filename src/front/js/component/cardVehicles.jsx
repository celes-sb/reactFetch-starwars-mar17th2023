import React from "react";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {
    return (
        <div className="card-container d-flex overflow-scroll" style={{ width: "400px" }}>
            <div className="card m-2 d-flex">
                <div className="card-body m-1 p-1">
                    <img className="rounded img-thumbnail img-center" src="https://lumiere-a.akamaihd.net/v1/images/databank_bwingfighter_01_169_460cc528.jpeg?region=0%2C0%2C1560%2C878" alt="Vehicle Image" />
                    <br />
                    <h3 className="card-title mt-2 text-center">{props.name}</h3>
                    <p className="card-text text-start ps-4 mb-2"><em>Information</em>
                        <ul className="text-start ps-4">
                            <div key={props.uid}>Model: {props.model}</div>
                            <div key={props.uid}>Manufacturer: {props.manufacturer}</div>
                        </ul>
                    </p>
                    <div className="text-center">
                        <Link to={`/vehicle/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                        <button className="btn btn-outline-warning ms-5"><i className="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardVehicle;
