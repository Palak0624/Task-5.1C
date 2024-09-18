import React, { useState } from 'react';
import './Information.css';

const Info = () => {
    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [articleText, setArticleText] = useState('');
    const [tags, setTags] = useState('');

    const handlePostClick = () => {
        // Reset all input fields
        setTitle('');
        setAbstract('');
        setArticleText('');
        setTags('');
    };

    return (
        <div className='Section'>
            <h2>What do you want to ask or share</h2>

            <p>
                This section is designed based on the type of the post. It could be developed by conditional rendering.
                <a className='color'> For posting a question, the following section would be displayed.</a>
            </p>

            <label className='A1'>Title</label>
            <input 
                className='AF1' 
                type="text" 
                placeholder="Start your question with how, what, why, etc." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />

            <h3 className='abstractclass'>Abstract</h3>
            <textarea 
                placeholder='Enter a 1-paragraph Abstract' 
                value={abstract} 
                onChange={(e) => setAbstract(e.target.value)} 
            />

            <h3 className='abstractclass'>Article Text:</h3>
            <textarea 
                placeholder='Describe the problem that you are facing' 
                value={articleText} 
                onChange={(e) => setArticleText(e.target.value)} 
            />

            <label>Tags</label>
            <input 
                className='AF2' 
                type='text' 
                placeholder='please add up to three tags to describe what your article is about e.g., Java' 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
            />

            <button className="post" onClick={handlePostClick}>Post</button>
        </div>
    );
};

export default Info;
