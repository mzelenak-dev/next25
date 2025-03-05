import React from 'react'

const UsersDetailPage = ({params}: {params: { id: string }}) => {
  const { id } = params;
  return (
    <>
    <h1 className="text-3xl">User Profile</h1>
    <div>User {id} </div>
    </>
  )
}

export default UsersDetailPage