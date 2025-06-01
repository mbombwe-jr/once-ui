import { Column, Heading, Text, Button, Logo, Badge, Line, LetterFx } from "@/once-ui/components";
import './globals.css';

export default function Home() {
  return (
    <Column suppressHydrationWarning fill center padding="l">
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge textVariant="code-default-s" border="neutral-alpha-medium" onBackground="neutral-medium" vertical="center" gap="16">
          <Text className="text-lg font-bold">EduPay</Text>
          <Line vert background="neutral-alpha-strong"/>
          <Text marginX="4">
            <LetterFx trigger="instant">
            Smart School Payment Management System
            </LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="24">
          Payment that doesn't beg for attention
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance" marginBottom="16">
          Pay with clarity, speed, and quiet confidence
        </Text>
        <Button id="docs" href="/" data-border="rounded" weight="default" prefixIcon="copy" arrowIcon>
          Get to Know
        </Button>
      </Column>
    </Column>
  );
}
