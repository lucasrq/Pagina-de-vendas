
import { useState } from "react"
import { Container } from "./style"

function PerguntasFrequentes() {
    const [numberFaq, setNumberFaq] = useState(1);

    
    const Pergunta = () => {
        if (numberFaq === 1) {
            return (
                <p>
                    Os resultados podem variar dependendo do valor investido, da consistência
                    dos aportes e do desempenho do mercado. Em média, é possível começar a
                    ver resultados significativos entre 1 e 5 anos, mas é importante manter
                    a disciplina e o foco no longo prazo.
                </p>
            );
        }
        if (numberFaq === 2) {
            return (
                <p>
                    Não! Você pode começar com quantias pequenas, como R$ 100 ou até menos, dependendo da corretora. O importante é começar cedo e ser consistente nos seus aportes. Com o tempo, os pequenos investimentos crescem, especialmente se você reinvestir os dividendos.
                </p>
            )
        };
        if (numberFaq === 3) {
            return (
                <p>
                    Os investimentos em ações e renda variável têm riscos maiores comparados a renda fixa, já que os preços das ações podem variar muito. No entanto, a diversificação do portfólio e uma estratégia de longo prazo ajudam a minimizar esses riscos e potencializar os ganhos.
                </p>
            )
        };
        if (numberFaq === 4) {
            return (
                <p>
                    Os dividendos são uma parte dos lucros que as empresas distribuem aos acionistas. Ao investir em ações de empresas que pagam dividendos, você recebe uma renda passiva com base nos lucros da empresa, normalmente de forma trimestral ou semestral.
                </p>
            )
        };
        if (numberFaq === 5) {
            return (
                <p>
                    Não é necessário um conhecimento avançado. Com o básico bem entendido e ferramentas como simuladores de investimento, você pode começar sua jornada. O importante é aprender continuamente e ajustar suas estratégias conforme ganha mais experiência.
                </p>
            )
            return null
        };
    };
    return (
        <Container>
            <h1>FAQ</h1>
            <h2>PERGUNTAS FREQUENTES </h2>

            <div className="FAQ">
                <div className="Perguntas">
                    <div>
                        <button onClick={() => {
                            setNumberFaq(1)
                        }}>1. Quanto tempo leva para ver resultados
                            significativos nos investimentos?</button>
                        <button onClick={() => {
                            setNumberFaq(2)
                        }}>2. Preciso ter muito dinheiro para começar
                            a investir?</button>
                        <button onClick={() => {
                            setNumberFaq(3)
                        }}>3. Qual é o risco de investir em ações
                            e renda variável?</button>
                        <button onClick={() => {
                            setNumberFaq(4)
                        }}>4. Como os dividendos funcionam?</button>
                        <button onClick={() => {
                            setNumberFaq(5)
                        }}>5. Preciso de um conhecimento avançado
                            para começar a investir?</button>
                    </div>
                </div>
                <div className="Respostas">
                    {Pergunta()}
                </div>
            </div>
        </Container>
    )
}

export default PerguntasFrequentes