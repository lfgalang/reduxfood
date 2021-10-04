import React from 'react'
import { connect } from 'react-redux';
import "./list.css"

function List(props) {

    const { restaurantList } = props;

    return (
        <div>
            <ul className="list-group">
                {restaurantList.map((d,i) => (
                    <li className="list-group-item" key={i} >
                        {d.name}
                    </li>
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


export default connect(mapStateToProps, mapDispatchToProps)(List);
