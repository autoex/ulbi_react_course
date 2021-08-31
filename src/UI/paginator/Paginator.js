import React from 'react';
import {getPagesArray} from "../../utils/pages";
import classes from './Paginator.module.css'

const Paginator = ({totalPages,  currentPage, setCurrentPage}) => {

const pages = getPagesArray(totalPages)
    return (
        <div className={classes.paginator}>

            {pages.map(p=> <span onClick={()=>setCurrentPage(p)} key={p} className={currentPage===p ? classes.current__page : ''}>{p}</span>)}
        </div>
    );
};

export default Paginator;