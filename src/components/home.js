import React, {useState} from "react";
import "aos/dist/aos.css";
import {FaTimes} from "react-icons/fa";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) =>
        createStyles({
            modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            },
            paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            },
        }),
        );
       


const Home = ()=> {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = () => {
        setOpen(false);
    };
        return ( 
            <>
            <div className="main-page">
                <div className="main-average">
                    <p className="main-header" data-aos="zoom-in" data-aos-duration="800">Cisco Smart Net Total Care™</p>
                    <p className="header-p" data-aos="zoom-in" data-aos-duration="800">Больше, чем гарантия</p>
                    <div>
                        <button type="button" onClick={handleOpen} className=" btn btn-light main-button">
                           Смотреть видео о сервисах
                        </button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                            <div className={classes.paper}>
                                <FaTimes onClick={handleClick}/>
                                <h2 id="transition-modal-title">This place is for Video</h2>
                                <p id="transition-modal-description">Enter your video</p>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                </div>
            </div>
            </>
         );
}
 
export default Home;
