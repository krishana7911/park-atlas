export interface Country {
    id: number;
    name: string;
    region: { name: string };
    pas_count: number;
    links: { protected_planet: string };
    flag?: string;
}
