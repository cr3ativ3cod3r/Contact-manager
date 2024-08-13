const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


const getContact = asyncHandler(async (req, res) => {
    console.log("test2");
    const contacts = await Contact.find({user: req.user});
    res.json(contacts);
});

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    } else {
        await Contact.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: `deleted ${req.params.id}` });
    }
});

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    } else {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedContact);
    }
});

const getidContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    } else {
        res.status(200).json(contact);
    }
});

const createContact = asyncHandler(async (req, res) => {
    console.log("hi");
    const { name, emailid, number } = req.body;
    if (!name || !emailid || !number) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        user: req.user,
        name,
        email: emailid,
        phoneno: number,
    });
    console.log(contact);
    res.status(200).json(contact);
});

module.exports = { getContact, deleteContact, updateContact, getidContact, createContact };
