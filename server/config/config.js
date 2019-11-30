//Puerto

process.env.PORT = process.env.PORT || 3000;

//Enterno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del token
/*
60 sec
60 min
24 hs
30 días
*/
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//SEED de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';


//Base de datos

let urlBD;
if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb://cafe-user:deathmetal123@ds149218.mlab.com:49218/usuarios';
}

process.env.urlBD = urlBD;

//mongodb://localhost:27017/cafe
//mongodb://<dbuser>:<dbpassword>@ds149218.mlab.com:49218/usuarios