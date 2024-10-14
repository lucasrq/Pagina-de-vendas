import React from 'react';
import { BodyHeadline, Container, ImgHeadline, Quadrado1, Quadrado2, Quadrado3, Quadrado4, Quadrado5 } from "./style";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Registre os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Headline() {
    // Dados do gráfico para Curto Prazo
    const shortTermData = {
        labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
        datasets: [
            {
                label: 'Curto Prazo',
                data: [250, 500, 750, 900, 1200, 1500],
                backgroundColor: 'rgba(45, 220, 106, 0.6)',
            },
        ],
    };

    // Dados do gráfico para Longo Prazo
    const longTermData = {
        labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'],
        datasets: [
            {
                label: 'Longo Prazo',
                data: [3000, 6000, 12000, 20000, 35000],
                backgroundColor: 'rgba(19, 73, 224, 0.6)',
            },
        ],
    };

    return (
        <>
            <Quadrado1></Quadrado1>
            <Quadrado2></Quadrado2>
            <Quadrado3></Quadrado3>
            <Quadrado4></Quadrado4>
            <Quadrado5></Quadrado5>
            <Container>
                <BodyHeadline>
                    <div className="HeadlineTitle">
                        <h1>
                            Descubra como <br />
                            múltiplacar seus ganhos <br />
                            <span>
                                com um método comprovado <br />
                                de investimentos
                            </span>
                        </h1>
                    </div>
                </BodyHeadline>

                <ImgHeadline>
                <div className='Top'>
                <h2>Investimentos a Curto Prazo</h2>
                    <div style={{ height: '300px', width: '100%' }}>
                        <Bar data={shortTermData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
                    
                <div className='Bottom'>
                <h2>Investimentos a Longo Prazo</h2>
                    <div style={{ height: '300px', width: '100%'}}>
                        <Bar data={longTermData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
                    
                </ImgHeadline>
            </Container>
        </>
    );
}

export default Headline;
