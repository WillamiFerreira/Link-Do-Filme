import { Button } from "../Button/Button";
import { TextInput } from "../FormFields/TextInput/TextInput";

function LogicalForm({className}) {
    return (
        <form className={className}>
            <TextInput />
            <Button type='submit'>F</Button>
        </form>
    )

}

export default LogicalForm;