import React, { useState } from 'react'
import { connect } from 'react-redux'
import { GetUserAction } from '../redux/UserAction';

function User(props) {

    const { state, getUser } = props;

    return (
        <div>
            <button
                onClick={() => {
                    getUser()
                }}
            >
                Get User
            </button>
        </div>
    )
}

const mapStateToProps = (props) => {

    console.log(props.user.filter(x => x.userId === 5))
    return {        
        // state: state,
    };
};

const mapDispatchToProps = (dispach) => {
    return {
        // Esto es lo que va a generar en el objeto ademas del state
        getUser:() => {
            dispach(GetUserAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(User)
