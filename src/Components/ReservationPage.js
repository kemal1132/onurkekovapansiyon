import React, {Component } from "react";
import {connect} from "react-redux";
import ReservationAction from "../Redux/Actions/ReservationAction";
import ReservationSelector from "../Redux/Reducers&Selectors/ReservationSelector"

class ReservationPage extends Component{
    constructor(props){
        super(props);
        this.handleInputChange= this.handleInputChange.bind(this);
       
    }
    handleInputChange(event){ //To do Handle state in Redux
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.props.dispatch(ReservationAction({[name]: value}));
       
    }
    render(){
        return <form>
            <label>
                Your Name
                <input name="name" type="text" onChange={this.handleInputChange} placeholder="Onur Altan" value={this.props.reservation.name}/> 
            </label>
            <label>
                Your telephone (country included)
                <input name="telephone" type="text" onChange={this.handleInputChange} placeholder="00902428742071" value={this.props.reservation.telephone} /> 
            </label>
            <label>
                Your email
                <input name="email" type="text" onChange={this.handleInputChange} placeholder="00902428742071" value={this.props.reservation.email}/> 
            </label>
            <label>
                Number of people
                 <input name="numberOfPeople" type="text" onChange={this.handleInputChange} placeholder="5" value={this.props.reservation.numberOfPeople}/> 
            </label>
            <label>
                Single Room
                <img onClick={()=>{}}></img>
                <img onClick={()=>{}}></img>
            </label>
            <label>
                Double room
                <img onClick={()=>{}}></img>
                <img onClick={()=>{}}></img>
            </label>
            <label>
                Triple Room
                <img onClick={()=>{}}></img>
                <img onClick={()=>{}}></img>
            </label>
            <label>
                Current Rooms:
            </label>
            <label>
                Date of Arrival
                <input name="dateOfArrival" type="date" onChange={this.handleInputChange} placeholder="5" value={this.props.reservation.dateOfArrival}/> 
            </label>
            <label>
                Date of Departure
                <input name="dateOfDeparture" type="date" onChange={this.handleInputChange} placeholder="5" value={this.props.reservation.dateOfDeparture}/> 
            </label>
            <label>
                Expected arrival hour
                <input name="expectedArrivalHour" type="time" onChange={this.handleInputChange} placeholder="5" value={this.props.reservation.expectedArrivalHour}/> 
            </label>

            <label>
                Remarks and Wishes
                <input name="remarksAndWishes" type="text" onChange={this.handleInputChange} placeholder="5" value={this.props.reservation.remarksAndWishes}/> 

            </label>

            
          
        </form>
    }
}



export default connect(state=>state,null)(ReservationPage);