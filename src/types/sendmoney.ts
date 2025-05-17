type Contact = {
id: string;
name: string;
image: string;
phoneNumber: string;
}

type PaymentMethod = {
type: 'card' | 'bank';
lastFour: string;
selected: boolean;
}

export type {
    Contact,
    PaymentMethod
}