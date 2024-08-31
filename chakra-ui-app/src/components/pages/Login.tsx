import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="User ID" />
          <Input type="password" placeholder="Password" />
          <PrimaryButton>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
