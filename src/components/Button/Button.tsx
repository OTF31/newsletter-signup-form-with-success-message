import { Button as MButton } from '@mantine/core';
import { FC } from 'react';

import { ButtonProps as Props } from './Button.types';

const Button: FC<Props> = props => {
  const {
    bg = 'darkNavy',
    size = 'xl',
    radius = 'md',
    styles = theme => ({
      root: {
        '&:hover': {
          background: theme.fn.linearGradient(225, '#FF6A3A', '#FF527B'),
          boxShadow: '0px 16px 32px 0px rgba(255, 97, 85, 0.5)',
        },
      },
    }),
  } = props;
  const { children, ...rest } = props;

  return (
    <MButton {...{ bg, size, radius, styles }} {...rest}>
      {children}
    </MButton>
  );
};

export default Button;
