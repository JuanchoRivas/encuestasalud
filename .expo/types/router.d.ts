/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/Buttons/Button1` | `/Buttons/NoButton` | `/Buttons/YesButton` | `/ProgressContext` | `/_sitemap` | `/global/colors` | `/screens/1Medicacion` | `/screens/2TomoPresion` | `/screens/3Presion1` | `/screens/4Presion2` | `/screens/5Presionobs` | `/screens/6ActFisica` | `/screens/7Salados` | `/screens/8ComentarioFinal` | `/screens/9MuchasGracias`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
