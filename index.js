function receivesAFunction(cbFunction) {
    cbFunction();
}

function returnsANamedFunction() {
    return (function namedFunction() {})
}

function returnsAnAnonymousFunction() {
    return (function () {})
}