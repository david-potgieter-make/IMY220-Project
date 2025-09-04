import React, { useState, useEffect } from 'react';

const SearchInput = ({ onSearch, placeholder = "Search...", debounceMs = 300 }) => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchValue);
        }, debounceMs);

        return () => clearTimeout(timer);
    }, [searchValue, onSearch, debounceMs]);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        onSearch('');
    };

    return (
        <div className="search-input-container">
            <div className="search-input-wrapper">
                <div className="search-icon">
                    🔍
                </div>
                <input
                    type="text"
                    className="search-input"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
                {searchValue && (
                    <button
                        className="clear-search-btn"
                        onClick={handleClear}
                        type="button"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchInput;