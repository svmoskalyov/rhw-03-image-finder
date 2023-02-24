import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  gap: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  min-width: 180px;
  min-height: 40px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: #3f51b5;
  color: ${p => p.theme.colors.white};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
