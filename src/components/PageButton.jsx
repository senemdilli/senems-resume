import React from 'react';
import '../css/Button.css';

const PageButton = ({ page, setPage }) => {
    return (
        <>
            <button
                type="button"
                className={`button ${page === 1 ? 'active' : ''}`}
                onClick={() => setPage(1)}
            >
                Education
            </button>
            <button
                type="button"
                className={`button ${page === 2 ? 'active' : ''}`}
                onClick={() => setPage(2)}
            >
                Skills
            </button>
            <button
                type="button"
                className={`button ${page === 3 ? 'active' : ''}`}
                onClick={() => setPage(3)}
            >
                Work Experience
            </button>
        </>
    );
}

export default PageButton;
