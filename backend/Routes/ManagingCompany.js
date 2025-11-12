import express from "express";
import Company from "../Models/Company.js";

const ManagingCompany=express.Router();

ManagingCompany.get("/api/companies", async (req, res) => {
    try {
        const {
            search = "",
            industry = "",
            location = "",
            sort = "name",
            order = "asc",
            page = 1,
            limit = 10,
        } = req.query;

        const query = {};
        if (search) query.name = { $regex: search, $options: "i" };
        if (industry) query.industry = { $regex: industry, $options: "i" };
        if (location) query.location = { $regex: location, $options: "i" };

        const skip = (page - 1) * limit;

        const companies = await Company.find(query)
            .sort({ [sort]: order === "asc" ? 1 : -1 })
            .skip(skip)
            .limit(Number(limit));

        const total = await Company.countDocuments(query);

        res.json({
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
            companies,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

ManagingCompany.get("/api/companies/:id", async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: "Not found" });
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

ManagingCompany.post("/api/companies", async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(400).json({ message: "Invalid data" });
    }
});

ManagingCompany.put("/api/companies/:id", async (req, res) => {
    try {
        const updated = await Company.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: "Error updating" });
    }
});

ManagingCompany.delete("/api/companies/:id", async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting" });
    }
});

export default ManagingCompany;