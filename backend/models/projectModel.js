const mongoose = require('mongoose');
const projectSchema = mongoose.Schema(
    {
        projectName: {
            type: String,
            required: [true, "Please enter a project name"]
        },
        members: {
            type: String,
            required: [true, "Please enter members"]
        },
        milestoneName: {
            type: String,
            required: [true, "Please enter milestone name"]
        },
        milestoneDescription: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;