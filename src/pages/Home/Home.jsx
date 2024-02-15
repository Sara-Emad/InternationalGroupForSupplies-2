import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
} from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { brown, green } from '@mui/material/colors';


// arry for repate (map) element
// repate element التكرار, use array with map and not forget key

const mySlider = [
  { text: "International Group For Supplies", link: "public/images/s4-1.jpg" },
  { text: "International Group For Supplies", link: "public/images/s2.jpg" },
];
const Home = () => {
  const theme = useTheme();
  return (
    <Container>
    <Box flexGrow={1} sx={{mt: 1 , display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          className=" mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={ true} 
          modules={[Pagination]}
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide
               key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  // اكواد ميديا كويري لجعل هذة الخصائص عند الشاشات الاكبر من سمول نحضرها من
                  // material ui ' custmization ' breakpoints
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      textAlign: "left",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                    [theme.breakpoints.down("md")]: {
                      left: "5%",
                    },
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight:400,color: theme.palette.mode === "dark" ? "white" :   "white" }}>
                    Welcome to
                  </Typography>
      
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.mode === "dark" ?   green[200]  :  green[200] , fontWeight: 500, my: 2 }}
                  >
                    {item.text}
                  </Typography>
      
                  {/* <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="h5" sx={{ color: "#333", mr: 1 }}>
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#D23F57" }}>
                      30% OFF
                    </Typography>
                  </Stack>
      
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", my: 1, fontWeight: 300 }}
                  >
                    Get Free shopping on orders over $99.00
                  </Typography> */}
                  <Button
                    sx={{
                      mx: 5,
                      py: 1,
                      mt: 2,
                      bgcolor:  theme.palette.mode === "dark" ?   green[200]  :  green[200],
                      boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: theme.palette.mode === "dark" ?   brown[500]  :  brown[500],
                        boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                  Get Start
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
    
    </Box>

      
    </Container>
  );
}

export default Home;
