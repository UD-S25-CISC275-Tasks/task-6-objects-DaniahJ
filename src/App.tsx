import React from "react";
import "./App.css";
import {
    makeQuiz,
    changeDifficulty,
    addQuestion,
    createStudent,
    addScore,
    calculateAverage,
    createStudentRecord,
    Quiz,
    Student,
} from "./objects";

function App(): React.JSX.Element {
    // Test cases for objects

    // Working with Quiz object
    const myQuiz: Quiz = makeQuiz(
        "JavaScript Basics",
        ["What is a closure?", "What is 'this'?"],
        "medium",
    );
    console.log("Created Quiz:", myQuiz);

    const updatedQuiz = changeDifficulty(myQuiz, "hard");
    console.log("Updated Quiz Difficulty:", updatedQuiz);

    const expandedQuiz = addQuestion(myQuiz, "Explain event delegation.");
    console.log("Quiz with New Question:", expandedQuiz);

    // Working with Student object
    const student: Student = createStudent("001", "Daniah", [85, 90, 78]);
    console.log("Created Student:", student);

    const updatedStudent = addScore(student, 95);
    console.log("Student with New Score:", updatedStudent);

    const avgScore = calculateAverage(student);
    console.log("Student Average Score:", avgScore);

    // Creating a student record from an array
    const students = [
        createStudent("001", "Daniah", [85, 90, 78]),
        createStudent("002", "Kejae", [88, 92, 80]),
    ];
    const studentRecord = createStudentRecord(students);
    console.log("Student Record:", studentRecord);

    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Task 6: Objects in TypeScript
            </header>
            <p>Check the console for function outputs.</p>
        </div>
    );
}

export default App;
