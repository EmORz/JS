function tailoringWorsho(input){
   let tablesNum = Number(input.shift());
   let tablesLenght = Number(input.shift());
   let tablesWidth = Number(input.shift());

   let coversArea = tablesNum*(tablesLenght+2*0.03)*(tablesWidth+2*0.3);
   let squareArea = tablesNum*(tablesLenght/2)*(tablesLenght/2);

   let priceÌnDollars = (coversArea*7)+(squareArea*9);
   let priceInLev = priceÌnDollars * 1.85;

   console.log(priceÌnDollars.toFixed(2));
   console.log(priceInLev.toFixed(2));
}
tailoringWorsho([10, 1.2, 0.65])