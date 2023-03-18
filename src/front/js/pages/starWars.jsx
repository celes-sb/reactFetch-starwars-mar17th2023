import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import CardPlanet from "../component/cardPlanet.jsx";
import CardVehicle from "../component/cardVehicles.jsx";
import { todoActions } from "../store/todos";

const StarWars = () => {
    const { store, actions } = useContext(Context)
    const [listPeople, setListPeople] = useState([])
    const [listPlanet, setListPlanet] = useState([])
    const [listVehicle, setListVehicle] = useState([])

    //se ejecuta la primera vez que se reenderiza el componente
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {
                console.log(respuestaJson)
                setListPeople(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"))
            if (response.ok) {
                console.log(respuestaJson)
                setListPlanet(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/vehicles"))
            if (response.ok) {
                console.log(respuestaJson)
                setListVehicle(respuestaJson.results)
            }
        }
        cargaDatos()
    }, []);

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <img className="img-responsive h-25 w-25" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <button type="button" class="btn btn-warning">
                                Favorites <span class="badge text-bg-danger">4</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <div>
                                    <li><a className="dropdown-item" href="#">Items </a></li><button><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        <h1 className="text-danger">Characters</h1>
        <ul className="d-flex">
            {listPeople && listPeople.length > 0 ?
                <>
                    {listPeople.map((item, index) => {
                        return <div key={item.uid}>
                            <CardPeople name={item.name} uid={item.uid} />
                        </div>
                    })}
                </> : <></>}
        </ul>
        <br />
        <h1 className="text-danger">Planets</h1>
        <ul className="d-flex">
            {listPlanet && listPlanet.length > 0 ?
                <>
                    {listPlanet.map((item, index) => {
                        return <div key={item.uid}>
                            <CardPlanet name={item.name} uid={item.uid} />
                        </div>
                    })}
                </> : <></>}
        </ul>
        <br />
        <h1 className="text-danger">Vehicles</h1>
        <ul className="d-flex">
            {listVehicle && listVehicle.length > 0 ?
                <>
                    {listVehicle.map((item, index) => {
                        return <div key={item.uid}>
                            <CardVehicle name={item.name} uid={item.uid} />
                        </div>
                    })}
                </> : <></>}
        </ul>
        <br />
    </>)
}

export default StarWars;