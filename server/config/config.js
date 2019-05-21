// =======================================
// Puerto
// =======================================
process.env.PORT = process.env.PORT || 3000;

// =======================================
// Entorno
// =======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================================
// Vencimiento del token (JWT)
// =======================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =======================================
// Seed/Semilla de autenticacin (JWT)
// =======================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =======================================
// Base de datos
// =======================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// =======================================
// Google Client ID
// =======================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '523184753420-13i2s7tgsg99jdn9flfrc9u78uo917pd.apps.googleusercontent.com';