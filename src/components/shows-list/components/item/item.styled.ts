import styled from 'styled-components';
import { CoverProps } from 'components/shows-list/components/item/item.type';

export const Cover = styled.div<CoverProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin-right: 20px;
`;
