export const data = [
  {
    id: 1,
    imgUrl: "src/assets/images/matemontaña.jpg",
  },
  {
    id: 2,
    imgUrl: "src/assets/images/matesyplaya.jpg",
  },
  {
    id: 3,
    imgUrl: "src/assets/images/mateoficina.jpg",
  },
];

export const menu = [
  {
    id: 1,
    title: "Administrador",
    listItems: [
      {
        id: 1,
        title: "Inicio",
        url: "/dashboard",
        icon: "bi bi-house",
      },
      {
        id: 2,
        title: "Productos",
        url: "/dashboard/products",
        icon: "bi bi-shop",
      },
      {
        id: 3,
        title: "Usuarios",
        url: "/dashboard/users",
        icon: "bi bi-people",
      },
      {
        id: 4,
        title: "Pedidos",
        url: "/dashboard/orders",
        icon: "bi bi-truck",
      },
      {
        id: 5,
        title: "Ingresos",
        url: "/dashboard/revenue",
        icon: "bi bi-bar-chart",
      },
      {
        id: 6,
        title: "Calendario",
        url: "/dashboard/calendar",
        icon: "bi bi-calendar-week",
      },
      {
        id: 7,
        title: "Configuracion",
        url: "/dashboard/settings",
        icon: "bi bi-gear",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "366.823",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "325.654",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "299.800",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "251.242",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "213.454",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "196.732",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "156.056",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Usuarios totales",
  number: "11.238",
  dataKey: "Usuarios",
  percentage: -12,
  chartData: [
    { name: "Sun", Usuarios: 400 },
    { name: "Mon", Usuarios: 600 },
    { name: "Tue", Usuarios: 500 },
    { name: "Wed", Usuarios: 700 },
    { name: "Thu", Usuarios: 400 },
    { name: "Fri", Usuarios: 500 },
    { name: "Sat", Usuarios: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Productos Totales",
  number: "238",
  dataKey: "Productos",
  percentage: 21,
  chartData: [
    { name: "Sun", Productos: 400 },
    { name: "Mon", Productos: 600 },
    { name: "Tue", Productos: 500 },
    { name: "Wed", Productos: 700 },
    { name: "Thu", Productos: 400 },
    { name: "Fri", Productos: 500 },
    { name: "Sat", Productos: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Ganacias Totales",
  number: "$56.432",
  dataKey: "Ganancias",
  percentage: 24,
  chartData: [
    { name: "Sun", Ganancias: 400 },
    { name: "Mon", Ganancias: 600 },
    { name: "Tue", Ganancias: 500 },
    { name: "Wed", Ganancias: 700 },
    { name: "Thu", Ganancias: 400 },
    { name: "Fri", Ganancias: 500 },
    { name: "Sat", Ganancias: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Ratio Total",
  number: "2.6",
  dataKey: "Ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", Ratio: 400 },
    { name: "Mon", Ratio: 600 },
    { name: "Tue", Ratio: 500 },
    { name: "Wed", Ratio: 700 },
    { name: "Thu", Ratio: 400 },
    { name: "Fri", Ratio: 500 },
    { name: "Sat", Ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Ganancia Obtenida",
  color: "#8884d8",
  dataKey: "Ganancia",
  chartData: [
    {
      name: "Sun",
      Ganancia: 4000,
    },
    {
      name: "Mon",
      Ganancia: 3000,
    },
    {
      name: "Tue",
      Ganancia: 2000,
    },
    {
      name: "Wed",
      Ganancia: 2780,
    },
    {
      name: "Thu",
      Ganancia: 1890,
    },
    {
      name: "Fri",
      Ganancia: 2390,
    },
    {
      name: "Sat",
      Ganancia: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total de Visitas",
  color: "#FF8042",
  dataKey: "Visitas",
  chartData: [
    {
      name: "Sun",
      Visitas: 4000,
    },
    {
      name: "Mon",
      Visitas: 3000,
    },
    {
      name: "Tue",
      Visitas: 2000,
    },
    {
      name: "Wed",
      Visitas: 2780,
    },
    {
      name: "Thu",
      Visitas: 1890,
    },
    {
      name: "Fri",
      Visitas: 2390,
    },
    {
      name: "Sat",
      Visitas: 3490,
    },
  ],
};
