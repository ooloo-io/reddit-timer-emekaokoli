import React from 'react';
import styled from 'styled-components';

export default function SearchScreen() {
  return (
    <Wrapper>
      <Paragraph>
        This app was created during a course on ooloo.io with the goal to
        implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, ClickUp, Zeplin, GitHub, pull requests
        and code reviews. Click here for more information.
        {' '}
      </Paragraph>
    </Wrapper>
  );
}
const Paragraph = styled.p`
`;
const Wrapper = styled.div`
  // width: 70vmax;
  margin: 0 auto;
  text-align:left;
`;
