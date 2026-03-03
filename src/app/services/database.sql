-- Créer la base de données
CREATE DATABASE IF NOT EXISTS suggestions_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE suggestions_db;

-- Créer la table jardins pour l'application Jardin Douraid
CREATE TABLE IF NOT EXISTS jardins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  adresse VARCHAR(255) NOT NULL,
  surface DECIMAL(10,2) NOT NULL CHECK (surface >= 50),
  dateEntretien DATE,
  statut TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_statut (statut),
  INDEX idx_dateEntretien (dateEntretien)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;