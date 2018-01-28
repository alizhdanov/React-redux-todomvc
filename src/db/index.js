import idb from 'idb';

const TODOS_STORE : string = 'todos';

const dbPromise = idb.open('todo-store', 1, upgradeDB => {
    upgradeDB.createObjectStore(TODOS_STORE, {
        keyPath: 'id'
    });
});

const idbTodos : Object = {
    get(key) {
      return dbPromise.then(db => {
        return db.transaction(TODOS_STORE)
          .objectStore(TODOS_STORE).get(key);
      });
    },
    getAll() {
        return dbPromise.then(db => {
            return db.transaction(TODOS_STORE)
                .objectStore(TODOS_STORE).getAll()
        })
    },
    set(val) {
      return dbPromise.then(db => {
        const tx = db.transaction(TODOS_STORE, 'readwrite');
        tx.objectStore(TODOS_STORE).put(val);
        return tx.complete;
      });
    },
    delete(key) {
      return dbPromise.then(db => {
        const tx = db.transaction(TODOS_STORE, 'readwrite');
        tx.objectStore(TODOS_STORE).delete(key);
        return tx.complete;
      });
    },
    deleteCompleted() {
      return this.getAll().then(todos => {
        todos.forEach(todo => {
          if (todo.completed) {
            this.delete(todo.id)
          }
        })
      })
    }
  };

export default idbTodos
  