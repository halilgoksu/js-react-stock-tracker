

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Test(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>1</Th>
          <Th>Date</Th>
          <Th>Location</Th>
          <Th>Location</Th>
          <Th>Location</Th>
          <Th>Location</Th>
          <Th>Location</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tablescon</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
          <Td>9 April 2019</Td>
          <Td>9 April 2019</Td>
          <Td>9 April 2019</Td>
          <Td>9 April 2019</Td>
          <Td>9 April 2019</Td>
      
        </Tr>
      </Tbody>
    </Table>
  );
}