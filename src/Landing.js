import React from 'react';
import { useBlockstack } from 'react-blockstack'

export default function Landing (props) {
  const { signIn } = useBlockstack()
  return (
      <main className="jumbotron min-vh-100 mb-0" id="section-1">
        <h1 className="text-center p-20">React + Blockstack</h1>
        <p className="lead text-center">
          Use REBL RUN to generate apps based on React and Blockstack.
        </p>
        <div className="text-center m-10 p-10">
                <button
                  className="btn btn-primary btn-lg"
                  id="signin-button"
                  disabled={ !signIn }
                  onClick={ signIn }>
                  Sign In with Blockstack
                </button>
         </div>
      </main>
  )
}
