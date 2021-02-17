var throttleFunction = (func, limit,e) =>{
    var isWaiting = false;                 
    return function (e) {             
        if (!isWaiting) {                                     
            isWaiting = true;               
            setTimeout(function () { 
                func(e);            
                isWaiting = false;          
            }, limit);
        }
    }
} //This throttle calls the method at the end of the throttle time for better accuracy with scroll event

export default throttleFunction;