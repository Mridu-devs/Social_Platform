import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import sleeping2 from './images/sleeping2.png'
import active from './images/active.png'
import withRouter from './withRouter';

class Navbar extends Component {
//    constructor(props){
//     super(props);
    // this.state={navId:this.props.useridFromApp}
    // this.state={navId:""}
//    }
        state={navId:""}

    render() { 
        console.log(this.state.navId)
        return (
            <React.Fragment>   
                <nav className='Navbar-main-container'>
                    <NavLink to="/homepage/:id" className='navlink'>Home <img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /> </NavLink>
                    <NavLink to="/timeline" className='navlink'>Timeline<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink>
                    <NavLink to="/contactus" className='navlink'>Contact Us<img src={sleeping2} alt="" className='sleeping' /><img src={active} alt="" className='activ' /></NavLink>  
                </nav>        
            </React.Fragment>
        );

    }
    componentDidMount=()=>{
        let id = this.props.useridFromApp
        {this.setState({navId:id})}
        console.log(id)
    }

    // componentDidMount(){
    //     let id = this.props.params.id
    //     this.setState({navid:id})
    //     console.log("hi")
    //     console.log(id)
    // }
}
 
// export default withRouter (Navbar);
export default Navbar;