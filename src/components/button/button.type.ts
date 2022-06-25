import { MouseEvent, ReactNode } from 'react';

export type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};
