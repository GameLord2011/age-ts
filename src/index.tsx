import { calculateAge } from "./calcage";
import React, { useEffect, useState } from "react";

export default function Age({ birthdate }: { birthdate: string }) {
    const [age, setAge] = useState<number | null>(null);
    const effectiveBirthdate = process.env.NEXT_PUBLIC_BIRTHDATE || "" || birthdate;

    useEffect(() => {
        const fetchAge = async () => {
        const calculatedAge = await calculateAge(effectiveBirthdate);
        setAge(calculatedAge);
    };

        fetchAge();
    }, [effectiveBirthdate]);

    return <>{Number.isNaN(age) ? "Error" : age !== null ? age : "..."}</>
}