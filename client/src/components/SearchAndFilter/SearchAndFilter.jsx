import { DivContainer, DivSearchAndFilter, DivFilter, DivSelect, P, DivSearch } from "./styledSearchAndFilter";
import { useSelector, useDispatch } from "react-redux";
import { filterTemperaments, filterWeight, displayState, getDogsApi, getDogsCreate, resetFilterAll, filterAlphabetic, setCurrentPage, getDogsByName } from "../../redux/actions";

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
            dispatch(setCurrentPage(1));
        }
        if(e.currentTarget.name === "weight") {
            const weightSearch = e.target.value;
            //console.log(weightSearch);
            dispatch(filterWeight(weightSearch));
            dispatch(setCurrentPage(1));
        }
        if(e.currentTarget.name === "alphabetic") {
            const alphabeticSearch = e.target.value;
            //console.log(alphabeticSearch);
            dispatch(filterAlphabetic(alphabeticSearch))
            dispatch(setCurrentPage(1));
        }
    }

    const handleChecked = (e) => {
        
        if(e.target.value === "all") {
            //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            dispatch(displayState({
                all: true,
                api: false,
                create: false,
            }))
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
        }
        if(e.target.value === "api") {
            //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            dispatch(displayState({
                all: false,
                api: true,
                create: false,
            }))
            // Este dispatch me permite obtener los perros según requiera el usuario
            dispatch(getDogsApi());
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
        }
        if(e.target.value === "create") {
            //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            dispatch(displayState({
                all: false,
                api: false,
                create: true,
            }))
            // Este dispatch me permite obtener los perros según requiera el usuario
            dispatch(getDogsCreate());
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
        }
    }

    const handleEnter = (e) => {
        if(e.key === "Enter") {
            let name = e.target.value;
             //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            /*  dispatch(displayState({
                all: false,
                api: false,
                create: false,
            })) */
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
            dispatch(getDogsByName(name));
            e.target.value = "";
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
                    <select onChange={handleClick} name="weight">
                    <option value="minimun">Minimun</option>
                    <option value="maximum">Maximum</option>
                    </select>
                    <P>Alphabetic</P>
                    <select onChange={handleClick} name="alphabetic">
                    <option value="descendent">descendent</option>
                    <option value="ascendent">Ascendent</option>
                    </select>
                </DivFilter>
                <DivSearch>
                    <input type="search" onKeyUp={handleEnter} placeholder="Search by name"/>
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