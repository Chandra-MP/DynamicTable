import React from 'react'

const Pagination = ({userPerPage, totalUsers, paginate}) => {

    const PageNumbers = []
    for(let i=1; i<=Math.ceil(totalUsers/userPerPage); i++)
        PageNumbers.push(i)

  return (
    <nav>
      <ul className="pagination">
          {PageNumbers.map(number => (
              <li key={number} className='btn btn-outline-primary m-4'>
                  <a href="!#" onClick={()=>paginate(number)}>
                      {number}
                  </a>
              </li>
          ))}
      </ul>
    </nav>
  )
}

export default Pagination
