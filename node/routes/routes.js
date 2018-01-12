const express     = require("express"),
      router      = express.Router();


router.get("/", (req, res) => {
    res.render("landing");
});


router.get("/api/values", (req, res) => {
	const aSongs = ["Come On Eileen", 
		"Rack City", 
		"Roundabout",
		"More Than A Feeling",
		"Magic Dance"];
    res.send(aSongs[Math.floor(Math.random() * 5)]);
});


router.post("/", (req, res) => {  
    res.status(501).send();
});


router.put("/", (req, res) => {
    res.status(501).send();
});


router.delete("/", (req, res) => {
    res.status(501).send();
});


router.get("*", (req, res) => {
    res.redirect("/");
});


module.exports = router;



