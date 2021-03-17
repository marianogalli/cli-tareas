const inquirer=require('inquirer');
require('colors')

const questions=[
    {
        type:'list',
        name:'opc',
        message:'Qué desea hacer?',
        choices:[
            {
                name:`${'1.'.green} Crear Tarea`,
                value:'1'
            },
            {
                name:`${'2.'.green} Listar Tareas`,
                value:'2'
            },
            {
                name:`${'3.'.green} Listar tareas completadas`,
                value:'3'
            },
            {
                name:`${'4.'.green} Listar tareas pendientes`,
                value:'4'
            },
            {
                name:`${'5.'.green} Completar tarea(s)`,
                value:'5'
            },
            {
                name:`${'6.'.green} Borrar tarea`,
                value:'6'
            },
            {
                name:`${'0.'.green} Salir`,
                value:'0'
            },
            
            

        ]
    }
]

const mostrarMenu=async()=>{

    console.clear();
    
    console.log('==========================='.green);
    console.log('   Seleccione una opción'.gray);
    console.log('===========================\n'.green);

    
    const {opc}= await inquirer.prompt(questions)
    return opc;
}


const pausa=async()=>{

    const input={
        type:'input',
        message:`Presiona ${'Enter'.green} para continuar`,
        name:'enter'
    }

    console.log('\n');
    await inquirer.prompt(input);
}


const leerConsola=async(message='')=>{

    const question=[
        {
            type:'input',
            message,
            name:'entrada',
            validate(value){
                if(value.length===0){
                    return 'Ingrese un valor'
                }
                return true;
            }
        }
    ]

    const {entrada}=await inquirer.prompt(question)
    return entrada;
}

module.exports={
    mostrarMenu,
    pausa,
    leerConsola
}