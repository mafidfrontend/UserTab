export type StudentsType = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: "male" | "female";
    active: boolean;
};

export type GlobalStore = {
    students: StudentsType[];
    groups?: any[];
};
