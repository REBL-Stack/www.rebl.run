import React, {useEffect, useCallback} from 'react'
import { useBlockstack, useFile } from 'react-blockstack'

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
          Use the REBL Stack to generate apps based on React and Blockstack.
          </p>

        </div>
      </main>
    )
}
