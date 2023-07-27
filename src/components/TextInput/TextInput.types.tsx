import {
  TextInputProps as MTextInputProps,
  TextInput as MTextInput,
} from '@mantine/core';

export type TextInputProps = MTextInputProps & typeof MTextInput.defaultProps;
