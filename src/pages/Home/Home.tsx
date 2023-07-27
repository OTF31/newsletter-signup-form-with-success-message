import { AppShell, Box, Group, Image, Modal, Space, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ReactComponent as IconList } from '@/assets/images/icon-list.svg';
import { ReactComponent as IconSuccess } from '@/assets/images/icon-success.svg';
import ilustrationMobile from '@/assets/images/illustration-sign-up-mobile.svg';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShell padding={0}>
      <Stack spacing={40} mb={40}>
        <Image src={ilustrationMobile} alt='ilustration' />
        <Stack spacing={40} px='xl'>
          <Stack c='darkNavy' spacing='xl'>
            <Text size={40} weight={700}>
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
            <TextInput label='Email address' placeholder='email@company.com' />
            <Space h={16} />
            <Button onClick={open}>Subscribe to monthly newsletter</Button>
          </Stack>
        </Stack>
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        fullScreen
        transitionProps={{ transition: 'pop', duration: 400 }}
      >
        <Box mt={135} c='darkNavy'>
          <IconSuccess />
          <Text size={40} weight={700} mt={40} mb='xl' lh='100%'>
            Thanks for subscribing!
          </Text>
          <Text>
            A confirmation email has been sent to
            <Text component='span' weight={700}>
              {' '}
              ash@loremcompany.com
            </Text>
            . Please open it and click the button inside to confirm your subscription
          </Text>
        </Box>
        <Button fullWidth mt={250} onClick={close}>
          Dismiss message
        </Button>
      </Modal>
    </AppShell>
  );
};

export default Home;
