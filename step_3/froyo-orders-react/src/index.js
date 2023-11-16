import { createRoot } from "react-dom/client";
import { MyList } from "./MyList";

const root = createRoot(document.querySelector("#app"));
root.render(<MyList />);
