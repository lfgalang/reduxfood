import React, { useState } from 'react'
import { connect } from 'react-redux';

function Restaurant(props) {

    const [restaurantState, setRestauranteState] = useState({})
    const { restaurantList, add } = props;

    return (
        <div>
            
            <form
                onSubmit={(event) => {
                    //El event.preventDefault() se usa para no se actualice la página sino que se se agrguen a la consola
                    event.preventDefault();
                    // console.log(restaurantState)
                    add(restaurantState)
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
                {/* {JSON.stringify(restaurantList)} */}
            </form>
        </div>
    )
}

//Se puede llamar como se desee
const mapStateToProps = (state) => {
    return {
        //Lo que permite esta función es hacer lo mismo que el redux pero se puede imprimir en pantalla con un JSON.stringlify
        //Así es como se obtienen los datos
        restaurantList: state,
    };
};

// Los datos van a ser enviados al reducer
const mapDispatchToProps = (dispatch) => {
    return{
        add: (res) => {
            // console.log(res)
            //Payload son datos que se necesitan pasar al reducer
            dispatch({ type: "ADD", payload: res })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
