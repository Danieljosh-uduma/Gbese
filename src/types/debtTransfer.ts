type BankDetails = {
    bankCode: string
    bankName: string
    accountNumber: string
    description: string
    debtSource: string
    amount: string
    dueDate: string
    interestRate: string
    incentives: string
    statementFile: File
    method: 'marketplace' | 'specific' | 'sharedLink'
    selectedUser: string
}

export type {
    BankDetails
}