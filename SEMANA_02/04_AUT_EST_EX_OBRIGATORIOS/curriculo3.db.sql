BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "sobremim" (
	"id_sobremim"	INTEGER NOT NULL,
	"endereco"	TEXT,
	"email"	TEXT,
	"minhatrajetoria"	TEXT,
	"cargo"	INTEGER,
	"foto"	INTEGER,
	PRIMARY KEY("id_sobremim" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"id_experiencia"	INTEGER NOT NULL,
	"nomedaempresa"	TEXT,
	"cargo"	TEXT,
	"duracao"	INTEGER,
	"descricaodafuncao"	TEXT,
	"id_sobremim"	INTEGER NOT NULL,
	PRIMARY KEY("id_sobremim" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"id_formacao"	INTEGER NOT NULL,
	"curso"	TEXT,
	"duracao"	INTEGER,
	"descricaodocargo"	TEXT,
	"id_sobremim"	INTEGER NOT NULL,
	PRIMARY KEY("id_sobremim" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "personalidade" (
	"id_personalidade"	INTEGER NOT NULL,
	"quaisseusprincipaispontosfortes"	TEXT,
	"id_sobremim"	INTEGER,
	PRIMARY KEY("id_personalidade" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "realizacoes" (
	"id_realizacoes"	INTEGER NOT NULL,
	"oquefez"	TEXT,
	"quando"	INTEGER,
	"id_sobremim"	INTEGER,
	PRIMARY KEY("id_realizacoes" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"id_habilidades"	INTEGER NOT NULL,
	"descrevasuashabilidades"	TEXT,
	"id_sobremim"	INTEGER,
	PRIMARY KEY("id_habilidades" AUTOINCREMENT)
);
COMMIT;
