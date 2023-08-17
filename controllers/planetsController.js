// const { Category } = require("../database/models");
const axios = require("axios");

const controller = {
    getAll: async (req, res) => {
        try {
            const page = req.query.page;
            const result = await axios.get(
                `${process.env.SW_API_URL}/planets/?page=${page}`
            );
            const data = result.data;
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).send({
                message: "Ocurrió un problema intente nuevamente!",
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await axios.get(
                `${process.env.SW_API_URL}/planets/${id}`
            );
            const data = result.data;
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).send({
                message: "Ocurrió un problema intente nuevamente!",
            });
        }
    },
};

module.exports = controller;
