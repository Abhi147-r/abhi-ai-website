import { Toaster } from "@/components/ui/sonner";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <Toaster position="bottom-right" theme="dark" />
    </>
  );
}

export default App;
