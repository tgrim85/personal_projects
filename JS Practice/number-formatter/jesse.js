var intToCsv = function(number, precision){
  var afterDecimalValue = "";
  var negative = "";
  var numberArray = [];
  var result = "";
  var formattedNumber = parseFloat(number).toFixed(precision);
  var strNumber = String(formattedNumber);
  var answer = "";
  var commasNeeded = Math.round((strNumber.length)/4);

  if(strNumber[0] == '-'){
    strNumber = strNumber.substr(1,strNumber.length)
    negative = "-";
  }

  for(i = 0; i < strNumber.length; i++){
    if(strNumber[i] == '.'){
      afterDecimalValue = strNumber.substr(i, strNumber.length);
      strNumber = strNumber.substr(0,i);
      if(Number(afterDecimalValue) == 0){
          afterDecimalValue = "";
      }
      break;
    }
  }

  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };

  if(strNumber.length % 3 == 0){
      commasNeeded -= 1;
  }

  for(i = strNumber.length - 1; i >= 0; i--){
      numberArray.push(strNumber[i]);
  }

  for(z = 0; z < strNumber.length + commasNeeded; z++){
      if((z+1) % 4 == 0){
          numberArray.insert(z, ',');
       }
  }

  for(i = numberArray.length - 1; i >= 0; i--){
      result += numberArray[i];
  }
  answer = negative + result + afterDecimalValue;
  return answer;
}

var csvToInt = function(csvNumber, precision){
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
}


