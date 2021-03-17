require('colors');


const {mostrarMenu, pausa, leerConsola}=require('./helpers/inquirer')
const Tareas=require('./models/tareas')
const {guardarDB,leerDB}=require('./helpers/guardarArchivo')


const main=async()=>{

    let opt='';
    const tareas=new Tareas();
    const tareasDB=leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArr(tareasDB);
    }  

    do{
        opt=await mostrarMenu();
        switch (opt) {
            case '1':
                const tarea=await leerConsola('Descripción')
                tareas.crearTarea(tarea);
            break;
        
            case '2':
                console.log(tareas.listadoCompleto());
            break;

            case '3':
                console.log(tareas.listarPendientesCompletadas(true));
            break;

            case '4':
                console.log(tareas.listarPendientesCompletadas(false));
            break;
        }      

        guardarDB(tareas.listadoArr);
        await pausa();

    }while(opt!=='0')   
    
}

main();
