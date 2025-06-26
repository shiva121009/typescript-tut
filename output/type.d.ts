type datatype = {
    name: string;
    email: string;
};
type a = {
    name: string;
};
type b = {
    email: string;
};
type c = a | b;
declare var empData1: c;
declare var studentData1: c;
