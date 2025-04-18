import { calculateAge } from "./calcage";
import React, { useEffect, useState } from "react";

export default function Age({ birthdate, impress_the_girls_mode }: { birthdate?: string, impress_the_girls_mode?: boolean }) {
    const [age, setAge] = useState<number | null>(null);
    const effectiveBirthdate = process.env.NEXT_PUBLIC_BIRTHDATE || birthdate || "";

    useEffect(() => {
        const fetchAge = async () => {
            if(effectiveBirthdate === "") {
                throw new Error("I didn't get a birthdate, \nset one on the enviroment variable or ad the \"birthdate\" argument")
            }
            let calculatedAge = await calculateAge({ birthdate: effectiveBirthdate }) as number;
            if(impress_the_girls_mode){
                calculatedAge++;
            }
            setAge(calculatedAge);
        };

        fetchAge();
    }, [effectiveBirthdate]);

    return <>{Number.isNaN(age) ? "Error" : age !== null ? age : "..."}</>
}