import React, {useState} from 'react';
// import VideoSrc from "../../video/Cisco_Smartnet_V6.mp4";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './SmartNet.css';


const SmartNet = () => {
     const [open, setOpen] = useState(false);
  
     const handleOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };
    return ( 
        <div className="smartnet" id="smartnet">
           <h2 className="smartnet-header">Гарантия или Smart Net?</h2>
           <div className="smartnet-box">
                <p className="smartnet-p">Пакет услуг Cisco Smart Net Total Care представляет значительно больше возможностей, чем гарантийная замена.
                </p> 
                <p className="smartnet-p">Ниже предоставлено сравнение покрытия стандартной гарантии и предоставляемого пакетом услуг Smart Net Total Care
                </p>
           </div>
           
           <button className="video-btn"  onClick={handleOpen}>Смотреть видео</button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="classes-modal"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                        >
                        <Fade in={open}>
                        <div className="smartnet-video-box">
                            <video autoPlay className="modal-video" controls> 
                            {/* <source src={VideoSrc} type="video/mp4" /> */}
                            </video>
                        </div>
                        </Fade>
                    </Modal>

        </div>
     );
}
 
export default SmartNet;