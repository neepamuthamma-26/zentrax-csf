const express = require("express");
const cors    = require("cors");
const path    = require("path");

const app = express();

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Serve the frontend (index.html + assets) ──────────────────────────────────
// Place your index.html, style.css, main.js, logo.png etc. in  ../frontend/
const FRONTEND_DIR = path.join(__dirname, "..", "frontend");
app.use(express.static(FRONTEND_DIR));

// ── API Routes ────────────────────────────────────────────────────────────────
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/api", (req, res) => {
  res.json({ status: "ZENTRAX Backend Running ✅" });
});

// ── Fallback: serve index.html for any unknown route ─────────────────────────
app.get("*", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "index.html"));
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 ZENTRAX server → http://localhost:${PORT}`);
});
