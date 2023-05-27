import { DivContainer, DivSearchAndFilter, DivFilter, DivSelect, P, DivSearch } from "./styledSearchAndFilter";

const SearchAndFilter = () => {
    return (
        <DivContainer>
            <DivSearchAndFilter>
                <DivFilter>
                    <P>Temperaments</P>
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