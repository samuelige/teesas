interface DataType {
    id: number;
    name: string;
    path: string;
}

const data: DataType[] = [
    {
        id: 1,
        name: 'About',
        path: '/about',
    },
    {
        id: 2,
        name: 'Teach',
        path: '/teach',
    },
    {
        id: 3,
        name: 'Buy Learning Tablet',
        path: '/buy_learning_tablet',
    },
    {
        id: 4,
        name: 'Donate Devices',
        path: '/donate_devices',
    },
    {
        id: 5,
        name: 'Login',
        path: '/login',
    },
    {
        id: 6,
        name: 'Register',
        path: '/register',
    }

    
]

export {data};