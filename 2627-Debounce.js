/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer = null

    const debounced = function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            timer = null
            fn.apply(this, args)
        },t)
    }

    debounced.cancel = function(){
        if(timer){
            clearTimeout(timer)
            timer = null
        }
    }

    return debounced
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */