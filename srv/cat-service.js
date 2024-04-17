module.exports = srv => {
console.log("Service: " + srv.name)
    if (srv.name === 'CatalogService') {

        srv.after ('READ', 'Books', books => {
                books.map( book => 
                book.stock > 500 && (book.title = `${book.title} (5% Rabatt!)`))
    
        })
    
      }
      srv.after('READ', 'Books', books => {
        const singleEntry = !(Array.isArray(books))
        if(singleEntry) { books = [books] }
      }) 
}