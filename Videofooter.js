import React from "react";
import "./videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Videofooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_Icon" />
          <div className="videoFooterMusic_text"> 
            <p>{music}</p>

          </div>
          
        </div>
      </div>
      <img 
        className="videoFooter_record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        
        />
        
       
    </div>
  );
}

export default Videofooter;
