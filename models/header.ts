export class Header{

    semaine! : string

    patient! : string
    date! : string


     static schema: Record<
        keyof Header,
        (obj: Header, rawValue: string) => void
    > = {
        semaine: (obj, v) => obj.semaine = v,
        patient:(obj, v) => obj.patient = v,
        date:    (obj, v) => obj.date = v,
    };
}
    