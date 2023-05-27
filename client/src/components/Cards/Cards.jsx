import Card from "../Card/Card";
import { DivContainer } from './styledCards';

const Cards = ({dogs}) => {
    return (
        <DivContainer>
            {
                dogs.map( (dog,index) => {
                    return (
                        <Card key={index}
                              id={dog.id}
                              name={dog.name}
                              imagen={dog.imagen}
                              height={dog.height}
                              weight={dog.weight}
                              yearsLife={dog.yearsLife}
                              temperaments={dog.temperaments}
                        />
                    )
                })
            }
        </DivContainer>
    )
}

export default Cards;