const Box = require('../models/Box')

class BoxController {
    async store(req, res) {
        const box = await Box.create({ title: req.body.title })
        return res.json(box)
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        })
        res.json(box)
    }

    async showAll(req, res) {
        const boxes = await Box.find()
        res.json(boxes)
    }
}

module.exports = new BoxController()