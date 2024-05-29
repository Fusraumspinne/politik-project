"use client"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button, Offcanvas, Accordion } from 'react-bootstrap';
import { useState } from 'react';
import Image from "next/image"

export default function Dashboard() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [fraktionsvorsitzener, setFraktionsvorsitzener] = useState([
        "Fraktionsvorsitzener",
        "Ein Fraktionsvorsitzender ist der Leiter einer Gruppe von Abgeordneten im Parlament, die meist derselben Partei angehören und gemeinsame politische Ziele verfolgen."
    ])

    const [ersterParlamenttarischerGeschäftsführer, setErsterParlamenttarischerGeschäftsführer] = useState([
        "Erster Parlamenttarischer Geschäftsführer",
        "Der Erste Parlamentarische Geschäftsführer koordiniert die Arbeit einer Fraktion im Parlament und organisiert die Fraktionssitzungen sowie die parlamentarische Tagesordnung."
    ])

    const [parlamentarischeGeschäftsführer, setParlamentarischeGeschäftsführer] = useState([
        "Parlamentarische Geschäftsführer",
        "Ein Parlamentarischer Geschäftsführer koordiniert die organisatorischen Aufgaben einer Fraktion im Parlament und sorgt für den reibungslosen Ablauf der Fraktionsarbeit."
    ])

    const [stellvertretendeFraktionsvorsitzende, setStellvertretendeFraktionsvorsitzende] = useState([
        "Stellvertretende Fraktionsvorsitzende",
        "Ein stellvertretender Fraktionsvorsitzender unterstützt den Fraktionsvorsitzenden und vertritt ihn bei Abwesenheit, hilft bei der Leitung der Fraktionsarbeit und übernimmt spezielle Aufgaben innerhalb der Fraktion."
    ])

    const [ehrenvorsitzender, setEhrenvorsitzender] = useState([
        "Ehrenvorsitzender",
        "Ein Ehrenvorsitzender ist ein ehemaliger Vorsitzender, der in Anerkennung seiner Verdienste diesen Ehrentitel erhält, aber keine aktive Rolle mehr in der Leitung der Organisation spielt."
    ])

    const [ezb, setEzb] = useState([
        "verbotene Staatsfinanzierung und Planwirtschaft",
        "AFD ist der Ansicht das die EZB verbotene Staatsfinanzierung betreibt, indem sie Anleihen von Staaten aufkauft und Planwirtschaft fördert, indem sie Zinsen manipulieren (Kauf von Anleihen steigert Inflation von Ländern)"
    ]);

    const [bruttonationaleinkommens, setBruttonationaleinkommens] = useState([
        "Bruttonationaleinkommens",
        "erfasst alle Einkommen egal ob diese im In- oder Ausland erzielt wurden"
    ])

    const [wehrpflicht, setWehrpflicht] = useState([
        "Wehrpflicht",
        "Die Wehrpflicht ist die Pflicht eines Staatsbürgers, für einen gewissen Zeitraum in den Streitkräften oder einer anderen Wehrformation seines Landes zu dienen. Ob und für wen eine Wehrpflicht besteht, ist in verschiedenen Ländern unterschiedlich geregelt."
    ])

    const [fitfür55, setFitfür55] = useState([
        "Fit für 55",
        "55% Reduktion der CO2-Emissioen bis 2030"
    ])

    const [drittstaaten, setDrittstaaten] = useState([
        "Drittstaaten",
        "aus Sicht eines völkerrechtlichen Vertrags jeder Staat, der nicht Vertragspartei dieses Vertrags ist"
    ])

    const [greenDeal, setGreenDeal] = useState([
        "Green Deal",
        "Die Green Deal-Strategie der Europäischen Union (EU) zielt auf eine Reduktion von Pflanzenschutzmitteln und Mineraldüngern, fordert mehr Ökolandbau, Maßnahmen zur Verbesserung der Biodiversität und eine erhebliche Minderung der Treibhausgase in der Landwirtschaft."
    ])

    const handleClose = () => setShow(false);

    const handleShow = (title, content) => {
        setShow(true)
        setContent(content)
        setTitle(title)
    }

    return (
        <div>
            <div>
                <div className='small'>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-1">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>AFD-Fraktion</h4>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span onClick={() => handleShow(fraktionsvorsitzener[0], fraktionsvorsitzener[1])} className='more-info text-primary'>Fraktionsvorsitzene</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Alice Weidel
                                                            <Image src={"/Images/weidel_alice_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Tino Chrumpalla
                                                            <Image src={"/Images/chrupalla_tino_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span onClick={() => handleShow(ersterParlamenttarischerGeschäftsführer[0], ersterParlamenttarischerGeschäftsführer[1])} className='more-info text-primary'>Erster Parlamenttarischer Geschäftsführer</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Bernd Baumann
                                                            <Image src={"/Images/baumann_bernd_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><span onClick={() => handleShow(parlamentarischeGeschäftsführer[0], parlamentarischeGeschäftsführer[1])} className='more-info text-primary'>Parlamentarische Geschäftsführer</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Stephan Brandner
                                                            <Image src={"/Images/brandner_stephan_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Götz Frömming
                                                            <Image src={"/Images/froemming_goetz_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Enrico Komning
                                                            <Image src={"/Images/komning_enrico_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header><span onClick={() => handleShow(stellvertretendeFraktionsvorsitzende[0], stellvertretendeFraktionsvorsitzende[1])} className='more-info text-primary'>Stellvertretende Fraktionsvorsitzende</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Sebastian Münzenmaier
                                                            <Image src={"/Images/muenzenmaier_sebastian_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Beatrix von Storch
                                                            <Image src={"/Images/storch_beatrix_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Jörn König
                                                            <Image src={"/Images/koenig_joern_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Stefan Keuter
                                                            <Image src={"/Images/keuter_stefan_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header><span onClick={() => handleShow(ehrenvorsitzender[0], ehrenvorsitzender[1])} className='more-info text-primary'>Ehrenvorsitzender</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Alexander Gauland
                                                            <Image src={"/Images/gauland_alexander_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-2">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Ziel der AFD</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>nüchterner Staatenbund</li>
                                        <li className='list-group-item'>die Wirschaft soll von politischer Belastung befreit werden</li>
                                        <li className='list-group-item'>Abbau der Staatsverschuldung</li>
                                        <li className='list-group-item'>möchte eine Erneuerung des europäischen Gedankens (Europa der Vaterländer)</li>
                                        <li className='list-group-item'>Förderung von Bildung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-3">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Kürzliche Änderung aus der rechten ID-Fraktion</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Faktion von rechten Parteien (Lega Nord, Rassemblement National)</li>
                                        <li className='list-group-item'>aufgrundvon den jüngsten Skandalen ist die AFD aus dieser Fraktion rausgeflogen</li>
                                        <li className='list-group-item'>Hauptgrund ist Maximailian Krah (verharmlosende Aussagen zur SS, Spionageaffäre um einem Mitarbeiter welcher Nähe zu Russland und China hat)</li>
                                        <li className='list-group-item'>die AFD wollte zuerst Krah aufgeben, sind dann aber doch ganz rausgeflogen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-4">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
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
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-5">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Steuern und Finanzen</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>EU soll durch ihre Mitgliedstaaten finanziert werden und keine eigenen Steuern erheben</li>
                                        <li className='list-group-item'>Großkonzerne sollen dort besteuert werden, wo sie aktiv sind und nicht wo der Unternehmenssitz ist</li>
                                        <li className='list-group-item'>Förderung von Unternehmen durch Steuererleichterungen (wie in Luxemburg)</li>
                                        <li className='list-group-item'>Ablehnung von CO2-Bepreisung (Wohlstandsverlust und Handelskrisen)</li>
                                        <li className='list-group-item'>Ablehnung des <span onClick={() => handleShow(bruttonationaleinkommens[0], bruttonationaleinkommens[1])} className='more-info text-primary'>Bruttonationaleinkommens</span> als Bemessungsgrundlage für EU-Beiträge, stattdessen das Volkseinkommen da es den jährlichen Wirtschaftserträge besser abgebildet (Deutschland sonst übermäßig belastet)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-6">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Fundamentalistischen Islam</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Der Islam wird nicht nur als Religion betrachtet, sondern auch als Rechts- und Gesellschaftsordnung, die sich nicht mit den europäischen Grundprinzipien von Recht, Freiheit und Demokratie vereinbaren lässt</li>
                                        <li className='list-group-item'>Migration hat für Integrationsprobleme geführt (Ghettobildung und Kriminalität)</li>
                                        <li className='list-group-item'>Forderung von strikten Regeln und massiven Beschränkungen für die Zuwanderung in die EU</li>
                                        <li className='list-group-item'>Vollverschleierung von Frauen soll in der Öffentlichkeit verboten werden</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-7">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Migration</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>betont die Notwendigkeit eines effektiven Außengrenzenschutzes (illegale Einreisen zu verhindern)</li>
                                        <li className='list-group-item'>es wird enge Zusammenarbeit bei der heimatnahen Versorgung von Flüchtlingen und beim Aufbau von Schutzzentren gefordert</li>
                                        <li className='list-group-item'>lehnt die Aufnahme von <span onClick={() => handleShow(drittstaaten[0], drittstaaten[1])} className='more-info text-primary'>Drittstaaten</span> in die EU ab</li>
                                        <li className='list-group-item'>fordert verstärkte Zusammenarbeit im Kampf gegen den islamischen Terrorismus und die Radikalisierung von Kindern</li>
                                        <li className='list-group-item'>lehnt unkontrollierte Masseneinwanderung ab</li>
                                        <li className='list-group-item'>Beendigung von Schlepperaktivitäten</li>
                                        <li className='list-group-item'>befürwortet qualifizierte Zuwanderer und lehnt ungelernte Zuwanderer aus Drittstaaten ab</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-8">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Verteidigungs- und Sicherheitspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Europa soll sich sicherheitspolitisch unabhängiger machen und eigene Verteidigungsgemeinschaften bilden (keine europäische Armee schaffen)</li>
                                        <li className='list-group-item'>NATO bleibt wichtig solange sie sich auf Verteidigung beschränkt</li>
                                        <li className='list-group-item'>Wiederherstellung der Verteidigungsfähigkeit Deutschlands (Aufstockung von Personal und Einführung von neuen Waffensystemen)</li>
                                        <li className='list-group-item'>Wiedereinführung der <span onClick={() => handleShow(wehrpflicht[0], wehrpflicht[1])} className='more-info text-primary'>Wehrpflicht</span></li>
                                        <li className='list-group-item'>Erhalt und Ausbau der wehrtechnischen Fähigkeiten und Arbeitsplätze in Deutschland</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-9">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Verkehrspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Freiheit der Bürger bei der Wahl des Verkehrsmittels (individuelle Mobilität muss bezahlbar bleiben)</li>
                                        <li className='list-group-item'>Schutz des motorisierten Individualverkehrs (Unterstützung und Förderung)</li>
                                        <li className='list-group-item'>Ablehnung von Dieselverboten und Tempolimits auf Autobahnen</li>
                                        <li className='list-group-item'>Ermöglichen des begleiteten Fahrens ab 16</li>
                                        <li className='list-group-item'>Schließen von Lücken in Autobahnnetzen und Sanierung von Autobahnen und Brücken</li>
                                        <li className='list-group-item'>Forderung nach mehr LKW-Parkplätzen</li>
                                        <li className='list-group-item'>Entlastung der Bundesautobahnen (Verlagerung des Transit-Güterverkehres auf Schienen und Wasserwege)</li>
                                        <li className='list-group-item'>Sanierung von Schleusen und Wehere (effizienterer Nutzung von Wasserwegen)</li>
                                        <li className='list-group-item'>Europäischer Schienenverkehr (einheitliches europäisches Zugsicherungssystems)</li>
                                        <li className='list-group-item'>Stärkung des Luftverkehrs</li>
                                        <li className='list-group-item'>Abschaffung von Luftverkehrssteuer und unrealistischen EZ-CO2-Reduktionszielen</li>
                                        <li className='list-group-item'>Ablehnung der EU-Einmischung in Antriebstechnologien (Beibehaltung der Verbrenner Motoren)</li>
                                        <li className='list-group-item'>Gleichbehandlung von Fahrzeugen mit synthetischem Kraftstoff und Elektrofahrzeugen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-10">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Bauen und Wohnen</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>erhalt nationaler Baulkultur</li>
                                        <li className='list-group-item'>Ablehnung der EU-Einmischung (Baurecht und Verordnungen sollen ausschließlich in nationaler Zuständigkeit bleiben)</li>
                                        <li className='list-group-item'>Verschärfungen der Baurichtlinien durch die EU werden abgelehnt (führt sonst zu Kosten- Mietssteigerungen)</li>
                                        <li className='list-group-item'>gegen EU-Bestrebung ab 2030 nur noch klimaneutrale Wohnhäuser zu erlauben</li>
                                        <li className='list-group-item'>keine EU-weite Solarpflicht</li>
                                        <li className='list-group-item'>gegen EU-Sanierungspflicht von ineffizienten Gebäuden</li>
                                        <li className='list-group-item'>Kreditrichtlinien sollen aufgehoben werden (Kreditfinanzierung zu erleichtern)</li>
                                        <li className='list-group-item'>Die Migrationspolitik der EU wird als Belastung für den Wohnmarkt und als Grund für steigende Mieten und Verdrängung der Einheimischen kritisiert (soll beendet werden)</li>
                                        <li className='list-group-item'>Analog zu den strategischen Ölreserven sollen auch Gasspeicher vorgehalten werden</li>
                                        <li className='list-group-item'>Lebensbedingungen sollen im ländlichen Raum denen in der Stadt nicht hinterherhinken (verkehrliche und digitale Infrastruktur soll gestärkt werden)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-11">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Land- und Forstwirtschaft, Naturschutz, Tierwohl, Jagd, Umwelt- und Verbraucherschutz</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Ablehnung des <span onClick={() => handleShow(greenDeal[0], greenDeal[1])} className='more-info text-primary'>Green Deal</span> und der gemeinsamen Agrarpolitik (Förderung regionaler und nationaler Entscheidungsfreiheit)</li>
                                        <li className='list-group-item'>Unterstützung kleiner Betriebe (Faire Marktbedingungen)</li>
                                        <li className='list-group-item'>Ablehnung der Umwindung landwirtschaftlicher Flächen für erneuerbare Energie</li>
                                        <li className='list-group-item'>Förderung der nachhaltigen Waldbewirtschaftung und des Waldumbaus</li>
                                        <li className='list-group-item'>Förderung artgerechter Tierhaltung</li>
                                        <li className='list-group-item'>Reduzierung des Antibiotikaeinsatzes</li>
                                        <li className='list-group-item'>Unterstützung einer naturgerechten Jagd (Kontrolle der Wildtierbestände)</li>
                                        <li className='list-group-item'>Verhinderung weiterer EU-Eingriffe in Jagd- Waffen- und Lebensmittelrecht</li>
                                        <li className='list-group-item'>Kritik an der Windkraftindustrie wegen negativen Auswirkungen auf Pflanzen, Tiere und die Gesundheit des Menschen</li>
                                        <li className='list-group-item'>Gewässerschutz fällt in die Zuständigkeit der Bundesländer</li>
                                        <li className='list-group-item'>Förderung von klaren und verständlichen Produktinformationen und Kennzeichnungspflicht</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-12">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Klima Energie und Digitalisierung</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Klimaveränderungen sind normal und nicht alarmierend</li>
                                        <li className='list-group-item'>Spezielle Maßnahmen in Deutschland sind unnötig (finanzielle und regulatorische Belastung aufgrund von hypothetischen Zukunftsszenarien sind unvernünftig)</li>
                                        <li className='list-group-item'>Wohlstand und eine starke Wirtschaft sind entscheidend für Reaktion auf klimatische Veränderungen</li>
                                        <li className='list-group-item'>Ablehnung der Theorie des menschengemachten Klimawandel (politisches Instrument)</li>
                                        <li className='list-group-item'><span onClick={() => handleShow(fitfür55[0], fitfür55[1])} className='more-info text-primary'>Fit für 55</span> soll Wohlstand reduzieren und Freiheit einschränken</li>
                                        <li className='list-group-item'>Kritik an Wind- und Solarenergie (zu teuer und unzuverlässig)</li>
                                        <li className='list-group-item'>Erdgas, Kernenergie und Kohle</li>
                                        <li className='list-group-item'>Fordern Abschaffung von Klimaschutzgesetzen und Programmen</li>
                                        <li className='list-group-item'>Aufhebung der Subvention für Solar- und Windenergie</li>
                                        <li className='list-group-item'>Förderung von Kernenergieforschung und Wiederaufnahme der Stromproduktion in stillgelegten Kernkraftwerken</li>
                                        <li className='list-group-item'>Schutz der Freiheitsrechte im Internet</li>
                                        <li className='list-group-item'>Förderung von europäischer und quelloffener Software</li>
                                        <li className='list-group-item'>Erhalt des Bargelds und das Recht auf ein analoges Leben ohne digitale Identität</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-13">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Familie</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>starke Förderung von Familien (Bekämpfung von niedrigen Geburtsraten und Überalterung)</li>
                                        <li className='list-group-item'>Kritik an EU-Einmischung in nationale Familienpolitik</li>
                                        <li className='list-group-item'>Ablehnung von Abtreibung außer bei medizinischen Indikationen</li>
                                        <li className='list-group-item'>Ablehnung von Leihmutterschaft</li>
                                        <li className='list-group-item'>Ablehnung der Gender-Ideologie (Verbot von Geschlechtsumwandlung von Minderjährigen)</li>
                                        <li className='list-group-item'>Kritik an der Regelung des Kindergeldes (insbesondere die Zahlungen ins Ausland unabhängig von den Lebensverhältnissen der Kinder)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-14">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Gesundheitspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>lehnt EU-Einmischung ab (nationale Verantwortung in der Gesundheitspolitik) </li>
                                        <li className='list-group-item'>Ablehnung der weitern Privatisierung von Krankenhäusern</li>
                                        <li className='list-group-item'>Unterstützung eines landesweiten Netzes an Apotheken zur Sicherstellung der Arzneimittelversorgung</li>
                                        <li className='list-group-item'>gegen den Versandhandel mit rezeptpflichtigen Medikamenten (regionale Versorgungsmodelle)</li>
                                        <li className='list-group-item'>Ablehnung medizinischer Behandlung welche verbunden ist mit dem „Gender Mainstreaming“ (insbesondere Minderjährige)</li>
                                        <li className='list-group-item'>gegen Impfpflicht</li>
                                        <li className='list-group-item'>Forderung nach Qualifikation von medizinischem Personal nach deutsch Standards (Ablehnung von Mitarbeitern mit sprachlichen Defiziten)</li>
                                        <li className='list-group-item'>Ablehnung einer zentralistischen Speicherung von Gesundheitsdaten auf EU-Ebene (Datenschutz)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-15">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='mb-3'>
                                    <h4 className='mt-3 mb-2'>Bildung</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Unterstützung des dualen Studiums</li>
                                        <li className='list-group-item'>Beibehaltung von Förder- und Sonderschulen</li>
                                        <li className='list-group-item'>Ablehnung einer vollständigen Digitalisierung im Bildungsbereich</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='big'>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-1">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>AFD-Fraktion</h4>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span onClick={() => handleShow(fraktionsvorsitzener[0], fraktionsvorsitzener[1])} className='more-info text-primary'>Fraktionsvorsitzende</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Alice Weidel
                                                            <Image src={"/Images/weidel_alice_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Tino Chrumpalla
                                                            <Image src={"/Images/chrupalla_tino_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span onClick={() => handleShow(ersterParlamenttarischerGeschäftsführer[0], ersterParlamenttarischerGeschäftsführer[1])} className='more-info text-primary'>Erster Parlamenttarischer Geschäftsführer</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Bernd Baumann
                                                            <Image src={"/Images/baumann_bernd_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><span onClick={() => handleShow(parlamentarischeGeschäftsführer[0], parlamentarischeGeschäftsführer[1])} className='more-info text-primary'>Parlamentarische Geschäftsführer</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Stephan Brandner
                                                            <Image src={"/Images/brandner_stephan_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Götz Frömming
                                                            <Image src={"/Images/froemming_goetz_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Enrico Komning
                                                            <Image src={"/Images/komning_enrico_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header><span onClick={() => handleShow(stellvertretendeFraktionsvorsitzende[0], stellvertretendeFraktionsvorsitzende[1])} className='more-info text-primary'>Stellvertretende Fraktionsvorsitzende</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Sebastian Münzenmaier
                                                            <Image src={"/Images/muenzenmaier_sebastian_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Beatrix von Storch
                                                            <Image src={"/Images/storch_beatrix_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Jörn König
                                                            <Image src={"/Images/koenig_joern_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Stefan Keuter
                                                            <Image src={"/Images/keuter_stefan_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header><span onClick={() => handleShow(ehrenvorsitzender[0], ehrenvorsitzender[1])} className='more-info text-primary'>Ehrenvorsitzender</span></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div className='d-flex justify-content-between'>
                                                            Dr. Alexander Gauland
                                                            <Image src={"/Images/gauland_alexander_gross.jpg"} alt="icon" width={35} height={35} style={{ borderRadius: "50%" }} className="me-3" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-2"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-2">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Ziel der AFD</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>nüchterner Staatenbund</li>
                                        <li className='list-group-item'>die Wirschaft soll von politischer Belastung befreit werden</li>
                                        <li className='list-group-item'>Abbau der Staatsverschuldung</li>
                                        <li className='list-group-item'>möchte eine Erneuerung des europäischen Gedankens (Europa der Vaterländer)</li>
                                        <li className='list-group-item'>Förderung von Bildung</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-3"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-3">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Kürzliche Änderung aus der rechten ID-Fraktion</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Faktion von rechten Parteien (Lega Nord, Rassemblement National)</li>
                                        <li className='list-group-item'>aufgrundvon den jüngsten Skandalen ist die AFD aus dieser Fraktion rausgeflogen</li>
                                        <li className='list-group-item'>Hauptgrund ist Maximailian Krah (verharmlosende Aussagen zur SS, Spionageaffäre um einem Mitarbeiter welcher Nähe zu Russland und China hat)</li>
                                        <li className='list-group-item'>die AFD wollte zuerst Krah aufgeben, sind dann aber doch ganz rausgeflogen</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-4"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-4">
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
                                    <a className="bg-primary item-link" href="#list-item-5"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-5">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Steuern und Finanzen</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>EU soll durch ihre Mitgliedstaaten finanziert werden und keine eigenen Steuern erheben</li>
                                        <li className='list-group-item'>Großkonzerne sollen dort besteuert werden, wo sie aktiv sind und nicht wo der Unternehmenssitz ist</li>
                                        <li className='list-group-item'>Förderung von Unternehmen durch Steuererleichterungen (wie in Luxemburg)</li>
                                        <li className='list-group-item'>Ablehnung von CO2-Bepreisung (Wohlstandsverlust und Handelskrisen)</li>
                                        <li className='list-group-item'>Ablehnung des <span onClick={() => handleShow(bruttonationaleinkommens[0], bruttonationaleinkommens[1])} className='more-info text-primary'>Bruttonationaleinkommens</span> als Bemessungsgrundlage für EU-Beiträge, stattdessen das Volkseinkommen da es den jährlichen Wirtschaftserträge besser abgebildet (Deutschland sonst übermäßig belastet)</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-6"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-6">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Fundamentalistischen Islam</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Der Islam wird nicht nur als Religion betrachtet, sondern auch als Rechts- und Gesellschaftsordnung, die sich nicht mit den europäischen Grundprinzipien von Recht, Freiheit und Demokratie vereinbaren lässt</li>
                                        <li className='list-group-item'>Migration hat für Integrationsprobleme geführt (Ghettobildung und Kriminalität)</li>
                                        <li className='list-group-item'>Forderung von strikten Regeln und massiven Beschränkungen für die Zuwanderung in die EU</li>
                                        <li className='list-group-item'>Vollverschleierung von Frauen soll in der Öffentlichkeit verboten werden</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-7"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-7">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Migration</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>betont die Notwendigkeit eines effektiven Außengrenzenschutzes (illegale Einreisen zu verhindern)</li>
                                        <li className='list-group-item'>es wird enge Zusammenarbeit bei der heimatnahen Versorgung von Flüchtlingen und beim Aufbau von Schutzzentren gefordert</li>
                                        <li className='list-group-item'>lehnt die Aufnahme von <span onClick={() => handleShow(drittstaaten[0], drittstaaten[1])} className='more-info text-primary'>Drittstaaten</span> in die EU ab</li>
                                        <li className='list-group-item'>fordert verstärkte Zusammenarbeit im Kampf gegen den islamischen Terrorismus und die Radikalisierung von Kindern</li>
                                        <li className='list-group-item'>lehnt unkontrollierte Masseneinwanderung ab</li>
                                        <li className='list-group-item'>Beendigung von Schlepperaktivitäten</li>
                                        <li className='list-group-item'>befürwortet qualifizierte Zuwanderer und lehnt ungelernte Zuwanderer aus Drittstaaten ab</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-8"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-8">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Verteidigungs- und Sicherheitspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Europa soll sich sicherheitspolitisch unabhängiger machen und eigene Verteidigungsgemeinschaften bilden (keine europäische Armee schaffen)</li>
                                        <li className='list-group-item'>NATO bleibt wichtig solange sie sich auf Verteidigung beschränkt</li>
                                        <li className='list-group-item'>Wiederherstellung der Verteidigungsfähigkeit Deutschlands (Aufstockung von Personal und Einführung von neuen Waffensystemen)</li>
                                        <li className='list-group-item'>Wiedereinführung der <span onClick={() => handleShow(wehrpflicht[0], wehrpflicht[1])} className='more-info text-primary'>Wehrpflicht</span></li>
                                        <li className='list-group-item'>Erhalt und Ausbau der wehrtechnischen Fähigkeiten und Arbeitsplätze in Deutschland</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-9"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-9">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Verkehrspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Freiheit der Bürger bei der Wahl des Verkehrsmittels (individuelle Mobilität muss bezahlbar bleiben)</li>
                                        <li className='list-group-item'>Schutz des motorisierten Individualverkehrs (Unterstützung und Förderung)</li>
                                        <li className='list-group-item'>Ablehnung von Dieselverboten und Tempolimits auf Autobahnen</li>
                                        <li className='list-group-item'>Ermöglichen des begleiteten Fahrens ab 16</li>
                                        <li className='list-group-item'>Schließen von Lücken in Autobahnnetzen und Sanierung von Autobahnen und Brücken</li>
                                        <li className='list-group-item'>Forderung nach mehr LKW-Parkplätzen</li>
                                        <li className='list-group-item'>Entlastung der Bundesautobahnen (Verlagerung des Transit-Güterverkehres auf Schienen und Wasserwege)</li>
                                        <li className='list-group-item'>Sanierung von Schleusen und Wehere (effizienterer Nutzung von Wasserwegen)</li>
                                        <li className='list-group-item'>Europäischer Schienenverkehr (einheitliches europäisches Zugsicherungssystems)</li>
                                        <li className='list-group-item'>Stärkung des Luftverkehrs</li>
                                        <li className='list-group-item'>Abschaffung von Luftverkehrssteuer und unrealistischen CO2-Reduktionszielen</li>
                                        <li className='list-group-item'>Ablehnung der EU-Einmischung in Antriebstechnologien (Beibehaltung der Verbrenner Motoren)</li>
                                        <li className='list-group-item'>Gleichbehandlung von Fahrzeugen mit synthetischem Kraftstoff und Elektrofahrzeugen</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-10"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-10">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Bauen und Wohnen</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>erhalt nationaler Baulkultur</li>
                                        <li className='list-group-item'>Ablehnung der EU-Einmischung (Baurecht und Verordnungen sollen ausschließlich in nationaler Zuständigkeit bleiben)</li>
                                        <li className='list-group-item'>Verschärfungen der Baurichtlinien durch die EU werden abgelehnt (führt sonst zu Kosten- Mietssteigerungen)</li>
                                        <li className='list-group-item'>gegen EU-Bestrebung ab 2030 nur noch klimaneutrale Wohnhäuser zu erlauben</li>
                                        <li className='list-group-item'>keine EU-weite Solarpflicht</li>
                                        <li className='list-group-item'>gegen EU-Sanierungspflicht von ineffizienten Gebäuden</li>
                                        <li className='list-group-item'>Kreditrichtlinien sollen aufgehoben werden (Kreditfinanzierung zu erleichtern)</li>
                                        <li className='list-group-item'>Die Migrationspolitik der EU wird als Belastung für den Wohnmarkt und als Grund für steigende Mieten und Verdrängung der Einheimischen kritisiert (soll beendet werden)</li>
                                        <li className='list-group-item'>Analog zu den strategischen Ölreserven sollen auch Gasspeicher vorgehalten werden</li>
                                        <li className='list-group-item'>Lebensbedingungen sollen im ländlichen Raum denen in der Stadt nicht hinterherhinken (verkehrliche und digitale Infrastruktur soll gestärkt werden)</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-11"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-11">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Land- und Forstwirtschaft, Naturschutz, Tierwohl, Jagd, Umwelt- und Verbraucherschutz</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Ablehnung des <span onClick={() => handleShow(greenDeal[0], greenDeal[1])} className='more-info text-primary'>Green Deal</span> und der gemeinsamen Agrarpolitik (Förderung regionaler und nationaler Entscheidungsfreiheit)</li>
                                        <li className='list-group-item'>Unterstützung kleiner Betriebe (Faire Marktbedingungen)</li>
                                        <li className='list-group-item'>Ablehnung der Umwindung landwirtschaftlicher Flächen für erneuerbare Energie</li>
                                        <li className='list-group-item'>Förderung der nachhaltigen Waldbewirtschaftung und des Waldumbaus</li>
                                        <li className='list-group-item'>Förderung artgerechter Tierhaltung</li>
                                        <li className='list-group-item'>Reduzierung des Antibiotikaeinsatzes</li>
                                        <li className='list-group-item'>Unterstützung einer naturgerechten Jagd (Kontrolle der Wildtierbestände)</li>
                                        <li className='list-group-item'>Verhinderung weiterer EU-Eingriffe in Jagd- Waffen- und Lebensmittelrecht</li>
                                        <li className='list-group-item'>Kritik an der Windkraftindustrie wegen negativen Auswirkungen auf Pflanzen, Tiere und die Gesundheit des Menschen</li>
                                        <li className='list-group-item'>Gewässerschutz fällt in die Zuständigkeit der Bundesländer</li>
                                        <li className='list-group-item'>Förderung von klaren und verständlichen Produktinformationen und Kennzeichnungspflicht</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-12"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-12">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Klima Energie und Digitalisierung</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Klimaveränderungen sind normal und nicht alarmierend</li>
                                        <li className='list-group-item'>Spezielle Maßnahmen in Deutschland sind unnötig (finanzielle und regulatorische Belastung aufgrund von hypothetischen Zukunftsszenarien sind unvernünftig)</li>
                                        <li className='list-group-item'>Wohlstand und eine starke Wirtschaft sind entscheidend für Reaktion auf klimatische Veränderungen</li>
                                        <li className='list-group-item'>Ablehnung der Theorie des menschengemachten Klimawandel (politisches Instrument)</li>
                                        <li className='list-group-item'><span onClick={() => handleShow(fitfür55[0], fitfür55[1])} className='more-info text-primary'>Fit für 55</span> soll Wohlstand reduzieren und Freiheit einschränken</li>
                                        <li className='list-group-item'>Kritik an Wind- und Solarenergie (zu teuer und unzuverlässig)</li>
                                        <li className='list-group-item'>Erdgas, Kernenergie und Kohle</li>
                                        <li className='list-group-item'>Fordern Abschaffung von Klimaschutzgesetzen und Programmen</li>
                                        <li className='list-group-item'>Aufhebung der Subvention für Solar- und Windenergie</li>
                                        <li className='list-group-item'>Förderung von Kernenergieforschung und Wiederaufnahme der Stromproduktion in stillgelegten Kernkraftwerken</li>
                                        <li className='list-group-item'>Schutz der Freiheitsrechte im Internet</li>
                                        <li className='list-group-item'>Förderung von europäischer und quelloffener Software</li>
                                        <li className='list-group-item'>Erhalt des Bargelds und das Recht auf ein analoges Leben ohne digitale Identität</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-13"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-13">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Familie</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>starke Förderung von Familien (Bekämpfung von niedrigen Geburtsraten und Überalterung)</li>
                                        <li className='list-group-item'>Kritik an EU-Einmischung in nationale Familienpolitik</li>
                                        <li className='list-group-item'>Ablehnung von Abtreibung außer bei medizinischen Indikationen</li>
                                        <li className='list-group-item'>Ablehnung von Leihmutterschaft</li>
                                        <li className='list-group-item'>Ablehnung der Gender-Ideologie (Verbot von Geschlechtsumwandlung von Minderjährigen)</li>
                                        <li className='list-group-item'>Kritik an der Regelung des Kindergeldes (insbesondere die Zahlungen ins Ausland unabhängig von den Lebensverhältnissen der Kinder)</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-14"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-14">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Gesundheitspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>lehnt EU-Einmischung ab (nationale Verantwortung in der Gesundheitspolitik) </li>
                                        <li className='list-group-item'>Ablehnung der weitern Privatisierung von Krankenhäusern</li>
                                        <li className='list-group-item'>Unterstützung eines landesweiten Netzes an Apotheken zur Sicherstellung der Arzneimittelversorgung</li>
                                        <li className='list-group-item'>gegen den Versandhandel mit rezeptpflichtigen Medikamenten (regionale Versorgungsmodelle)</li>
                                        <li className='list-group-item'>Ablehnung medizinischer Behandlung welche verbunden ist mit dem „Gender Mainstreaming“ (insbesondere Minderjährige)</li>
                                        <li className='list-group-item'>gegen Impfpflicht</li>
                                        <li className='list-group-item'>Forderung nach Qualifikation von medizinischem Personal nach deutsch Standards (Ablehnung von Mitarbeitern mit sprachlichen Defiziten)</li>
                                        <li className='list-group-item'>Ablehnung einer zentralistischen Speicherung von Gesundheitsdaten auf EU-Ebene (Datenschutz)</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a className="bg-primary item-link" href="#list-item-15"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className='themen-container d-flex justify-content-center align-items-center' id="list-item-15">
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 className='mt-3 mb-2'>Bildung</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Unterstützung des dualen Studiums</li>
                                        <li className='list-group-item'>Beibehaltung von Förder- und Sonderschulen</li>
                                        <li className='list-group-item'>Ablehnung einer vollständigen Digitalisierung im Bildungsbereich</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
