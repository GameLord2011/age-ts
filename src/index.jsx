import { calculateAge } from "./calcage";
import React, { useEffect, useState } from "react";

/**
* @param {string|null} [birthdate] - The birthdate in YYYY-MM-DD format.
* @returns {string} - The age in years.
* @description - This function calculates the age based on the provided birthdate.
*/

export default function Age(birthdate) {
    const [age, setAge] = useState(null);
    const effectiveBirthdate = birthdate || process.env.NEXT_PUBLIC_BIRTHDATE || "";

    useEffect(() => {
        const fetchAge = async () => {
            if(effectiveBirthdate === "") {
                throw new Error("I didn't get a birthdate, \nset one on the enviroment variable or ad the \"birthdate\" argument")
            }
            const calculatedAge = await calculateAge(effectiveBirthdate);
            setAge(calculatedAge);
        };

        fetchAge();
    }, [effectiveBirthdate]);

    return <>{Number.isNaN(age) ? "Error" : age !== null ? age : "..."}</>
}