import { Portfolio } from '../model/portifolio.model';

export const MockPortfolio: Portfolio[] = [
    {
        title: 'Calculadora', 
        imageUrl: '../../../assets/calculadora-simples.png', 
        linkHref: 'https://github.com/rony1533/Calculadora',
        technologiesUsed: [
            { 
                name: 'HTML'
            }, 
            { 
                name: 'CSS'
            }, 
            { 
                name: 'JavaScript'
            }
        ]
    },
    {
        title: 'Transforma texto', 
        imageUrl: '../../../assets/transforma-texto.png', 
        linkHref: 'https://github.com/rony1533/Transforma-Texto',
        technologiesUsed: [
            { 
                name: 'HTML'
            }, 
            { 
                name: 'CSS'
            }, 
            { 
                name: 'JavaScript'
            }
        ]
    }
];