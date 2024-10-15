import Titles from "./style"

type Props ={
    title : string
}
const Title = ({title}: Props) =>{
    return(
        <>
        <Titles>
            <h2>
                {title}
            </h2>
        </Titles>
        </>
    )
}

export default Title