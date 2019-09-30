import React, {useEffect, useCallback} from 'react'
import { useBlockstack, useFile } from 'react-blockstack'

const templateURL = "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/njordhov/react-blockstack/tree/master/example"

export default function Main () {
    const [data, setData] = useFile("config1") //
    useEffect(() => {
      if (!!setData) {
        console.log("Save configuration")
        setData(JSON.stringify({seed: Math.random()}))
      }
    }, [!!setData])
    return (
      <main className="jumbotron min-vh-100 mb-0">
        <div style={{maxWidth: "60em", margin: "auto"}}>
          <p className="lead">
          Use REBL RUN to generate apps based on React and Blockstack.
          </p>
          <p>
            The <a href="https://www.npmjs.com/package/react-blockstack">react-blockstack</a> package
            for NPM makes it easy to create blockstacks app using modern React hooks.
          </p>

         <p><a className="btn btn-primary" href={templateURL} target="_blank">Download</a> our app template and follow the instructions to get started.</p>

         <p>We have big plans! Keep an eye on this page for further developments.</p>
        </div>
      </main>
    )
}
