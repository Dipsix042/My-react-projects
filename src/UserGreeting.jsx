
function UserGreeting(props) {

const welcomemessage = <h2 className="welcome-message">
        Welcome {props.username}
</h2>
const loginmessage = <h2 className="login-prompt">
    Please log in to continue
</h2>

    return (
        props.isLoggedIn ?
        welcomemessage :
        loginmessage
    );
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreeting; 