# Instructions pour connecter Angular avec le Backend

## Configuration du Backend

### 1. Prérequis
- Node.js installé (version 14 ou supérieure)
- MySQL installé et en cours d'exécution
- Un utilisateur MySQL avec les droits nécessaires

### 2. Installation du Backend

Ouvrir un terminal dans le dossier `src/app/services` :

```powershell
cd src/app/services
npm install
```

### 3. Configuration de la base de données

1. Créer un fichier `.env` dans `src/app/services` :
```powershell
cp .env.example .env
```

2. Modifier le fichier `.env` avec vos paramètres MySQL :
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=suggestions_db
DB_PORT=3306
PORT=3000
```

3. Créer la base de données MySQL :
   - Ouvrir MySQL Workbench ou la ligne de commande MySQL
   - Exécuter le fichier `database.sql` :
   ```sql
   mysql -u root -p < database.sql
   ```
   OU copier-coller le contenu du fichier dans MySQL Workbench

### 4. Démarrer le Backend

Dans le dossier `src/app/services` :

```powershell
npm run dev
```

Vous devriez voir :
```
✅ Connecté à MySQL
✅ Base de données MySQL initialisée
Serveur démarré sur le port 3000
```

### 5. Démarrer l'application Angular

Dans un nouveau terminal, à la racine du projet :

```powershell
ng serve
```

### 6. Tester l'application

Ouvrez votre navigateur à l'adresse : `http://localhost:4200`

## Structure du Backend

```
src/app/services/
├── config/
│   └── database.js       # Configuration MySQL
├── controllers/
│   └── jardinController.js  # Logique métier jardins
├── models/
│   └── jardin.js         # Modèle de données jardins
├── routes/
│   └── jardinRoutes.js   # Routes API jardins
├── app.js                # Point d'entrée de l'application
├── database.sql          # Script de création de la BDD
├── package.json          # Dépendances Node.js
└── .env                  # Configuration (à créer)
```

## API Endpoints disponibles

### Jardins
- `GET http://localhost:3000/jardins` - Récupérer tous les jardins
- `GET http://localhost:3000/jardins/:id` - Récupérer un jardin par ID
- `POST http://localhost:3000/jardins` - Créer un jardin
- `PUT http://localhost:3000/jardins/:id` - Modifier un jardin
- `DELETE http://localhost:3000/jardins/:id` - Supprimer un jardin

## Dépannage

### Erreur de connexion MySQL
- Vérifier que MySQL est en cours d'exécution
- Vérifier les paramètres dans le fichier `.env`
- Vérifier que la base de données `suggestions_db` existe

### Erreur CORS
- Le backend est configuré avec CORS pour accepter les requêtes de localhost:4200
- Si vous utilisez un autre port, modifier app.js

### Port déjà utilisé
Si le port 3000 est déjà utilisé, modifier la variable `PORT` dans le fichier `.env`

## Validation des données

Le backend valide automatiquement :
- **Adresse** : Requis, minimum 5 caractères
- **Surface** : Requis, nombre positif, minimum 50 m²
- **Date d'entretien** : Optionnel, format date
- **Statut** : Booléen (actif/inactif)
