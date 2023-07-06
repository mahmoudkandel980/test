import React, { useState } from "react";

const MessageForSupplier = () => {
    // this state handle show subject and body when submit the form
    const [showSubjectBody, setShowSubjectBody] = useState(false);
    const [formData, setFormData] = useState({
        subject: "",
        body: "",
    });
    const { body, subject } = formData;

    // when make any change in subject or body fileds that will affect on form data state and hide the subject and body from the end of the page
    const onChangeHandler = (e) => {
        setShowSubjectBody(false);
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    // when submit form make sure console.log the fom data and display the subject and body on the end of the page
    const submitMessageHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setShowSubjectBody(true);
    };

    return (
        <div className='mt-10 border-t-[1px] border-black/40 pt-10 pb-20'>
            <h2 className='font-semibold text-lg border-b-[1px] border-black/50 w-fit mb-5'>
                message supplier
            </h2>
            <form
                onSubmit={submitMessageHandler}
                className='flex flex-col gap-10'
            >
                <div className='flex flex-col w-96 gap-2'>
                    <label htmlFor='subject'>Message Subject</label>
                    <input
                        className='border-[1px] border-black/50 outline-none rounded-md p-2 py-1'
                        placeholder='Enter Message Subject'
                        type='text'
                        id='subject'
                        value={subject}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='flex flex-col w-96 gap-2'>
                    <label htmlFor='body'>Message Body</label>
                    <textarea
                        className='border-[1px] border-black/50 outline-none rounded-md p-2 py-1'
                        placeholder='Enter Message body'
                        id='body'
                        value={body}
                        onChange={onChangeHandler}
                    ></textarea>
                </div>
                <div className='w-96 flex justify-center'>
                    <button className='p-10 py-2 rounded-lg border-[1px] border-black/50 w-fit duration-300 hover:bg-black/80 hover:text-white'>
                        Send
                    </button>
                </div>
            </form>
            {showSubjectBody && (
                <ul className='mt-5'>
                    <li>subject: {subject}</li>
                    <li>body: {body}</li>
                </ul>
            )}
        </div>
    );
};

export default MessageForSupplier;
