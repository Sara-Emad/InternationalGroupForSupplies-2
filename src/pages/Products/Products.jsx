import {

  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import "./Products.css";
import { myProjects } from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@emotion/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const Products = () => {
  const theme = useTheme();
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (ButtonCategory) => {
    setcurrentActive(ButtonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === ButtonCategory;
      });

      return ZZZ === ButtonCategory;
    });

    setArr(newArr);
  };
  return (
    <Container sx={{ my: 4, flexGrow: 1  }}>
      <Grid  md={12}
      
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ my: "50px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md:"36px" , xs:"25px" ,sm:"36px"},
            fontWeight: 700,
            // @ts-ignore
            color: theme.palette.mode === "dark" ? "#e3f2fd" : "#0f2f57",
          }}
        >
          CHECK OUR PRODUCTS
          <Typography
            sx={{
              width:{ md:"400px" , xs:"250px" ,sm:"400px"},
              height: "1px",
              backgroundColor: "#f38b74",
            }}
          ></Typography>
        </Typography>
      </Grid>
    
        <Grid container spacing={2}   >
          <Grid item md={2} >
            <Stack className="left-section  flex" >
              <Button
                onClick={() => {
                  setcurrentActive("all");
                  setArr(myProjects);
                }}
                className={currentActive === "all" ? "active" : null}
              >
                all
              </Button>
        
              <Button
                onClick={() => {
                  handleClick("Herbs");
                }}
                className={currentActive === "Herbs" ? "active" : null}
              >
                Herbs
              </Button>
        
              <Button
                onClick={() => {
                  handleClick("react");
                }}
                className={currentActive === "react" ? "active" : null}
              >
                React & MUI
              </Button>
        
              <Button
                onClick={() => {
                  handleClick("node");
                }}
                className={currentActive === "node" ? "active" : null}
              >
                node
              </Button>
            </Stack>
          </Grid>
          <Grid item  md={10} >
            <Stack
            
              direction="row"
              spacing={2}
              sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
            >
              <AnimatePresence>
                {arr.map((item) => {
                  return (
                    <motion.article
                      layout
                      initial={{ transform: "scale(0.4)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ type: "spring", damping: 8, stiffness: 50 }}
                      key={item.imgPath}
                      className="card"
                    >
                      <img width={266} src={item.imgPath} alt="" />
                      <Item>
                        <Stack sx={{ width: "210px" , alignItems:"center" }} className="box" >
                          <Typography
                            className="title"
                            sx={{
                              color:
                                // @ts-ignore
                                theme.palette.mode === "dark"
                                  ? "#e3f2fd"
                                  : "#0f2f57",
                            }}
                          >
                            {item.projectTitle}
                          </Typography>
                          <Typography
                            className="sub-title"
                            sx={{
                              color:
                                // @ts-ignore
                                theme.palette.mode === "dark"
                                  ? "#e3f2fd"
                                  : "#0f2f57",
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur elit
                            adipisicing . Ex tempore dolor in, accusantium
                            laudantium accusamus.
                          </Typography>
        
                          <Stack
                            className="flex icons"
                            sx={{ alignItems: "center" }}
                          >
                            <Button
                              className="link flex"
                              sx={{
                                width: "8px",
                                bgcolor:
                                  // @ts-ignore
                                  theme.palette.mode === "dark"
                                    ? "#0f2f57"
                                    : "#0f2f57",
        
                                "&:hover": {
                                  bgcolor:
                                    // @ts-ignore
                                    theme.palette.mode === "dark"
                                      ? "#fff"
                                      : "#fff",
        
                                  border: "2px solid",
        
                                  borderColor:
                                    // @ts-ignore
                                    theme.palette.mode === "dark"
                                      ? "#0f2f57"
                                      : "#0f2f57",
                                },
                              }}
                            >
                              <Link
                                href="#"
                                sx={{
                                  textDecoration: "none",
                                  color:
                                    // @ts-ignore
                                    theme.palette.mode === "dark"
                                      ? "#e8eaf6"
                                      : "#e8eaf6",
        
                                  "&:hover": {
                                    color:
                                      // @ts-ignore
                                      theme.palette.mode === "dark"
                                        ? "#0f2f57"
                                        : "#0f2f57",
                                  },
                                }}
                              >
                                more
                                <span
                                  style={{ alignSelf: "end" }}
                                  className="icon-arrow-right"
                                ></span>
                              </Link>
                            </Button>
                          </Stack>
                        </Stack>
                      </Item>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </Stack>
          </Grid>
        </Grid>
      
    </Container>
  );
};

export default Products;
