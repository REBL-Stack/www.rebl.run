import React, {useEffect, useCallback} from 'react'
import { useBlockstack, useFile } from 'react-blockstack'
import Main from './Main.js'
import Landing from './Landing.js'

export default function App (props) {
  const { signIn, signOut} = useBlockstack()
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
         {signIn && <Landing/>}
         {signOut && <Main/>}
      </div>
    </div>
  )
}
