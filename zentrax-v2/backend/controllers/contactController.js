const db = require("../database");

// POST /api/contact — save form submission to SQLite
const saveContact = (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required."
    });
  }

  const sql = `
    INSERT INTO contacts (name, email, phone, service, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, [name, email, phone, service, message], function (err) {
    if (err) {
      console.error("❌ DB insert error:", err.message);
      return res.status(500).json({
        success: false,
        message: "Error saving data. Please try again."
      });
    }

    console.log(`✅ Contact saved — id: ${this.lastID}, name: ${name}`);
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      id: this.lastID
    });
  });
};

// GET /api/contacts — (optional) view all submissions
const getContacts = (req, res) => {
  db.all("SELECT * FROM contacts ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, data: rows });
  });
};

module.exports = { saveContact, getContacts };
