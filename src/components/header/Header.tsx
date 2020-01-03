import React, { ReactElement, ChangeEvent } from 'react';
import './header.css'

interface Props {
    q: string,
    handleSearchChange(q:ChangeEvent<HTMLInputElement>):void;
}

export const Header: React.FC<Props> = ({q, handleSearchChange}) => {
    return (
        <div className="header">
            <div className="search ui input">
                <input
                    type="search"
                    placeholder="search..."
                    value={q}
                    onChange={handleSearchChange}
                    />
            </div>
        </div>
    );
};