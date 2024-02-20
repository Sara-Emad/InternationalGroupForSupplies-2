import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Link,
  Modal,
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
import { Close } from "@mui/icons-material";
import { useGetproductsByNameQuery } from '../../Redux/productsApi'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: { xs: "100%", md: 800 },
  bgcolor: "background.paper",
  border: "1px solid #027315",
  boxShadow: 24,
  p: 4,
};

const Products = () => {

  const { data, error, isLoading } = useGetproductsByNameQuery()
   console.log(data)


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const expandModal = (item) => {
    setSelectedProject(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };


  const theme = useTheme();
  const [currentActive, setcurrentActive] = useState("all");
  // const [arr, setArr] = useState(myProjects);

  const handleClick = (ButtonCategory) => {
    setcurrentActive(ButtonCategory);

    const newArr = data.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === ButtonCategory;
      });

      return ZZZ === ButtonCategory;
    });

    setArr(newArr);
  };


  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">Please Try Again Later</Typography>
      </Container>
    );
  }


if (data) {
    return (
    <Container sx={{ my: 4, flexGrow: 1 }}>
      <Grid
        md={12}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ my: "50px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: "36px", xs: "25px", sm: "36px" },
            fontWeight: 700,
            // @ts-ignore
            color: theme.palette.mode === "dark" ? "#e3f2fd" : "#0f2f57",
          }}
        >
          CHECK OUR PRODUCTS
          <Typography
            sx={{
              width: { md: "400px", xs: "250px", sm: "400px" },
              height: "1px",
              backgroundColor: "#f38b74",
            }}
          ></Typography>
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={2}>
          <Stack className="left-section  flex">
            <Button
              onClick={() => {
                setcurrentActive("all");
                setArr(data);
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
        <Grid item md={10}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            <AnimatePresence>
              {data.map((item) => {
                return (
                  <motion.article
                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    key={item.id}
                    className="card"
                  >
                    <img width={266} src={item.imageLink} alt="" />
                    <Item>
                      <Stack
                        sx={{ width: "210px", alignItems: "center" }}
                        className="box"
                      >
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
                          {item.productName}
                        </Typography>
                        {/* <Typography
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
                        </Typography> */}

                        <Stack
                          className="flex icons"
                          sx={{ alignItems: "center" }}
                        >
                          <Button
                            onClick={() => {
                              expandModal(item);
                              setArr(data);
                            }}
                            className="link flex"
                            sx={{
                              width: "6px",
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

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={closeModal}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img
                width={300}
                src={selectedProject && selectedProject.imageLink}
                alt=""
              />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography variant="h5">
                {selectedProject && selectedProject.productName}
              </Typography>

              <Typography variant="body1">
                {selectedProject && selectedProject.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

};

export default Products;
