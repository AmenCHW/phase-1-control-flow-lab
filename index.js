function scuberGreetingForFeet(feet){
 
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.'
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
  // Write your code here!
}

scuberGreetingForFeet();

console.log(scuberGreetingForFeet(200))
console.log(scuberGreetingForFeet(409))
console.log(scuberGreetingForFeet(1900))
console.log(scuberGreetingForFeet(2500))
console.log(scuberGreetingForFeet(2700))

function ternaryCheckCity(city){
return city === 'NYC'? 'Ok, sounds good.':'No go.'

}
ternaryCheckCity();
console.log(ternaryCheckCity('yy'))

function switchOnCharmFromTip(tip){
  
  
switch(tip) {
  case 'generous':
    return 'Thank you so much.'
    break;
    case 'not as generous':
      return 'Thank you.'
    break;
  default:
   return 'Bye.'
}
}

console.log(switchOnCharmFromTip('not as generous'))