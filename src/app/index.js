import React, { Component }from "react"
import {render} from "react-dom"
import App from "./app"

import data from "./data.json"
const tittle = "Open Library"
const headings = ["when","who","desciption"]

render(
    <App 
    data={data} 
    tittle={tittle} 
    headings={headings}
    />,
    document.getElementById("app")
)