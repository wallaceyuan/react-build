module.exports = function () {
    var box = {
        'name':'Z.L',
        'age':25
    }

    let saySomeThing = (words) =>{
        console.log(words)
    }

    saySomeThing('yahahah')

    var element = document.createElement('h1');

    element.innerHTML = 'Hello world!!!！@';

    return element;
};