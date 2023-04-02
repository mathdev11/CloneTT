import React, { useEffect, useState } from "react";
import "./app.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";


function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosColletion = collection(db, "videos");
    const videosSnapShot = await getDocs(videosColletion);
    const videoslist = videosSnapShot.docs.map(doc => doc.data());
    setVideos(videoslist);
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App">
      <div className="APP_Scenes">
        {video.map((item) => {
          return (
            <Video
              Likes={item.Likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
