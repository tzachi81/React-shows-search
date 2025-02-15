import React from 'react';
import { Header } from '../../components/header/Header';
import { List } from '../../components/list/List';
import '../home_route/home.css';

interface Props{
    q: string,
    shows: any,
    handleSearchChange(e: any): void;
}
 
export const Home:React.FC<Props> = ({q, shows, handleSearchChange}) => {
    return(
        // <div className="home">
        <div className="ui center aligned container">
            <Header handleSearchChange={handleSearchChange} q={q} />
            <List shows={shows}/>
        </div>
    );
}
