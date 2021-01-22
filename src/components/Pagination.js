    import React from 'react'

export default function Pagination(props) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(props.totalProfile/props.postPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <ul className="justify-content-center pagination">
            {
                pageNumber.map(number =>
                    <li className="page-item">
                        <a href="/#" className="page-link" onClick={()=> props.paginate(number)}>{number}</a>
                    </li>
                )
            }

        </ul>
    )
}

