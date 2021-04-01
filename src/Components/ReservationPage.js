import React, {Component } from "react";

class ReservationPage extends Component{
    constructor(props){
        super(props);
        this.handleInputChange= this.handleInputChange.bind(this);
        this.state = {
            name : "",
            telephone: "",
            email: "",
            numberOfPeople: 0,
            numberOfSingleRooms: 0,
            numberOfDoubleRooms: 0,
            numberOfTripleRooms: 0,
            dateOfArrival:undefined,
            dateOfDeparture:undefined,
            expectedArrivalHour:undefined,
            remarksAndWishes: ""
        }
    }
    handleInputChange(event){ //To do Handle state in Redux
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    render(){
        return <form>
            <label>
                Your Name
                <input name="name" type="text" onChange={this.handleInputChange} placeholder="Onur Altan"/> 
            </label>
            <label>
                Your telephone (country included)
                <input name="telephone" type="text" onChange={this.handleInputChange} placeholder="00902428742071"/> 
            </label>
            <label>
                Your email
                <input name="email" type="text" onChange={this.handleInputChange} placeholder="00902428742071"/> 
            </label>
            <label>
                Number of people
                 <input name="numberOfPeople" type="text" onChange={this.handleInputChange} placeholder="5"/> 
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
                <input name="dateOfArrival" type="date" onChange={this.handleInputChange} placeholder="5"/> 
            </label>
            <label>
                Date of Departure
                <input name="dateOfDeparture" type="date" onChange={this.handleInputChange} placeholder="5"/> 
            </label>
            <label>
                Expected arrival hour
                <input name="expectedArrivalHour" type="time" onChange={this.handleInputChange} placeholder="5"/> 
            </label>

            <label>
                Remarks and Wishes
                <input name="remarksAndWishes" type="text" onChange={this.handleInputChange} placeholder="5"/> 

            </label>
            
            <p>{this.state.dateOfArrival}</p>
        </form>
    }
}

export default ReservationPage;