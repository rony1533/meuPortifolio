export interface Portfolio {
    title: string;
    imageUrl: string;
    linkHref: string;
    technologiesUsed: TechnologiesUsed[]
}

interface TechnologiesUsed {
    name: string;
    // icon: string;
}