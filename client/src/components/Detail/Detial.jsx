import { DivPage, DivContainer, DivImage, DivDetail, DivHeightWeight, Span, P, DivTemperaments, Button  } from "./styledDetail";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { resetById } from '../../redux/actions';
const Detail = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dog = useSelector( state => state.dogById );
 

    const clickBack = () => {
        console.log("hola");
        navigate("/home");
        dispatch(resetById());
    }


    return (
        <DivPage>
            <DivContainer>
                <DivImage imagen={dog.imagen} >
                </DivImage>
                <DivDetail>
                    <h1> {dog.name} </h1>
                     {
                      dog.yearsLife && dog.yearsLife.includes("years") ? <P> <Span>Years of life:  </Span>{dog.yearsLife.split(" - ")[1]}</P> 
                      : <P> <Span>Years of life:  </Span>{dog.yearsLife} years </P>
                     }
                    <DivHeightWeight>
                        <P> <Span>Weight:  </Span> {dog.weight} kg </P>
                        <P> <Span>Height:  </Span> {dog.height} cm </P>
                    </DivHeightWeight>
                    <DivTemperaments>
                        <h2>Temperaments</h2>
                        <ul>
                            { dog.temperaments && dog?.temperaments.map( temperament => <li>{temperament}</li>)}
                        </ul>
                    </DivTemperaments>
                    <Button onClick={clickBack}>GO BACK</Button>
                </DivDetail>
            </DivContainer>
        </DivPage>
    )
}


export default Detail;