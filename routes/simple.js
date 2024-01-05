const express = require('express');
const router = express.Router();

// Importing files
const {
	getCat, setCat, updateCat, deleteCat
} = require('../controllers/catController');

// router.route("/").get((req, res) => {
//     res.status(200);
//     res.send('Hello World!');
// });

router.route("/").get(getCat);

// router.route("/").post((req, res) => {
//     res.status(201);
//     res.send('Got a POST request');
// });

router.route("/").post(setCat);

// router.route("/:id").put((req, res) => {
//     res.status(200);
//     res.send(`Got a PUT request at ${req.params.id}`);
// });

router.route("/:id").put(updateCat);

// router.route("/:id").delete((req, res) => {
//     res.status(204)
//     res.send(`Got a DELETE request at ${req.params.id}`);
// });

router.route("/:id").delete(deleteCat);

module.exports = router;