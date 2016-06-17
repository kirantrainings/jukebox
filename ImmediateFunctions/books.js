(
    function (book) {
        if (book == null || book == undefined) {
            book = {};
        }
        var books = [{
            author: "Kiran",
            name: "Javascript Nija"
            }];

        book.getAllBooks = function () {
            //logic goes here...

            return books;
        };
        book.getPrice = function () {
            //logic goes here
        };
        book.addBook = function () {
            //logic goes here to add the books.
        };
        book.update = function () {

        };
    }
)(window.product = {});
