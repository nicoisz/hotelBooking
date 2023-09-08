import { Button, Input, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useStore from "../store";
import toast from "react-hot-toast";

function BookingForm({ hotel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addReservation = useStore((state) => state.addReservation);

  const onSubmit = (data) => {
    addReservation(hotel, data);
    toast.success("Reservation made!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>
        Start Date :
        <Input
          type="date"
          {...register("startDate", { required: true })}
        ></Input>
        {errors.startDate && (
          <Typography style={{ color: "red" }}>
            Start Date is required
          </Typography>
        )}
      </h4>
      <h4>
        End Date :
        <Input type="date" {...register("endDate", { required: true })}></Input>
        {errors.endDate && (
          <Typography style={{ color: "red" }}>End Date is required</Typography>
        )}
      </h4>
      <br />
      <br />
      <Button variant="contained" type="submit">
        Make Reservation
      </Button>
    </form>
  );
}

export default BookingForm;
