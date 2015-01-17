NumberFormatter = {};

(function() {
  NumberFormatter.intToCsv = function(number, precision){
    var afterDecimalValue = "";
    var negative = "";
    var numberArray = [];
    var result = "";
    //make sure our number has the correct precision before working with it
    var formattedNumber = parseFloat(number).toFixed(precision);
    var strNumber = String(formattedNumber);
    var answer = "";
    var commasNeeded = Math.round((strNumber.length)/4);

    //If number is negative, remove negative sign from strNumber
    if(strNumber[0] == '-'){
      strNumber = strNumber.substr(1,strNumber.length);
      negative = "-";
    }

    // If the string has any decimals, save everything after the decimal and
    // remove it from strNumber
    for(i = 0; i < strNumber.length; i++){
      if(strNumber[i] == '.'){
        afterDecimalValue = strNumber.substr(i, strNumber.length);
        strNumber = strNumber.substr(0,i);
        if(Number(afterDecimalValue) === 0){
            afterDecimalValue = "";
        }
        break;
      }
    }

    //create an insert method for numberArray so that commas can be inserted
    //at a particular index
    Array.prototype.insert = function (index, item) {
      this.splice(index, 0, item);
    };

    //If the string number is divisible 3, we will need to remove a comma
    //from the commasNeeded calculation since we do not want commas
    //at the beginning of the number (,340,000)
    if(strNumber.length % 3 === 0){
        commasNeeded -= 1;
    }

    //reverse the string and add it to the numberArray
    for(i = strNumber.length - 1; i >= 0; i--){
        numberArray.push(strNumber[i]);
    }

    //insert commas into the array where needed
    for(i = 0; i < strNumber.length + commasNeeded; i++){
        if((i+1) % 4 === 0){
            numberArray.insert(i, ',');
         }
    }

    //reverse the reversed array and add each element to the string 'result'
    for(i = numberArray.length - 1; i >= 0; i--){
        result += numberArray[i];
    }
    //recreate the initally entered value by adding back a negative sign if
    //there was one and the afterDecimalValues.
    answer = negative + result + afterDecimalValue;
    return answer;
  };
}());

(function(){
  NumberFormatter.csvToInt = function(csvNumber, precision){
    var result = "";
    var answer = "";
    var afterDecimalValue="";

    for(i = 0; i < csvNumber.length; i++){
      if(csvNumber[i] == '.'){
        afterDecimalValue = csvNumber.substr(i, csvNumber.length);
        csvNumber = csvNumber.substr(0, i);
      }

    }

    if(afterDecimalValue.length > 0){
      for(i = 0; i <= precision; i++){
        csvNumber += afterDecimalValue[i];
      }
    }

    for(i = 0; i < csvNumber.length; i++){
      if(csvNumber[i] !== ','){
        result += csvNumber[i];
      }
    }

    console.log(afterDecimalValue);
    console.log(result);
    answer = Number(result);
    return answer;
  };
}());

