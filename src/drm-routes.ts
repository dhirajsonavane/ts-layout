import LocationList from "./demo-pages/SiteData/location-list";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PlaceIcon from "@material-ui/icons/Place";
import AnalyticsIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import PanToolIcon from "@material-ui/icons/PanToolRounded";

import Dashboard from "./demo-pages/Dashboard/Dashboard";
import EditLocation from "./demo-pages/SiteData/edit-location";
import Flows from "./demo-pages/Data/Flows";
import Speeds from "./demo-pages/Data/Speeds";
import Violations from "./demo-pages/Data/Violations";
import CrashRiskHeatMaps from "./demo-pages/Visualizations/crash-risk-heat-maps";
import TrajectoryMaps from "./demo-pages/Visualizations/trajectory-maps";
import VideoClips from "./demo-pages/Visualizations/video-clips";
import CrashForecasts from "./demo-pages/Forecasts/crash-forecasts";
import Countermeasures from "./demo-pages/Countermeasures/countermeasures";

const DrmRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    Icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Site Data Input",
    rtlName: "صفحات",
    Icon: PlaceIcon,
    state: "SiteDataInputCollapse",
    views: [
      {
        path: "/location/:id",
        name: "Location",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: EditLocation,
        layout: "/admin",
        invisible: true,
      },
      {
        path: "/location",
        name: "Add Location",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: EditLocation,
        layout: "/admin"
      },
      {
        path: "/locations",
        name: "Locations",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: LocationList,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Data",
    rtlName: "صفحات",
    Icon: AnalyticsIcon,
    state: "DataCollapse",
    views: [
      {
        path: "/flows",
        name: "Flows",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: Flows,
        layout: "/admin"
      },
      {
        path: "/speeds",
        name: "Speeds",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: Speeds,
        layout: "/admin"
      },
      {
        path: "/violations",
        name: "Violations",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: Violations,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Visualizations",
    rtlName: "صفحات",
    Icon: TrendingUpIcon,
    state: "VisualizationsCollapse",
    views: [
      {
        path: "/crash-risk-heat-maps",
        name: "Crash Risk Heat Maps",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: CrashRiskHeatMaps,
        layout: "/admin"
      },
      {
        path: "/trajectory-maps",
        name: "Trajectory Maps",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: TrajectoryMaps,
        layout: "/admin"
      },
      {
        path: "/video-clips",
        name: "VideoClips",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: VideoClips,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Forecasts",
    rtlName: "صفحات",
    Icon: ScatterPlotIcon,
    state: "ForecastsCollapse",
    views: [
      {
        path: "/crash-forecasts",
        name: "Crash Forecasts",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: CrashForecasts,
        layout: "/admin"
      },
    ]
  },
  {
    path: "/countermeasures",
    name: "Countermeasures",
    rtlName: "لوحة القيادة",
    Icon: PanToolIcon,
    component: Countermeasures,
    layout: "/admin"
  }
]

export default DrmRoutes;