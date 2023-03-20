import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="card m-2">
                    <div className="card-body m-1 p-1">
                        <img className="rounded img-thumbnail img-center" src="https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg?region=246%2C0%2C1428%2C803" />
                        <br />
                        <h3 className="card-title mt-2 text-center">{props.name}</h3>
                        <p className="card-text text-start ps-4 mb-2"><em>Information</em>
                            <ul className="text-start ps-4">
                                <div key={props.uid}>Height: {props.height}</div>
                                <div key={props.uid}>Mass: {props.mass}</div>
                            </ul>
                        </p>
                        <div className="text-center">
                            <Link to={`/people/${props.uid}`} className="btn btn-outline-primary me-5">Learn More!</Link>
                            <button className="btn btn-outline-warning ms-5" onClick={handleHeartClick}>
                                {isHeartClicked ? <i className="fa-solid fa-heart"></i> : <i className="far fa-heart"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPeople;
