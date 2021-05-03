import React from 'react';
import Layer1 from '../../img/Layer 1.png' ;
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {MdExpandMore} from "react-icons/md";
import "./AnswerQuestion.css";



const AnswerQuestion = () => {
   
    return ( 

        <div className="main-faq" id="main-faq">
            <div className="faq-img-box">
                <img src={Layer1} alt="layer1" className="faq-img"/>
            </div>
            <div className="faq-information">
                <h2 className="faq-header">FAQ (вопрос-ответ) по сервисным контрактам Cisco Smart Net</h2>
                <div className="faq-accordion">
                    <Accordion className="bottom-line">
                        <AccordionSummary
                        expandIcon={<MdExpandMore style={{background:"#192167", color:"#ffff"}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="faq-heading">Что такое сервисный контракт от Сisco?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="hidden-faq">
                             Cisco SMARTnet — это набор сервисов (сервисный контракт), предназначенных
                             для обеспечения беспрерывной работы вашего оборудования Cisco.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bottom-line">
                        <AccordionSummary
                        expandIcon={<MdExpandMore style={{background:"#192167", color:"#ffff"}}/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className="faq-heading">Какие компоненты входят в в сервисный контракт Cisco?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography  className="hidden-faq">
                         Сервисный контракт предоставляет:
                                <li>авансовую замену оборудования на следующий рабочий день;</li>
                                <li>круглосуточную техническую поддержку инженеров сервисного центра Cisco TAC;</li>
                                <li>полноценный доступ к интернет ресурсу cisco.com с возможностью скачивания
                                    актуального программного обеспечения;
                                </li>
                                <li>сервис он-лайн мониторинга и проактивную поддержку (интеллектуальные
                                    возможности портала SMARTnet Total Care).
                                </li>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bottom-line">
                        <AccordionSummary
                        expandIcon={<MdExpandMore style={{background:"#192167", color:"#ffff"}}/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className="faq-heading">Это все платные сервисы?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="hidden-faq">
                        Да, сервисный контракт платный и его цена может варьироваться от 10 до 20% от стоимости GPL оборудования.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bottom-line">
                        <AccordionSummary
                        expandIcon={<MdExpandMore style={{background:"#192167", color:"#ffff"}}/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className="faq-heading">Можно ли купить только сервис авансовой замены?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="hidden-faq">
                            Да, но только для ограниченной линейки оборудования для малого и среднего бизнеса, а именно сервис SMBS.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="bottom-line">
                        <AccordionSummary
                        expandIcon={<MdExpandMore style={{background:"#192167", color:"#ffff"}}/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className="faq-heading">Чем отличается замена оборудования по сервисному контракту от          стандартной гарантии?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="hidden-faq">
                        По стандартной гарантии замена оборудования производится в течении 45-90 дней дистрибутором. Тогда как, по сервисному контракту замена осуществляется на следующий рабочий день логистическим партнером компании Cisco.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="faq-again">
                    <Accordion className="add">
                        <AccordionSummary
                        // expandIcon={<MdExpandMore style={{background:"#192167", color:"#ffff"}}/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className="btn addition">Еще вопросы?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="addition-hidden">
                        Если у меня нет сервисного контракта, смогу ли обратиться к техническим специалистам Cisco или скачать необходимое программное обеспечение?
                                Да, вы можете обратиться к техническим специалистам и скачать программное обеспечение, но с некоторым ограничением. Ограничения носят следующий характер:
                                •	Обращение к техническим специалистам может быть принято только в первые 90 дней с момента заказа оборудования (действительно не для всего оборудования Cisco);
                                •	Скачать программное обеспечения можно в рамках релиза(версии) установленного в вашем оборудовании с заводской сборкой;
                                •	Во всех остальных случаях обязательным является наличие сервисного контракта на обслуживание.
                                Как происходит покупка сервисного контракта?
                                Вы заполняете необходимую форму, после чего ваш заказ обрабатывается официальным дистрибутором, который и заказывает сервисный контракт. После активации вам предоставят номер сервисного контракта в формате 9ХХХХХХХ. При необходимости можно запросить выгрузку информации в формате Excel.

                                Могу ли я сразу после заказа пользоваться всеми компонентами сервиса SMARTnet Total Care?
                                Сразу после получения уведомления об активации сервисного контракта и получения его номера, вы можете обращаться к техническим специалистам Cisco в центр поддержки ТАС. Но для того, чтобы получить полноценный доступ к сервисному контракту, вам необходимо пройти процедуру ассоциации контракта со учетной записью на сайте http://cisco.com. 
                                Пошаговая инструкция по ассоциации сервисного контракта.
                                Важно отметить однако, что опцией авансовой замены RMA по сервисному контракту вы можете воспользоваться только спустя 30 дней после начала действия сервисного контракта. Это время необходимо для наполнения локального склада подменным фондом согласно контракту.
                                Также для полноценного пользования сервисным контрактом Cisco к устройствам сетевой безопасности Cisco ASA необходима регистрация на SMART Portal — http://www.cisco.com/web/ordering/smart-software-manager/smart-accounts.html
                                Этот текст выносите в отдельный док и вставляете выше:
                                Как добавить сервисный контракт к моему профилю?
                                Инструкция по добавлению сервисного контракта к профилю.
                                В случае необходимости, вы также можете открыть операционный кейс на Customer Hub. Детали представлены здесь.


                                Как открыть сервисный случай в ТАС центре?
                                Инструкция по работе с ТАС

                                Могу и я приобрести сервисный контракт более, чем на 1 год?
                                Да, вы можете приобрести сервисный контракт на срок до 5-ти лет с возможностью продления, но не позднее даты — «Last Date of Support: HW».

                                Что такое продление сервисного контракта?
                                Продление – это покупка сервисного контракта с даты окончания действия предыдущего контракта. Особенностью продления является то, что у вас остается тот же номер сервисного контракта и сервис авансовой замены не прерывается и действует с первого дня активации продления. У вас есть 30 дней на продление действующего контракта. По истечению этого срока, контракт переходит в статус Expired. После истечения этого срока, вы все же можете покрыть оборудование, но это уже будет новое покрытие и может понадобится платная проверка работоспособности оборудования Compliance check. Детали представлены здесь.

                                Для всего ли оборудования можно продлить сервисный контракт Cisco или есть какие-то ограничения?
                                Продлить сервисный контракт можно при выполнении двух простых правил:
                                •	Ваш контракт не истек более 30 дней до даты продления;
                                •	Для оборудования не наступила дата «End of Service Contract Renewal Date: HW».


                                Где я могу получить дополнительную информацию?
                                Дополнительную информацию вы можете получить на http://cisco.com/go/smartnet — детальная информация о сервисных контрактах Cisco.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
     );
}
 
export default AnswerQuestion;