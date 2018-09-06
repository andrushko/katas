// https://www.codewars.com/kata/how-much-will-the-apples-cost
function apples(kilos, price) {
    var result = kilos * price;
    var discount = (kilos >= 11 ? result * 0.3 : 
      (kilos >= 9 ? result * 0.25 :
        (kilos >= 7 ? result * 0.2 : 
          (kilos >= 5 ? result * 0.15 : 
            (kilos >= 3 ? result * 0.1 : 
              (kilos >= 1 ? result * 0.05 : 0))))));
    
    return  result - discount;
  }