/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from "react-intl";

export const scope = "tools.containers.HomePage";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Page not found.",
  },
});
