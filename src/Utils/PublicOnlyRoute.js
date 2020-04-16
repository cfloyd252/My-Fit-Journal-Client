import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PublicOnlyRoute({ component, handleSubmit, error, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/journal'} />
          : <Component 
              handleSubmit = {handleSubmit}
              error = {error}
              {...componentProps} 
            />
      )}
    />
  )
}
