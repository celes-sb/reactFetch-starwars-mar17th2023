import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { todoActions } from "../store/todos";

const SinglePeople = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [people, setPeople] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/people/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPeople(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        <div className="jumbotron-fluid w-75 text-center">
            <div className="container-fluid text-start">
                <div className="row d-flex">
                    <img className="col-6 rounded img-thumbnail" src="https://lumiere-a.akamaihd.net/v1/images/bo-katan-main_45a1c0c4.jpeg?region=0%2C43%2C1920%2C1083" alt="Character Image" />
                    <div className="col-6">
                        <h1 class="display-5">{people.name ? people.name : ""} | UID # {params.uid}</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare lacus nec magna suscipit dictum. Nullam sit amet viverra metus. Praesent facilisis dictum ipsum eu venenatis. Pellentesque imperdiet nunc non pulvinar viverra. Suspendisse sollicitudin egestas nisl at mattis. Nullam quis rutrum massa. Integer non turpis at felis facilisis viverra sit amet et mi. Mauris mattis magna turpis, nec consectetur erat congue quis. Phasellus eu nibh vitae arcu gravida maximus sagittis imperdiet massa. Aenean maximus eu velit ac tempus. Mauris at massa sed orci tempor auctor. Nunc auctor sapien non sem convallis cursus et quis lacus. Donec eleifend tellus vel lacinia consequat. Pellentesque ex felis, placerat non accumsan placerat, sagittis eget eros. Sed luctus turpis eu placerat pharetra. Pellentesque eleifend ac odio non ornare.</p>
                    </div>
                </div>
                <div className="row">
                    <hr className="my-4" />
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <p className="w-25 text-danger">Heigth</p>
                        <p className="w-25 text-danger">Hair Color</p>
                        <p className="w-25 text-danger">Species</p>
                        <p className="w-25 text-danger">Weapons</p>
                    </div>
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <p className="w-25 text-danger">{ }</p>
                        <p className="w-25 text-danger">{ }</p>
                        <p className="w-25 text-danger">{ }</p>
                        <p className="w-25 text-danger">{ }</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SinglePeople