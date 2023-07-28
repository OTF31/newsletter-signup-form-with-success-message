import { yupResolver } from '@hookform/resolvers/yup';
import {
  AppShell,
  Box,
  Container,
  Flex,
  Group,
  Image,
  Modal,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ReactComponent as IconList } from '@/assets/images/icon-list.svg';
import { ReactComponent as IconSuccess } from '@/assets/images/icon-success.svg';
import ilustrationDesktop from '@/assets/images/illustration-sign-up-desktop.svg';
import ilustrationMobile from '@/assets/images/illustration-sign-up-mobile.svg';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { FormData } from './Home.types';

const schema = yup.object({
  email: yup
    .string()
    .email('Oops! Please check your email')
    .required('Oops! Please check your email'),
});

const Home = () => {
  const { control, handleSubmit, getValues, reset } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
  });
  const [opened, { open, close }] = useDisclosure(false);
  const desktop = useMediaQuery('(min-width: 1440px)');

  const onSubmit = (data: FormData) => {
    console.log(data);
    open();
  };

  return (
    <AppShell
      padding={0}
      styles={theme => ({
        main: {
          [theme.fn.largerThan('xl')]: { backgroundColor: theme.colors.darkNavy[6] },
        },
      })}
    >
      <Flex mih='100vh' align={{ xl: 'center' }}>
        <Container
          fluid={!desktop}
          px={0}
          p={{ xl: 'xl' }}
          sx={theme => ({
            [theme.fn.largerThan('xl')]: { borderRadius: 36 },
          })}
          bg='white'
          w={{ base: '100%' }}
        >
          <Flex
            direction={{ base: 'column', xl: 'row-reverse' }}
            gap={40}
            pb={{ base: 100, xl: 0 }}
          >
            <Image
              src={desktop ? ilustrationDesktop : ilustrationMobile}
              fit='cover'
              alt='ilustration'
              maw={{ xl: 400 }}
            />
            <Stack spacing={40} px='xl' mt={{ xl: 40 }}>
              <Stack c='darkNavy' spacing='xl'>
                <Text fz={{ base: 40, xl: 56 }} weight={700}>
                  Stay updated!
                </Text>
                <Text>Join 60,000+ product managers receiving monthly updates on:</Text>
                <Stack spacing={10}>
                  <Group noWrap align='flex-start'>
                    <IconList />
                    <Text>Product discovery and building what matters</Text>
                  </Group>
                  <Group noWrap align='flex-start'>
                    <IconList />
                    <Text>Measuring to ensure updates are a success</Text>
                  </Group>
                  <Group noWrap align='flex-start'>
                    <IconList />
                    <Text>And much more!</Text>
                  </Group>
                </Stack>
              </Stack>
              <Stack spacing={0}>
                <Controller
                  control={control}
                  name='email'
                  render={props => {
                    const { field, fieldState } = props;
                    const { value, onChange } = field;
                    const { error } = fieldState;

                    return (
                      <TextInput
                        value={value}
                        onChange={onChange}
                        label='Email address'
                        placeholder='email@company.com'
                        error={error?.message}
                      />
                    );
                  }}
                />
                <Space h={16} />
                <Button onClick={handleSubmit(onSubmit)}>
                  Subscribe to monthly newsletter
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Container>
      </Flex>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        fullScreen={!desktop}
        centered
        transitionProps={{ transition: 'pop', duration: 400 }}
        radius={36}
        size={500}
      >
        <Box mt={{ base: 135, xl: 30 }} c='darkNavy' px={{ xl: 48 }} pb={{ xl: 64 }}>
          <IconSuccess />
          <Text fz={{ base: 40, xl: 56 }} weight={700} mt={40} mb='xl' lh='100%'>
            Thanks for subscribing!
          </Text>
          <Text>
            A confirmation email has been sent to
            <Text component='span' weight={700}>
              {' '}
              {getValues('email')}
            </Text>
            . Please open it and click the button inside to confirm your subscription
            <Button
              fullWidth
              mt={{ base: 250, xl: 40 }}
              onClick={() => {
                close();
                reset();
              }}
            >
              Dismiss message
            </Button>
          </Text>
        </Box>
      </Modal>
    </AppShell>
  );
};

export default Home;
