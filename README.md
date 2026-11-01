# Quiz éducatif

Application de quiz éducatif réalisée avec la stack MERN (MongoDB, Express, React, Node.js).

## Structure

| Dossier | Rôle |
| --- | --- |
| `frontend/` | Interface React de l'application |
| `backend/` | API Express : inscription, connexion et données (MongoDB) |
| `admin/` | Partie administration : interface React (`admin/client`) et API de démonstration (`json-server`) |

## Prérequis

- Node.js et npm
- Une base MongoDB (locale ou MongoDB Atlas)

## Lancer le projet

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm start
```

Renseigne `JWT_SECRET` et `MONGO_URL` dans `backend/.env`. L'API écoute sur le port 5000.

### Frontend

```bash
cd frontend
npm install
npm start
```

### Admin

```bash
cd admin
npm install
npm run server
```

Puis, dans un autre terminal :

```bash
cd admin/client
npm install
npm start
```

L'API d'administration utilise elle aussi le port 5000 : ne lance pas le backend et l'admin en même temps sans changer l'un des ports.

Les comptes présents dans `admin/db.json` sont des données de démonstration.
