import React from "react";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="card m-2">
                    <div className="card-body m-1 p-1">
                        <img className="rounded img-thumbnail img-center" src="https://lumiere-a.akamaihd.net/v1/images/concord-dawn_4277a880.jpeg?region=4%2C0%2C1552%2C873" />
                        <br />
                        <h3 className="card-title mt-2 text-center">{props.name}</h3>
                        <p className="card-text text-start ps-4 mb-2"><em>Information</em>
                            <ul className="text-start ps-4">
                                <div key={`climate_${props.uid}`}>Climate: {props.climate}</div>
                                <div key={`gravity_${props.uid}`}>Gravity: {props.gravity}</div>
                            </ul>
                        </p>
                        <div className="text-center">
                            <Link to={`/planet/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                            <button className="btn btn-outline-warning ms-5"><i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPlanet;
