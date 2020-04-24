const colors = require('colors')
const argv = require("./config/yargs").argv;
const { getInfoArchivo, getBase, mostrar } = require('./procesos');


let comando = argv._[0];
let id = argv.id;

switch (comando) {
    case 'id':
        getInfoArchivo(id)
            .then(mensaje => console.log(mensaje))
            .catch(err => {
                console.log("Error en :", err);
            });
        break;
    case 'listar':
        getBase()
        break;
    case 'mostrar':
        mostrar()
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => {
                console.log("Error en :", err);
            });
        break;
}