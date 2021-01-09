import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import cardImage from "../../images/web-banner-2.jpg";
import "./ImageCard.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImageCard() {
  const classes = useStyles();

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 6,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="imageCardContaine">
      <Slider {...settings}>
        {/* <Carousel
        swipeable
        showDots
        infinite
        responsive={responsive}
        // means to render carousel on server-side.
        minimumTouchDrag
        autoPlaySpeed={1100}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      > */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learn HTML CSS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You can get free images and videos for your websites by visiting
                Unsplash, Pixabay, and Pexels.
              </Typography>
              <div className="autor">
                <img src={cardImage} alt="" />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learn HTML CSS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You can get free images and videos for your websites by visiting
                Unsplash, Pixabay, and Pexels.
              </Typography>
              <div className="autor">
                <img src={cardImage} alt="" />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learn HTML CSS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You can get free images and videos for your websites by visiting
                Unsplash, Pixabay, and Pexels.
              </Typography>
              <div className="autor">
                <img src={cardImage} alt="" />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learn HTML CSS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You can get free images and videos for your websites by visiting
                Unsplash, Pixabay, and Pexels.
              </Typography>
              <div className="autor">
                <img src={cardImage} alt="" />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        {/* </Carousel> */}
      </Slider>
    </div>
  );
}
