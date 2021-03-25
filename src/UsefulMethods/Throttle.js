/**
 *  Returns throttled function, that occurs at most "limit" miliseconds and takes arguments e. 
 *  This throttle function calls the method at the end of the throttle time. Unlike the usual which is at the start of throttle time.
 * @param {function} func function to be throttled
 * @param {number} limit Amount of ms to be throttled
 * @param {*} ...args Any Arguments that function(param1) needs. Can be more than 1.
 * @return {function} param1 function throttled.
 * @author Kemal Altan Demirel
 * @date 2021/02/27
 */
const throttleFunction = (func, limit,...args) =>{
    var isWaiting = false;                 
    return function (...args) {             
        if (!isWaiting) {                                     
            isWaiting = true;               
            setTimeout(function () { 
                func(...args);            
                isWaiting = false;          
            }, limit);
        }
    }
} 

export default throttleFunction;