import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React, { FunctionComponent } from "react";

interface ISecitonCard {
  title: string;
  description: string;
}
const SectionCard: FunctionComponent<ISecitonCard> = ({
  title,
  description,
}) => {
  return (
    <Flex
      direction={"column"}
      justify={"start"}
      gap={"5"}
      p={"5"}
      mx={"5"}
      className="bg-teal-100/50 rounded-xl"
    >
      <Text className="text-xl font-medium tracking-wider uppercase">
        {title}
      </Text>
      <Text className="text-4xl font-medium tracking-[-1.12px]">
        {description}
      </Text>
    </Flex>
  );
};

export default SectionCard;
