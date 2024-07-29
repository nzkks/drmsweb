import { Button } from '@nextui-org/react';

import { ThemeSwitch } from '@/components';

const Home = () => {
  return (
    <main>
      <ThemeSwitch />

      <p className="text-primary">Hello</p>
      <Button color="primary" className="font-bold text-white">
        Button
      </Button>
    </main>
  );
};

export default Home;
