import React from "react";

const MaxItems = 9;
const MaxLeft = (MaxItems - 1)/2;

const Pagination= ({limit, total, offset, setOffset}) => {

const currentPage = offset ? (offset / limit)+1 :1 ;
const pages = Math.ceil(total /limit) ;
const first = Math.max(currentPage - MaxLeft, 1) ;


return (
<>

<nav>
  <ul className="pagination justify-content-center text-dark pb-5 mt-5">
    <li className="page-item btn btn-transparent"> Anterior</li>
    <li className="page-item btn btn-outline-dark">1</li>
    <li className="page-item btn btn-outline-dark">2</li>
    <li className="page-item btn btn-outline-dark">3</li>
    <li className="page-item btn btn-transparen"> Próximo </li>
  </ul>
</nav>
<ul>
    {Array.from({lenght: MaxItems})
    .map((_, index)=> index.first)
    .map((page)=>{
        <li>
        <button onClick={()=>setOffset((page-1)*limit)}>
            {page}</button>
        </li>
    })}

</ul>
</>
)
}

export default Pagination