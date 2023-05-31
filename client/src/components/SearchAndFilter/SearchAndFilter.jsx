import { DivContainer, DivSearchAndFilter, DivFilter, DivSelect, P, DivSearch } from "./styledSearchAndFilter";
import { useSelector, useDispatch } from "react-redux";
import { filterTemperaments } from "../../redux/actions";

const SearchAndFilter = () => {

    const dispatch = useDispatch();

    const temperaments = useSelector( state => state.temperaments );

    const handleClick = (e) => {
        const temperamentSearch = e.target.value;
        console.log("buscar:", temperamentSearch);
        dispatch(filterTemperaments(temperamentSearch));
    }

    return (
        <DivContainer>
            <DivSearchAndFilter>
                <DivFilter>
                    <P>Temperaments:</P>
                    <select onChange={handleClick}>
                        {
                            Array.isArray(temperaments) && temperaments?.map( (temperaments, index) => {
                                return <option value={temperaments.name} key={index} name="temperaments">{temperaments.name}</option>
                            }) 
                        }
                    </select>
                    <P>Weight</P>
                    <P>Alphabetic</P>
                </DivFilter>
                <DivSearch>
                    <P>Search</P>
                </DivSearch>
                <DivSelect>
                    <P>Seleccione:</P>
                    <P>ALL</P>
                    <P>API</P>
                    <P>CREADOS</P>
                </DivSelect>
            </DivSearchAndFilter>
        </DivContainer>
    )
}

export default SearchAndFilter;