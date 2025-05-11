type CardProps = {
    initials: string;
    name: string;
    rating: number;
    helped: number;
    acceptance: number;
    tags: string[];
  }

type benefactorListProp = {
    _id: string
    helped: number
    debtTransfers: number
    repeatCase: number
    responseTime: number
    successRate: number
    user: {
        fullName: string
        type: 'benefactor' | 'beneficiary' 
    }
}

export type { CardProps, benefactorListProp }