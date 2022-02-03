import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 90%;
  max-width: 1280px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
