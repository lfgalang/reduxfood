import React, { useState } from 'react'
import { connect } from 'react-redux';
import { AddRestaurantAction } from '../redux/RestaurantAction';

function Restaurant(props) {

    const [restaurantState, setRestauranteState] = useState({})
    const { restaurantList, addRestaurant } = props;

    return (
        <div>
            <form
                
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
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={(event) => {
                        //El event.preventDefault() se usa para no se actualice la página sino que se se agrguen a la consola
                        event.preventDefault();
                        // console.log(restaurantState)
                        addRestaurant(restaurantState)
                    }}
                >
                    Restaurant
                </button>
                {/* {JSON.stringify(restaurantList)} */}
            </form>
        </div>
    )
}

//Se puede llamar como se desee
const mapStateToProps = (state) => {
    // console.log("state")
    // console.log(state)
    return {
        //Lo que permite esta función es hacer lo mismo que el redux pero se puede imprimir en pantalla con un JSON.stringlify
        //Así es como se obtienen los datos
        restaurantList: state.restaurant,
    };
};

// Los datos van a ser enviados al reducer
const mapDispatchToProps = (dispatch) => {
    return{
        addRestaurant: (res) => {
            // console.log(res)
            //Payload son datos que se necesitan pasar al reducer
            dispatch(AddRestaurantAction(res))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
