import Agent from "@/components/agents";
import Blank from "@/components/blank";

export default [
    {
        name: "agent",
        icon: "sitemap",
        path: "/app/agent",
        component: Agent
    },
    {
        name: "my cruise",
        icon: "boat",
        path: "/app/profile",
        component: Blank
    },
    {
        name: "help",
        icon: "life-bouy",
        path: "/app/help",
        component: Blank
    }
];