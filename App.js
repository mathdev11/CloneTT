import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="APP_Scenes">
        <Video
         likes={100}
         messages={200}
         shares={300}
         name="matheus"
         description="brecker o goleiro"
         music="epica"
         url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
         />
        <Video
         likes={444}
         messages={555}
         shares={666}
         name="joao"
         description="muito ninja"
         music="pula"
         url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/vinil.png?alt=media&token=95dd7b93-7976-446f-944b-5ea6a4fb85c9"
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
