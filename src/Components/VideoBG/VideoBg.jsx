import './VideoBg.css';
import vbg from '../../assets/Videos/vbg.mp4'

function BackgroundVideo() {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={vbg} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div className="overlay"></div> {/* 🔥 Camada preta semi-transparente */}

      
    </div>
  );
}

export default BackgroundVideo;
