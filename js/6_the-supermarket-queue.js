// https://www.codewars.com/kata/the-supermarket-queue

function queueTime(customers, n) {
    if(!customers.length) return 0;
    else if(n === 1) return customers.reduce(function(a, b) {return a + b;}, 0);
    else if(n > customers.length) return Math.max(...customers);
  
    customers.reverse();
    var time = 0;
    var current = Array.from(Array(n), () => 0);
  
    while(customers.length){
      for(var i = 0; i < current.length; ++i){
        if(current[i] === 0) { 
          var x = customers.pop(); 
          current[i] = x ? x : 0;
        }
      }
  
      var min = Math.min(...current);
      current = current.map(x => x - min);
      time += min;
    }
    
    return time + Math.max(...current);
}