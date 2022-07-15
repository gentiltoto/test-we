import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { StateCharacter } from '../types';

interface CharactersTableProps {
  characters: StateCharacter[];
}

const CharactersTable: React.FC<CharactersTableProps> = ({ characters }) => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Born</Th>
            <Th>Died</Th>
          </Tr>
        </Thead>
        <Tbody>
          {characters.map((character) => {
            return (
              <Tr>
                <Td>{character.name}</Td>
                <Td>{character.gender}</Td>
                <Td>{character.born}</Td>
                <Td>{character.died}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default CharactersTable;
