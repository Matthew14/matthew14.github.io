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
import type { Icon } from '@tabler/icons-react';

const AVATAR_SIZE = 180;
const ICON_SIZE = 28;
const ICON_STROKE = 1.5;
const CONTENT_MAX_WIDTH = 450;

const socialLinks: { icon: Icon; href: string; label: string }[] = [
  { icon: IconBrandGithub, href: 'https://github.com/Matthew14', label: 'GitHub' },
  { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/matthewponeill/', label: 'LinkedIn' },
  { icon: IconBrandInstagram, href: 'https://www.instagram.com/matthewponeill/', label: 'Instagram' },
];

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
            size={AVATAR_SIZE}
            radius={AVATAR_SIZE}
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
            style={{ maxWidth: CONTENT_MAX_WIDTH }}
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
            style={{ maxWidth: CONTENT_MAX_WIDTH, opacity: 0.6, letterSpacing: '0.05em' }}
          >
            React · TypeScript · .NET · Java · Node.js
          </Text>

          <Group gap="md" className="fade-in-delay-3" mt="md">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <ActionIcon
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                size="xl"
                radius="xl"
                variant="subtle"
                color="gray"
                aria-label={label}
                className="social-icon"
              >
                <Icon size={ICON_SIZE} stroke={ICON_STROKE} />
              </ActionIcon>
            ))}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
