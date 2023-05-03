import React from 'react'
import ReactPaginate from 'react-paginate'

export const CustomPagination = ({filterData, rowsPerPage, setCurrentPage, currentPage }) => {
    const count = Number(Math.ceil(filterData?.length / rowsPerPage))
    return (
      <ReactPaginate
        previousLabel='Prev'
        nextLabel='NEXT'
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage}
        onPageChange= { page => setCurrentPage(page.selected)}
        pageClassName='page-item'
        nextClassName='page-item next'
        nextLinkClassName='page-link'
        previousClassName='page-item prev'
        previousLinkClassName='page-link'
        pageLinkClassName='page-link'
        containerClassName="pagination react-paginate"
        // renderOnZeroPageCount={null}
      />
    )
}

export const CustomHeader = ({filterData, rowsPerPage, setRowsPerPage, setCurrentPage  }) => {
    return (
        <div className='customHeader'>
              <p>Show item per page</p>   
              <select
                value={rowsPerPage}
                onChange={e => {
                  setRowsPerPage(e.target.value)
                  setCurrentPage(0)
                }}
              >
              <option value={filterData && filterData?.length}>All</option>
              <option value='10'>10</option>
              <option value='30'>30</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
              <option value='150'>150</option>
              <option value='200'>200</option>
              <option value='250'>250</option>
              <option value='300'>300</option>
              <option value='400'>400</option>
              <option value='500'>500</option>
              </select>
            </div>
      )
}

