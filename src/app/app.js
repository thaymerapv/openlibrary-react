import React, {Component} from "react"

class App extends Component{
    render(){
        console.log(this.props.data)
        console.log(this.props.tittle)
        console.log(this.props.headings)
        return <h1>App</h1>
    }
}

export default App;