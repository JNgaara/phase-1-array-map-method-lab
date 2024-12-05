const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let newArray =[];
let capitalisedSentence ='';
let word=[];
for(var i in tutorials){
  var capitalizedString = (str) => str[0].toUpperCase() + 
  str.slice(1).toLowerCase();
   words = tutorials[i].split(' ').map(capitalizedString);
   capitalisedSentence = words.join(' '); 
  newArray+= capitalisedSentence;
}   console.log(newArray);   newArray=[];


const titleCased = () => {
  
  return tutorials
}


