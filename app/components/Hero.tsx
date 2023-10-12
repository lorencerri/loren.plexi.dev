import classes from "./Hero.module.css";
import { Container, Title, Text, Button } from "@mantine/core";

export default function CustomHero() {
  return (
    <Container className={classes.container} size={1400}>
      <Title className={classes.title}>Hey there!</Title>
      <Container p={0} size={600}>
        <Text size="lg" c="dimmed" className={classes.description}>
          I'm <span className="highlight">Loren Cerri</span>, a full-stack
          freelance software developer, student, educational content creator,
          and open source maintainer.
        </Text>
      </Container>

      <div className={classes.buttons}>
        <Button
          component="a"
          href="https://github.com/lorencerri"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="default"
          color="gray"
          className={classes.button}
          mr={20}
        >
          GitHub
        </Button>

        <Button
          component="a"
          href="https://twitter.com/lorencerri"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className={classes.button}
        >
          Twitter
        </Button>
      </div>
    </Container>
  );
}
