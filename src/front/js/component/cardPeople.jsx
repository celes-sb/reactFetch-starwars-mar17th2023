import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    return (
        <div className="card-container d-flex overflow-scroll" style={{ width: "400px" }}>
            <div className="card m-2 d-flex">
                <div className="card-body m-1 p-1">
                    <img className="rounded img-thumbnail img-center" src="https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg?region=246%2C0%2C1428%2C803" />
                    <h4 className="card-title mt-2 text-center">{props.name}</h4>
                    <p className="card-text text-start ps-4 mb-2"><em>Information</em>
                        <ul className="text-start ps-4">
                            <li key={props.uid}>Height: {props.height}</li>
                            <li key={props.uid}>Mass: {props.mass}</li>
                        </ul>
                    </p>
                    <div className="text-center">
                        <Link to={`/people/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                        <button className="btn btn-outline-warning ms-5"><i className="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardPeople;
