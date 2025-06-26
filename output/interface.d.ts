interface info {
    name: string;
    age: number;
    college: string;
}
interface teachertype extends info {
    subject: string;
}
declare var studentObj: info;
declare var teacher: info;
