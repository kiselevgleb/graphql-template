// Core
import React from 'react';

// Hooks
import { useQueryAllCustomers } from './hooks/useQueryAllCustomers';

export const List = () => {
  const { loading, error, customers } = useQueryAllCustomers();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }
console.log(customers)
  const customersJSX = customers.allCustomers.map(({username, name, dateCreated}) => (
    <p>
      <span>username: {username}</span><br/>
      <span>Name: {name}</span><br/>
      <span>dateCreated: {dateCreated}</span>
    </p>
  ));

  return (
    <>
      <h1>customers</h1>
      {customersJSX}
    </>
  )
};
