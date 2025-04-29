import { Stack, Button, Text, Modal } from '@mantine/core';

function RulesPopup({ rulesOpened, handleCloseRules }: { rulesOpened: boolean; handleCloseRules: () => void }) {
  return (
    <Modal opened={rulesOpened} onClose={handleCloseRules} title="How It Works" centered>
      <Stack gap="md">
        <Text size="md">- One sports trivia question per day</Text>
        <Text size="md">- Difficulty increases throughout the week</Text>
        <Text size="md">- 3 guesses, hints unlock after wrong tries</Text>
        <Text size="md">- Saturday is "Top 7 Challenge" mode!</Text>
        <Button variant="light" fullWidth onClick={handleCloseRules}>
          Let's Go!
        </Button>
      </Stack>
    </Modal>
  );
}

export default RulesPopup;
