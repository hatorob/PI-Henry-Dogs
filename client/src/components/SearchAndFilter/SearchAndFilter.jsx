import { DivContainer, DivSearchAndFilter, DivFilter, DivSelect, P, DivSearch } from "./styledSearchAndFilter";
import { useSelector, useDispatch } from "react-redux";
import { filterTemperaments, displayState, getDogsApi, getDogsCreate, resetFilterAll } from "../../redux/actions";

const SearchAndFilter = () => {

    //! Estado global para validar ALL, API, CREATE

    const dispatch = useDispatch();

    const temperaments = useSelector( state => state.temperaments );
    const display = useSelector( state => state.displayState );


    const handleClick = (e) => {

        //Este if me permite identificar si estoy usando filtros
        if(e.currentTarget.name === "temperaments") {
            const temperamentSearch = e.target.value;
            //console.log("buscar:", temperamentSearch);
            dispatch(filterTemperaments(temperamentSearch));
        }
    }

    const handleChecked = (e) => {
        
        if(e.target.value === "all") {
            dispatch(displayState({
                all: true,
                api: false,
                create: false,
            }))
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll())
        }
        if(e.target.value === "api") {
            dispatch(displayState({
                all: false,
                api: true,
                create: false,
            }))
            // Este dispatch me permite obtener los perros según requiera el usuario
            dispatch(getDogsApi());
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll())
        }
        if(e.target.value === "create") {
            dispatch(displayState({
                all: false,
                api: false,
                create: true,
            }))
            // Este dispatch me permite obtener los perros según requiera el usuario
            dispatch(getDogsCreate());
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll())
        }
    }

    return (
        <DivContainer>
            <DivSearchAndFilter>
                <DivFilter>
                    <P>Temperaments:</P>
                    <select onChange={handleClick} name="temperaments">
                        {
                            Array.isArray(temperaments) && temperaments?.map( (temperaments, index) => {
                                return <option value={temperaments.name} key={index}>{temperaments.name}</option>
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
                    <div>
                        <label>ALL</label>
                        <input type="checkbox" name="" value="all" checked={display.all} onChange={handleChecked}/>
                    </div>
                    <div>
                        <label>API</label>
                        <input type="checkbox" name="" value="api" checked={display.api} onChange={handleChecked}/>
                    </div>
                    <div>
                        <label>CREATE</label>
                        <input type="checkbox" name="" value="create" checked={display.create} onChange={handleChecked}/>
                    </div>
                </DivSelect>
            </DivSearchAndFilter>
        </DivContainer>
    )
}

export default SearchAndFilter;