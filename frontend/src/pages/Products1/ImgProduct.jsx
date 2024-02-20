// // import { AddShoppingCartOutlined } from "@mui/icons-material";
// import { Box,  Typography } from "@mui/material";
// import {myProjects} from "./ProductDetails";


// const [modalIsOpen, setModalIsOpen] = useState(false)
// const [selectedProject, setSelectedProject] = useState(null);

// const expandModal = (project) => {
//     setSelectedProject(project);
//     setModalIsOpen(true);
// }

// const closeModal = () => {
//     setSelectedProject(null);
//     setModalIsOpen(true);
// }


// const ImgProduct = () => {
//   return (
//     <Box

//     sx={{
//       display: "flex",
//       alignItems: "center",
//       gap: 2.5,
//       flexDirection: { xs: "column", sm: "row" },
//     }}
//   >
//       {/* Wrap the contents inside the Modal with a single parent element */}
//       {myProjects.map((item) => (
//             <div key={item.id}>
//               <Box sx={{ display: "flex" }}>
//                 <img width={300} src={item.imgPath} alt="" />
//               </Box>

//               <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
//                 <Typography variant="h5">{item.projectTitle}</Typography>

//                 <Typography variant="body1">
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </Box>
//             </div>
//           ))}
//     {/* <>
//       <Box sx={{display: "flex"}}>
//         <img width={300} src="src/images/1.jpg" alt="" />
//       </Box>
      
//       <Box sx={{textAlign: {xs: "center", sm: "left"}}}  >
//         <Typography variant="h5">WOMEN'S FASHION</Typography>
//         <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
//           $12.99
//         </Typography>
//         <Typography variant="body1">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
      
//         <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={1} my={2}>
//           {["src/images/1.jpg", "src/images/2.jpg"].map((item) => {
//             return (
//               <img
//                 style={{ borderRadius: 3 }}
//                 height={100}
//                 width={90}
//                 key={item}
//                 src={item}
//                 alt=""
//               />
//             );
//           })}
//         </Stack>
      
//         <Button sx={{mb: {xs: 1, sm: 0} ,textTransform: "capitalize" }} variant="contained">
//           <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
//           Buy now
//         </Button>
//       </Box>
//     </> */}
//   </Box>
//   );
// }

// export default ImgProduct;

