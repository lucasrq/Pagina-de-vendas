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
import { useEffect } from "react";

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
                backgroundColor: 'rgba(28, 92, 242, 0.6)',
            },
        ],
    };


    const moveQuadradoRandomly = (id: string) => {
        const quadrado = document.getElementById(id);
        if (quadrado) {
            const quadradoWidth = quadrado.offsetWidth;
            const quadradoHeight = quadrado.offsetHeight;

            // Limitar as coordenadas X e Y para evitar que os quadrados saiam da janela
            const randomX = Math.random() * (window.innerWidth - quadradoWidth);
            const randomY = Math.random() * (window.innerHeight - quadradoHeight);

            quadrado.style.transform = `translate(${randomX}px, ${randomY}px)`; // Move para a posição aleatória
            quadrado.style.transition = 'transform 2s ease'; // Adiciona transição suave
        }
    };

    // useEffect para iniciar a animação quando o componente for carregado
    useEffect(() => {
        const interval = setInterval(() => {
            // Movimenta os quadrados aleatoriamente a cada 2 segundos
            moveQuadradoRandomly('quadrado1');
            moveQuadradoRandomly('quadrado2');
            moveQuadradoRandomly('quadrado3');
            moveQuadradoRandomly('quadrado4');
            moveQuadradoRandomly('quadrado5');
        }, 2000); // Intervalo de 2 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <>
            <Quadrado1 id="quadrado1"></Quadrado1>
            <Quadrado2 id="quadrado2"></Quadrado2>
            <Quadrado3 id="quadrado3"></Quadrado3>
            <Quadrado4 id="quadrado4"></Quadrado4>
            <Quadrado5 id="quadrado5"></Quadrado5>

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
                    <div style={{ height: '270px', width: '100%' }}>
                        <Bar data={shortTermData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
                    
                <div className='Bottom'>
                <h2>Investimentos a Longo Prazo</h2>
                    <div style={{ height: '270px', width: '100%'}}>
                        <Bar data={longTermData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
                    
                </ImgHeadline>
            </Container>
        </>
    );
}

export default Headline;
