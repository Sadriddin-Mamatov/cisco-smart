import React from "react";
// import VideoPlayer from 'react-video-js-player';
import Home from '../../img/Home.png';
import Close from '../../img/Close.png';
import Settings from '../../img/Settings.png';
import Human from '../../img/Man.png';
import Back from '../../img/Back.png';
// import Cisco from "../../video/Гарантия или сервисный контракт.mp4";
import "aos/dist/aos.css";
import "./Equipment.css";
const Equipment =()=> {
    // const videoSrc= Cisco;
        return (
         <div className="equipment" id="equipment">
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
                        <div className="avarage-group">
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
                                <div className="equipment-groups" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="l28">
                                            <div className="group28">
                                                <div className="cover">
                                                    <img src={Settings} alt="settings-icon" className="icon-img"/>
                                                    <p className="group28-p">Получить решение проблемы от специалистов Cisco</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
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
                            Cервис бесплатный до окончания гарантийного
                            срока оборудования.
                            Авансовая замена вышедшего из строя оборудования:												
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
                        <a href="http://tools.cisco.com/apidc/sam/search.do">http://tools.cisco.com/apidc/sam</a>
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
                        {/* <VideoPlayer src={videoSrc} className="service-video" playbackRate={[0.5, 1, 1.5, 2, 2.5, 3]}/> */}
                    </div>
                    <button className="btn video-button">Проверить мое оборудование</button>
                </div>
             </div>
          </div>
         </div>
        )
 
}

export default Equipment;