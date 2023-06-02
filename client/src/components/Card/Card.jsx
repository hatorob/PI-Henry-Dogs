import { DivCard, DivDescription, DivWeight, DivTemperaments, DivDetail, DivLink } from './styledCard';
import { getDogsById } from "../../redux/actions";
import { useDispatch } from 'react-redux';

const Card = ({id, name, imagen, weight ,temperaments}) => {

    
    const dispatch = useDispatch();

    const clickDetail = () => {
        dispatch(getDogsById(id));
    }

    return (
        <DivCard imagen={imagen}>
            <DivDescription>
                <DivWeight>
                    <p>{weight.split("-")[1]}kg</p>
                </DivWeight>
                <h1>{name}</h1>
                <DivTemperaments>
                    {   
                        temperaments?.map( (element,index) => {
                            return (index <= 3) ? <p key={index}>{element}</p> : null
                        })
                    }
                </DivTemperaments>
                <DivDetail>
                    <DivLink to={`/detail/${id}`} >
                        <p onClick={clickDetail}> {`>`} </p>
                    </DivLink>
                </DivDetail>
            </DivDescription>
        </DivCard>
    )
}

export default Card;