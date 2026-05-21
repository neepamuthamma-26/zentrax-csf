# ZENTRAX Construction — Complete Fixed Project

## Folder Structure

```
zentrax-fixed/
├── backend/
│   ├── server.js                        ← Express server (port 5000)
│   ├── database.js                      ← SQLite connection + table creation
│   ├── database/
│   │   └── contact.db                   ← auto-created on first run
│   ├── controllers/
│   │   └── contactController.js
│   └── routes/
│       └── contactRoutes.js
├── frontend/
│   ├── index.html                       ← Full ZENTRAX website
│   ├── main.js                          ← All JS + contact form fetch
│   ├── style.css                        ← Complete design
│   ├── logo.png
│   └── property.jpg
└── package.json
```

## How to Run

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Start the server
```bash
npm start          # production
# or
npm run dev        # with auto-restart (nodemon)
```

### Step 3 — Open website
Open your browser → http://localhost:5000

The server serves the frontend automatically AND handles the API.

---

## API Endpoints

| Method | URL              | Description              |
|--------|------------------|--------------------------|
| POST   | /api/contact     | Save contact form to DB  |
| GET    | /api/contacts    | View all submissions     |

### POST /api/contact — Request body
```json
{
  "name":    "Ravi Kumar",
  "email":   "ravi@example.com",
  "phone":   "+91 98765 43210",
  "service": "Residential Construction",
  "message": "I need a 3BHK villa design and build..."
}
```

### Success Response
```json
{ "success": true, "message": "Message sent successfully", "id": 1 }
```

### Error Response
```json
{ "success": false, "message": "Error saving data. Please try again." }
```

---

## SQLite Table

```sql
CREATE TABLE IF NOT EXISTS contacts (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT,
  email      TEXT,
  phone      TEXT,
  service    TEXT,
  message    TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Database file: `backend/database/contact.db` (created automatically).

---

## Quick Test (without browser)
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"t@t.com","phone":"1234","service":"Residential Construction","message":"Test message"}'
```
Expected: `{"success":true,"message":"Message sent successfully","id":1}`
