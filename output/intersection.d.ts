type personTA = {
    name: string;
};
type personTB = {
    age: number;
};
type personTC = personTA & personTB;
declare var personDataA: {
    name: string;
};
declare var personDataB: {
    age: number;
};
declare var personDataC: personTC;
