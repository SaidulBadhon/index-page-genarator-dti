import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const data = [
  {
    id: 1,
    name: "Perform the task to install windows desktop operating system",
    date: "07-05-2023",
  },
  {
    id: 2,
    name: "Perform the task to install VMWare and Create Virtual Machines",
    date: "18-05-2023",
  },
  {
    id: 3,
    name: "Perform the task to install linux operating system",
    date: "25-05-2023",
  },
];
// const data = [
//   {
//     id: 1,
//     name: "Simple circuit design",
//     date: "23-05-2023",
//   },
//   {
//     id: 2,
//     name: "Measuring the current in a LED circuit",
//     date: "30-05-2023",
//   },
//   {
//     id: 3,
//     name: "AC circuit design",
//     date: "06-06-2023",
//   },
//   {
//     id: 4,
//     name: "Binary presentation of hexadecimal number using LED",
//     date: "13-06-2023",
//   },
// ];

// // JAVA
// const data = [
//   {
//     id: 1,
//     name: "Create a java program using method",
//     date: "11-04-2023",
//   },
//   {
//     id: 2,
//     name: "Create a java program using method overloading",
//     date: "18-04-2023",
//   },
//   {
//     id: 3,
//     name: "Create a java program using copy constructor method",
//     date: "25-04-2023",
//   },
//   {
//     id: 4,
//     name: "Single inheriting in java program",
//     date: "02-05-2023",
//   },
//   {
//     id: 5,
//     name: "Multi level inheriting in java program",
//     date: "09-05-2023",
//   },
// ];

// SSSS
// const data = [
//   {
//     id: 1,
//     name: "Analize Client Requirements, prepare system diagram, Quotation and get approval from client.",
//     date: "11-04-2023",
//   },
//   {
//     id: 2,
//     name: "Perform power and network cable wiring.",
//     date: "18-04-2023",
//   },
//   {
//     id: 3,
//     name: "Install and Configure the CCTV Camera.",
//     date: "25-04-2023",
//   },
//   {
//     id: 4,
//     name: "Install and Configure DVR/NVR machine",
//     date: "02-05-2023",
//   },
// ];
export default function App() {
  const styles = {
    border: {
      border: "1px #8eaadb solid",
      fontWeight: 500,
      fontSize: 12,
      padding: 1,
    },
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
                {data.map((row) => (
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
                      sx={{ ...styles.border, height: 60 }}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {row.id}
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
        </Box>
      </Box>

      <Box>
        <input type="text" value={name} onChange={(e) => setName()} />
      </Box>
    </Box>
  );
}
