"use client"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

export default function Dashboard() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [ezb, setEzb] = useState([
        "verbotene Staatsfinanzierung und Planwirtschaft",
        "AFD ist der Ansicht das die EZB verbotene Staatsfinanzierung betreibt, indem sie Anleihen von Staaten aufkauft und Planwirtschaft fördert, indem sie Zinsen manipulieren (stimmt auch im groben (Kauf von Anleihen steigert Inflation von Ländern))"
    ]);
    const handleClose = () => setShow(false);

    const handleShow = (title, content) => {
        setShow(true)
        setContent(content)
        setTitle(title)
    }

    return (
        <div>
            <div>
                <div>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-1">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Geld- und Währungspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Euro ist nicht für 20 Volkswirtschaften konstruiert</li>
                                        <li className='list-group-item'>Einheitswährung führt zu hoher Arbeitslosigkeit im Süden Europas</li>
                                        <li className='list-group-item'>Verlust der Wettbewerbsfähigkeit</li>
                                        <li className='list-group-item'>Wiedereinführung der Nationalwährung (hohe Kaufkraft und niedrige Inflation durch eine neue deutsche Mark (sozialen Marktwirtschaft))</li>
                                        <li className='list-group-item'>Beendigung vertragswidriger Politik der EZB und EU-Kommission da sie <span onClick={() => handleShow(ezb[0], ezb[1])} className='more-info text-primary'>verbotene Staatsfinanzierung und Planwirtschaft</span> betreibt</li>
                                        <li className='list-group-item'>Bargeld erhalten lassen (Schutz vor Enteignung und Überwachung (Verankerung des Bargelds im Grundgesetzt))</li>
                                        <li className='list-group-item'>Staatsgold soll zurück nach Deutschland zurückkommen</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a class="bg-primary item-link" href="#list-item-2"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-2">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Geld- und Währungspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Euro ist nicht für 20 Volkswirtschaften konstruiert</li>
                                        <li className='list-group-item'>Einheitswährung führt zu hoher Arbeitslosigkeit im Süden Europas</li>
                                        <li className='list-group-item'>Verlust der Wettbewerbsfähigkeit</li>
                                        <li className='list-group-item'>Wiedereinführung der Nationalwährung (hohe Kaufkraft und niedrige Inflation durch eine neue deutsche Mark (sozialen Marktwirtschaft))</li>
                                        <li className='list-group-item'>Beendigung vertragswidriger Politik der EZB und EU-Kommission da sie <span onClick={() => handleShow(ezb[0], ezb[1])} className='more-info text-primary'>verbotene Staatsfinanzierung und Planwirtschaft</span> betreibt</li>
                                        <li className='list-group-item'>Bargeld erhalten lassen (Schutz vor Enteignung und Überwachung (Verankerung des Bargelds im Grundgesetzt))</li>
                                        <li className='list-group-item'>Staatsgold soll zurück nach Deutschland zurückkommen</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a class="bg-primary item-link" href="#list-item-3"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-3">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Geld- und Währungspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Euro ist nicht für 20 Volkswirtschaften konstruiert</li>
                                        <li className='list-group-item'>Einheitswährung führt zu hoher Arbeitslosigkeit im Süden Europas</li>
                                        <li className='list-group-item'>Verlust der Wettbewerbsfähigkeit</li>
                                        <li className='list-group-item'>Wiedereinführung der Nationalwährung (hohe Kaufkraft und niedrige Inflation durch eine neue deutsche Mark (sozialen Marktwirtschaft))</li>
                                        <li className='list-group-item'>Beendigung vertragswidriger Politik der EZB und EU-Kommission da sie <span onClick={() => handleShow(ezb[0], ezb[1])} className='more-info text-primary'>verbotene Staatsfinanzierung und Planwirtschaft</span> betreibt</li>
                                        <li className='list-group-item'>Bargeld erhalten lassen (Schutz vor Enteignung und Überwachung (Verankerung des Bargelds im Grundgesetzt))</li>
                                        <li className='list-group-item'>Staatsgold soll zurück nach Deutschland zurückkommen</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><p>{title}</p></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <p>{content}</p>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}