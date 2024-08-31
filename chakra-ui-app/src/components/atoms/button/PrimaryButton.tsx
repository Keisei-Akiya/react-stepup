import { Button } from "@chakra-ui/react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton = memo((props: Props) => {
  const { children, isDisabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={isDisabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
