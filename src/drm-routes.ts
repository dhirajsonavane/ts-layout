import LocationList from "./views/SiteData/location-list";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PlaceIcon from "@material-ui/icons/Place";
import AnalyticsIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import PanToolIcon from "@material-ui/icons/PanToolRounded";

import Dashboard from "./views/Dashboard/Dashboard";
import EditLocation from "./views/SiteData/edit-location";
import Flows from "./views/Data/Flows";
import Speeds from "./views/Data/Speeds";
import Violations from "./views/Data/Violations";
import CrashRiskHeatMaps from "./views/Visualizations/crash-risk-heat-maps";
import TrajectoryMaps from "./views/Visualizations/trajectory-maps";
import VideoClips from "./views/Visualizations/video-clips";
import CrashForecasts from "./views/Forecasts/crash-forecasts";
import Countermeasures from "./views/Countermeasures/countermeasures";

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
    name: "SiteDataInput",
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
        name: "CrashRiskHeatMaps",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: CrashRiskHeatMaps,
        layout: "/admin"
      },
      {
        path: "/trajectory-maps",
        name: "TrajectoryMaps",
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
        name: "CrashForecasts",
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