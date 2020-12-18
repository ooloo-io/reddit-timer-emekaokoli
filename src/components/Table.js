/* eslint-disable comma-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,

  Tablebody,
  Tablecell,
  Tablerow,
  Tabletag
} from './common/Table/table.style';

function Table({ tableData }) {
  console.log(tableData);
  return (
    <Container>
      <Tabletag>
        <Tablebody>
          <Tablerow>
            <Tablecell>{tableData.score}</Tablecell>
          </Tablerow>
          <Tablerow>
            <Tablecell>{tableData.score}</Tablecell>
          </Tablerow>
        </Tablebody>
      </Tabletag>
    </Container>
  );
}

Table.prototype = {
  tableData: PropTypes.array.isRequired,
};
Table.defaultProps = {
  tableData: PropTypes.arrayOf([]).isRequired,
};

export default Table;
