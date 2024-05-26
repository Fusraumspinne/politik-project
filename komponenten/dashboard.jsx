import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Dashboard() {
    return (
        <div>
            <div>
                <div>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                        <div className='themen-container d-flex justify-content-center align-items-center'>
                            <div className='row bg-body-tertiary info-container'>
                                <div className='col-10 mb-3'>
                                    <h4 id="list-item-3" className='mt-3 mb-2'>Geld- und Währungspolitik</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Euro ist nicht für 20 Volkswirtschaften konstruiert</li>
                                        <li className='list-group-item'>Einheitswährung führt zu hoher Arbeitslosigkeit im Süden Europas</li>
                                        <li className='list-group-item'>Verlust der Wettbewerbsfähigkeit</li>
                                        <li className='list-group-item'>Wiedereinführung der Nationalwährung (hohe Kaufkraft und niedrige Inflation durch eine neue deutsche Mark (sozialen Marktwirtschaft))</li>
                                    </ul>
                                </div>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <a class="bg-primary item-link" href="#list-item-1"><ArrowDownwardIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}