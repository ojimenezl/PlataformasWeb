const fs = require('fs');
const colors = require('colors')
let base = [{
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Pepe"
    },
    {
        id: 3,
        nombre: "Ana"
    },
    {
        id: 4,
        nombre: "María"
    }
];


let sueldos = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 5,
        salario: 2000
    },
    {
        id: 6,
        salario: 6000
    },
    {
        id: 7,
        salario: 7000
    }
]

let getUsuario = (id, callback) => {
    return new Promise((resolve, reject) => {
        let BDUsuario = base.find(iterar => iterar.id === id);
        if (!BDUsuario) {
            reject(`No existe el usuario con id ${id}`)
        } else {
            resolve(BDUsuario)
        }
    });
}

let getBase = () => {

    for (let i = 1; i <= 7; i++) {

        let usuarioDB = base.find(iteracion => iteracion.id === i)
        let salarioDB = sueldos.find(iteracion => iteracion.id === i)

        if (!usuarioDB) {
            console.log("===================================================".red);
            console.log((`No existe el usuario con id| ${salarioDB.salario}`).red);
        } else {
            if (!salarioDB) {
                console.log("=============================================".red);
                console.log((`${usuarioDB.nombre} | no tiene salario`).red);
            } else {
                console.log("===================================================".green);
                console.log((`${usuarioDB.nombre} | ${salarioDB.salario}`).green);
                console.log("===================================================".green);
            }


        }
    }
}

let mostrar = () => {
    return new Promise((resolve, reject) => {
        let BDUsuario = base;
        if (!BDUsuario) {
            reject(`No existe el usuario con id ${id}`)
        } else {
            resolve(BDUsuario)
        }
    });
}




let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = sueldos.find(iteracion => iteracion.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}



let getInformacion = async(id) => {
    let empleado = await getUsuario(id);
    let resp = await getSalario(empleado);
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}

let getInfoArchivo = async(id) => {
    let empleado = await getUsuario(id);
    let resp = await getSalario(empleado);
    let infoarchivo = await crearArchivo(resp);
    return `Listo!: ${infoarchivo} `;
}

let getTodos = async() => {
    let empleado = await getBase();
    let resp = await getSalario(empleado);
    let listo = await listarTabla(resp);
    //let infoarchivo = await crearArchivo(resp);
    return `Listo!: ${listo} `;
}

let listarTabla = (info) => {
    return new Promise((reject, resolve) => {

        let anual = `${info.nombre} | ${info.salario} | ${info.salario}`;
        //fs.writeFile(`sueldos/infromes-${info.nombre}.txt`, anual, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(`${anual}`)
        }
    });
    //});

}



let crearArchivo = (info) => {
    return new Promise((reject, resolve) => {

        let anual = `${info.nombre} | ${info.salario} | ${info.salario*12}`;
        fs.writeFile(`sueldos/infromes-${info.nombre}.txt`, anual, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`el archivo ha sido creado!`)
            }
        });
    });
};

// getInformacion(2)
//     .then(mensaje => console.log(mensaje))
//     .catch(err => {
//         console.log("Error en :", err)
//     });


module.exports = {
        crearArchivo,
        getInfoArchivo,
        listarTabla,
        getBase,
        mostrar
    }
    // getUsuario(1)
    //     .then(BDUsuario => {
    //         console.log("El empleado es:", BDUsuario);
    //     }, (err) => { console.log(err); })