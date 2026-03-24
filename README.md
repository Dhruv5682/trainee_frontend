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

Add frontend screenshots here:

- Items List page
- Create Item page
- Update Item page

Example path format:

`screenshots/frontend/items-list.png`
