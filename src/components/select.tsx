function Select(props: any) {

    //Props: title, list, name, firstOption, onChange (finction)
    
    const options = props.list.map((value: any, _i: any) => <option key={value} value={value}>{value}</option>)

    return (
        
        <div className="spaced 100px">
            <label htmlFor={props.name} className="s18px">{props.title}</label>
            <select name={props.name} onChange={props.onChange} className={props.className}>

                <option value="">{props.firstOption}</option>
                {options}

            </select>
        </div>
    )

} export default Select;