(function () {
  let DB;

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();
  });
  //crear bd indexdb

  function crearDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = function () {
      console.log("Hubo un error...");
    };

    crearDB.onsuccess = function () {
        console.log('Base de datos creada');

      DB = crearDB.result;
    };

    crearDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      //definir el object store

      const objectStore = db.createObjectStore("crm", {
        keyPath: "crm",
        autoIncrement: true,
      });

     
      //definir las columnas
      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("se han creado las tablas");
    };
  }
})();
