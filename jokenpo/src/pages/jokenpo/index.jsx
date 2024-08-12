import './jokenpo.css'

function Jokenpo() {
    return (
        <>
            <div className='containerall'>
                <div className='all'>
                    <div className='header'>
                        <h1>Jokenpo</h1>
                    </div>
                    <div className='container'>
                        <div className='tabela'>
                            <div>
                                <h2>PEDRA</h2>
                                <h2>PAPEL</h2>
                                <h2>TESOURA</h2>
                            </div>
                            <div className='placar'>
                                <div>
                                    <h5>PLACAR</h5>
                                    <h1>2</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='options'>
                        <div className='botoes'>
                            <button>PEDRA</button>
                            <button>PAPEL</button>
                            <button>TESOURA</button>
                        </div>
                        <div>
                            <h1>COMPUTADOR</h1>
                        </div>
                    </div>
                    <div className='competicao'>
                        <div className='user'>
                            <img src="../public/tesoura.png" alt="" width="250px" />
                        </div>
                        <div className='cpu'>
                            <img src="../public/tesoura.png" alt="" width="250px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jokenpo