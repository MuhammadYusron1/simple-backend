const asyncHandler = require('express-async-handler');

// Importing files
const Cat = require('../models/catModel');

//* @params  Get cats
//* @route   GET /
//* @access  Private
const getCat = asyncHandler(async (req, res) => {
	const cats = await Cat.find({
		name: req.body.name,
	});

	const cat = await Cat.exists({
		name: req.body.name,
	});

	if (!cat) {
    res.status(404)
    throw new Error(`No cat named ${req.body.name}`)
	}

	res.status(200).json(cats);
	console.log(cat);
});

//* @desc    Set or create cat
//* @route   POST /
//* @access  Private
const setCat = asyncHandler(async (req, res) => {
	if ((!req.body.name)) {
		res.status(400)
		throw new Error('Please add a name field')
	}

	const cat = await Cat.create({
		name: req.body.name,
		age: req.body.age,
		hasOwner: req.body.hasOwner,
	});

	res.status(201).json(cat);
});

//* @desc    Update cat
//* @route   PUT /:id
//* @access  Private
const updateCat = asyncHandler(async (req, res) => {
	const cat = await Cat.exists({
		name: req.body.name,
	});

	if (!cat) {
		res.status(404)
		throw new Error(`No cat named ${req.body.name}`)
	}

	const updatedCat = await Cat.updateOne({name: req.body.name,}, {
		name: req.body.name,
		age: req.body.age,
		hasOwner: req.body.hasOwner,
	});

	res.status(200).json(updatedCat);
});

//* @desc    Delete cat
//* @route   DELETE /:id
//* @access  Private
const deleteCat = asyncHandler(async (req, res) => {
	const cat = await Cat.exists({
		name: req.body.name,
	});

	if (!cat) {
		res.status(404)
		throw new Error(`No cat named ${req.body.name}`)
	}

	const deletedCat = await Cat.deleteOne({name: req.body.name});

	res.status(204);
	res.send(`Got a DELETE request at ${req.body.name}`)
});

module.exports = {
    getCat, setCat, updateCat, deleteCat
};