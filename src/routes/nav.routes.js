import {
  faAvocado,
  faCircleDollar,
  faHouse,
} from "@fortawesome/pro-duotone-svg-icons";
import React from "react";

export const routes = [
  {
    path: "/",
    label: "Home",
    icon: faHouse,
  },
  {
    path: "/about",
    label: "About",
    icon: faAvocado,
  },

  {
    path: "/pricing",
    label: "Pricing",
    icon: faCircleDollar,
  },
];
