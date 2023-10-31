import { useEffect } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import { mfetch } from "./endpoints";

import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

// client-side
socket.on("connect", () => {
  console.log(socket.id, "connected");
});

socket.on("disconnect", () => {
  console.log(socket.id, "diconnected");
});

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <h1>Items</h1>
        <div className="items">
          <ListItem
            item={{
              id: 1,
              name: "Item 1",
              image: "https://picsum.photos/200",
            }}
            onEdit={(item) => console.log("Edit", item)}
            onDelete={(item) => console.log("Delete", item)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
