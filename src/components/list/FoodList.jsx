import React from 'react'
import { connect } from 'react-redux';
import { RemoveFoodAction } from '../../redux/FoodAction';
import "./list.css"

function FoodList(props) {

    const { foodList, remove } = props;

    return (
        <div>
            <ul className="list-group">
                {foodList.map((f,i) => (
                    <div key={i} >                        
                        <span className="letras">
                            <li className="list-group-item">
                                {f.primero} - {f.segundo}
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
    return {
        //Lo que permite esta función es hacer lo mismo que el redux pero se puede imprimir en pantalla con un JSON.stringlify
        //Así es como se obtienen los datos
        foodList: state.food
    };
};

// Los datos van a ser enviados al reducer

const mapDispatchToPropsFood = (dispatch) => {
    return{
        remove: (index) => {
            // console.log(res)
            //Payload son datos que se necesitan pasar al reducer
            dispatch(RemoveFoodAction(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToPropsFood)(FoodList);

