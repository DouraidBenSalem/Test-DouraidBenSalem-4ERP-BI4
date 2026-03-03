const mysql = require("mysql2/promise");
require("dotenv").config();

// Créer le pool de connexions
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "suggestions_db",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promisify pour utiliser async/await
//const promisePool = pool.promise();

// Initialisation de la base de données
const initDatabase = async () => {
  try {
    const connection = await pool.getConnection();

    // Créer la table jardins si elle n'existe pas
    await connection.query(`
      CREATE TABLE IF NOT EXISTS jardins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        adresse VARCHAR(255) NOT NULL,
        surface DECIMAL(10,2) NOT NULL,
        dateEntretien DATE NULL,
        statut TINYINT(1) DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_statut_jardin (statut),
        INDEX idx_date_entretien (dateEntretien)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    connection.release();
    console.log("✅ Base de données MySQL initialisée - Table jardins créée");
  } catch (err) {
    console.error("❌ Erreur initialisation base de données:", err.message);
    process.exit(1);
  }
};

// Tester la connexion
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Erreur connexion MySQL:", err.message);
    return;
  }
  console.log("✅ Connecté à MySQL");
  connection.release();
});

module.exports = { pool, initDatabase };
