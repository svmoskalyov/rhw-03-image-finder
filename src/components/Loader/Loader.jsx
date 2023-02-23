import { Box } from 'components/Box';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="10px"
      fontSize="24px"
    >
      <Spinner size="32" />
      LOADING...
    </Box>
  );
};
