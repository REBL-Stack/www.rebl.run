import React from 'react';
import { useBlockstack } from 'react-blockstack'

const templateURL = "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/njordhov/react-blockstack/tree/master/example"

export default function Landing (props) {
  const { signIn } = useBlockstack()
  return (
      <main className="jumbotron min-vh-100 mb-0 mt-0" id="section-1">
        <div className="text-center">
          <img src="/media/logo.svg" style={{with: "60%", maxWidth: "20em"}}/>
        </div>
        <h1 className="text-center p-20">React + Blockstack</h1>
        <p className="lead text-center">
          Use the REBL Stack to generate apps based on React and Blockstack.
        </p>

        <div className="text-center">
          <p>
            The <a href="https://www.npmjs.com/package/react-blockstack">react-blockstack</a> package
            for NPM makes it easy to create blockstacks app using modern React hooks.
          </p>

         <p><a href={templateURL} target="_blank">Download</a> our app template and follow the instructions to get started.</p>

         <p>We have big plans! Keep an eye on this page for further developments.</p>
      </div>

      {false &&
      <div className="text-center" style={{marginTop: "3em"}}>
                <button
                  className="btn btn-primary btn-lg"
                  id="signin-button"
                  disabled={ !signIn }
                  onClick={ signIn }>
                  Sign In with Blockstack
                </button>
         </div>}
      </main>
  )
}
