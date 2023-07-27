import { AppShell, Group, Image, Space, Stack, Text } from '@mantine/core';

import iconList from '@/assets/images/icon-list.svg';
import ilustrationMobile from '@/assets/images/illustration-sign-up-mobile.svg';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

const Home = () => {
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
                <Image src={iconList} alt='icon-list' width={21} />
                <Text>Product discovery and building what matters</Text>
              </Group>
              <Group noWrap align='flex-start'>
                <Image src={iconList} alt='icon-list' width={21} />
                <Text>Measuring to ensure updates are a success</Text>
              </Group>
              <Group noWrap align='flex-start'>
                <Image src={iconList} alt='icon-list' width={21} />
                <Text>And much more!</Text>
              </Group>
            </Stack>
          </Stack>
          <Stack spacing={0}>
            <TextInput label='Email address' placeholder='email@company.com' />
            <Space h={16} />
            <Button>Subscribe to monthly newsletter</Button>
          </Stack>
        </Stack>
      </Stack>
    </AppShell>
  );
};

export default Home;
