// Task 1

// class Shape {
//     constructor () {
//         if (new.target === Shape) { throw new Error ("Cannot instantiate abstract class"); }
//     }

//     getArea () {
//         throw new Error ("Method not implemented");
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();

//         this.width = width;
        
//         this.height = height;
//     }
 
//     getArea () {
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();

//         this.radius = radius;
//     }
 
//     getArea () {
//         return 3.14159 * this.radius ** 2;
//     }
// }

// const shape = new Shape();
// // Error: Cannot instantiate abstract class

// const rect = new Rectangle(10, 5);
// console.log(rect.getArea());
// // 50



// Task 2

// class StorageProvider {
//     upload (file) {
//         this.file = file;
//     }

//     download (filename) {
//         this.filename = filename;
//     }
// }

// class LocalStorageProvider extends StorageProvider {
//     upload (file) {
//         console.log(`${file} is uploading`);
//     }

//     download (filename) {
//         console.log(`${filename} is downloading.`);
//     }
// }

// class CloudStorageProvider extends StorageProvider {
//     upload (file) {
//         console.log(`${file} is uploading`);
//     }

//     download (filename) {
//         console.log(`${filename} is downloading.`);
//     }
// }

// function useStorage(provider) {
//     if (typeof provider.upload !== 'function' || typeof provider.download !== 'function') {
//         throw new Error("Invalid storage provider");
//     }

//     provider.upload('document.pdf');

//     provider.download('document.pdf');
// }

// useStorage(new LocalStorageProvider());
// // Works

// useStorage({});
// // Error: Invalid storage provider



// Task 3

class Animal {
    speak () {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak () {
        super.speak();

        console.log("Dog barks");
    }
}

const d = new Dog();
d.speak();

// Output:
// Animal makes a sound
// Dog barks

