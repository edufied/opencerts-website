/* eslint-disable camelcase */
/* because we need to use _ to replace hyphens in dns */
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import edufied from "./edufied";

export default addDirToTemplatePath("network", { ...edufied });
