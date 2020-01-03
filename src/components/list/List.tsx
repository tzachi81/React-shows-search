import React from 'react';
import {Tile} from '../tile/Tile';
import './list.css';
import placeHolderTile from '../../assets/tile_placeholder.jpg'

interface Props {
    shows: any;
};

export const List: React.FC<Props> = ({ shows }) => {
    return (
        <div className="list ui link cards">
            {shows.map( (showItem: any) => (
                <Tile 
                    key={showItem.show.id}
                    name={showItem.show.name} 
                    pic={showItem.show.image? showItem.show.image.medium: placeHolderTile}
                    type={showItem.show.type}
                    language={showItem.show.language}
                    summary={showItem.show.summary}
                    url={showItem.show.url}
                    />
            ))}
        </div>
    );
};