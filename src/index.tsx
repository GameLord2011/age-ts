import { calculateAge } from "./calcage";
import React, { useEffect, useState } from "react";

export default function Age({ birthdate }: { birthdate?: string }) {
    const [age, setAge] = useState<number | null>(null);
    const effectiveBirthdate = birthdate || process.env.NEXT_PUBLIC_BIRTHDATE || "";

    useEffect(() => {
        const fetchAge = async () => {
            if(effectiveBirthdate === "") {
                throw new Error("I didn't get a birthdate, \nset one on the enviroment variable or ad the \"birthdate\" argument")
            }
            const calculatedAge = await calculateAge({ birthdate: effectiveBirthdate }) as number;
            setAge(calculatedAge);
        };

        fetchAge();
    }, [effectiveBirthdate]);

    return <>{Number.isNaN(age) ? "Error" : age !== null ? age : "..."}</>
}