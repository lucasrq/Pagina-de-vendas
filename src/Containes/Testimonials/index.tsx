import Title from "../../Components/Title"
import { Container } from "./style"
import depoimento1 from '../../../public/depoimento1.jpg'
import depoimento2 from '../../../public/depoimento2.jpg'
import depoimento3 from '../../../public/depoimento3.jpg'



function Testemons(){

    return(
        <Container>
            <Title title="Depoimentos "/>

            <div className="Depoimentos">
                    <img src={depoimento1}/>
                    <img src={depoimento2}/>
                    <img src={depoimento3}/>
            </div>
        </Container>
    )
}

export default Testemons