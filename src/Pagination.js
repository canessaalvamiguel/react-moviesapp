export default function Pagination(props){
    const getPages = () => {
        const result = [];
        for (let i = 0; i < props.total; i++) {
            let pageNumber = i + 1;
            result.push(
                <a onClick={() => props.onChange(pageNumber)}
                   className={props.currentPage === pageNumber ? 'active' : ''}>
                    {pageNumber}
                </a>
            );
        }
        return result;
    }


    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.currentPage} de {props.total}:</span>

                {getPages()}

            </div>
        </div>
    );
}