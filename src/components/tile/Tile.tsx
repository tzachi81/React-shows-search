import React from'react';
import './tile.css'

interface Props {
    name: string,
    pic: string,
}

export const Tile:React.FC<Props> = ({pic, name}) => {
    return (
        <div>
            <div>
                <img src={pic} alt={name} />
            </div>
            <div>{name}</div>
        </div>
    )
}