import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'

const jobs = [
    { id: 1, title: 'Junior Doctor – General Medicine', department: 'Medical', type: 'Full-time', experience: '0–2 yrs exp', desc: 'Assist senior physicians in patient diagnosis, treatment planning, and follow-up care across the general medicine department.' },
    { id: 2, title: 'Senior Dermatologist', department: 'Medical', type: 'Full-time', experience: '5+ yrs exp', desc: 'Lead the dermatology unit, manage complex skin conditions, mentor junior staff, and conduct patient consultations.' },
    { id: 3, title: 'Pediatric Nurse', department: 'Nursing', type: 'Full-time', experience: '1–3 yrs exp', desc: 'Provide compassionate care to young patients in the pediatrics ward, support treatment procedures, and communicate with families.' },
    { id: 4, title: 'Neurologist', department: 'Medical', type: 'Full-time', experience: '4+ yrs exp', desc: 'Diagnose and manage neurological disorders, collaborate with multidisciplinary teams, and contribute to patient education programs.' },
    { id: 5, title: 'Hospital Administrator', department: 'Administration', type: 'Full-time', experience: '2+ yrs exp', desc: 'Oversee daily hospital operations, manage staff scheduling, coordinate with departments, and ensure regulatory compliance.' },
    { id: 6, title: 'Healthcare IT Specialist', department: 'Technology', type: 'Full-time', experience: '2+ yrs exp', desc: 'Maintain and improve hospital management systems, support clinical staff with tech issues, and manage patient data security.' },
]

const deptColors = {
    Medical: 'bg-blue-100 text-blue-700',
    Nursing: 'bg-yellow-100 text-yellow-700',
    Administration: 'bg-green-100 text-green-700',
    Technology: 'bg-purple-100 text-purple-700',
}

const Careers = () => {

    const { backendUrl } = useContext(AppContext)
    const navigate = useNavigate()

    const [selectedJob, setSelectedJob] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [fileName, setFileName] = useState('')
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        position: '',
        cover: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle)
        setForm(prev => ({ ...prev, position: jobTitle }))
        setTimeout(() => {
            document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.position) {
            toast.error('Please fill in your name, email, and the position you are applying for.')
            return
        }
        if (!form.phone || !form.qualification || !form.experience) {
            toast.error('Please fill all required fields.')
            return
        }
        try {
            setLoading(true)
            const { data } = await axios.post(backendUrl + '/api/admin/apply-job', {
                ...form,
                date: Date.now()
            })
            if (data.success) {
                setSubmitted(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleReset = () => {
        setForm({ name: '', email: '', phone: '', qualification: '', experience: '', position: '', cover: '' })
        setFileName('')
        setSelectedJob('')
        setSubmitted(false)
    }

    return (
        <div className='mx-auto max-w-5xl px-4 py-10'>

            {/* ── Hero ── */}
            <div className='text-center mb-10'>
                <p className='text-sm text-primary font-medium tracking-wide mb-2'>CAREERS AT MEDIVUE</p>
                <h1 className='text-4xl font-medium text-gray-800 mb-3'>Join our team</h1>
                <p className='text-gray-500 text-sm max-w-md mx-auto'>
                    Be part of a team that's making quality healthcare accessible to everyone across Andhra Pradesh.
                </p>
                <div className='flex flex-wrap justify-center gap-3 mt-5'>
                    <span className='text-xs bg-gray-100 text-gray-600 px-4 py-2 rounded-full'>200+ staff members</span>
                    <span className='text-xs bg-gray-100 text-gray-600 px-4 py-2 rounded-full'>Anantapur, Andhra Pradesh</span>
                    <span className='text-xs bg-gray-100 text-gray-600 px-4 py-2 rounded-full'>Health insurance included</span>
                </div>
            </div>

            {/* ── Job Listings ── */}
            <p className='text-lg font-medium text-gray-700 mb-5'>Open positions</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14'>
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className={`border rounded-xl p-5 transition-all duration-200 hover:shadow-md ${selectedJob === job.title ? 'border-primary border-2' : 'border-gray-200'}`}
                    >
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${deptColors[job.department]}`}>
                            {job.department}
                        </span>
                        <p className='text-gray-800 font-medium mt-3 mb-1'>{job.title}</p>
                        <div className='flex gap-3 text-xs text-gray-500 mb-3'>
                            <span>{job.type}</span>
                            <span>{job.experience}</span>
                        </div>
                        <p className='text-sm text-gray-500 leading-relaxed mb-4'>{job.desc}</p>
                        <button
                            onClick={() => handleApplyClick(job.title)}
                            className='text-sm px-4 py-1.5 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-200'
                        >
                            Apply now
                        </button>
                    </div>
                ))}
            </div>

            {/* ── Application Form — only visible after clicking Apply now ── */}
            {(selectedJob || submitted) && (
                <>
                    <hr className='border-gray-200 mb-10' />

                    <div id='apply-form'>
                        {submitted ? (
                            /* ── Success State ── */
                            <div className='border border-green-200 bg-green-50 rounded-xl p-10 text-center'>
                                <div className='w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <svg className='w-7 h-7 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                                <h3 className='text-xl font-medium text-green-700 mb-2'>Application submitted!</h3>
                                <p className='text-sm text-gray-500 max-w-sm mx-auto'>
                                    Thank you for applying to Medivue. Our HR team will review your application and get back to you within 5–7 business days.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className='mt-6 px-6 py-2 bg-primary text-white text-sm rounded-full hover:bg-blue-600 transition-all'
                                >
                                    Apply for another position
                                </button>
                            </div>
                        ) : (
                            /* ── Form State ── */
                            <>
                                <p className='text-lg font-medium text-gray-700 mb-5'>
                                    Applying for: <span className='text-primary'>{selectedJob}</span>
                                </p>
                                <div className='border border-gray-200 rounded-xl p-7'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

                                            {/* Name */}
                                            <div className='flex flex-col gap-1'>
                                                <label className='text-sm text-gray-600'>Full name <span className='text-red-400'>*</span></label>
                                                <input
                                                    type='text' name='name' value={form.name} onChange={handleChange}
                                                    placeholder='e.g. Rajesh Kumar'
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary'
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className='flex flex-col gap-1'>
                                                <label className='text-sm text-gray-600'>Email address <span className='text-red-400'>*</span></label>
                                                <input
                                                    type='email' name='email' value={form.email} onChange={handleChange}
                                                    placeholder='you@example.com'
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary'
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div className='flex flex-col gap-1'>
                                                <label className='text-sm text-gray-600'>Phone number <span className='text-red-400'>*</span></label>
                                                <input
                                                    type='tel' name='phone' value={form.phone} onChange={handleChange}
                                                    placeholder='+91 98765 43210'
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary'
                                                />
                                            </div>

                                            {/* Qualification */}
                                            <div className='flex flex-col gap-1'>
                                                <label className='text-sm text-gray-600'>Highest qualification <span className='text-red-400'>*</span></label>
                                                <select
                                                    name='qualification' value={form.qualification} onChange={handleChange}
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary text-gray-700'
                                                >
                                                    <option value=''>Select qualification</option>
                                                    <option>MBBS</option>
                                                    <option>MD / MS</option>
                                                    <option>BDS</option>
                                                    <option>B.Sc Nursing</option>
                                                    <option>M.Sc Nursing</option>
                                                    <option>BPT / MPT</option>
                                                    <option>MBA (Healthcare)</option>
                                                    <option>B.Tech / MCA</option>
                                                    <option>Diploma in Nursing</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>

                                            {/* Experience */}
                                            <div className='flex flex-col gap-1'>
                                                <label className='text-sm text-gray-600'>Years of experience <span className='text-red-400'>*</span></label>
                                                <select
                                                    name='experience' value={form.experience} onChange={handleChange}
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary text-gray-700'
                                                >
                                                    <option value=''>Select experience</option>
                                                    <option>Fresher (0 years)</option>
                                                    <option>Less than 1 year</option>
                                                    <option>1 – 2 years</option>
                                                    <option>3 – 5 years</option>
                                                    <option>5 – 10 years</option>
                                                    <option>10+ years</option>
                                                </select>
                                            </div>

                                            {/* Position */}
                                            <div className='flex flex-col gap-1'>
                                                <label className='text-sm text-gray-600'>Applying for <span className='text-red-400'>*</span></label>
                                                <select
                                                    name='position' value={form.position} onChange={handleChange}
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary text-gray-700'
                                                >
                                                    <option value=''>Select position</option>
                                                    {jobs.map(j => <option key={j.id}>{j.title}</option>)}
                                                </select>
                                            </div>

                                            {/* Cover Letter */}
                                            <div className='flex flex-col gap-1 sm:col-span-2'>
                                                <label className='text-sm text-gray-600'>Cover letter</label>
                                                <textarea
                                                    name='cover' value={form.cover} onChange={handleChange}
                                                    rows={4}
                                                    placeholder='Tell us about yourself and why you would be a great fit...'
                                                    className='border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary resize-none'
                                                />
                                            </div>

                                            {/* Resume Upload */}
                                            <div className='flex flex-col gap-1 sm:col-span-2'>
                                                <label className='text-sm text-gray-600'>Resume / CV</label>
                                                <label htmlFor='resumeFile' className='border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-primary transition-all'>
                                                    <div className='flex flex-col items-center gap-2'>
                                                        <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
                                                        </svg>
                                                        <p className='text-sm text-gray-500'>Click to upload your resume</p>
                                                        <p className='text-xs text-gray-400'>PDF, DOC, DOCX — max 5 MB</p>
                                                        {fileName && <p className='text-xs text-green-600 font-medium'>✓ {fileName}</p>}
                                                    </div>
                                                    <input type='file' id='resumeFile' accept='.pdf,.doc,.docx' className='hidden' onChange={handleFileChange} />
                                                </label>
                                            </div>

                                        </div>

                                        {/* Buttons */}
                                        <div className='flex justify-end gap-3 mt-6'>
                                            <button
                                                type='button' onClick={handleReset}
                                                className='px-5 py-2 text-sm border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-all'
                                            >
                                                Clear
                                            </button>
                                            <button
                                                type='submit' disabled={loading}
                                                className='px-6 py-2 text-sm bg-primary text-white rounded-full hover:bg-blue-600 transition-all disabled:opacity-60'
                                            >
                                                {loading ? 'Submitting...' : 'Submit application'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}

        </div>
    )
}

export default Careers
