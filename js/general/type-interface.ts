// run via:
// ts-node type-interface.ts

interface Course {
    name:string;
    lessonCount:number;

    // This would make it an optional variable
    // lessonCount?:number;
}

interface Named {
    name:string;
}

let named : Named = {
    name: 'Name goes here'
};

let course: Course = {
    name: 'Components and Directives',
    lessonCount: 20
};

// This line named = course does
// compile correctly, because Course has all the mandatory properties
// needed by Name , so this type assignment is valid.
named = course;

// error: missing some fields!
course = named;