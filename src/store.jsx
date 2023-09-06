import { create } from "zustand";

const useStore = create((set) => ({
  reservation: [],
  addReservation: (hotel, dates) =>
    set((state) => ({
      reservations: [...state.reservations, { hotel, dates }],
    })),
}));
