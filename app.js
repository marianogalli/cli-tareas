require('colors');


const {mostrarMenu, pausa}=require('./helpers/inquirer')



const main=async()=>{

    let opt='';

    do{

        opt=await mostrarMenu();
        console.log('Opcion elegida: ',opt);

        await pausa();

    }while(opt!=='0')

    

    
    
}

main();
