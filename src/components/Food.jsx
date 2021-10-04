import React, { useState } from 'react'
import { connect } from 'react-redux';
import { AddFoodAction } from '../redux/FoodAction';

function Food(props) {

    const [foodState, setFoodState] = useState();
    const { foodList, addFood } = props;

    return (
        <div>
            <form >
                <div className="form-group">
                    <label>food Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange = {(event) =>{
                            setFoodState({
                                ...foodState,
                                ...{primero: event.target.value}
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>food Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange = {(event) =>{
                            setFoodState({
                                ...foodState,
                                ...{segundo: event.target.value}
                            })
                        }}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={(event) => {
                        event.preventDefault()
                        addFood(foodState)                        
                    }}
                >
                    Food
                </button>
            </form>
        </div>
    )
}

//Se puede llamar como se desee
const mapStateToProps = (state) => {
    return {
        //Lo que permite esta función es hacer lo mismo que el redux pero se puede imprimir en pantalla con un JSON.stringlify
        //Así es como se obtienen los datos
        foodList: state.food,
    };
};

// Los datos van a ser enviados al reducer
const mapDispatchToProps = (dispatch) => {
    return{
        addFood: (res) => {
            // console.log(res)
            //Payload son datos que se necesitan pasar al reducer
            dispatch(AddFoodAction(res))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Food);

