import { Stack, Button, Text, Modal, Center } from '@mantine/core';
import logo from '../data/logo.png';

function RulesPopup({ rulesOpened, handleCloseRules }: { rulesOpened: boolean; handleCloseRules: () => void }) {
  return (
    <Modal opened={rulesOpened} onClose={handleCloseRules} title="" centered>
      <Stack gap="md">
        <Center><img src={logo} alt="Am I a Casual Logo" style={{ width: '150px' }} /></Center>
        <Text ta="center" size="lg" fw="1000">Rules:</Text>
        <Text ta="center" size="md">One sports trivia question per day</Text>
        <Text ta="center" size="md">Difficulty increases throughout the week</Text>
        <Text ta="center" size="md">3 guesses, hints unlock after wrong tries</Text>
        <Text ta="center" size="md">Saturday is "Top 7 Challenge" mode!</Text>
        <Button variant="light" fullWidth onClick={handleCloseRules}>
          Let's Go!
        </Button>
      </Stack>
    </Modal>
  );
}

export default RulesPopup;