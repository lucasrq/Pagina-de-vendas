import { Container } from "./style"

function Next() {
    return (
        <Container>
            <div className="left">
                <h3>
                    O PRÓXIMO PASSO <br />
                    <span>
                        A HORA DE TER
                        ATITUDE
                    </span>
                </h3>


                <p>
                    Não perca mais tempo enfrentando a
                    incerteza e a frustração com seus
                    investimentos. Com o Manual do
                    Investidor Inteligente, você terá em
                    mãos um guia completo que vai
                    transformar sua estratégia financeira e
                    te ajudar a alcançar a tão desejada
                    renda passiva. E mais... ao comprar
                    agora, você ainda garante acesso a
                    bônus exclusivos que vão acelerar seus
                    resultados e colocar você no caminho
                    certo para construir um futuro
                    financeiro próspero
                </p>
            </div>

            <div className="right" id="Pagamentos">
                <h1><s>de R$99 por </s></h1>

                <h4>apenas 6x de</h4>

                <h2>R$ 2,88</h2>

                <h3>
                ou <u>R$17,29</u>  a vista.
                </h3>
                <a href="https://pay.kiwify.com.br/0ixlZ3n">
                <button>
                    GARANTA JÁ
                </button>
                </a>
               
            </div>
        </Container>
    )
}

export default Next