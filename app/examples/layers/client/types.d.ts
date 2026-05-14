export type Routes = {
    method: "POST";
    path: "/clients/{clientId}/borrow-book";
    body: {
        bookId: string;
    };
    params: {
        clientId: string;
    };
    responses: {
        code: "422";
        information: "extract-error";
        body?: undefined;
    } | {
        code: "404";
        information: "client.notExist";
        body?: undefined;
    } | {
        code: "404";
        information: "book.notExist";
        body?: undefined;
    } | {
        code: "409";
        information: "book.alreadyBorrowed";
        body?: undefined;
    } | {
        code: "409";
        information: "client.haveNotFreeLocation";
        body?: undefined;
    } | {
        code: "204";
        information: "client.borrowBook";
        body?: undefined;
    };
} | {
    method: "POST";
    path: "/clients/{clientId}/give-back-book";
    body: {
        bookId: string;
    };
    params: {
        clientId: string;
    };
    responses: {
        code: "422";
        information: "extract-error";
        body?: undefined;
    } | {
        code: "404";
        information: "client.notExist";
        body?: undefined;
    } | {
        code: "404";
        information: "book.notExist";
        body?: undefined;
    } | {
        code: "409";
        information: "book.isNotBorrowed";
        body?: undefined;
    } | {
        code: "403";
        information: "client.isNotBorrower";
        body?: undefined;
    } | {
        code: "409";
        information: "client.haveNotBook";
        body?: undefined;
    } | {
        code: "204";
        information: "client.giveBackBook";
        body?: undefined;
    };
};