export function updatePagination(currentPage, totalItems, itemsPerPage) {
    const pageInfo = document.getElementById("page-info");
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(totalItems / itemsPerPage)}`;
    
    document.getElementById("prev").disabled = currentPage === 1;
    document.getElementById("next").disabled = currentPage === Math.ceil(totalItems / itemsPerPage);
}
