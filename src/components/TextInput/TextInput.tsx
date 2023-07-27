import { Group, TextInput as MTextInput, Text } from '@mantine/core';
import { FC } from 'react';

import { TextInputProps as Props } from './TextInput.types';

const TextInput: FC<Props> = props => {
  const {
    size = 'xl',
    radius = 'md',
    styles = theme => {
      const { colors, fn } = theme;
      const { darkNavy, vermellion, sambucus } = colors;
      const { rgba } = fn;

      return {
        input: {
          backgroundColor: error ? rgba(vermellion[6], 0.15) : 'transparent',
          color: error ? vermellion[6] : darkNavy[6],
          borderColor: error ? vermellion[6] : rgba(sambucus[6], 0.25),
          '::placeholder': { color: rgba(error ? vermellion[6] : darkNavy[6], 0.5) },
          '&:focus-within': { borderColor: error ? vermellion[6] : darkNavy[6] },
        },
      };
    },
  } = props;
  const { label, error, ...rest } = props;

  return (
    <>
      <Group position='apart' fw={700} fz='xs' mb={8}>
        <Text color='darkNavy'>{label}</Text>
        <Text color='vermellion'>{error}</Text>
      </Group>
      <MTextInput {...{ size, radius, styles }} {...rest} />
    </>
  );
};

export default TextInput;
