import InputStyled from "../FormFields/Input/Style";
import SearchButtonStyled from "../FormFields/SearchButton/Style";

function SearchForm({ClassName}) {
    return (
        <form action="" className={ClassName}>
        <InputStyled />
        <SearchButtonStyled type='submit'>Find</SearchButtonStyled>
        </form>
    )

}

export default SearchForm;