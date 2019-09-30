import React from 'react';
import { useBlockstack } from 'react-blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Auth () {
    const { signIn, signOut, person } = useBlockstack()
    return (
      <span>
        <span className="avatar ml-auto mr-5">
          <img src={ (person && person.avatarUrl()) || avatarFallbackImage }
               className="rounded-circle" id="avatar-image" alt="avatar"
               style={{height: "32px"}}/>
          <span className="ml-2">
            {(person && person.name())}
          </span>
        </span>
        <button className="btn btn-secondary"
                disabled={ !signIn && !signOut }
                onClick={ signIn || signOut }>
            { signIn ? "Sign In" : signOut ? "Sign Out" : "..." }
        </button>
      </span>
    )
}
