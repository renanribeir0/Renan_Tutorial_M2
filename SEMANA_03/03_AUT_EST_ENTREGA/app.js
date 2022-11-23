const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculo.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());
app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id_formacao, curso, duracao, descricaodocargo, id_sobremim FROM formacao';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/experiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id_experiencia, nomedaempresa, cargo, duracao, descricaodafuncao, id_sobremim FROM experiencia';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/habilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id_habilidades, descrevasuashabilidades, id_sobremim FROM habilidades';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/personalidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id_personalidade, quaisseusprincipaispontosfortes, id_sobremim FROM personalidade';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/realizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id_realizacoes, oquefez, quando, id_sobremim FROM realizacoes';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/sobremim', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id_sobremim, endereco, email, minhatrajetoria, cargo, foto, id_sobremim FROM sobremim';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});