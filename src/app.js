let myDomain = '';

let pronounArray = ['the', 'our', 'my', 'your'];
let adjArray = ['great', 'big', 'best', 'awesome'];
let nounArray = ['jogger', 'racoon', 'website', 'space'];
let domainArray = ['.com', '.net', '.us', '.io']

let pronounRandom = Math.floor(Math.random()*10)*pronounArray.length;
let adjRandom = Math.floor(Math.random()*10)*adjArray.length;
let nounRandom = Math.floor(Math.random()*10)*nounArray.length;
let domainRandom = Math.floor(Math.random()*10)*domainArray.length;

function domainGenerator () {
  for (let i = 0; i = pronounRandom; i++) {
    let pronoun = pronounArray[i];
    for (let i = 0; i = adjRandom; i++) {
      let adj = adjArray[i];
      for (let i = 0; i = nounRandom; i++) {
        let noun = nounArray[i];
        for (let i = 0; i = domainRandom; i++) {
          let domain = domainArray[i];
        }
      }
    }
  }
    return '${pronoun}${adj}${noun}';
}



console.log(domainGenerator());