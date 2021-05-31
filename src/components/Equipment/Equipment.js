import React, {useState} from "react";
import FirstImg from "../../img/Ellipse 3.png";
import SecondImg from "../../img/Ellipse 5.png";
import ThirdImg from "../../img/Ellipse 7.png";
import ThirdFour from "../../img/Ellipse 5.png";
import FiveIcon from "../../img/Ellipse 3.png";
import Home from '../../img/Home.png';
import Close from '../../img/Close.png';
import Settings from '../../img/Settings.png';
import Human from '../../img/Man.png';
import Back from '../../img/Back.png';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import poster from '../../img/Video.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "aos/dist/aos.css";
import "./Equipment.css";

const Equipment =()=> {
    const [open, setOpen] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleOpen2 = () => {
        setSecond(true);
      };
    
      const handleClose2 = () => {
        setSecond(false);
      };
      const handleOpen3 = () => {
        setThird(true);
      };
    
      const handleClose3 = () => {
        setThird(false);
      };
      const handleOpen4 = () => {
        setFour(true);
      };
    
      const handleClose4 = () => {
        setFour(false);
      };
      const handleOpen5 = () => {
        setFive(true);
      };
    
      const handleClose5 = () => {
        setFive(false);
      };
        return (
         <div className="equipment" id="serviceContact">
             <div className="mobile-version">
                 <h4>Замена оборудования</h4>
                 <p className="mobile-p-top">Нажмите на одну из иконок, чтобы увидеть описание</p>
                <div className="first-box">
                 <div className="mobile-first"  onClick={handleOpen} alt="mobile-home-icon">
                     <img src={FirstImg} className="circle-icon" alt="mobile-home-icon"/>
                     <img src={Home} alt="mobile-home-icon" className="mobile-icon-first"/>
                     
                 </div>
                 <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="do-modal"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                        >
                        <Fade in={open}>
                        <div className="wrapper-paper">
                            <div className="up-group">
                                <div className="equipment-groups" data-aos="zoom-in" data-aos-duration="1000">
                                            <div className="l27">
                                                <div className="group27">
                                                    <div className="cover">
                                                        <img src={Home} alt="home-icon" className="icon-img"/>
                                                        <p className="group27-p">Открыть сервисный запрос на портале Cisco</p>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </Modal>
                 </div>
                 <div className="line-top"></div>
                 <div className="mobile-avarage">
                    <div className="first">
                    <div className="ka"  onClick={handleOpen2}>
                        <img src={SecondImg} className="circle-icon-second" alt="mobile-home-icon"/>
                        <img src={Close} alt="mobile-close-icon" className="mobile-icon-second"/>
                        
                    </div>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className="do-modal"
                            open={second}
                            onClose={handleClose2}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                            <Fade in={second}>
                            <div className="wrapper-paper">
                                    <div className="equipment-groups" data-aos="fade-right" data-aos-duration="1000">
                                                <div className="l29">
                                                    <div className="group29">
                                                        <div className="cover">
                                                            <img src={Close} alt="close-icon" className="icon-img"/>
                                                            <p className="group29-p">Закрыть сервисный запрос</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                    <div className="avarage-left"></div>
                    <div className="first">
                    <div className="mobile-third"  onClick={handleOpen3}>
                        <img src={ThirdImg} className="circle-icon-third" alt="mobile-home-icon"/>
                        <img src={Settings} alt="mobile-settings-icon" className="mobile-icon-third"/>
                        
                    </div>
                   
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className="do-modal"
                            open={third}
                            onClose={handleClose3}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                            <Fade in={third}>
                            <div className="wrapper-paper">
                                    <div className="equipment-groups" data-aos="zoom-in" data-aos-duration="800">
                                            <div className="l28">
                                                <div className="group28">
                                                    <div className="cover">
                                                        <img src={Settings} alt="settings-icon" className="icon-img"/>
                                                        <p className="group28-p">Получить решение проблемы от специалистов Cisco</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                    <div className="avarage-right"></div>
                    <div className="first">
                    <div className="mobile-four"  onClick={handleOpen4}>
                        <img src={ThirdFour} className="circle-icon-four" alt="mobile-home-icon"/>
                        <img src={Human} alt="mobile-human-icon" className="mobile-icon-four"/>
                        
                    </div>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className="do-modal"
                            open={four}
                            onClose={handleClose4}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                            <Fade in={four}>
                            <div className="wrapper-paper">
                                <div className="equipment-groups" data-aos="fade-left" data-aos-duration="1000">
                                            <div className="l30">
                                                <div className="group30">
                                                    <div className="cover">
                                                        <img src={Human} alt="man-icon" className="icon-img"/>  
                                                        <p className="group30-p">RMA (Санкционирование возвращаемого материала. Авторизация на замену оборудования)</p>
                                                        </div>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                    
                 </div>
                 <div className="bottom-v"></div>
                 <div className="bottom-h"></div>
                 <div className="bottomr-v"></div>
                 <div className="bottomr-h"></div>
                 <div className="first">
                    <div className="mobile-five"  onClick={handleOpen5}>
                        <img src={Back} className="mobile-icon-five" alt="mobile-back-icon"/>
                        <img src={FiveIcon} className="circle-circle-five" alt="mobile-back-icon"/>                    
                    </div>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className="do-modal"
                            open={five}
                            onClose={handleClose5}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                            <Fade in={five}>
                            <div className="wrapper-paper">
                                <div className="equipment-groups" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="l32">
                                        <div className="group32">
                                            <div className="cover">
                                                    <img src={Back} alt="back-icon" className="icon-img"/>
                                                    <p className="group32-p">Возврат неисправного оборудования</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
             </div>
             <div className="equipmentreplacement">
                 <h2>Замена оборудования</h2>
                    <div className="up-group">
                        <div className="equipment-groups" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="l27">
                                        <div className="group27">
                                            <div className="cover">
                                                <img src={Home} alt="home-icon" className="icon-img"/>
                                                <p className="group27-p">Открыть сервисный запрос на портале Cisco</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                    <div className="desktop-top-line"></div>
                    <div className="desktop-left-line"></div>
                    <div className="desktop-right-line"></div>
                        <div className="avarage-group">
                                <div className="equipment-groups left-box" data-aos="fade-right" data-aos-duration="800">
                                        <div className="l29">
                                            <div className="group29">
                                                <div className="cover">
                                                    <img src={Close} alt="close-icon" className="icon-img"/>
                                                    <p className="group29-p">Закрыть сервисный запрос</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="equipment-groups middle-box" data-aos="zoom-out" data-aos-duration="800">
                                        <div className="l28">
                                            <div className="group28">
                                                <div className="cover">
                                                    <img src={Settings} alt="settings-icon" className="icon-img"/>
                                                    <p className="group28-p">Получить решение проблемы от специалистов Cisco</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="equipment-groups rigth-box" data-aos="fade-left" data-aos-duration="800">
                                        <div className="l30">
                                            <div className="group30">
                                                <div className="cover">
                                                    <img src={Human} alt="man-icon" className="icon-img"/>  
                                                    <p className="group30-p">RMA (Санкционирование возвращаемого материала. Авторизация на замену оборудования)</p>
                                                    </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                        <div className="desktop-bottom-v"></div>
                        <div className="desktop-bottom-h"></div>
                        <div className="desktop-bottomr-v"></div>
                        <div className="desktop-bottomr-h"></div>
                        <div className="down-group">
                            <div className="equipment-groups" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="l32">
                                    <div className="group32">
                                        <div className="cover">
                                                <img src={Back} alt="back-icon" className="icon-img"/>
                                                <p className="group32-p">Возврат неисправного оборудования</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                 
             </div>

            <div className="information">
                <div className="information-header-box" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="information-header">Замена и возврат неисправного оборудования по сервисному контракту Cisco</h1>
                </div>
                <div className="information-video">
                    <div className="information-part" data-aos="fade-down-right" data-aos-duration="1000">
                        <div className="inf">
                            <div className="vl1"></div>
                            <p className="information-p">
                            Авансовая замена вышедшего из строя оборудования предоставляется:	
                            • в течение следующего рабочего дня с 9:00 до 17:00
                            (при условии регистрации неисправности и выдачи
                            заключения инженером Cisco Systems до 15:00
                            текущего рабочего дня)												
                            • для районных центров страны, удаленных от
                            локального склада, возможны отклонения
                            от
                            указанных сроков в сторону их увеличения до 3-4 дней.
                            • Проверить доступность сервиса в вашем регионе
                            можно по ссылке Service Availability Matrix tool
                        <a href="http://tools.cisco.com/apidc/sam/search.do">
                            http://tools.cisco.com</a>
                            </p>
                        </div>
                        <div className="inf">
                            <div className="vl2"></div>
                            <p className="information-p">
                            Доставка исправных запчастей по территории
                            Узбекистана осуществляется компанией
                            EVENTRA SERVICE LLC
                            Непрерывное пополнение склада запасных
                            компонентов в г.Ташкенте, что позволяет оперативно
                            обрабатывать сервисные кейсы и минимизировать
                            простои техники заказчика.
                            </p>
                        </div>
                        <div className="inf">
                            <div className="vl3"></div>
                            <p className="information-p">
                            *Сервис по гарантии предоставляется бесплатно
                            только на период гарантийного срока и при выявлении
                            поломки по гарантийному случаю. 												
                            *В случае дефицита компонента, обслуживание системы
                            заказчика может занять до 30 рабочих дней.
                            </p>
                        </div>
                    </div>
                <div className="video-box" data-aos="fade-down-left" data-aos-duration="1000">
                    <div>
                          <Player className="border border-dark video-player" poster={poster}>
                             <source src="http://161.35.117.200:8087/api/send/downloadFile/3/3_mp4.mp4" />
                          </Player>
                   </div>
                    <button className="btn video-button">Проверить мое оборудование</button>
                </div>
             </div>
          </div>
         </div>
        )
}
export default Equipment;