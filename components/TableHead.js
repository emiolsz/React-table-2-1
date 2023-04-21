import React from 'react';

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>Nr</th>
                <th>Tytuł Kdramy</th>
                <th>Dostępny w internecie z polskimi napisami</th>
                <th>Link do opisu</th>
            </tr>
        </thead>
    );
}

export default TableHead;