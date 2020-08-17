import React, { Component } from 'react'
import {connect } from 'react-redux';
import '../styles/styles.css'
import { createUser,deleteUser } from '../actions/actions'
import { getUserss } from '../actions/userActions';
class Users extends Component {
    state = {
        name: '',
        desc: ''
    }
    onChangeName=(e)=> {
        this.setState({name: e.target.value})
    }
    onChangeDesc=(e)=> {
        this.setState({desc: e.target.value})
    }
    createUserHandler=()=> {
        this.props.createUser(this.props.match.params.name, this.state.name, this.state.desc);
        this.setState({
            name: '',
            desc:''
        })
    }
    deleteUserHandler=(name)=> {
        this.props.deleteUser(this.props.match.params.name, name)
    }
    render() {

        let renderElement = this.props.users?  this.props.users.map((user, index) =>
                   <div className="col-sm-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body" style={{ display: 'grid' }}>
                            <span style={{ display: 'grid' }}> <label>Name</label>
                                <input value={user.name} readOnly/></span>
                            <span style={{ display: 'grid' }}><label>Desc</label>
                                <textarea value={user.desc} readOnly></textarea></span>
                            <button style={{ marginTop: '2rem' }} onClick={()=>this.deleteUserHandler(user.name)}>Delete</button>
                        </div>
                    </div>
                </div>
        
        ): null;
 
        return (
            <div className="container" style={{ width: "80%", height: "50%", padding: "10px", margin: "auto" }}>
                <div className="card " style={{ marginBottom: "10px" }}>
                    <div className="card-body">
        <h3 >{this.props.match.params.name}</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header"> <i aria-hidden="true">Create</i></div>
                        <div className="card-body" style={{ display: 'grid' }}>
                            <span style={{ display: 'grid' }}> <label>Name</label>
                                <input value={this.state.name} onChange={this.onChangeName}/></span>
                            <span style={{ display: 'grid' }}><label>Desc</label>
                                <textarea value={this.state.desc} onChange={this.onChangeDesc}></textarea></span>
                            <button style={{ marginTop: '2rem' }} onClick={this.createUserHandler}>Create</button>
                        </div>
                    </div>
                </div>
                {renderElement}

            </div>)
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        users: state.users[ownProps.match.params.name]

    }

}
const mapDispatchToProps = dispatch => {
    return {
        createUser: (team, name, desc) => dispatch(createUser(team, name, desc)),
        deleteUser: (team,name)=> dispatch(deleteUser(team,name)),
        getUsers: ()=> dispatch(getUserss())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)