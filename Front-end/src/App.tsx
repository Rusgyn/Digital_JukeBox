import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideNavigationBar from "./components/SideNavigationBar";
import PlayList from "./components/Playlist";
import AdminAuthentication from "./components/AdminAuthentication";
import SearchModal from "./components/SearchSong";
import QRCodeGenerator from "./components/admin/QRCodeGenerator";
import JukeBoxPlayer from "./components/JukeBoxPlayer";
import "../Images/music_abstract.mov";

// Import WebSocketProvider
import { WebSocketProvider } from "./context/WebSocketContext";

function App() {
  return (
    // Wrap the whole app with WebSocketProvider
    <WebSocketProvider>
      <div>
        <video className="background-video" autoPlay loop muted>
        <source src="/Images/music_abstract.mov" type="video/mp4" />
      </video>
      </div>
      <Router>
        <div className="App">
          <SideNavigationBar />
          <JukeBoxPlayer />
          <Routes>
            <Route path="/admin-auth" element={<AdminAuthentication />} />
            <Route
              path="/search"
              element={
                <SearchModal
                  isOpen={false}
                  onClose={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route
              path="/playlist"
              element={
                <PlayList
                  isOpen={false}
                  onClose={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route path="/QrCode" element={<QRCodeGenerator />} />
          </Routes>
        </div>
      </Router>
    </WebSocketProvider>
  );
}

export default App;