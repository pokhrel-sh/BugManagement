const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;


const db = new sqlite3.Database("Database/data.sqlite3", (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });

//gets the bugs from the database, limits at 30.
app.get("/bugs"), (req, res) => {
    db.all("SELECT * FROM Bug Limit 30", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({error: err.message});
        } else {
            res.json(rows);
        
        };
        }
    );
}

//gets the bug with the id from the database
app.get("/data/:id", (req, res) => {
    db.get("SELECT * FROM Bug WHERE id = ${req.params.id}", (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({error: err.message});
        } else {
            res.json(row);
        }
    });
});

//adds the bug to the history table
app.post("/addBugsHistory", (req, res) => {
    const {description, priority, status} = req.body;
    db.run(
        "INSERT INTO History (bug_id, description, priority, statusName) VALUES (${req.params.id}, '${description}', '${priority}', '${status}')",
        function (err) {
            if (err) {
                console.error(err.message);
                res.status(500).json({error: err.message});
            } else {
                res.json({id: this.lastID});
            }
        }
    );
});

//adds the bug to the database
app.post("/addbugs", (req, res) => {
    const {title, description, priority, status} = req.body;
    db.run(
        "INSERT INTO Bug (title, description, priorityName, statusName) VALUES ('${title}', '${description}', '${priority}', '${status}')",
        function (err) {
            if (err) {
                console.error(err.message);
                res.status(500).json({error: err.message});
            } else {
                res.json({id: this.lastID});
            }
        }
    );
});


//deletes the bug with the id from the database
app.delete("/bug/:id", (req, res) => { 
    db.run ("DELETE FROM Bug WHERE id = ${req.params.id}", function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({error: err.message});
        } else {
            res.json({changes: this.changes});
        }
    });
});

//delete the history by id
app.delete("/history/:id", (req, res) => {
    db.run("DELETE FROM History WHERE id = ${req.params.id}", function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({error: err.message});
        } else {
            res.json({changes: this.changes});
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

