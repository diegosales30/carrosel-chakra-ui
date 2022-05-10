import "./style.css";
import { Box } from "@chakra-ui/react";

import { DataImg } from "./dataImg";
import Carrosel from "./Carrosel";

function App() {
  return (
    <Box w="100%" height={"350px"} p={4} color="white">
      <Carrosel slides={DataImg} />
    </Box>
  );
}

export default App;
