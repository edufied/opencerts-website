import dynamic from "next/dynamic";

export default {
  "basic-edufied": dynamic(() => import("./basic-edufied" /* webpackChunkName: "edufied-Templates" */))
};
