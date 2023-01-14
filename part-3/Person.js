const Person = (props) => (
    <div>
        <p>Learn some information about this person</p>
        <h3>
            {props.age >= 18 ? `${props.name.length > 8 ? props.name.slice(0, 6) : props.name } please go vote` : `${props.name.length > 8 ? props.name.slice(0, 6) : props.name} you must be 18` }
        </h3>
        <h3>{props.name} Hobbies
        <ul>
            {props.hobbies && props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
        </h3>

    </div>
)