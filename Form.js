import React, { useState } from 'react';
import './Form.css';

const FormPart = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handlePostClick = () => {
        // Reset all input fields
        setTitle('');
        setDescription('');
        setTags('');
    };

    return (
        <div className="Form-part">
            <h2>What do you want to ask or share</h2>

            <p>
                This section is designed based on the type of the post. It could be developed by conditional rendering.
                <a className='color'> For posting a question, the following section would be displayed.</a>
            </p>

            <label className='Q1'>Title</label>
            <input 
                className='Int1' 
                type="text" 
                placeholder="Start your question with how, what, why, etc." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />

            <label className='Q1'>Describe your problem:</label>
            <textarea 
                className='Int2' 
                placeholder="Describe the problem that occurred." 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />

            <label className='Q1'>Tags</label>
            <input 
                className='Int3' 
                type='text' 
                placeholder="please add up to 3 tags to describe what your question is about e.g., Java" 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
            />

            <button className="post" onClick={handlePostClick}>Post</button>
        </div>
    );
};

export default FormPart;
