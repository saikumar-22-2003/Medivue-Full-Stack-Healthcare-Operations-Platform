import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    position: { type: String, required: true },
    cover: { type: String, default: '' },
    status: { type: String, default: 'pending' }, // pending | selected | rejected
    date: { type: Number, required: true }
})

const jobApplicationModel = mongoose.models.jobApplication || mongoose.model("jobApplication", jobApplicationSchema)
export default jobApplicationModel
