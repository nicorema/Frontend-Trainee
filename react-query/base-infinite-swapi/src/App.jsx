import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>Infinite SWAPI</h1>
      <QueryClientProvider client={queryClient}>
        <InfinitePeople />
        {/* <InfiniteSpecies /> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
