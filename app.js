require('colors');


const {mostrarMenu, 
        pausa, 
        leerConsola, 
        listadoTareasBorrar, 
        confirmar,
        mostrarListadoCheckList
    }=require('./helpers/inquirer')
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

            case '3': // Listar completadas
                console.log(tareas.listarPendientesCompletadas(true));
            break;

            case '4': // Listar pendientes
                console.log(tareas.listarPendientesCompletadas(false));
            break;

            case '5': // Completado | Pendiente
                const ids=await mostrarListadoCheckList(tareas.listadoArr)
                tareas.toggleCompletadas(ids);
            break; 

            case '6': // Borrar 
                const id=await listadoTareasBorrar(tareas.listadoArr)
                if(id!=='0'){
                    const ok=await confirmar('Está seguro?')
                    if(ok){
                        tareas.borrarTarea(id)
                        console.log('Tarea borrada correctamente');
                    }
                }                
            break;
        }      

        guardarDB(tareas.listadoArr);
        await pausa();

    }while(opt!=='0')   
    
}

main();
