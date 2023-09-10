import { SelectItemGroup } from "primeng/api";

export const MockPortfolioFilter: SelectItemGroup[] = [
    {
        label: 'Linguagens',
        value: 'language',
        items: [
            { label: 'Java', value: 'java' },
            { label: 'JavaScript', value: 'javascript' },
        ]
    },
    {
        label: 'Bibliotecas',
        value: 'lib',
        items: [
            { label: 'Bootstrap', value: 'bootstrap' },
            { label: 'NgPrime', value: 'ngprime' }
        ]
    },
    {
        label: 'Frameworks',
        value: 'framework',
        items: [
            { label: 'Angular', value: 'angular' },
            { label: 'React', value: 'react' }
        ]
    }
]