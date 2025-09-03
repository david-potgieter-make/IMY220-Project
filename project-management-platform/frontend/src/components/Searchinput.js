import React, { useState, useEffect } from 'react';

const SearchInput = ({ onSearch, placeholder = "Search..." }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Call onSearch when debounced term changes
    useEffect(() => {
        onSearch(debouncedTerm);
    }, [debouncedTerm, onSearch]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
        setDebouncedTerm('');
        onSearch('');
    };

    return (
        <div className="search-input-container">
            <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleChange}
                />
                {searchTerm && (
                    <button
                        className="clear-button"
                        onClick={handleClear}
                        type="button"
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchInput;