import {English} from "./Languages";
const initialState = {
    language:English,
    reservation: {
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

export default Object.freeze(initialState);