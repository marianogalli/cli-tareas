
const fs=require('fs')

const path='./db/data.json'

const guardarDB=(data)=>{
    fs.writeFileSync(path,JSON.stringify(data))
}

const leerDB=()=>{

    if(!fs.existsSync(path)){
        return null
    }
    const data=fs.readFileSync(path,[{encoding:'utf-8'}])

    return JSON.parse(data);
}

module.exports={
    guardarDB,
    leerDB
}
