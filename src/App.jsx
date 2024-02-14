import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import Hero from "./components/Hero/Hero";
// import Main from "./components/Main/main";
// import Footer from "./components/Footer/footer";
// import Scrolltotop from "./components/Scroll/Scrolltotop";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        
        <Header1 />
        <Header2 />
        <Outlet/>
      
        <Box
          sx={{
            bgcolor:
              // @ts-ignore
              theme.palette.bg.main,
          }}
        >
          {/* <Hero />
          <Main /> */}
        </Box>
      <Footer />

          {/* <Scrolltotop/> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
