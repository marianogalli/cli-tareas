const inquirer=require('inquirer');
require('colors')

const questions=[
    {
        type:'list',
        name:'opc',
        message:'Qué desea hacer?',
        choices:[
            {
                name:'1. Crear Tarea',
                value:'1'
            },
            {
                name:'2. Listar Tareas',
                value:'2'
            },
            {
                name:'3. Listar tareas completadas',
                value:'3'
            },
            {
                name:'4. Listar tareas pendientes',
                value:'4'
            },
            {
                name:'5. Completar tarea(s)',
                value:'5'
            },
            {
                name:'6. Borrar tarea',
                value:'6'
            },
            {
                name:'0. Salir',
                value:'0'
            },
            
            

        ]
    }
]

const mostrarMenu=async()=>{

    console.clear();
    
    console.log('=========================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('==========================\n'.green);

    
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

module.exports={
    mostrarMenu,
    pausa
}