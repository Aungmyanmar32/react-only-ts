import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  //useEffect
  // useEffect( callback , depedency-list [])

  useEffect(() => {
    console.log("inside use effect");
    fetchData();
  }, []);

  console.log("under use effect");
  console.log("under use effect");
  console.log("under use effect");
  console.log("render");
  console.log("under use effect");

  const handleCount = () => {
    let i = count + 1;
    setCount(i);
    console.log("render.... by count");
  };

  const handleCount2 = () => {
    let i = count2 + 1;
    setCount2(i);
    console.log("render.... by count");
  };

  console.log("Users", users[0]?.name);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <h1>{count}</h1>
        <Button variant="outlined" onClick={handleCount}>
          Count
        </Button>
        <h1>count2 {count2}</h1>
        <Button variant="outlined" onClick={handleCount2}>
          Count2
        </Button>
      </Box>
      <Menu />
      {users.map((user) => {
        return <Box key={user?.id}>{user?.name}</Box>;
      })}
    </Box>
  );
};

export default App;
