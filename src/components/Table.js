/* eslint-disable comma-dangle */
import React from 'react';
import {
  Author,
  Container,
  Link,
  Table,
  Tablebody,
  Tablecell,
  Tablehead,
  Tableheader,
  TableHeadline,
  Tablerow
} from './common/Table/table.style';

function AuthorComponent({ author }) {
  if (author === '[deleted]') {
    return author;
  }

  return (
    <Link
      href={`https://reddit.com/u/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </Link>
  );
}

function DisplayTime({ createdAt }) {
  return createdAt
    .toLocaleString('en-US', {
      hour: 'numeric',
      minutes: 'numeric',
      hour12: true,
    })
    .toLowerCase();
}

function TableComponent({ postTable, selectedPosts }) {
  const {
    createdAt, url, title, score, numComments, author
  } = postTable;
  console.log('=================selectedPosts===================');
  console.log(selectedPosts);
  console.log('====================================');
  return (
    <Container>
      <TableHeadline>Posts</TableHeadline>
      <Table>
        <Tableheader>
          <Tablerow>
            <Tablehead>Title</Tablehead>
            <Tablehead>Time Posted</Tablehead>
            <Tablehead>Score</Tablehead>
            <Tablehead>Comments</Tablehead>
            <Tablehead>Author</Tablehead>
          </Tablerow>
        </Tableheader>
        <Tablebody>
          <Tablerow>
            <Tablecell>{url}</Tablecell>
            <Tablecell>{title}</Tablecell>
            <Tablecell>{DisplayTime(postTable)}</Tablecell>
            <Tablecell>{score}</Tablecell>
            <Tablecell>{numComments}</Tablecell>
            <Author>
              <AuthorComponent author={author} />
            </Author>
          </Tablerow>
        </Tablebody>
      </Table>
    </Container>
  );
}

// TableComponent.propTypes = {
//   postTable: PropTypes.objectOf(Object),
// };
// TableComponent.defaultProps = {
//   postTable: PropTypes.objectOf(Object),
// };
// AuthorComponent.propTypes = {
//   author: string.isRequired,
// };
export default TableComponent;
