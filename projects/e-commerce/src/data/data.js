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
