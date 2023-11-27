// Open or create the database
const openDB = indexedDB.open('MyDatabase', 1);

// Define the object store structure
openDB.onupgradeneeded = function(event) {
    const db = event.target.result;

    // Create an object store with an auto-incrementing key
    const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id', autoIncrement: true });

    // Define the object store schema (assuming your three.js objects have properties 'id', 'name', 'color')
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('color', 'color', { unique: false });
};

// Handle errors
openDB.onerror = function(event) {
    console.error('Error opening database:', event.target.errorCode);
};

// Handle successful database creation or opening
openDB.onsuccess = function(event) {
    const db = event.target.result;

    // Save a new version of the object
    function saveObject(object, callback) {
        const transaction = db.transaction(['myObjectStore'], 'readwrite');
        const objectStore = transaction.objectStore('myObjectStore');

        const request = objectStore.add(object);

        request.onsuccess = function() {
        console.log('Object saved successfully');
        if (callback) callback();
        };

        request.onerror = function(event) {
        console.error('Error saving object:', event.target.errorCode);
        };
    }

    // Fetch all saved versions of the object
    function fetchObjects(callback) {
        const transaction = db.transaction(['myObjectStore'], 'readonly');
        const objectStore = transaction.objectStore('myObjectStore');

        const request = objectStore.getAll();

        request.onsuccess = function(event) {
        const objects = event.target.result;
        console.log('Fetched objects:', objects);
        if (callback) callback(objects);
        };

        request.onerror = function(event) {
        console.error('Error fetching objects:', event.target.errorCode);
        };
    }

    // Example usage:
    const exampleObject = { name: 'Example', color: 'Red' };

    saveObject(exampleObject, function() {
        fetchObjects(function(objects) {
            // Do something with the fetched objects
            console.log('Fetched objects:', objects);
        });
    });
};
