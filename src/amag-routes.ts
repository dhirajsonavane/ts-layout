import LocationList from "./views/location-list";
import Login from "./views/Pages/Login";
import Register from "./views/Pages/Register";

const AmagRoutes = [
  {
    path: "/locations",
    name: "Locations",
    rtlName: "لوحة القيادة",
    component: LocationList,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/login",
        name: "Login Page",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register Page",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: Register,
        layout: "/auth"
      }
    ]
  }
]

export default AmagRoutes;