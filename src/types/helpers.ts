type CardProps = {
    id: string
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
        _id: string
        fullName: string
        type: 'benefactor' | 'beneficiary' 
    }
}

type Stat = {
    debtTransfers: number
    helped: number
    successRate: number
    responseTime: number
    repeatCase: number
}

type Bank = {
    code: string
    name: string
}

export type { 
    CardProps, 
    benefactorListProp,
    Stat,
    Bank,
}