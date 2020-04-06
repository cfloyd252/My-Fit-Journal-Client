import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PrivateRoute({ component, currentWeightEntry, currentActivityEntry, currentWaterEntry, dataArray, title, handleSubmit, ...props}) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component
              currentWeightEntry={currentWeightEntry}  
              currentActivityEntry={currentActivityEntry}
              currentWaterEntry={currentWaterEntry}
              dataArray={dataArray}
              title={title}
              handleSubmit={handleSubmit}
              {...componentProps} 
            />
          : <Redirect to={'/'} />
      )}
    />
  )
}