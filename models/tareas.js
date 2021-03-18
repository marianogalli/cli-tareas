const Tarea = require('./tarea');
const tarea=require('./tarea')
require('colors')

class Tareas{

    _listado={};

    constructor(){
        this._listado={};
    }

    get listadoArr(){

        const listado=[];

        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key];
            listado.push(tarea)
        })

        return listado;
    }

    cargarTareasFromArr(tareas=[]){
        
        tareas.forEach(tarea=>{
            this._listado[tarea.id]=tarea;
        })
    }

    crearTarea(descripcion){
        const tarea=new Tarea(descripcion);
        this._listado[tarea.id]=tarea;
    }

    listadoCompleto(){
        let listaTareas='';
        this.listadoArr.forEach((task,index)=>{

            const idx=`${index+1}`.green;

            let estado;
            if(task.completadoEn===null){
                estado='Pendiente'.red
            }else{
                estado='Completada'.green
            }

            const {desc}=task;
            listaTareas+=`${idx}. ${desc} :: ${estado}\n`
        })
        return listaTareas;
    }

    listarPendientesCompletadas(completadas=true){

        let cadena='';
        let contador=0;

        this.listadoArr.forEach((t,index)=>{            

            if(completadas){
                if(t.completadoEn!==null){
                    contador++;
                    cadena+=`${contador.toString().green} ${t.desc} ${t.completadoEn.green}\n`;
                }
            }else{
                if(t.completadoEn===null){
                    contador++;
                    cadena+=`${contador.toString().red} ${t.desc}\n`;
                }
            }

        })
        return cadena;
    }

    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }
    toggleCompletadas(ids=[]){
        
        ids.forEach(id=>{
            const tarea=this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn=new Date().toISOString();
            }
        })

        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                const tarea=this._listado[id];
                tarea.completadoEn=null;
            }
        })
    }






}

module.exports=Tareas;