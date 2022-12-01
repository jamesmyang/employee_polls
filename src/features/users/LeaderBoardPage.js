import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers, selectAllUsers } from './usersSlice'

export const LeaderBoardPage = () => {

  const allUsers = useSelector(selectAllUsers)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  const renderedTableRow = allUsers.map(user => (
    <tr key={user.id}>
      <td className='leaderboard-table-data'>
        <div className='leaderboard-table-data-name'>{user.name}</div>
        <div className='leaderboard-table-data-id'>{user.id}</div>
      </td>
      <td className='leaderboard-table-data'>
        <div className='leaderboard-table-data-number'>{Object.values(user.answers).length}</div>
      </td>
      <td className='leaderboard-table-data'>
        <div className='leaderboard-table-data-number'>{user.questions.length}</div>
      </td>
    </tr>
  ))


  return (
    <div className="questions-container">
      <div className='leaderboard-panel'>
        <table className='leaderboard-table'>
          <thead>
            <tr >
              <th className='leaderboard-table-head leaderboard-table-width_50'>Users</th>
              <th className='leaderboard-table-head leaderboard-table-width_25'>Answered</th>
              <th className='leaderboard-table-head leaderboard-table-width_25'>Created</th>
            </tr>
          </thead>
          <tbody>
            {renderedTableRow}
          </tbody>
        </table>
      </div>
    </div >
  );

}