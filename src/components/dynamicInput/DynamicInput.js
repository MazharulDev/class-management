import React, { useState } from 'react';
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'

const DynamicInput = () => {
    const [inputFields, setInputFields] = useState([
        { chapter: '', contentTitle: '', link: '', description: '' },
    ]);
    console.log(inputFields);

    const handleChangeInput = (index, e) => {
        const values = [...inputFields];
        values[index][e.target.name] = e.target.value;
        setInputFields(values);

    }

    const handleAddField = () => {
        setInputFields([...inputFields, { chapter: '', contentTitle: '', link: '', description: '' }])
    }
    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1)
        setInputFields(values)
    }
    return (
        <div>
            <div className='mx-5'>
                {
                    inputFields.map((inputField, index) => (
                        <div key={index} className='flex justify-start items-start gap-3 mb-5'>
                            <div className='bg-slate-100 p-5 mb-2 rounded-lg'>
                                <div className="form-control w-full max-w-lg mt-5">
                                    <label className="label">
                                        <span className="label-text">টাইটেল</span>
                                    </label>
                                    <input type="text" name="chapter" placeholder="টাইটেল লিখুন" className="input input-bordered w-full" onChange={e => handleChangeInput(index, e)} />
                                </div>
                                <div className='flex justify-center items-center gap-3'>
                                    <div className="form-control w-full max-w-xs mt-5">
                                        <label className="label">
                                            <span className="label-text">ভিডিওর নাম লিখুন</span>
                                        </label>
                                        <input type="text" name="contentTitle" placeholder="ভিডিওর নাম লিখুন" className="input input-bordered w-full max-w-xs" onChange={e => handleChangeInput(index, e)} />
                                    </div>
                                    <div className="form-control w-full max-w-xs mt-5">
                                        <label className="label">
                                            <span className="label-text">ভিডিওর লিংক দিন</span>
                                        </label>
                                        <input type="text" name='link' placeholder="ভিডিওর লিংক দিন" className="input input-bordered w-full max-w-xs" onChange={e => handleChangeInput(index, e)} />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-1'>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">ভিডিও ডেসক্রিপশন</span>
                                        </label>
                                        <textarea type="text" name='description' placeholder="ভিডিওর ডেসক্রিপশন" className="textarea textarea-bordered h-24" onChange={e => handleChangeInput(index, e)} />
                                    </div>
                                    <div className='max-w-xs'>
                                        <label className="label">
                                            <span className="label-text">কুইজ ফাইল</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-3'>
                                <BiMinus onClick={() => handleRemoveField(index)} className={`${inputFields.length === 1 ? "hidden text-white hover:text-red-500" : "text-2xl cursor-pointer hover:text-red-500"}}`} />
                                <BiPlus onClick={() => handleAddField()} className='text-2xl cursor-pointer hover:text-green-500' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DynamicInput;