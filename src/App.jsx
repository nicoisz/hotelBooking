import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HotelList from "./components/HotelList";
import { Route, Switch } from "wouter";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <HotelList />
    </QueryClientProvider>
  );
}

export default App;
