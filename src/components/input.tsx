function Input(props: any) {
    // Props: name of the label and variable, onChange, type

    const lowerName = props.name.toLowerCase();

    return(

        <div className="spaced">
    
            <label htmlFor={lowerName}>{props.name}</label>
            <input
                type={props.type} 
                name={lowerName} 
                placeholder={"Insert " + lowerName}
                onChange={props.onChange}
                className="rounded-input white-bg"
            />

        </div>

)

} export default Input;