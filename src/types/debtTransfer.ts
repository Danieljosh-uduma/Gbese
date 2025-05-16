type BankDetails = {
    bankCode: string
    bankName: string
    accountNumber: string
    description: string
    amount: string
    dueDate: string
    interestRate?: string
    incentives?: string
    statementFile?: File
}

export type {
    BankDetails
}