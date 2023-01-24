import styled from 'styled-components';

export const Btn = styled.button`
  background: ${p => p.theme.colors.text};
  color: ${p => p.theme.colors.white};
  letter-spacing: 0px;
  text-transform: none;
  padding: ${p => p.theme.space[4]}px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.blackAccent};
  }
`;

export const Logo = styled.h1`
  display: inline-flex;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.medium};
`;
