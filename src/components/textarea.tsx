function TextArea(props: any) {

    const lowerName = props.name.toLowerCase();

    return (
    
        <div className="vertical-flex">
            <label htmlFor={lowerName}>{props.name}</label>
            <textarea 
                name={lowerName}  
                placeholder="Ej.:Mientras comia vi una pelicula."
                cols={30} 
                rows={10}
                onChange={props.onChange}
                className="rounded white">
            </textarea>
        </div>
    )
} export default TextArea;