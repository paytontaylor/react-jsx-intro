const Tweet = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>@{props.username}: {props.message} on {props.date}</p>
    </div>
)