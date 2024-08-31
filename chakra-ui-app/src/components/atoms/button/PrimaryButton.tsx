import { Button } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton = memo((props: Props) => {
  const { children } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});
