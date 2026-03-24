# Trainee Frontend

React + Vite frontend for managing items (list, create, update) via backend APIs.

## Project Structure

```text
trainee_frontend/
  src/
    pages/
      GetItems.jsx
      CreateItem.jsx
      UpdateItem.jsx
    services/
      api.js
    App.jsx
    main.jsx
    styles.css
  index.html
  package.json
  vite.config.js
```

## Environment Variables

Optional `trainee_frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

If not provided, the app uses:

`http://localhost:5000/api`

## Run Frontend

```bash
cd trainee_frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Pages

- `GetItems` - View all items
- `CreateItem` - Add a new item
- `UpdateItem` - Update an existing item

## Screenshots

<img width="1806" height="667" alt="image" src="https://github.com/user-attachments/assets/d3d1af4f-a343-446f-bd7c-de857f1724c1" />

<img width="1804" height="562" alt="image" src="https://github.com/user-attachments/assets/4d358937-0533-4ac6-abb6-332d040ea080" />

<img width="1806" height="667" alt="image" src="https://github.com/user-attachments/assets/5b90a1da-3a7a-4863-8bd2-b9c38ac3a00b" />



