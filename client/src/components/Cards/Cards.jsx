import Card from "../Card/Card";
import { DivContainer, DivBottons } from './styledCards';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from "../../redux/actions";


const Cards = ({dogs}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector( state => state.paginate.currentPage );
    const itemsPage = useSelector( state => state.paginate.itemsPage );

    //!Estado inicial del index para los items de mis dogs en la paginación (todo depende de mi current page)
    const startIndex = (currentPage - 1) * itemsPage;
    //!Donde va a terminar mis items de dogs para la paginación (todo depende de mi current page)
    const endIndex = startIndex + itemsPage;
    //! hago un slice para que me entregue un nuevo array con los perros que requiero por paginate
    const dogsPaginate = dogs.slice(startIndex,endIndex);
    //! Aquí me da el total de paginas que debe tener mi page.
    const allPages = Math.ceil(dogs.length / itemsPage);


    const handlePreviusPg = () => {
        if(currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
    }

    const handleNextPg = () => {
        if(currentPage < allPages) dispatch(setCurrentPage(currentPage + 1));
    }



    return (
        <div>
            <DivContainer>
                {
                
                dogsPaginate.map( (dog,index) => {
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
            <DivBottons>
                <button onClick={handlePreviusPg} disabled={currentPage === 1}>previus</button>
                <label>{currentPage}</label>
                <button onClick={handleNextPg} disabled={currentPage === allPages}>Next</button>
            </DivBottons>
        </div>
    )
}

export default Cards;