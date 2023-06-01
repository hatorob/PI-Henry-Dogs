import { DivCard, DivDescription, DivWeight, DivTemperaments, DivDetail } from './styledCard';

const Card = ({id, name, imagen, weight ,temperaments}) => {
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
                    <p> {`>`} </p>
                </DivDetail>
            </DivDescription>
        </DivCard>
    )
}

export default Card;