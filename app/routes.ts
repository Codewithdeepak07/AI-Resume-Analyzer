import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx"), // 👈 must match app/routes/auth.tsx
] satisfies RouteConfig;
