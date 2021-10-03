import React, { useState } from 'react'

function Restaurant() {

    const [restaurantState, setRestauranteState] = useState({

    })

    return (
        <div>
            <form
                onSubmit={(event) => {
                    //El event.preventDefault() se usa para no se actualice la página sino que se se agrguen a la consola
                    event.preventDefault();
                    console.log(restaurantState)
                }}
            >
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange = {(event) => {
                            setRestauranteState({
                                ...restaurantState,
                                ...{name: event.target.value}
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Location</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange = {(event) => {
                            setRestauranteState({
                                ...restaurantState,
                                ...{location: event.target.value}
                            })
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                {JSON.stringify(restaurantState)}
            </form>
        </div>
    )
}

export default Restaurant
