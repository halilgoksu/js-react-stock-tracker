

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Test(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
          <Th>NAme</Th>
          <Th>City</Th>
          <Th>Scholl</Th>
          <Th>Bor</Th>
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