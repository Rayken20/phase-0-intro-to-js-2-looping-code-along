// Code your solutions in this file
let names = ['Rachael', 'John', 'James'];

function writeCards(names, birthday) {
    const messages=[];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    
    return messages;
}

writeCards(names, "birthday");
//while loop

function countDown(num){
    
    while (num >=0){
        console.log(num--);
    }
}