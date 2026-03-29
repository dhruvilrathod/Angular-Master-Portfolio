import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes {
    HOME = "",
    ERROR = "error",
    EXPERIENCE = "experience",
    EDUCATION = "education",
    PROJECTS = "projects",
    ACHIEVEMENTS = "achievements",
    TECHNOLOGIE = "technologie",

    // Your google form link
    CONTACT = "https://docs.google.com/forms/d/e/1FAIpQLSdLL8txhuCh8_On7-QAysulM7O7bagAOLcT-TrjX96Vj9FIeg/viewform?usp=publish-editor",
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Home",
        routeURLName: AppRoutes.HOME,
        isVisible: true,
    },
    {
        routeLinkText: "Technologie",
        routeURLName: AppRoutes.TECHNOLOGIE,
        isVisible: true,
    },
   {
        routeLinkText: "Contact",
        routeURLName: AppRoutes.CONTACT,
        isVisible: true,
        isExternalLink: true,
    },
    {
        routeLinkText: "Error",
        routeURLName: AppRoutes.ERROR,
        isVisible: false,
    },
]