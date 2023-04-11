window.onload = function() {
    let excuse = `${getRandomElementArray(who)} ${getRandomElementArray(action)} ${getRandomElementArray(what)} ${getRandomElementArray(when)}`;
    
    let excuseElement = document.getElementById("excuse");
    excuseElement.textContent = excuse;
  };

  function getRandomElementArray(list){
    return list[Math.floor(Math.random()*list.length)];
  }
  
const who = ['The dog','My grandma','His turtle','My bird'];
const action = ['ate','peed','crushed','broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
