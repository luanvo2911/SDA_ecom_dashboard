import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "1.0.0",
    info: {
      title: "NightMarket API endpoint",
      version: "1.0.0",
    },
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();