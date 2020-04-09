import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PublicOnlyRoute({ component, handleSubmit, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/journal'} />
          : <Component 
              handleSubmit = {handleSubmit}
              {...componentProps} 
            />
      )}
    />
  )
}
