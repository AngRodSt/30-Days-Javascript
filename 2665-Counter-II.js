/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initC = init;
    return {
        increment: increment = ()=>{
            return ++init;
        },
        decrement: decrement =()=>{
            return --init;
        },
        reset: reset = ()=>{
            return(init = initC);
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */