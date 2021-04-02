import {updateReservationInfo} from "../../Constants/ActionTypes";

const getReservationAction = (Payload) => {
   
    return {
        type: updateReservationInfo,
        payload:Payload
    }
}

export default getReservationAction;