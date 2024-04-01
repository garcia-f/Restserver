import { response, request } from 'express';

export const getUsers = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: 'get API',
        q,
        nombre,
        apikey
    })
}

export const putUser = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    })
}

export const postUser = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

export const deleteUser = (req, res) => {
    res.json({
        msg: 'delete API'
    })
}