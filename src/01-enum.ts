enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer',
}

type User = {
    username: string;
    role: ROLES;
}

const fabiUser: User = {
    username: 'fardila',
    role: ROLES.ADMIN
}
