import { MantineProvider } from '@mantine/core';

import Home from '@/pages/Home';
import { theme } from '@/theme';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Home />
    </MantineProvider>
  );
};

export default App;
