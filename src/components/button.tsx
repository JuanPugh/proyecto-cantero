export default function Button(props: any) {

    return(
        <button type={props.type} className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    );
}