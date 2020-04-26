import React from 'react'


export const previousPaging = (currentPage, getDataJson, setCurrentPage) => {
    let page = currentPage - 1
    if (page === 0) {
    } else {
        getDataJson(page - 1, 3)
        setCurrentPage(page)
    }
}

export const paging = (totalPages, currentPage, disable, changePage) => {
    const pages = totalPages.map((page) => {
        if (currentPage === page + 1) {
            return (
                <li class="page-item active" aria-current="page" key={page}>
                    <button className="page-link btn btn-primary" disabled={disable} onClick={() => {
                        changePage(page)
                    }}>{page + 1}<span class="sr-only"></span></button>
                </li>
            )
        } else {
            return (
                <li class="page-item" key={page}><button className="page-link" onClick={() => { changePage(page) }}>{page + 1}</button></li>
            )
        }
    })
    return pages
}

export const nextPaging = (currentPage, totalPage, getDataJson, setCurrentPage) => {
    let page = currentPage + 1
    if (page - 1 > totalPage[totalPage.length - 1]) {
    } else {
        getDataJson(page - 1, 3)
        setCurrentPage(page)
    }
}


export const paginationNgide = (page, previous, next) => {
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <button className="page-link" onClick={previous}>
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {page}
                <li class="page-item">
                    <button className="page-link" onClick={next}>
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}


export function totalPages(pages) {
    let page = []
    for (let index = 0; index < pages; index++) {
        page.push(index);
    }
    return page
}