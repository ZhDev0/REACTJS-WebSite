import { Fragment } from "react";
import "./Container.css"

const Container = (props) => {
    return (
        <Fragment>
            <h1>{props.children}</h1>
        </Fragment>
    )
}

export default Container;