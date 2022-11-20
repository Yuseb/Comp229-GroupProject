let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let contactController = require("../controllers/contact");

//helper function for guard purposes

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect("/login");
    }
    next();
}

// Get Route for the Contact list READ operation
router.get("/", contactController.displayContactList);

// Get Route for displaying the CREATE operation
router.get("/add", requireAuth, contactController.displayAddPage );

// Post Route for processing the CREATE operation
router.post("/add", requireAuth, contactController.processAddPage);

// Get Route for displaying the UPDATE operation
router.get("/edit/:id", requireAuth, contactController.displayEditPage);

// Post Route for UPDATE operation
router.post("/edit/:id", requireAuth, contactController.processEditPage);

// Get to perform DELETE operation
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;