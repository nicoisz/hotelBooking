import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const fetchHotels = async () => {
  const res = await fetch("http://localhost:3001/hotels");
  if (!res.ok) {
    throw new Error("network response was not ok");
  }
  return res.json();
};

function HotelList() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels });

  if (isLoading) {
    return <div> Loading...</div>;
  }

  if (error) {
    return <div> Error fetching Hotels! {error.message}</div>;
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Booking App
      </Typography>
      <Stack spacing={2}>
        {hotels.map((hotel) => (
          <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
            <Card sx={{ maxWidth: 345, background: "#e8e8e8" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={hotel.img}
                title={hotel.title}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">see details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default HotelList;
