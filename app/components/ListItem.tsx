import classes from "./ListItem.module.css";

import { Accordion, Text, Badge, Group, Anchor, Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface ListItemProps {
  title: string;
  author?: string;
  icon: ReactNode;
  description?: string | ReactNode;
  tags?: { color: string; text: string }[];
  link?: string;
}

export default function ListItem({
  title,
  author,
  icon,
  tags,
  description,
  link,
}: ListItemProps) {
  return (
    <Accordion.Item key={title} value={title} className={classes.item}>
      <Accordion.Control icon={icon} className={classes.control}>
        <Text className={classes.title}>{title}</Text>
        {tags?.map((tag, index) => (
          <Badge
            key={index}
            size="sm"
            color={tag.color}
            variant="dot"
            className={classes.badge}
          >
            {tag.text}
          </Badge>
        ))}
      </Accordion.Control>
      <Accordion.Panel>
        <Group className={classes.group}>
          {description && (
            <div className={classes.description}>
              <Text c="dimmed">{description}</Text>
            </div>
          )}

          {link && (
            <Anchor href={link} target="_blank">
              <Button
                fullWidth
                variant="light"
                leftSection={<IconExternalLink size={14} />}
              >
                Visit
              </Button>
            </Anchor>
          )}
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
