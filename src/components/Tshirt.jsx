import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Tshirt = ({ tshirt, handleShopBtn }) => {
  const { img, name, price } = tshirt;
  return (
    <div>
      <Card className="border-2 w-72">
        <CardMedia
          component="img"
          alt="green iguana"
          className="h-96"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <p>Price: {price}TK</p>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleShopBtn(tshirt)} variant="contained">
            Shop
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

Tshirt.propTypes = {
  tshirt: PropTypes.object.isRequired,
  handleShopBtn: PropTypes.func.isRequired,
};

export default Tshirt;
