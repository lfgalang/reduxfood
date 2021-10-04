import React from 'react'
import { connect } from 'react-redux';
import { RemoveRestaurantAction } from '../../redux/RestaurantAction';
import "./list.css"

function List(props) {

    const { restaurantList, remove } = props;

    return (
        <div>
            <ul className="list-group">
                {restaurantList.map((d,i) => (
                    <div key={i} >                        
                        <span className="letras">
                            <li className="list-group-item">
                                {d.name} - {d.location}
                            </li>
                        </span>
                        <span className="boton">
                            <button 
                                className=" btn btn-danger" 
                                onClick={()=> {
                                    remove(i)
                                }} 
                            >
                                delete
                            </button>
                        </span>
                    </div>
                ))}
            </ul>
        </div>
    )
};

//Se puede llamar como se desee
const mapStateToProps = (state) => {
    console.log(state)
    return {
        //Lo que permite esta función es hacer lo mismo que el redux pero se puede imprimir en pantalla con un JSON.stringlify
        //Así es como se obtienen los datos
        restaurantList: state.restaurant,
    };
};

// Los datos van a ser enviados al reducer
const mapDispatchToProps = (dispatch) => {
    return{
        remove: (index) => {
            // console.log(res)
            //Payload son datos que se necesitan pasar al reducer
            dispatch(RemoveRestaurantAction(index))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(List);
