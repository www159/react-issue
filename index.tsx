import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import EvetEmitter from "events"

interface AppProps {
  emitter: EvetEmitter
}

const Mock: React.FC<AppProps> = ({ emitter }) => {
  return (
    <div>mock</div>
  )
}

const App = hot(Mock)

class View extends EvetEmitter {
  constructor() {
    super()
  }

  mock() {
    ReactDOM.render(<App emitter={this}/>, document.querySelector("APP"))
  }
}

