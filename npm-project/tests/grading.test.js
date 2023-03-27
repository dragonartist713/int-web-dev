import { calculateLetterGrade } from "../src/js/grading";

describe("Test valid params for calculateLetterGrade()", () => {
    test("90 is an A", () => {
        const score = 90;
        const expectedResult = "A";
        expect(calculateLetterGrade(score)).toEqual(expectedResult);
    });

    test("80 is an B", () => {
        expect(calculateLetterGrade(80)).toEqual("B");
    });

    test("70 is a C", () => {
        expect(calculateLetterGrade(70)).toEqual("C");
    });

    test("60 is a D", () => {
        expect(calculateLetterGrade(60)).toEqual("D");
    });

    test("59 is an F", () => {
        expect(calculateLetterGrade(59)).toEqual("F");
    });

});