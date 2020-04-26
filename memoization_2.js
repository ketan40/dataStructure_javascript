const memo = (func) =>
{
 const cache = {};
  return (...args) => {
      console.log(...args);
        console.log(args);
       if(cache[args]){
         return cache[args];
       } else {
        const result = func(...args);
         cache[args];
         return result;

}

  }
}

// const fib = memo(fibn)(2), example for memo andd higher order func
// fibn can be any function
