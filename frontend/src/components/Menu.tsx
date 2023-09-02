import { useEffect, useState } from "react";
import Test from "./Test";
import { Box, Button, TextField } from "@mui/material";

export interface User {
  name: string;
  email: string;
  age: number;
}

interface Props {
  users: User[];
}

const Menu = () => {
  const message = "Hello World";

  //useState -- react hook -- function -- state
  // const [state , update-state-function ] = useState(init-state-value) / init-v = 0 , state = 0

  //re-render
  // - state change
  // - props change

  const [data, setData] = useState(0);
  //setData()

  const [menu, setMenu] = useState({ name: "", price: 0 });
  //menu = { name: "", price: 0 }

  const handleCreate = () => {
    console.log(menu);
  };

  return (
    <Box>
      <Box>
        <TextField
          type="text"
          placeholder="name"
          onChange={(e) => setMenu({ ...menu, name: e.target.value })}
        />
        <TextField
          type="number"
          placeholder="price"
          onChange={(e) => setMenu({ ...menu, price: Number(e.target.value) })}
        />
        <Button variant="contained" onClick={handleCreate}>
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
