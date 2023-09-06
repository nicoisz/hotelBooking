import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "wouter";
import { useQueries } from "@tanstack/react-query";

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
  } = useQueries({ queryKey: ["hotels"], queryFn: fetchHotels });

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
      <Stack space={2}>
        {hotels.map((hotel) => (
          <Link key={hotel.id} href={`/hotel/$hotel.id`}>
            <Card sx={{ maxWidth: 345, background: "#e8e8e8" }}>
              <CardMedia
                sx={{ height: 40 }}
                image={hotel.image}
                title={hotel.title}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography>{hotel.description}</Typography>
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
