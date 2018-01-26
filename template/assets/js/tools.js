function getUrlParam(key) {
    var url_string = window.location.href;
    var url = new URL(url_string);

    var val = url.searchParams.get(key);
    return val;
}

function getUniqueId() {
    str = localStorage.getItem("serial");

    id = parseInt(str)
    localStorage.setItem("serial", (id + 1).toString());
    return id;
}

function getItems(key) {
    var str = localStorage.getItem(key);
    if (str && str != '') {
        return JSON.parse(str);
    }

    return null;
}

function setItems(key, items) {
    localStorage.setItem(key, JSON.stringify(items));
}

function addItem(key, item) {
    var items = getItems(key);

    if (!items) {
        items = [];
    }

    item["id"] = getUniqueId();
    items.push(item);
    setItems(key, items);
}

function getItem(key, id) {
    var items = getItems(key);
    if (!items) {
        return null;
    }

    for (var i = 0; items[i]; i++) {
        return items[i];
    }

    return null;
}

function initializeStorage() {
    var str = getItems("events");
    if (!str) {
        setItems("events", []);
    }

    str = getItems("users");
    if (!str) {
        setItems("users", []);
    }

    var str = localStorage.getItem("serial");
    if (!str) {
        localStorage.setItem("serial", 1);
    }
}
