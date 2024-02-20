// /* eslint-disable react/no-unescaped-entities */
// import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
// import {gialog} from "./data";

// const ProductDetails = () => {
//   const theme = useTheme();

//   return (
//     <Grid
//       md={6}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 2.5,
//         flexDirection: { xs: "column", sm: "row" },
//         py: { xs: 2, md: 0 },
//       }}
//     >
//       {gialog.map((item) => (
//         <>
//           <Box key={item.id} sx={{ display: "flex", mt: { sm: 0, xs: 2 } }}>
//             <img width={300} src={item.imgpath} alt="" />
//           </Box>

//           <Stack
//             sx={{
//               textAlign: { xs: "center" },
//               alignItems: "center",
//               display: "flex",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 500,
//                 color: theme.palette.mode === "dark" ? "#e3f2fd" : "#0f2f57",
//               }}
//             >
//               {item.text}
//             </Typography>

//             <Typography variant="body1">{item.paragraph}</Typography>
//           </Stack>
//         </>
//       ))}
//     </Grid>
//   );
// };

// export default ProductDetails;
