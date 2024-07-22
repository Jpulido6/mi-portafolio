import{_ as e}from"./index-D-1Xo5If.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BtYrMHKw.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-BtYrMHKw.js","assets/index-D-1Xo5If.js","assets/index-BUwwagKZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
