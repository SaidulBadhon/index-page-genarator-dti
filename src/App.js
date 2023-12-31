import {
  Box,
  Fade,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const data = [];

export default function App() {
  const [items, setItems] = useState(data);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const styles = {
    border: {
      border: "1px #8eaadb solid",
      fontWeight: 500,
      fontSize: 12,
      padding: 1,
    },
  };

  console.log(items);

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: name,
      date: date,
    };
    setItems([...items, newItem]);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#c0c0c0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <Box
        id="indexId"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            width: 750,
            aspectRatio: 8.27 / 11.69,
            backgroundColor: "#fff",

            padding: 5,
            border: `1px red soild`,

            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffe599",
              border: `1px #000 solid`,
              padding: "8px 32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">INDEX</Typography>
          </Box>

          <TableContainer>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#4472c4" }}>
                <TableRow
                  sx={{ ...styles.border, border: "1px #4472c4 solid" }}
                >
                  <TableCell sx={{ color: "#FFF" }}>NO.</TableCell>
                  <TableCell sx={{ color: "#FFF" }} align="center">
                    Experiment name
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFF", minWidth: 100 }}
                    align="right"
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      border: "1px #8eaadb solid",
                      "&:nth-child(odd)": {
                        backgroundColor: "#d9e2f3",
                      },
                      "&:nth-child(even)": {
                        backgroundColor: "#FFF",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        ...styles.border,
                        height: 60,
                        p: 0,
                      }}
                      component="th"
                      scope="row"
                      align="center"
                      onMouseEnter={() => setShowDeleteButton(true)}
                      onMouseLeave={() => setShowDeleteButton(false)}
                    >
                      <span>{index + 1}</span>

                      <Fade in={showDeleteButton} mountOnEnter unmountOnExit>
                        <IconButton
                          onClick={() =>
                            setItems((e) =>
                              e.filter((item) => item.id !== row.id)
                            )
                          }
                        >
                          <DeleteRoundedIcon sx={{ fill: "red" }} />
                        </IconButton>
                      </Fade>
                    </TableCell>
                    <TableCell sx={styles.border} component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell sx={styles.border} align="right">
                      {row.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box className="no-print input-styling">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={() => handleAddItem()}>Submit</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
