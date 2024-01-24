import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLikeClick = () => {
    // refetch data base on link.
    // refetch();
  };

  return (
    <div>
      <Link to="/HomeLayout">
        <Button size="small" variant="contained">
          {" "}
          #HomeLayout
        </Button>
      </Link>
      <Link to="/InfiniteScroll">
        <Button size="small" variant="contained">
          {" "}
          #InfiniteScroll
        </Button>
      </Link>
      <Link to="/Todo">
        <Button size="small" variant="contained">
          #Todo
        </Button>
      </Link>
      <Link to="/MCard">
        <Button size="small" variant="contained">
          #Mcard
        </Button>
      </Link>
      <Link to="/Post">
        <Button size="small" variant="contained">
          #PostHdl
        </Button>
      </Link>
       
    </div>
  );
};

export default Home;