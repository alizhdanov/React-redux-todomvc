import idb from 'idb'

export default function () {
    const dbPromise = idb.open('test-db1', 1, (store) => {
        store.createObjectStore('todos');
    });

    const idbKeyval = {
        get(key) {
            return dbPromise.then(db => {
                return db.transaction('todos')
                    .objectStore('todos').get(key);
            });
        },
        set(key, val) {
            return dbPromise.then(db => {
                debugger
                const tx = db.transaction('todos', 'readwrite');
                tx.objectStore('todos').put(val, key);
                return tx.complete;
            });
        },
        delete(key) {
            return dbPromise.then(db => {
                const tx = db.transaction('todos', 'readwrite');
                tx.objectStore('todos').delete(key);
                return tx.complete;
            });
        },
        clear() {
            return dbPromise.then(db => {
                const tx = db.transaction('todos', 'readwrite');
                tx.objectStore('todos').clear();
                return tx.complete;
            });
        },
        keys() {
            return dbPromise.then(db => {
                const tx = db.transaction('todos');
                const keys = [];
                const store = tx.objectStore('todos');

                // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
                // openKeyCursor isn't supported by Safari, so we fall back
                (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                    if (!cursor) return;
                    keys.push(cursor.key);
                    cursor.continue();
                });

                return tx.complete.then(() => keys);
            });
        }
    };

    idbKeyval.set(1, {
        id: 1,
        value: 'test',
        completed: false
    })
}
