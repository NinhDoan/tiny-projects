import { style } from '/_wmr.js';
style("/../pages/app/style.module.css", "pages/app/style.module.css");
const styles = {wmr_app:'wmr_app_wxs4dm',inputArea:'inputArea_wxs4dm',noteItem:'noteItem_wxs4dm',deleteIcon:'deleteIcon_wxs4dm'};
export default styles;
export const wmr_app='wmr_app_wxs4dm',inputArea='inputArea_wxs4dm',noteItem='noteItem_wxs4dm',deleteIcon='deleteIcon_wxs4dm';
import { createHotContext } from '/_wmr.js';
createHotContext(import.meta.url).accept(({ module: { default: s } }) => {
for (let i in s) styles[i] = s[i];
});
