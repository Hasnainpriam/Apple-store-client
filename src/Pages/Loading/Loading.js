import React from 'react';

const Loading = () => {
    return (
        <div className='mx-auto flex justify-center border-0 rounded-xl px-20 py-10'>
            <button type="button" className="bg-black text-white mx-auto mt-30 mb-30 rounded-xl px-20 py-5" disabled>
                Processing...
            </button>
        </div>
    );
};

export default Loading;