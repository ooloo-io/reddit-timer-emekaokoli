/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 786px;
  margin: 20px auto;
`;
export const Table = styled.table`
  text-align: left;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.dark};
  border-collapse: collapse;
`;
export const Tablehead = styled.th`
  border: 1px solid #dddddd;
  padding: 0 12px 0 11px;
  line-height: 34px;
  font-weight: 500;
`;
export const Tableheader = styled.thead``;
export const Tablebody = styled.tbody``;
export const Tablecell = styled.td`
  height: 34px;
  padding: 0 12px;
  border: 1px solid #dddddd;
  line-height: 33px;
`;
export const Tablerow = styled.tr`
  margin: 5px;
  padding: 2px;
`;
export const TableHeadline = styled.h2``;
export const Link = styled.a`
  text-decoration: none;
`;
const singleLineEllipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Author = styled(Tablecell)`
  width: 129px;
  max-width: 129px;
  ${singleLineEllipsis}
`;
