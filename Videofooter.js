import React from "react";
import "./videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Videofooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Matheus Ebac</h3>
        <p>Descrição do Video</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_Icon" />
          <div className="videoFooterMusic_text"> 
            <p>Titulo da Musica</p>

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
