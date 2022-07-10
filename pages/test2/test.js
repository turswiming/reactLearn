// In order to prevent the first render from being different you can use `useEffect` which is only executed in the browser and is executed during hydration
import { useEffect, useState } from 'react'
function formatDate(dateStr) {


    return dateStr;
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    const [dateStr, setDate] = useState(22/3/12)
    useEffect(() => setDate(props.date.toLocaleDateString()), [])
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {dateStr}
            </div>
        </div>
    );
}

const comment = {
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function App() {
    var date = new Date();
    // The default value is 'blue', it will be used during pre-rendering and the first render in the browser (hydration)

    return (<Comment
        author={comment.author}
        text={comment.text}
        date={date}
    ></Comment>)
}
export default App