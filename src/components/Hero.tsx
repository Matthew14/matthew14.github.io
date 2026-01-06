import {
  Container,
  Stack,
  Avatar,
  Title,
  Text,
  Group,
  ActionIcon,
  Box,
  Anchor,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react';

export function Hero() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at top, #1a1b26 0%, #0f0f14 100%)',
      }}
    >
      <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <Avatar
            src="/me.png"
            alt="Matthew"
            size={180}
            radius={180}
            className="fade-in"
            style={{
              border: '3px solid var(--mantine-color-violet-6)',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
            }}
          />

          <Title
            order={1}
            ta="center"
            className="fade-in-delay-1"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Matthew O'Neill
          </Title>

          <Text
            size="xl"
            c="dimmed"
            ta="center"
            className="fade-in-delay-2"
            style={{ maxWidth: 450 }}
          >
            Senior Engineer @{' '}
            <Anchor
              href="https://www.indeed.com"
              target="_blank"
              rel="noopener noreferrer"
              c="violet.4"
              underline="hover"
            >
              Indeed
            </Anchor>
          </Text>

          <Text
            size="sm"
            c="dimmed"
            ta="center"
            className="fade-in-delay-2"
            style={{ maxWidth: 450, opacity: 0.6, letterSpacing: '0.05em' }}
          >
            React · TypeScript · .NET · Java · Node.js
          </Text>

          <Group gap="md" className="fade-in-delay-3" mt="md">
            <ActionIcon
              component="a"
              href="https://github.com/Matthew14"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              radius="xl"
              variant="subtle"
              color="gray"
              aria-label="GitHub"
              style={{ transition: 'transform 0.2s, color 0.2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.color = 'var(--mantine-color-violet-5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '';
              }}
            >
              <IconBrandGithub size={28} stroke={1.5} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/matthewponeill/"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              radius="xl"
              variant="subtle"
              color="gray"
              aria-label="LinkedIn"
              style={{ transition: 'transform 0.2s, color 0.2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.color = 'var(--mantine-color-violet-5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '';
              }}
            >
              <IconBrandLinkedin size={28} stroke={1.5} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://www.instagram.com/matthewponeill/"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              radius="xl"
              variant="subtle"
              color="gray"
              aria-label="Instagram"
              style={{ transition: 'transform 0.2s, color 0.2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.color = 'var(--mantine-color-violet-5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '';
              }}
            >
              <IconBrandInstagram size={28} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
