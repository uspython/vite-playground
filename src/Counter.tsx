import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={decrement}
        startIcon={<RemoveIcon />}
      >
        Decrease
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={increment}
        startIcon={<AddIcon />}
      >
        Increase
      </Button>
    </Box>
  );
};

export default Counter;
