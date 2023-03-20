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

    return (
        <>
            <h1 className="text-danger">Characters</h1>
            {listPeople && listPeople.length > 0 ? (
                <>
                    {listPeople.map((item, index) => {
                        return (
                            <CardPeople
                                key={item.uid}
                                name={item.name}
                                uid={item.uid} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
            <h1 className="text-danger">Planets</h1>
            {listPlanet && listPlanet.length > 0 ? (
                <>
                    {listPlanet.map((item, index) => {
                        return (
                            <CardPlanet
                                key={item.uid}
                                name={item.name}
                                uid={item.uid} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
            <h1 className="text-danger">Vehicles</h1>
            {listVehicle && listVehicle.length > 0 ? (
                <>
                    {listVehicle.map((item, index) => {
                        return (
                            <CardVehicle
                                key={item.uid}
                                name={item.name}
                                uid={item.uid} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
        </>
    )
};


export default StarWars;