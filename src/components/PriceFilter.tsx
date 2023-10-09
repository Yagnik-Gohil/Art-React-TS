import React from 'react';

const filter = [
    '10000',
    '10000-20000',
    '20000-30000',
    '30000-40000',
    '40000-50000',
    '50000'
];

function PriceFilter() {
    let count = 0;
    return (
        <ul className='content mt-20'>
            {filter.map((value: string) => {
                let label = (!count && count !== (filter.length - 1)) ? 'Under ' + value : value;
                if (count === (filter.length - 1)) {
                    label = value + ' - Above';
                }
                count++;
                return (<li className='art-price-list-item'>
                    <a href="#abcd"><span className="fw-500"> { label }</span></a>
                </li>);
            })}
        </ul>
    );
}

export default PriceFilter;