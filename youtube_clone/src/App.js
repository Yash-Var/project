import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { Feed } from "@mui/icons-material";
import {
  Navbar,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTrem" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
