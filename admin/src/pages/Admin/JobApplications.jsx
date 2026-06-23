import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'

const JobApplications = () => {

    const { aToken, jobApplications, getAllJobApplications, updateJobApplication } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getAllJobApplications()
        }
    }, [aToken])

    const statusBadge = (status) => {
        if (status === 'selected') return <p className='text-green-500 text-xs font-medium'>Candidate Selected</p>
        if (status === 'rejected') return <p className='text-red-400 text-xs font-medium'>Candidate Rejected</p>
        return null
    }

    return (
        <div className='w-full max-w-6xl m-5'>
            <p className='mb-3 text-lg font-medium'>Job Applications</p>
            <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>

                {/* Header */}
                <div className='hidden sm:grid grid-cols-[0.5fr_2fr_2fr_1.5fr_1.5fr_1.5fr_1fr] py-3 px-6 border-b'>
                    <p>#</p>
                    <p>Candidate</p>
                    <p>Contact</p>
                    <p>Position</p>
                    <p>Qualification</p>
                    <p>Experience</p>
                    <p>Action</p>
                </div>

                {/* Rows */}
                {jobApplications && jobApplications.length > 0
                    ? jobApplications.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_2fr_2fr_1.5fr_1.5fr_1.5fr_1fr] items-center text-gray-500 py-4 px-6 border-b hover:bg-gray-50'
                        >
                            <p className='max-sm:hidden'>{index + 1}</p>

                            <div>
                                <p className='text-gray-800 font-medium'>{item.name}</p>
                                <p className='text-xs text-gray-400 mt-0.5'>
                                    {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </p>
                            </div>

                            <div>
                                <p className='text-xs'>{item.email}</p>
                                <p className='text-xs mt-0.5'>{item.phone}</p>
                            </div>

                            <p className='text-xs'>{item.position}</p>
                            <p className='text-xs'>{item.qualification}</p>
                            <p className='text-xs'>{item.experience}</p>

                            <div className='flex items-center gap-2'>
                                {item.status === 'pending'
                                    ? <>
                                        <img
                                            onClick={() => updateJobApplication(item._id, 'selected')}
                                            className='w-7 cursor-pointer'
                                            src={assets.tick_icon}
                                            alt="select"
                                            title='Select Candidate'
                                        />
                                        <img
                                            onClick={() => updateJobApplication(item._id, 'rejected')}
                                            className='w-7 cursor-pointer'
                                            src={assets.cross_icon}
                                            alt="reject"
                                            title='Reject Candidate'
                                        />
                                      </>
                                    : statusBadge(item.status)
                                }
                            </div>
                        </div>
                    ))
                    : <p className='text-center text-gray-400 py-10'>No job applications yet.</p>
                }
            </div>
        </div>
    )
}

export default JobApplications
