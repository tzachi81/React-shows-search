import React from 'react';
import {Tile} from '../tile/Tile';
import './list.css'

interface Props {
    shows: any;
};

export const List: React.FC<Props> = ({ shows }) => {
    return (
        <div className="list">
            {shows.map( (showItem: any) => (
                <div key={showItem.show.id}>
                    <Tile 
                        name={showItem.show.name} 
                        pic={showItem.show.image? showItem.show.image.medium: ''}/>
                </div>
            ))}
        </div>
    );
};