"use strict";
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labStaff"] = "labstaff";
})(whoType || (whoType = {}));
var who = whoType.teacher;
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//any is a type that disables type checking and effectively allows all types to be used.
