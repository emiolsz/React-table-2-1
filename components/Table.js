import React from 'react';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import TableHead from './TableHead';

function Table(props) {
    return (
        <table>
            <TableHead />
            <TableBody />
            <TableFoot />
        </table>
    );
}

export default Table;