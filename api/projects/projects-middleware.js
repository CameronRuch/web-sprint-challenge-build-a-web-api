//add middlewares here related to projects

const Project = require('./projects-model')

async function validateProjectId(req, res, next) {
    try {
        const id = await Project.get(req.params.id)
        if (id) {
            req.project = id
            next()
        } else {
            next({ status: 404, message: "No project found" })
        }
    } catch (err) {
        next
    }
}

function validateProject(req, res, next) {
    try {
        const { name, description } = req.body
        if (!name || !description) {
            res.status(400).json({
                message: "missing required info"
            })
        } else {
            next()
        }
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = {
    validateProjectId,
    validateProject,
}