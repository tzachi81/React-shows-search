import React from'react';
import './tile.css'

interface Props {
    name: string,
    pic: string,
    type: string,
    language: string,
    summary: string,
    url: string
}

export const Tile:React.FC<Props> = ({pic, name, type, language, summary, url}) => {
    var parser = new DOMParser();
    var parsedSummary = parser.parseFromString(summary, 'text/html').children[0].textContent;
    return (
        <a href={url} target="_blank">
            <div className="ui card">
                    <div className="image">
                        <img src={pic} alt={name} />
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="meta">
                            {/* <span className="date">{type}</span>
                            <span className="date">{language}</span> */}
                        </div>
                        <div className="description">{parsedSummary}</div>
                    </div>
                    <div className="extra content">
                    <span className="right floated">
                        <i className="tag icon"></i>
                        {type}
                        </span>
                        <i className="assistive listening systems icon"></i>
                        {language}
                    </div>
            </div>
        </a>
    )
}