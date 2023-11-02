import Click from "./Click";

function Welcome(props) {
    return (
        <>
            <section>
                <h1>Welcome {props.firstname} {props.lastname}  !  </h1>
                <p>huh</p>
            </section>
            <Click />
        </>
    );
}

export default Welcome;