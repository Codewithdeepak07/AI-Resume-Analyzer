import { type RouteConfig, index, route } from "@react-router/dev/routes";

// @ts-ignore
export default [
    index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx"),
    route('/upload', 'routes/upload.tsx'),
] satisfies RouteConfig;
