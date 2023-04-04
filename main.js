window.onload = function() {
    //write your code here
    let who1 = who[Math.floor(Math.random()*who.length)];
    let action1 = action[Math.floor(Math.random()*action.length)];
    let what1 = what[Math.floor(Math.random()*what.length)];
    let when1 = when [Math.floor(Math.random()*when.length)];

    let excuse = who1 + ' ' + action1 + ' ' + what1 + ' ' + when1
    
    let excuseElement = document.getElementById("excuse");
    excuseElement.textContent = excuse;

    console.log(excuse);
  };
  
  const who = ['The dog','My grandma','His turtle','My bird'];
  const action = ['ate','peed','crushed','broke'];
  const what = ['my homework', 'the keys', 'the car'];
  const when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
