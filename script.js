const prompt=require('prompt-sync')();
const addToList=require('./add');
const showMenu=require('./menu');
const showList=require('./show');
const removeFromList=require('./remove');

const list=[];
let option=0;

do{
    console.clear();
    showMenu();
    console.log();
    option=parseInt(prompt('>> '));

    console.clear();

    switch(option){
        case 1:
            addToList(list);
            break;
        case 2:
            showList(list);
            break;
        case 3:
            removeFromList(list);
            break;
        case 4:
            console.log('Finalizando a aplicação!');
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
    prompt('Pressione ENTER para continuar...');
}while(option!=4);