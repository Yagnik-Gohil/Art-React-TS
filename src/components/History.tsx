import React from 'react';
import { Table } from 'react-bootstrap';

const History = () => {
  return (
    <div className="profile-page rounded py-2">
      <Table className='history-table' bordered>
        <tr>
            <th>Date</th>
            <th>Order Id</th>
            <th>Items</th>
            <th>Amount </th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>2023/10/09</td>
            <td>poiuy123#asdf</td>
            <td>This Is Title</td>
            <td>$2000</td>
            <td>Success</td>
            <td></td>
        </tr>
        <tr>
            <td>2023/10/09</td>
            <td>poiuy123#asdf</td>
            <td>This Is Title</td>
            <td>$2000</td>
            <td>Success</td>
            <td></td>
        </tr>
        <tr>
            <td>2023/10/09</td>
            <td>poiuy123#asdf</td>
            <td>This Is Title</td>
            <td>$2000</td>
            <td>Success</td>
            <td></td>
        </tr>
      </Table>
    </div>
  );
};

export default History;
