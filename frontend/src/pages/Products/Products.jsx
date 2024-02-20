// import { Close } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Container,
//   Dialog,
//   IconButton,
//   Stack,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { useState } from "react";
// import { arr } from "./data";
// import { dialig } from "./data";

// const Products = () => {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);


//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [alignment, setAlignment] = useState("left");

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
//   return (
//     <Container sx={{ py: 9 }}>
//       <Stack
//         direction={"row"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         flexWrap={"wrap"}
//         gap={3}
//       >
//         <Box>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { md: "39px", xs: "25px", sm: "36px" },
//               fontWeight: 700,
//             }}
//             color={theme.palette.mode === "dark" ? "#e3f2fd" : "#0f2f57"}
//           >
//             Selected Products
//           </Typography>
//           <Typography
//             sx={{
//               width: { md: "400px", xs: "250px", sm: "400px" },
//               height: "1px",
//               backgroundColor: "#f38b74",
//             }}
//           ></Typography>
//         </Box>

//         <ToggleButtonGroup
//           value={alignment}
//           exclusive
//           onChange={handleAlignment}
//           aria-label="text alignment"
//           color="error"
//           sx={{
//             ".MuiToggleButtonGroup-root": {
//               border: "1px solid rgba(233, 69, 96, 0.5) !important",
//               color: "#e94560",
//               backgroundColor: "initial",
//             },
//             flexWrap: "wrap",
//           }}
//         >
//           <ToggleButton
//             sx={{ color: theme.palette.text.primary, mt: 1 }}
//             className="myButton"
//             value="left"
//             aria-label="left aligned"
//           >
//             All Products
//           </ToggleButton>
//           <ToggleButton
//             sx={{
//               mx: "16px !important",
//               color: theme.palette.text.primary,
//               mt: 1,
//             }}
//             className="myButton"
//             value="center"
//             aria-label="centered"
//           >
//             Herbs
//           </ToggleButton>
//           <ToggleButton
//             sx={{
//               mr: "16px !important",
//               color: theme.palette.text.primary,
//               mt: 1,
//             }}
//             className="myButton"
//             value="center1"
//             aria-label="centered"
//           >
//             seeds
//           </ToggleButton>
//           <ToggleButton
//             sx={{
//               mr: "16px !important",
//               color: theme.palette.text.primary,
//               mt: 1,
//             }}
//             className="myButton"
//             value="center2"
//             aria-label="centered"
//           >
//             Vegetables
//           </ToggleButton>
//           <ToggleButton
//             sx={{ color: theme.palette.text.primary, mt: 1 }}
//             className="myButton"
//             value="right"
//             aria-label="right aligned"
//           >
//             fruits
//           </ToggleButton>
//         </ToggleButtonGroup>
//       </Stack>
//       <Stack
//         direction={"row"}
//         justifyContent={"space-between"}
//         flexWrap={"wrap"}
//       >
//         {arr.map((item) => {
//           return (
//             <Card
//               key={item.id}
//               sx={{
//                 maxWidth: 333,
//                 mt: 6,
//                 ":hover .MuiCardMedia-root ": {
//                   rotate: "1deg",
//                   scale: "1.1",
//                   transition: "0.35s",
//                 },
//               }}
//             >
//               <CardMedia
//                 sx={{ height: 240 }}
//                 image={item.imgpath}
//                 title="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h6" component="div">
//                   {item.text}
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   component="p"
//                   color="text.secondary"
//                 >
//                   {item.paragraph}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   onClick={handleClickOpen}
//                   variant="outlined"
//                   size="large"
//                 >
//                   Learn More
//                 </Button>
//               </CardActions>
//             </Card>
//           );
//         })}
//       </Stack>
//       <Dialog
//         sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <IconButton
//           sx={{
//             ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
//             position: "absolute",
//             top: 0,
//             right: 10,
//           }}
//           onClick={handleClose}
//         >
//           <Close />
//         </IconButton>
//         {dialig.map((item,index) => (
//           <Box
//             key={index}
//             onClick={() => {
//               setSelectedItem(item.text)
              
//             }}
//           >
//             <Typography>{selectedItem}</Typography>
//           </Box>
//         ))}
//       </Dialog>
//     </Container>
//   );
// };

// export default Products;
