import{$i as e,$r as t,Ai as n,An as r,Ar as i,B as a,Bi as o,Br as s,Cr as c,D as l,En as u,F as d,G as f,Gt as p,H as m,Hn as h,I as g,In as _,Ir as v,J as y,Jr as b,Kt as x,Ln as S,Nr as C,Nt as w,O as T,On as E,P as D,Pn as O,Pr as k,Qn as A,Rr as j,S as M,St as N,T as P,Ti as ee,Tn as F,Ur as I,Ut as L,V as te,Vi as R,Vt as z,Wn as B,Xr as V,Yt as ne,Zi as re,b as ie,bn as ae,br as oe,bt as se,cn as ce,d as le,di as ue,dn as de,ei as fe,et as pe,fr as me,gi as he,gn as ge,gr as _e,hi as H,ht as ve,j as U,k as W,ki as ye,kr as be,kt as xe,l as G,li as Se,nn as K,ot as Ce,pn as we,q as Te,qr as Ee,qt as De,rt as Oe,s as ke,sr as q,st as Ae,ta as je,ti as Me,un as J,vn as Ne,wt as Y,x as X,xn as Pe,y as Fe,yi as Ie,zt as Le}from"./index-CLWMQsCE.js";import{n as Re,t as ze}from"./hd_standard.shared-CR-2ScAR.js";import{_ as Be,a as Ve,c as He,d as Ue,i as We,l as Ge,m as Ke,o as qe,p as Je}from"./hd_standard.model-D2N54qC4.js";import{n as Ye}from"./standard.shared-D6Jn3Vz1.js";var Xe=new Float32Array(s([])),Ze=[0,0,0],Qe=(e,t,n,r,i,a,o,s,c,l,d,p,m,h=[0,0,0],g,_,v,y=1,b=!1)=>{let x=Ze,S=0,C=Ze;if(!b){let e=i.style.light,t=e.properties.get(`position`);if(x=[-t.x,-t.y,t.z],e.properties.get(`anchor`)===`viewport`){let e=we();Le(e,-i.transform.angle),u(x,x,e)}let n=e.properties.get(`color`).toNonPremultipliedRenderColor(null);S=e.properties.get(`intensity`),C=[n.r,n.g,n.b]}let w=d.alphaMode===`MASK`,T=m.paint.get(`model-ambient-occlusion-intensity`),E=m.paint.get(`model-color`).constantOr(f.white).toNonPremultipliedRenderColor(null);return E.a=m.paint.get(`model-color-mix-intensity`).constantOr(0),v&&(E.r=v[0],E.g=v[1],E.b=v[2],E.a=v[3]),_&&(E.r=_.color.r,E.g=_.color.g,E.b=_.color.b,E.a=_.colorMix,p=_.emissionStrength,a*=_.opacity),{u_matrix:e,u_lighting_matrix:t,u_normal_matrix:n,u_node_matrix:r||Xe,u_lightpos:x,u_lightintensity:S,u_lightcolor:C,u_camera_pos:h,u_opacity:a,u_baseTextureIsAlpha:0,u_alphaMask:+w,u_alphaCutoff:d.alphaCutoff,u_baseColorFactor:o.toNonPremultipliedRenderColor(null).toArray01(),u_emissiveFactor:s.toNonPremultipliedRenderColor(null).toArray01(),u_metallicFactor:c,u_roughnessFactor:l,u_baseColorTexture:G.BaseColor,u_metallicRoughnessTexture:G.MetallicRoughness,u_normalTexture:G.Normal,u_occlusionTexture:G.Occlusion,u_emissionTexture:G.Emission,u_lutTexture:G.LUT,u_color_mix:E.toArray01(),u_aoIntensity:T,u_emissive_strength:p,u_occlusionTextureTransform:g||[0,0,0,0],u_dithered_discard_threshold:y}},$e=(e,t=Xe,n=Xe)=>({u_matrix:e,u_instance:t,u_node_matrix:n});function et(e,t,n,r){let i=1<<e.z;t.lat=ne((r/p+e.y)/i),t.lng=Te((n/p+e.x)/i)}var Z=new Float64Array(16),Q=new Float64Array(16),tt=new Float64Array(16),nt=new Float64Array(16),rt=new Float64Array(16),it=new Float64Array(16),at=new Float64Array(16),ot=[0,0,0],st=new Float32Array(16),ct=[0,0,0],lt=[0,0,0],ut=[];function dt(e,t,n){let r=n.cameraWorldSizeForFog/n.worldSize;return B(e,n.worldToFogMatrix,[r,r,1]),H(e,e,t),e}function ft(e,t,n,r){return O(e,t,n),ge(r,Ke)||B(e,e,r),e}function pt(e,t,n,r,i){let a=n.material,o=r.context,{baseColorTexture:s,metallicRoughnessTexture:c}=a.pbrMetallicRoughness,{normalTexture:l,occlusionTexture:u,emissionTexture:d}=a;function f(t,n,r){if(t&&(e.push(n),o.activeTexture.set(o.gl.TEXTURE0+r),t.gfxTexture)){let{minFilter:e,magFilter:n,wrapS:r,wrapT:i}=t.sampler;t.gfxTexture.bindExtraParam(e,n,r,i)}}f(s,`HAS_TEXTURE_u_baseColorTexture`,G.BaseColor),f(c,`HAS_TEXTURE_u_metallicRoughnessTexture`,G.MetallicRoughness),f(l,`HAS_TEXTURE_u_normalTexture`,G.Normal),f(u,`HAS_TEXTURE_u_occlusionTexture`,G.Occlusion),f(d,`HAS_TEXTURE_u_emissionTexture`,G.Emission),i&&(i.texture||=new pe(r.context,i.image,[i.image.height,i.image.height,i.image.height],o.gl.RGBA8),o.activeTexture.set(o.gl.TEXTURE0+G.LUT),i.texture&&i.texture.bind(o.gl.LINEAR,o.gl.CLAMP_TO_EDGE),e.push(`APPLY_LUT_ON_GPU`)),n.texcoordBuffer&&(e.push(`HAS_ATTRIBUTE_a_uv_2f`),t.push(n.texcoordBuffer)),n.colorBuffer&&(e.push(n.colorBuffer.itemSize===12?`HAS_ATTRIBUTE_a_color_3f`:`HAS_ATTRIBUTE_a_color_4f`),t.push(n.colorBuffer)),n.normalBuffer&&(e.push(`HAS_ATTRIBUTE_a_normal_3f`),t.push(n.normalBuffer)),n.pbrBuffer&&(e.push(`HAS_ATTRIBUTE_a_pbr`),e.push(`HAS_ATTRIBUTE_a_heightBasedEmissiveStrength`),t.push(n.pbrBuffer)),a.alphaMode!==`OPAQUE`&&a.alphaMode!==`MASK`||e.push(`UNPREMULT_TEXTURE_IN_SHADER`),a.defined||e.push(`DIFFUSE_SHADED`);let p=r.shadowRenderer;p&&(e.push(`RENDER_SHADOWS`),p.useNormalOffset&&e.push(`NORMAL_OFFSET`))}function mt(e,t,n,r,i,o){let s=e.modelOpacity,c=t.context,l=new X(t.context.gl.LEQUAL,e.isLightMesh?X.ReadOnly:X.ReadWrite,t.depthRangeFor3D),u=t.transform,d=e.mesh,f=d.material,p=f.pbrMetallicRoughness,m=t.style.fog;t.transform.projection.zAxisUnit===`pixels`?Z.set(e.nodeModelMatrix):H(Z,r.zScaleMatrix,e.nodeModelMatrix),H(Z,r.negCameraPosMatrix,Z),a(Q,Z),ve(Q,Q);let h=n.paint.get(`model-color-use-theme`).constantOr(`default`)===`none`,_=n.paint.get(`model-emissive-strength`).constantOr(0),v={defines:[]},y=[],b=t.shadowRenderer;b&&(b.useNormalOffset=!1),pt(v.defines,y,d,t,h?null:n.lut);let x=null;if(m&&(x=dt(tt,e.nodeModelMatrix,t.transform),u.projection.name!==`globe`)){let e=d.aabb.min,t=d.aabb.max,[n,r]=m.getOpacityForBounds(x,e[0],e[1],t[0],t[1]);v.overrideFog=n>=.05||r>=.05}let S=Fe(t,n.paint.get(`model-cutoff-fade-range`));S.shouldRenderCutoff&&v.defines.push(`RENDER_CUTOFF`);let C=t.getOrCreateProgram(`model`,v),w=Qe(e.worldViewProjection,Z,Q,null,t,s,p.baseColorFactor,f.emissiveFactor,p.metallicFactor,p.roughnessFactor,f,_,n,void 0,void 0,e.materialOverride,e.modelColor,1,C.fixedDefines.includes(`LIGHTING_3D_MODE`));t.uploadCommonUniforms(c,C,null,x,S,e.lightOverrides),t.renderPass!==`shadow`&&b&&b.setupShadowsFromMatrix(e.nodeModelMatrix,C),C.draw(t,c.gl.TRIANGLES,l,i,o,d.material.doubleSided?g.disabled:g.backCCW,w,n.id,d.vertexBuffer,d.indexBuffer,d.segments,n.paint,t.transform.zoom,void 0,y)}function ht(e,t){return e.style._importedAsBasemap?`basemap`:t.scope}function gt(e,t,n,r,i,a,o,s,c,l,u){let d=e.transform,f=!!t.isGeometryBloom&&t.isGeometryBloom;if(t.minZoom!==void 0&&e.transform.zoom<t.minZoom||t.maxZoom!==void 0&&e.transform.zoom>t.maxZoom||f&&e.renderPass===`shadow`)return;let p=d.projection.name===`globe`?We(n,d):[...n];H(p,p,t.globalMatrix);let m=H([],r,p);if(t.meshes)for(let e of t.meshes){let r=s.get(e.material.name);if(r&&r.opacity<=0)continue;if(e.material.alphaMode!==`BLEND`){o.push({mesh:e,depth:0,modelIndex:i,worldViewProjection:m,nodeModelMatrix:p,isLightMesh:f,materialOverride:r,modelOpacity:c,modelColor:l,lightOverrides:u,node:t,modelMatrix:n});continue}let h=K([],e.centroid,m);!d.isOrthographic&&h[2]<=0||a.push({mesh:e,depth:h[2],modelIndex:i,worldViewProjection:m,nodeModelMatrix:p,isLightMesh:f,materialOverride:r,modelOpacity:c,modelColor:l,lightOverrides:u,node:t,modelMatrix:n})}if(t.children)for(let d of t.children)gt(e,d,n,r,i,a,o,s,c,l,u)}function _t(e,t,n,r,i){let a=n.shadowRenderer;if(!a)return;let o=a.getShadowPassDepthMode(),s=$e(i||a.calculateShadowPassMatrixFromMatrix(t));n.getOrCreateProgram(`modelDepth`).draw(n,n.context.gl.TRIANGLES,o,W.disabled,U.disabled,g.disabled,s,r.id,e.vertexBuffer,e.indexBuffer,e.segments,r.paint,n.transform.zoom,void 0,void 0)}function vt(n,r,i,a){let o=function(n,r){if(r.footprintDebugMesh)return r.footprintDebugMesh;if(!r.footprint)return null;let i=n.context,a=r.footprint.vertices,o=r.footprint.indices,s=new e;s.reserve(a.length);for(let e of a)s.emplaceBack(e.x,e.y);let c=new x;c.reserve(o.length);for(let e=0;e<o.length;e+=3)c.emplaceBack(o[e],o[e+1],o[e+2]);let l=i.createVertexBuffer(s,ee.members),u=i.createIndexBuffer(c),d=t.simpleSegment(0,0,a.length,o.length),p=r.id||r.name||`footprint`,m,h=parseInt(p,10);m=isNaN(h)?function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(p):h;let g=Ne(m),_=Ne(m+1),v=Ne(m+2);return r.footprintDebugMesh={vertexBuffer:l,indexBuffer:u,segments:d,color:new f(g,_,v,.5)},r.footprintDebugMesh}(n,i);if(!o)return;let s=n.context,c=s.gl,l=n.getOrCreateProgram(`debug`),u=o.color,d=X.disabled;s.activeTexture.set(c.TEXTURE0),n.emptyTexture.bind(c.LINEAR,c.CLAMP_TO_EDGE),l.draw(n,c.TRIANGLES,d,W.disabled,U.alphaBlended,g.disabled,D(a,u.toPremultipliedRenderColor(null)),`$debug`,o.vertexBuffer,o.indexBuffer,o.segments)}function yt(e,t,n,r,i,a){for(let o of i){let i={...r};i.part=o;let s={type:`Unknown`,id:t,properties:i},c={orientation:e.paint.get(`model-rotation`).evaluate(s,n)};a.set(o,c)}}function bt(e,t,n,r,i,a){for(let o of i){let i={...r};i.part=o;let s={type:`Unknown`,id:t,properties:i},c={color:e.paint.get(`model-color`).evaluate(s,n),colorMix:e.paint.get(`model-color-mix-intensity`).evaluate(s,n),opacity:e.paint.get(`model-opacity`).evaluate(s,n),emissionStrength:e.paint.get(`model-emissive-strength`).evaluate(s,n)};a.set(o,c)}}function xt(e,t,n,r,i){let a=!1;for(let n of r)n.modelOpacity!==1&&(mt(n,e,t,i[n.modelIndex],W.disabled,U.disabled),a=!0);for(let n of r)mt(n,e,t,i[n.modelIndex],n.modelOpacity===1?W.disabled:e.stencilModeFor3D(),e.colorModeForRenderPass());a&&e.resetStencilClippingMasks();let o=U.additive;for(let r of n)mt(r,e,t,i[r.modelIndex],W.disabled,r.isLightMesh?o:e.colorModeForRenderPass())}function St(e,t,n){let r=t.updateZoomBasedPaintProperties(),i=function(e,t,n){let r,i,a,o=e.terrain?e.terrain.exaggeration():0;if(e.terrain&&o>0){let t=e.terrain,i=t.findDEMTileFor(n);i&&i.dem?r=Ce.create(t,n,i):o=0}if(o===0&&(t.terrainElevationMin=0,t.terrainElevationMax=0),o===t.validForExaggeration&&(o===0||r&&r._demTile&&r._demTile.tileID===t.validForDEMTile.id&&r._dem._timestamp===t.validForDEMTile.timestamp))return!1;for(let e in t.instancesPerModel){let n=t.instancesPerModel[e];for(let e=0;e<n.instancedDataArray.length;++e){let s=(r?o*r.getElevationAt(0|n.instancedDataArray.float32[16*e],0|n.instancedDataArray.float32[16*e+1],!0,!0):0)+n.instancesEvaluatedElevation[e];n.instancedDataArray.float32[16*e+6]=s,i=i?Math.min(t.terrainElevationMin,s):s,a=a?Math.max(t.terrainElevationMax,s):s}}return t.terrainElevationMin=i||0,t.terrainElevationMax=a||0,t.validForExaggeration=o,t.validForDEMTile=r&&r._demTile?{id:r._demTile.tileID,timestamp:r._dem._timestamp}:{id:void 0,timestamp:0},!0}(e,t,n);(r||i)&&(t.uploaded=!1,t.upload(e.context))}var $={shadowUniformsInitialized:!1,useSingleShadowCascade:!1,tileMatrix:new Float64Array(16),shadowTileMatrix:new Float32Array(16),aabb:new y([0,0,0],[p,p,0])};function Ct(e,t){let n=1<<e.canonical.z,r=t.getFreeCameraOptions().position,i=t.elevation,a=e.canonical.x/n,o=(e.canonical.x+1)/n,s=e.canonical.y/n,c=(e.canonical.y+1)/n,l=t._centerAltitude;if(i){let t=i.getMinMaxForTile(e);t&&t.max>l&&(l=t.max)}let u=S(r.x,a,o)-r.x,d=S(r.y,s,c)-r.y,f=k(l,t.center.lat)-r.z;return t._zoomFromMercatorZ(Math.sqrt(u*u+d*d+f*f))}function wt(e,t,n,r,i,a,o){let s=e.context,c=e.renderPass===`shadow`,l=e.shadowRenderer,u=c&&l?l.getShadowPassDepthMode():new X(s.gl.LEQUAL,X.ReadWrite,e.depthRangeFor3D),d=e.isTileAffectedByFog(a),f=e.transform.projection.name===`globe`;if(n.meshes)for(let p of n.meshes){let m=f?[]:[`MODEL_POSITION_ON_GPU`],h=[],_,v,y,b=!f&&r.instancedDataArray.length>20;b&&m.push(`INSTANCED_ARRAYS`);let x=Fe(e,t.paint.get(`model-cutoff-fade-range`));if(x.shouldRenderCutoff&&m.push(`RENDER_CUTOFF`),c&&l)_=e.getOrCreateProgram(`modelDepth`,{defines:m}),v=$e(o.shadowTileMatrix,o.shadowTileMatrix,n.globalMatrix),y=U.disabled;else{pt(m,h,p,e,t.paint.get(`model-color-use-theme`).constantOr(`default`)===`none`?null:t.lut),_=e.getOrCreateProgram(`model`,{defines:m,overrideFog:d});let r=p.material,c=r.pbrMetallicRoughness,u=t.paint.get(`model-opacity`).constantOr(1),f=t.paint.get(`model-emissive-strength`).constantOr(0);v=Qe(a.expandedProjMatrix,n.globalMatrix,st,null,e,u,c.baseColorFactor,r.emissiveFactor,c.metallicFactor,c.roughnessFactor,r,f,t,i,void 0,void 0,void 0,1,_.fixedDefines.includes(`LIGHTING_3D_MODE`)),l&&(o.shadowUniformsInitialized?_.setShadowUniformValues(s,l.getShadowUniformValues()):(l.setupShadows(a.toUnwrapped(),_,`model-tile`),o.shadowUniformsInitialized=!0)),y=x.shouldRenderCutoff||u<1||r.alphaMode!==`OPAQUE`?U.alphaBlended:U.unblended}e.uploadCommonUniforms(s,_,a.toUnwrapped(),null,x);let S=p.material.doubleSided?g.disabled:g.backCCW;if(b)h.push(r.instancedDataBuffer),_.draw(e,s.gl.TRIANGLES,u,W.disabled,y,S,v,t.id,p.vertexBuffer,p.indexBuffer,p.segments,t.paint,e.transform.zoom,void 0,h,r.instancedDataArray.length);else{let n=c?`u_instance`:`u_normal_matrix`;for(let i=0;i<r.instancedDataArray.length;++i)v[n]=new Float32Array(r.instancedDataArray.arrayBuffer,64*i,16),_.draw(e,s.gl.TRIANGLES,u,W.disabled,y,S,v,t.id,p.vertexBuffer,p.indexBuffer,p.segments,t.paint,e.transform.zoom,void 0,h)}}if(n.children)for(let s of n.children)wt(e,t,s,r,i,a,o)}function Tt(e,t,n,r,i){let a=e.node;if(a.lodMeshes&&a.lodMeshes.length>0){if(e.targetLod<0)e.targetLod=+(t>r);else{let a=i>0?n/1e3/i:1;e.targetLod=S(t>r?e.targetLod+a:e.targetLod-a,0,1)}}else e.targetLod=0}function Et(e,t,n,r){if(!n.modelManager)return!0;let i=n.modelManager;if(!n.shadowRenderer)return!0;let a=n.shadowRenderer,o=t.aabb,s=!0,c=e.maxHeight;if(c===0){let t=0;for(let n in e.instancesPerModel){let e=i.getModel(n,r);e?t=Math.max(t,Math.max(Math.max(e.aabb.max[0],e.aabb.max[1]),e.aabb.max[2])):s=!1}c=e.maxScale*t*1.41+e.maxVerticalOffset,s&&(e.maxHeight=c)}o.max[2]=c,o.min[2]+=e.terrainElevationMin,o.max[2]+=e.terrainElevationMax,K(o.min,o.min,t.tileMatrix),K(o.max,o.max,t.tileMatrix);let l=o.intersects(a.getCurrentCascadeFrustum());return n.currentShadowCascade===0&&(e.isInsideFirstShadowMapFrustum=l===2),l===0}function Dt(e,t){let n=e.uniformValues.u_cutoff_params[0],r=e.uniformValues.u_cutoff_params[1],i=e.uniformValues.u_cutoff_params[2],a=e.uniformValues.u_cutoff_params[3];return r===n||a===i?1:S(((t-n)/(r-n)-i)/(a-i),0,1)}function Ot(e,t,n,r){if(t.pitch<20)return 1;let i=t.getWorldToCameraMatrix();H(i,i,e);let a=Pe(n.min[0],n.min[1],n.min[2],1),o=he(z(),a,i),s=o,c=o;a[1]=n.max[1],o=he(z(),a,i),s=o[1]<s[1]?o:s,c=o[1]>c[1]?o:c,a[0]=n.max[0],o=he(z(),a,i),s=o[1]<s[1]?o:s,c=o[1]>c[1]?o:c,a[1]=n.min[1],o=he(z(),a,i),s=o[1]<s[1]?o:s,c=o[1]>c[1]?o:c;let l=S(r[0],0,1),u=100*t.pixelsPerMeter*S(r[1],0,1),d=S(r[2],0,1),f=te(z(),s,c,l),p=Math.tan(.5*t.fovX),m=-f[2]*p;if(u===0)return f[1]<-Math.abs(m)?d:1;let h=(-Math.abs(m)-f[1])/u,g=S(R(1,d,h),d,1);return R(1,g,S((t.pitch-20)/20,0,1))}var kt={model:d(`#include "_prelude_fog.fragment.glsl"
#include "_prelude_shadow.fragment.glsl"
#include "_prelude_lighting.glsl"
#include "_prelude_indicator_cutout.fragment.glsl"
#include "_prelude_feature_cutout.fragment.glsl"
uniform float u_opacity;
#ifdef DITHERED_DISCARD
uniform float u_dithered_discard_threshold;
#endif
#ifndef LIGHTING_3D_MODE
uniform vec3 u_lightcolor;uniform vec3 u_lightpos;uniform float u_lightintensity;
#endif
uniform vec4 u_baseColorFactor;uniform vec4 u_emissiveFactor;uniform float u_metallicFactor;uniform float u_roughnessFactor;uniform float u_emissive_strength;in highp vec4 v_position_height;in lowp vec4 v_color_mix;
#ifdef RENDER_SHADOWS
in highp vec4 v_pos_light_view_0;in highp vec4 v_pos_light_view_1;in float v_depth_shadows;
#endif
#ifdef OCCLUSION_TEXTURE_TRANSFORM
uniform vec4 u_occlusionTextureTransform;
#endif
#pragma mapbox: define-attribute highp vec3 normal_3f
#pragma mapbox: define-attribute highp vec3 color_3f
#pragma mapbox: define-attribute highp vec4 color_4f
#pragma mapbox: define-attribute highp vec2 uv_2f
#pragma mapbox: initialize-attribute highp vec3 normal_3f
#pragma mapbox: initialize-attribute highp vec3 color_3f
#pragma mapbox: initialize-attribute highp vec4 color_4f
#pragma mapbox: initialize-attribute highp vec2 uv_2f
#ifdef HAS_ATTRIBUTE_a_pbr
in lowp vec4 v_roughness_metallic_emissive_alpha;in mediump vec4 v_height_based_emission_params;
#endif
#ifdef HAS_TEXTURE_u_baseColorTexture
uniform sampler2D u_baseColorTexture;uniform bool u_baseTextureIsAlpha;uniform bool u_alphaMask;uniform float u_alphaCutoff;
#endif
#ifdef HAS_TEXTURE_u_metallicRoughnessTexture
uniform sampler2D u_metallicRoughnessTexture;
#endif
#ifdef HAS_TEXTURE_u_occlusionTexture
uniform sampler2D u_occlusionTexture;uniform float u_aoIntensity;
#endif
#ifdef HAS_TEXTURE_u_normalTexture
uniform sampler2D u_normalTexture;
#endif
#ifdef HAS_TEXTURE_u_emissionTexture
uniform sampler2D u_emissionTexture;
#endif
#ifdef APPLY_LUT_ON_GPU
uniform highp sampler3D u_lutTexture;
#endif
#ifdef FEATURE_CUTOUT_VERTEX
in highp float v_cutout_factor;
#endif
#ifdef TERRAIN_FRAGMENT_OCCLUSION
in highp float v_depth;uniform highp sampler2D u_depthTexture;uniform highp vec2 u_inv_depth_size;uniform highp vec2 u_depth_range_unpack;
#ifdef DEPTH_D24
highp float unpack_depth(highp float depth) {return  depth*u_depth_range_unpack.x+u_depth_range_unpack.y;}
#else
highp float unpack_depth_rgba(highp vec4 rgba_depth)
{const highp vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(rgba_depth,bit_shift)*2.0-1.0;}
#endif
bool isOccluded() {highp vec2 coord=gl_FragCoord.xy*u_inv_depth_size;
#ifdef FLIP_Y
coord.y=1.0-coord.y;
#endif
#ifdef DEPTH_D24
highp float depth=unpack_depth(texture(u_depthTexture,coord).r);
#else
highp float depth=unpack_depth_rgba(texture(u_depthTexture,coord));
#endif
return v_depth > depth+0.0005;}
#endif
#define saturate(_x) clamp(_x,0.,1.)
vec3 linearTosRGB(vec3 color) {return pow(color,vec3(1./2.2));}vec3 sRGBToLinear(vec3 srgbIn) {return pow(srgbIn,vec3(2.2));}float calculate_NdotL(vec3 normal,vec3 lightDir) {const float ext=0.70710678118;return (clamp(dot(normal,lightDir),-ext,1.0)+ext)/(1.0+ext);}vec3 getDiffuseShadedColor(vec3 albedo,vec3 normal,vec3 lightDir,vec3 lightColor)
{
#ifdef LIGHTING_3D_MODE
vec3 transformed_normal=vec3(-normal.xy,normal.z);float lighting_factor;
#ifdef RENDER_SHADOWS
lighting_factor=shadowed_light_factor_normal(transformed_normal,v_pos_light_view_0,v_pos_light_view_1,v_depth_shadows);
#else
lighting_factor=saturate(dot(transformed_normal,u_lighting_directional_dir));
#endif
return apply_lighting(albedo,transformed_normal,lighting_factor);
#else
vec3 n=normal;float colorvalue=((albedo.x*0.2126)+(albedo.y*0.7152))+(albedo.z*0.0722);vec3 c=vec3(0.03,0.03,0.03);float directional=clamp(dot(n,vec3(lightDir)),0.0,1.0);directional=mix(1.0-u_lightintensity,max((1.0-colorvalue)+u_lightintensity,1.0),directional);vec3 c3=c+clamp((albedo*directional)*lightColor,mix(vec3(0.0),vec3(0.3),vec3(1.0)-lightColor),vec3(1.0));return c3;
#endif
}vec4 getBaseColor() {vec4 albedo=u_baseColorFactor;
#ifdef HAS_ATTRIBUTE_a_color_3f
albedo*=vec4(color_3f,1.0);
#endif
#ifdef HAS_ATTRIBUTE_a_pbr
#else
#ifdef HAS_ATTRIBUTE_a_color_4f
albedo*=color_4f;
#endif
#endif
#if defined (HAS_TEXTURE_u_baseColorTexture) && defined (HAS_ATTRIBUTE_a_uv_2f)
vec4 texColor=texture(u_baseColorTexture,uv_2f);if(u_alphaMask) {if (texColor.w < u_alphaCutoff) {discard;}}
#ifdef UNPREMULT_TEXTURE_IN_SHADER
texColor=vec4(unpremultiplyColor(texColor),1.0);
#endif
if(u_baseTextureIsAlpha) {if (texColor.r < 0.5) {discard;}} else {texColor.rgb=sRGBToLinear(texColor.rgb);albedo*=texColor;}
#endif
vec4 color=vec4(mix(albedo.rgb,v_color_mix.rgb,v_color_mix.a),albedo.a);
#ifdef APPLY_LUT_ON_GPU
color=applyLUT(u_lutTexture,color);
#endif
return color;}highp mat3 cotangentFrame(highp vec3 N,highp vec3 p,highp vec2 uv ) {
#ifdef HAS_TEXTURE_u_normalTexture
highp vec3 dp1=vec3(dFdx(p.x),dFdx(p.y),dFdx(p.z));highp vec3 dp2=vec3(dFdy(p.x),dFdy(p.y),dFdy(p.z));highp vec2 duv1=vec2(dFdx(uv.x),dFdx(uv.y));highp vec2 duv2=vec2(dFdy(uv.x),dFdy(uv.y));highp vec3 dp2perp=cross( dp2,N );highp vec3 dp1perp=cross( N,dp1 );highp vec3 T=dp2perp*duv1.x+dp1perp*duv2.x;highp vec3 B=dp2perp*duv1.y+dp1perp*duv2.y;
#ifdef FLIP_Y
T=-T;B=-B;
#endif
highp float lengthT=dot(T,T);highp float lengthB=dot(B,B);highp float maxLength=max(lengthT,lengthB);highp float invmax=inversesqrt( maxLength );highp mat3 res=mat3( T*invmax,B*invmax,N );return res;
#else
return mat3(1.0);
#endif
}highp vec3 getNormal(){highp vec3 n;
#ifdef HAS_ATTRIBUTE_a_normal_3f
n=normalize(normal_3f);
#else
highp vec3 fdx=vec3(dFdx(v_position_height.x),dFdx(v_position_height.y),dFdx(v_position_height.z));highp vec3 fdy=vec3(dFdy(v_position_height.x),dFdy(v_position_height.y),dFdy(v_position_height.z));
#ifdef FLIP_Y
n=normalize(cross(fdx,fdy));
#else
n=normalize(cross(fdx,fdy))*-1.0;
#endif
#endif
#if defined(HAS_TEXTURE_u_normalTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
vec3 nMap=texture( u_normalTexture,uv_2f).xyz;nMap=normalize(2.0*nMap-vec3(1.0));highp vec3 v=normalize(-v_position_height.xyz);highp mat3 TBN=cotangentFrame(n,v,uv_2f);n=normalize(TBN*nMap);
#endif
return n;}struct Material {float perceptualRoughness;float alphaRoughness;float metallic;vec3 f90;vec4 baseColor;vec3 diffuseColor;vec3 specularColor;highp vec3 normal;};Material getPBRMaterial() {Material mat;mat.baseColor=getBaseColor();mat.perceptualRoughness=u_roughnessFactor;mat.metallic=u_metallicFactor;
#ifdef HAS_ATTRIBUTE_a_pbr
mat.perceptualRoughness=v_roughness_metallic_emissive_alpha.x;mat.metallic=v_roughness_metallic_emissive_alpha.y;mat.baseColor.w*=v_roughness_metallic_emissive_alpha.w;
#endif
#if defined(HAS_TEXTURE_u_metallicRoughnessTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
vec4 mrSample=texture(u_metallicRoughnessTexture,uv_2f);mat.perceptualRoughness*=mrSample.g;mat.metallic*=mrSample.b;
#endif
const float c_minRoughness=0.04;mat.perceptualRoughness=clamp(mat.perceptualRoughness,c_minRoughness,1.0);mat.metallic=saturate(mat.metallic);mat.alphaRoughness=mat.perceptualRoughness*mat.perceptualRoughness;const vec3 f0=vec3(0.04);mat.diffuseColor=mat.baseColor.rgb*(vec3(1.0)-f0);mat.diffuseColor*=1.0-mat.metallic;mat.specularColor=mix(f0,mat.baseColor.rgb,mat.metallic);highp float reflectance=max(max(mat.specularColor.r,mat.specularColor.g),mat.specularColor.b);highp float reflectance90=saturate(reflectance*25.0);mat.f90=vec3(reflectance90);mat.normal=getNormal();return mat;}float V_GGX(float NdotL,float NdotV,float roughness)
{float a2=roughness*roughness;float GGXV=NdotL*sqrt(NdotV*NdotV*(1.0-a2)+a2);float GGXL=NdotV*sqrt(NdotL*NdotL*(1.0-a2)+a2);return 0.5/(GGXV+GGXL);}float V_GGXFast(float NdotL,float NdotV,float roughness) {float a=roughness;float GGXV=NdotL*(NdotV*(1.0-a)+a);float GGXL=NdotV*(NdotL*(1.0-a)+a);return 0.5/(GGXV+GGXL);}vec3 F_Schlick(vec3 specularColor,vec3 f90,float VdotH)
{return specularColor+(f90-specularColor)*pow(clamp(1.0-VdotH,0.0,1.0),5.0);}vec3 F_SchlickFast(vec3 specularColor,float VdotH)
{float x=1.0-VdotH;float x4=x*x*x*x;return specularColor+(1.0-specularColor)*x4*x;}float D_GGX(highp float NdotH,float alphaRoughness)
{highp float a4=alphaRoughness*alphaRoughness;highp float f=(NdotH*a4-NdotH)*NdotH+1.0;return a4/(PI*f*f);}vec3 diffuseBurley(Material mat,float LdotH,float NdotL,float NdotV)
{float f90=2.0*LdotH*LdotH*mat.alphaRoughness-0.5;return (mat.diffuseColor/PI)*(1.0+f90*pow((1.0-NdotL),5.0))*(1.0+f90*pow((1.0-NdotV),5.0));}vec3 diffuseLambertian(Material mat)
{
#ifdef LIGHTING_3D_MODE
return mat.diffuseColor;
#else
return mat.diffuseColor/PI;
#endif
}vec3 EnvBRDFApprox(vec3 specularColor,float roughness,highp float NdotV)
{vec4 c0=vec4(-1,-0.0275,-0.572,0.022);vec4 c1=vec4(1,0.0425,1.04,-0.04);highp vec4 r=roughness*c0+c1;highp float a004=min(r.x*r.x,exp2(-9.28*NdotV))*r.x+r.y;vec2 AB=vec2(-1.04,1.04)*a004+r.zw;return specularColor*AB.x+AB.y;}vec3 computeIndirectLightContribution(Material mat,float NdotV,vec3 normal)
{vec3 env_light=vec3(0.65,0.65,0.65);
#ifdef LIGHTING_3D_MODE
float ambient_factor=calculate_ambient_directional_factor(normal);env_light=u_lighting_ambient_color*ambient_factor;
#endif
vec3 envBRDF=EnvBRDFApprox(mat.specularColor,mat.perceptualRoughness,NdotV);vec3 indirectSpecular= envBRDF*env_light;vec3 indirectDiffuse=mat.diffuseColor*env_light;return indirectSpecular+indirectDiffuse;}vec3 computeLightContribution(Material mat,vec3 lightPosition,vec3 lightColor)
{highp vec3 n=mat.normal;highp vec3 v=normalize(-v_position_height.xyz);highp vec3 l=normalize(lightPosition);highp vec3 h=normalize(v+l);float NdotV=clamp(abs(dot(n,v)),0.001,1.0);float NdotL=saturate(dot(n,l));highp float NdotH=saturate(dot(n,h));float VdotH=saturate(dot(v,h));vec3 f=F_SchlickFast(mat.specularColor,VdotH);float g=V_GGXFast(NdotL,NdotV,mat.alphaRoughness);float d=D_GGX(NdotH,mat.alphaRoughness);vec3 diffuseTerm=(1.0-f)*diffuseLambertian(mat);vec3 specularTerm=f*g*d;vec3 transformed_normal=vec3(-n.xy,n.z);float lighting_factor;
#ifdef RENDER_SHADOWS
lighting_factor=shadowed_light_factor_normal(transformed_normal,v_pos_light_view_0,v_pos_light_view_1,v_depth_shadows);
#else
lighting_factor=NdotL;
#endif
vec3 directLightColor=(specularTerm+diffuseTerm)*lighting_factor*lightColor;vec3 indirectLightColor=computeIndirectLightContribution(mat,NdotV,transformed_normal);vec3 color=(saturate(directLightColor)+indirectLightColor);float intensityFactor=1.0;
#if !defined(LIGHTING_3D_MODE)
const vec3 luminosityFactor=vec3(0.2126,0.7152,0.0722);float luminance=dot(diffuseTerm,luminosityFactor);intensityFactor=mix((1.0-u_lightintensity),max((1.0-luminance+u_lightintensity),1.0),NdotL);
#endif
color*=intensityFactor;return color;}void main() {
#ifdef TERRAIN_FRAGMENT_OCCLUSION
if (isOccluded()) {discard;}
#endif
vec3 lightDir;vec3 lightColor;
#ifdef LIGHTING_3D_MODE
lightDir=u_lighting_directional_dir;lightDir.xy=-lightDir.xy;lightColor=u_lighting_directional_color;
#else
lightDir=u_lightpos;lightColor=u_lightcolor;
#endif
vec4 finalColor;
#ifdef DIFFUSE_SHADED
vec3 N=getNormal();vec3 baseColor=getBaseColor().rgb;vec3 diffuse=getDiffuseShadedColor(baseColor,N,lightDir,lightColor);
#ifdef HAS_TEXTURE_u_occlusionTexture
float ao=(texture(u_occlusionTexture,uv_2f).r-1.0)*u_aoIntensity+1.0;diffuse*=ao;
#endif
finalColor=vec4(mix(diffuse,baseColor,u_emissive_strength),1.0)*u_opacity;
#else
Material mat=getPBRMaterial();vec3 color=computeLightContribution(mat,lightDir,lightColor);float ao=1.0;
#if defined (HAS_TEXTURE_u_occlusionTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
#ifdef OCCLUSION_TEXTURE_TRANSFORM
vec2 uv=uv_2f.xy*u_occlusionTextureTransform.zw+u_occlusionTextureTransform.xy;
#else
vec2 uv=uv_2f;
#endif
ao=(texture(u_occlusionTexture,uv).x-1.0)*u_aoIntensity+1.0;color*=ao;
#endif
vec4 emissive=u_emissiveFactor;
#if defined(HAS_TEXTURE_u_emissionTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
emissive.rgb*=sRGBToLinear(texture(u_emissionTexture,uv_2f).rgb);
#endif
#ifdef APPLY_LUT_ON_GPU
float emissiveFactorLength=max(length(u_emissiveFactor.rgb),0.001);emissive.rgb=sRGBToLinear(applyLUT(u_lutTexture,linearTosRGB(emissive.rgb/emissiveFactorLength).rbg))*emissiveFactorLength;
#endif
color+=emissive.rgb;float opacity=mat.baseColor.w*u_opacity;
#ifdef HAS_ATTRIBUTE_a_pbr
float resEmission=v_roughness_metallic_emissive_alpha.z;resEmission*=v_height_based_emission_params.z+v_height_based_emission_params.w*pow(clamp(v_height_based_emission_params.x,0.0,1.0),v_height_based_emission_params.y);vec3 color_mix=v_color_mix.rgb;
#ifdef APPLY_LUT_ON_GPU
color_mix=applyLUT(u_lutTexture,color_mix);
#endif
color=mix(color,color_mix,min(1.0,resEmission));
#ifdef HAS_ATTRIBUTE_a_color_4f
float distance=length(vec2(1.3*max(0.0,abs(color_4f.x)-color_4f.z),color_4f.y));distance+= mix(0.5,0.0,clamp(resEmission-1.0,0.0,1.0));opacity*=v_roughness_metallic_emissive_alpha.w*saturate(1.0-distance*distance);
#endif
#endif
vec3 unlitColor=mat.baseColor.rgb*ao+emissive.rgb;color=mix(color,unlitColor,u_emissive_strength);color=linearTosRGB(color);color*=opacity;finalColor=vec4(color,opacity);
#endif
#ifdef DITHERED_DISCARD
if (abs(u_dithered_discard_threshold) < 1.0) {float ditherValue=fract(52.9829189*fract(0.06711056*gl_FragCoord.x+0.00583715*gl_FragCoord.y));float compareValue=mix(1.0-ditherValue,ditherValue,step(0.0,u_dithered_discard_threshold));if (abs(u_dithered_discard_threshold) < compareValue) {discard;}}
#endif
#ifdef FOG
finalColor=fog_dither(fog_apply_premultiplied(finalColor,v_fog_pos,v_position_height.w));
#endif
#ifdef RENDER_CUTOFF
finalColor*=v_cutoff_opacity;
#endif
#ifdef INDICATOR_CUTOUT
finalColor=applyCutout(finalColor,v_position_height.w);
#endif
#ifdef FEATURE_CUTOUT_VERTEX
apply_feature_cutout_dither(gl_FragCoord,v_cutout_factor);
#else
#ifdef FEATURE_CUTOUT
finalColor=apply_feature_cutout(finalColor,gl_FragCoord,get_cutout_factors(gl_FragCoord).x,0.0);
#endif
#endif
glFragColor=finalColor;
#ifdef OVERDRAW_INSPECTOR
glFragColor=vec4(1.0);
#endif
HANDLE_WIREFRAME_DEBUG;}`,`#include "_prelude_fog.vertex.glsl"
#include "_prelude_shadow.vertex.glsl"
#include "_prelude_feature_cutout.vertex.glsl"
in vec3 a_pos_3f;
#pragma mapbox: define-attribute highp vec3 normal_3f
#pragma mapbox: define-attribute highp vec2 uv_2f
#pragma mapbox: define-attribute highp vec3 color_3f
#pragma mapbox: define-attribute highp vec4 color_4f
#pragma mapbox: define-attribute-vertex-shader-only highp uvec4 pbr
#pragma mapbox: define-attribute-vertex-shader-only highp vec3 heightBasedEmissiveStrength
uniform mat4 u_matrix;uniform mat4 u_node_matrix;uniform mat4 u_lighting_matrix;uniform vec3 u_camera_pos;uniform vec4 u_color_mix;
#ifdef INSTANCED_ARRAYS
in vec4 a_normal_matrix0;in vec4 a_normal_matrix1;in vec4 a_normal_matrix2;in vec4 a_normal_matrix3;
#else
uniform highp mat4 u_normal_matrix;
#endif
#ifdef RENDER_SHADOWS
uniform mat4 u_light_matrix_0;uniform mat4 u_light_matrix_1;out highp vec4 v_pos_light_view_0;out highp vec4 v_pos_light_view_1;out float v_depth_shadows;
#endif
out vec4 v_position_height;out lowp vec4 v_color_mix;
#ifdef TERRAIN_FRAGMENT_OCCLUSION
out highp float v_depth;
#endif
#ifdef FEATURE_CUTOUT_VERTEX
out highp float v_cutout_factor;
#endif
#ifdef HAS_ATTRIBUTE_a_pbr
out lowp vec4 v_roughness_metallic_emissive_alpha;out mediump vec4 v_height_based_emission_params;
#endif
vec3 sRGBToLinear(vec3 srgbIn) {return pow(srgbIn,vec3(2.2));}void main() {
#pragma mapbox: initialize-attribute highp vec3 normal_3f
#pragma mapbox: initialize-attribute highp vec2 uv_2f
#pragma mapbox: initialize-attribute highp vec3 color_3f
#pragma mapbox: initialize-attribute highp vec4 color_4f
#pragma mapbox: initialize-attribute-custom highp uvec4 pbr
#pragma mapbox: initialize-attribute-custom highp vec3 heightBasedEmissiveStrength
highp mat4 normal_matrix;
#ifdef INSTANCED_ARRAYS
normal_matrix=mat4(a_normal_matrix0,a_normal_matrix1,a_normal_matrix2,a_normal_matrix3);
#else
normal_matrix=u_normal_matrix;
#endif
#ifdef FEATURE_CUTOUT_VERTEX
v_cutout_factor=1.0;
#endif
vec3 local_pos;mat3 rs;
#ifdef MODEL_POSITION_ON_GPU
vec3 pos_color=normal_matrix[0].xyz;vec4 translate=normal_matrix[1];vec3 pos_a=floor(pos_color);vec3 rgb=1.05*(pos_color-pos_a);float hidden=float(pos_a.x > EXTENT);float color_mix=pos_a.z/100.0;v_color_mix=vec4(sRGBToLinear(rgb),color_mix);float meter_to_tile=normal_matrix[0].w;vec4 pos=vec4(pos_a.xy,translate.z,1.0);rs[0].x=normal_matrix[1].w;rs[0].yz=normal_matrix[2].xy;rs[1].xy=normal_matrix[2].zw;rs[1].z=normal_matrix[3].x;rs[2].xyz=normal_matrix[3].yzw;vec4 pos_node=u_lighting_matrix*vec4(a_pos_3f,1.0);vec3 rotated_pos_node=rs*pos_node.xyz;vec3 pos_model_tile=(rotated_pos_node+vec3(translate.xy,0.0))*vec3(meter_to_tile,meter_to_tile,1.0);pos.xyz+=pos_model_tile;local_pos=pos.xyz;gl_Position=mix(u_matrix*pos,AWAY,hidden);pos.z*=meter_to_tile;v_position_height.xyz=pos.xyz-u_camera_pos;
#ifdef FEATURE_CUTOUT_VERTEX
highp vec4 ground_pos=vec4(pos_a.xy,0.0,1.0);highp vec4 cutout_clip_pos=mix(u_matrix*ground_pos,AWAY,hidden);highp vec3 cutout_ndc=cutout_clip_pos.xyz/cutout_clip_pos.w;vec2 uv=cutout_ndc.xy*0.5+0.5;highp float fragDepthNDC=cutout_ndc.z*0.5+0.5;
#ifdef FLIP_Y
fragDepthNDC=cutout_ndc.z;
#endif
highp float cutoutFactor=get_cutout_factors_vert(uv).x;highp float cutoutDepthNDC=sample_cutout_depth(u_cutout_depth_image,uv);highp float groundThreshold=0.001;highp float groundLimit=clamp((fragDepthNDC+groundThreshold-cutoutDepthNDC)/groundThreshold+0.5,0.0,1.0);v_cutout_factor=mix(1.0-cutoutFactor,1.0,groundLimit);
#endif
#else
local_pos=a_pos_3f;gl_Position=u_matrix*vec4(a_pos_3f,1);v_position_height.xyz=vec3(u_lighting_matrix*vec4(a_pos_3f,1));v_color_mix=vec4(sRGBToLinear(u_color_mix.rgb),u_color_mix.a);
#endif
v_position_height.w=a_pos_3f.z;
#ifdef HAS_ATTRIBUTE_a_pbr
vec4 albedo_c=decode_color(vec2(pbr.xy));vec2 e_r_m=unpack_float(float(pbr.z));vec2 r_m= unpack_float(e_r_m.y*16.0);r_m.r=r_m.r*16.0;v_color_mix=vec4(albedo_c.rgb,1.0);v_roughness_metallic_emissive_alpha=vec4(vec3(r_m,e_r_m.x)/255.0,albedo_c.a);v_roughness_metallic_emissive_alpha.z*=2.0;float heightBasedRelativeIntepolation=a_pos_3f.z*heightBasedEmissiveStrength.x+heightBasedEmissiveStrength.y;v_height_based_emission_params.x=heightBasedRelativeIntepolation;v_height_based_emission_params.y=heightBasedEmissiveStrength.z;vec2 emissionMultiplierValues=unpack_float(float(pbr.w))/256.0;v_height_based_emission_params.z=emissionMultiplierValues.x;v_height_based_emission_params.w=emissionMultiplierValues.y-emissionMultiplierValues.x;
#endif
#ifdef FOG
v_fog_pos=fog_position(local_pos);
#endif
#ifdef RENDER_CUTOFF
v_cutoff_opacity=cutoff_opacity(u_cutoff_params,gl_Position.z);
#endif
#ifdef TERRAIN_FRAGMENT_OCCLUSION
v_depth=gl_Position.z/gl_Position.w;
#ifdef CLIP_ZERO_TO_ONE
v_depth=-1.0+2.0*v_depth; 
#endif
#endif
#ifdef HAS_ATTRIBUTE_a_normal_3f
#ifdef MODEL_POSITION_ON_GPU
float x_squared_scale=dot(rs[0],rs[0]);float y_squared_scale=dot(rs[1],rs[1]);float z_squared_scale=dot(rs[2],rs[2]);vec3 squared_scale=vec3(x_squared_scale,y_squared_scale,z_squared_scale);normal_3f=rs*((u_lighting_matrix*vec4(normal_3f,0.0)).xyz/squared_scale);normal_3f=normalize(normal_3f);
#else
normal_3f=vec3(normal_matrix*vec4(normal_3f,0));
#endif
#endif
#ifdef HAS_ATTRIBUTE_a_pbr
#ifdef HAS_ATTRIBUTE_a_color_4f
v_roughness_metallic_emissive_alpha.w=clamp(color_4f.a*v_roughness_metallic_emissive_alpha.w*(v_roughness_metallic_emissive_alpha.z-1.0),0.0,1.0);
#endif
#endif
#ifdef RENDER_SHADOWS
vec4 shadow_pos=u_node_matrix*vec4(local_pos,1.0);
#ifdef NORMAL_OFFSET
#ifdef HAS_ATTRIBUTE_a_normal_3f
#ifdef MODEL_POSITION_ON_GPU
vec3 offset=shadow_normal_offset(vec3(-normal_3f.xy,normal_3f.z));shadow_pos.xyz+=offset*shadow_normal_offset_multiplier0();
#else
vec3 offset=shadow_normal_offset_model(normal_3f);shadow_pos.xyz+=offset*shadow_normal_offset_multiplier0();
#endif
#endif
#endif
v_pos_light_view_0=u_light_matrix_0*shadow_pos;v_pos_light_view_1=u_light_matrix_1*shadow_pos;v_depth_shadows=gl_Position.w;
#endif
}`),modelDepth:d(`void main() {}`,`in vec3 a_pos_3f;uniform mat4 u_matrix;
#ifdef MODEL_POSITION_ON_GPU
#ifdef INSTANCED_ARRAYS
in vec4 a_normal_matrix0;in vec4 a_normal_matrix1;in vec4 a_normal_matrix2;in vec4 a_normal_matrix3;
#else
uniform highp mat4 u_instance;
#endif
uniform highp mat4 u_node_matrix;
#endif
void main() {
#ifdef MODEL_POSITION_ON_GPU
highp mat4 instance;
#ifdef INSTANCED_ARRAYS
instance=mat4(a_normal_matrix0,a_normal_matrix1,a_normal_matrix2,a_normal_matrix3);
#else
instance=u_instance;
#endif
vec3 pos_color=instance[0].xyz;vec4 translate=instance[1];vec3 pos_a=floor(pos_color);float hidden=float(pos_a.x > EXTENT);float meter_to_tile=instance[0].w;vec4 pos=vec4(pos_a.xy,translate.z,1.0);mat3 rs;rs[0].x=instance[1].w;rs[0].yz=instance[2].xy;rs[1].xy=instance[2].zw;rs[1].z=instance[3].x;rs[2].xyz=instance[3].yzw;vec4 pos_node=u_node_matrix*vec4(a_pos_3f,1.0);vec3 rotated_pos_node=rs*pos_node.xyz;vec3 pos_model_tile=(rotated_pos_node+vec3(translate.xy,0.0))*vec3(meter_to_tile,meter_to_tile,1.0);pos.xyz+=pos_model_tile;gl_Position=mix(u_matrix*pos,AWAY,hidden);
#else
gl_Position=u_matrix*vec4(a_pos_3f,1);
#endif
}`),fillExtrusionDepth:d(`void main() {}`,`#include "_prelude_terrain.vertex.glsl"
#include "_prelude_material_table.vertex.glsl"
uniform mat4 u_matrix;uniform float u_edge_radius;uniform float u_width_scale;uniform float u_vertical_scale;
#ifdef TERRAIN
uniform int u_height_type;uniform int u_base_type;
#endif
in ivec4 a_pos_normal_ed;
#if defined(HAS_CENTROID) || defined(TERRAIN)
in uvec2 a_centroid_pos;
#endif
#ifdef RENDER_WALL_MODE
in ivec4 a_join_normal_inside;
#endif
#pragma mapbox: define highp float base
#pragma mapbox: define highp float height
#pragma mapbox: define highp float line_width
#pragma mapbox: define highp vec4 color
void main() {DECLARE_MATERIAL_TABLE_INFO
#pragma mapbox: initialize highp float base
#pragma mapbox: initialize highp float height
#pragma mapbox: initialize highp float line_width
#pragma mapbox: initialize highp vec4 color
base*=u_vertical_scale;height*=u_vertical_scale;vec3 top_up_ny=vec3(a_pos_normal_ed.xyz & 1);vec3 pos_nx=vec3(a_pos_normal_ed.xyz >> 1);base=max(0.0,base);height=max(0.0,top_up_ny.y==0.0 && top_up_ny.x==1.0 ? height-u_edge_radius : height);float t=top_up_ny.x;vec2 centroid_pos=vec2(0.0);
#if defined(HAS_CENTROID) || defined(TERRAIN)
centroid_pos=vec2(a_centroid_pos);
#endif
vec3 pos;
#ifdef TERRAIN
bool is_flat_height=centroid_pos.x !=0.0 && u_height_type==1;bool is_flat_base=centroid_pos.x !=0.0 && u_base_type==1;float ele=elevation(pos_nx.xy);bool is_elevation_encoded=centroid_pos.y==0.0 || (centroid_pos.y > 0.0 && int(centroid_pos.y)-(int(centroid_pos.y)/8)*8==7);float c_ele=is_flat_height || is_flat_base ? (is_elevation_encoded ? elevationFromUint16(centroid_pos.x) : flatElevation(centroid_pos)) : ele;float h_height=is_flat_height ? max(c_ele+height,ele+base+2.0) : ele+height;float h_base=is_flat_base ? max(c_ele+base,ele+base) : ele+(base==0.0 ?-5.0 : base);float h=t > 0.0 ? max(h_base,h_height) : h_base;pos=vec3(pos_nx.xy,h);
#else
pos=vec3(pos_nx.xy,t > 0.0 ? height : base);
#endif
#ifdef RENDER_WALL_MODE
vec3 join_normal_inside=vec3(a_join_normal_inside);vec2 wall_offset=u_width_scale*line_width*(join_normal_inside.xy/EXTENT);pos.xy+=(1.0-join_normal_inside.z)*wall_offset*0.5;pos.xy-=join_normal_inside.z*wall_offset*0.5;
#endif
float hidden=float((centroid_pos.x==0.0 && centroid_pos.y==1.0) || (color.a==0.0));gl_Position=mix(u_matrix*vec4(pos,1),AWAY,hidden);}`),fillExtrusionGroundEffect:d(`uniform highp float u_ao_pass;uniform highp float u_opacity;uniform highp float u_flood_light_intensity;uniform highp vec3 u_flood_light_color;uniform highp float u_attenuation;uniform sampler2D u_fb;uniform float u_fb_size;
#ifdef SDF_SUBPASS
in highp vec2 v_pos;in highp vec4 v_line_segment;in highp float v_flood_light_radius_tile;in highp vec2 v_ao;float line_df(highp vec2 a,highp vec2 b,highp vec2 p) {highp vec2 ba=b-a;highp vec2 pa=p-a;highp float r=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return length(pa-r*ba);}
#ifdef FOG
in highp float v_fog;
#endif
#endif
void main() {
#ifdef CLEAR_SUBPASS
vec4 color=vec4(1.0);
#ifdef CLEAR_FROM_TEXTURE
color=texture(u_fb,gl_FragCoord.xy/vec2(u_fb_size));
#endif
glFragColor=color;
#else
#ifdef SDF_SUBPASS
highp float d=line_df(v_line_segment.xy,v_line_segment.zw,v_pos);highp float effect_radius=mix(v_flood_light_radius_tile,v_ao.y,u_ao_pass);d/=effect_radius;d=min(d,1.0);d=1.0-pow(1.0-d,u_attenuation);highp float effect_intensity=mix(u_flood_light_intensity,v_ao.x,u_ao_pass);highp float fog=1.0;
#ifdef FOG
fog=v_fog;
#endif
#ifdef RENDER_CUTOFF
fog*=v_cutoff_opacity;
#endif
glFragColor=vec4(vec3(0.0),mix(1.0,d,effect_intensity*u_opacity*fog));
#else
#ifdef USE_MRT1
out_Target1=vec4(1.0-texture(u_fb,gl_FragCoord.xy/vec2(u_fb_size)).a,0.0,0.0,0.0);
#else
vec4 color=mix(vec4(u_flood_light_color,1.0),vec4(vec3(0.0),1.0),u_ao_pass);
#ifdef OVERDRAW_INSPECTOR
color=vec4(1.0);
#endif
glFragColor=color;
#endif
#endif
HANDLE_WIREFRAME_DEBUG;
#endif
}`,`#include "_prelude_fog.vertex.glsl"
in highp ivec4 a_pos_end;in highp int a_angular_offset_factor;in highp uint a_hidden_by_landmark;
#ifdef SDF_SUBPASS
out highp vec2 v_pos;out highp vec4 v_line_segment;out highp float v_flood_light_radius_tile;out highp vec2 v_ao;
#ifdef FOG
out highp float v_fog;
#endif
#endif
uniform highp float u_flood_light_intensity;uniform highp mat4 u_matrix;uniform highp float u_ao_pass;uniform highp float u_meter_to_tile;uniform highp float u_edge_radius;uniform highp float u_dynamic_offset;uniform highp vec2 u_ao;
#pragma mapbox: define highp float flood_light_ground_radius
const float TANGENT_CUTOFF=4.0;const float NORM=32767.0;void main() {
#pragma mapbox: initialize highp float flood_light_ground_radius
vec4 pos_end=vec4(a_pos_end);vec2 p=pos_end.xy;vec2 q=floor(pos_end.zw*0.5);vec2 start_bottom=pos_end.zw-q*2.0;float fl_ground_radius=abs(flood_light_ground_radius);float direction=flood_light_ground_radius < 0.0 ?-1.0 : 1.0;float flood_radius_tile=fl_ground_radius*u_meter_to_tile;vec2 v=normalize(q-p);float ao_radius=u_ao.y/3.5;float effect_radius=mix(flood_radius_tile,ao_radius,u_ao_pass)+u_edge_radius;float angular_offset_factor=float(a_angular_offset_factor)/NORM*TANGENT_CUTOFF;float angular_offset=direction*angular_offset_factor*effect_radius;float top=1.0-start_bottom.y;float side=(0.5-start_bottom.x)*2.0;vec2 extrusion_parallel=v*side*mix(u_dynamic_offset,angular_offset,top);vec2 perp=vec2(v.y,-v.x);vec2 extrusion_perp=direction*perp*effect_radius*top;vec3 pos=vec3(mix(q,p,start_bottom.x),0.0);pos.xy+=extrusion_parallel+extrusion_perp;
#ifdef SDF_SUBPASS
v_pos=pos.xy;v_line_segment=vec4(p,q)+perp.xyxy*u_edge_radius;v_flood_light_radius_tile=flood_radius_tile;v_ao=vec2(u_ao.x,ao_radius);
#ifdef FOG
v_fog_pos=fog_position(pos);v_fog=1.0-fog(v_fog_pos);
#endif
#endif
float hidden_by_landmark=0.0;
#ifdef HAS_CENTROID
hidden_by_landmark=float(a_hidden_by_landmark);
#endif
float isFloodlit=float(fl_ground_radius > 0.0 && u_flood_light_intensity > 0.0);float hidden=mix(1.0-isFloodlit,isFloodlit,u_ao_pass);hidden+=hidden_by_landmark;gl_Position=mix(u_matrix*vec4(pos,1.0),AWAY,float(hidden > 0.0));
#ifdef RENDER_CUTOFF
v_cutoff_opacity=cutoff_opacity(u_cutoff_params,gl_Position.z);
#endif
}`),groundShadow:d(`#include "_prelude_shadow.fragment.glsl"
#include "_prelude_indicator_cutout.fragment.glsl"
#include "_prelude_feature_cutout.fragment.glsl"
precision highp float;uniform vec3 u_ground_shadow_factor;in vec4 v_pos_light_view_0;in vec4 v_pos_light_view_1;
#ifdef FOG
in float v_fog_opacity;
#endif
void main() {float light=shadowed_light_factor_plane_bias(v_pos_light_view_0,v_pos_light_view_1,1.0/gl_FragCoord.w);vec3 shadow=mix(u_ground_shadow_factor,vec3(1.0),light);
#ifdef RENDER_CUTOFF
shadow=mix(vec3(1.0),shadow,cutoff_opacity(u_cutoff_params,1.0/gl_FragCoord.w));
#endif
#ifdef FOG
shadow=mix(shadow,vec3(1.0),v_fog_opacity);
#endif
#ifdef INDICATOR_CUTOUT
shadow=mix(shadow,vec3(1.0),1.0-applyCutout(vec4(1.0),0.0).r);
#endif
#ifdef FEATURE_CUTOUT
vec2 uv=gl_FragCoord.xy*u_inv_viewport_size.xy;
#ifdef FLIP_Y
uv.y=1.0-uv.y;
#endif
highp float cutoutFactor=get_cutout_factors(gl_FragCoord).y;highp float cutoutDepthNDC=sample_cutout_depth_bilinear(u_cutout_depth_image,uv);highp float fragDepthNDC=gl_FragCoord.z/u_feature_cutout_params.w;highp float groundThreshold=-0.001;highp float groundLimit=clamp((fragDepthNDC+groundThreshold-cutoutDepthNDC)/groundThreshold+0.5,0.0,1.0);cutoutFactor=mix(0.0,cutoutFactor,groundLimit);shadow=mix(shadow,vec3(1.0),cutoutFactor);
#endif
glFragColor=vec4(shadow,1.0);}`,`#include "_prelude_fog.vertex.glsl"
uniform mat4 u_matrix;uniform mat4 u_light_matrix_0;uniform mat4 u_light_matrix_1;in ivec2 a_pos;out vec4 v_pos_light_view_0;out vec4 v_pos_light_view_1;
#ifdef FOG
out float v_fog_opacity;
#endif
void main() {gl_Position=u_matrix*vec4(a_pos,0.0,1.0);v_pos_light_view_0=u_light_matrix_0*vec4(a_pos,0.0,1.0);v_pos_light_view_1=u_light_matrix_1*vec4(a_pos,0.0,1.0);
#ifdef FOG
v_fog_pos=fog_position(vec2(a_pos));v_fog_opacity=fog(v_fog_pos);
#endif
}`)},At=(e,t)=>({u_matrix:e,u_ground_shadow_factor:t}),jt={model:e=>({u_matrix:new I(e),u_lighting_matrix:new I(e),u_normal_matrix:new I(e),u_node_matrix:new I(e),u_lightpos:new Ae(e),u_lightintensity:new J(e),u_lightcolor:new Ae(e),u_camera_pos:new Ae(e),u_opacity:new J(e),u_baseColorFactor:new F(e),u_emissiveFactor:new F(e),u_metallicFactor:new J(e),u_roughnessFactor:new J(e),u_baseTextureIsAlpha:new Y(e),u_alphaMask:new Y(e),u_alphaCutoff:new J(e),u_baseColorTexture:new Y(e),u_metallicRoughnessTexture:new Y(e),u_normalTexture:new Y(e),u_occlusionTexture:new Y(e),u_emissionTexture:new Y(e),u_lutTexture:new Y(e),u_color_mix:new F(e),u_aoIntensity:new J(e),u_emissive_strength:new J(e),u_occlusionTextureTransform:new F(e),u_dithered_discard_threshold:new J(e)}),modelDepth:e=>({u_matrix:new I(e),u_instance:new I(e),u_node_matrix:new I(e)}),groundShadow:e=>({u_matrix:new I(e),u_ground_shadow_factor:new Ae(e)}),fillExtrusionDepth:ke,fillExtrusionGroundEffect:Re},Mt=[];function Nt(e){return Mt[e]=Mt[e]||new Float64Array(16)}var Pt=[],Ft=new Float32Array(16),It=class{constructor(e,t){this.aabb=e,this.lastCascade=t}},Lt=class{add(e,t){let n=this.receivers[e.key];n===void 0?this.receivers[e.key]=new It(t,null):(n.aabb.min[0]=Math.min(n.aabb.min[0],t.min[0]),n.aabb.min[1]=Math.min(n.aabb.min[1],t.min[1]),n.aabb.min[2]=Math.min(n.aabb.min[2],t.min[2]),n.aabb.max[0]=Math.max(n.aabb.max[0],t.max[0]),n.aabb.max[1]=Math.max(n.aabb.max[1],t.max[1]),n.aabb.max[2]=Math.max(n.aabb.max[2],t.max[2]))}clear(){this.receivers={}}get(e){return this.receivers[e.key]}computeRequiredCascades(e,t,n){let r=y.fromPoints(e.points),i=0;for(let e in this.receivers){let a=this.receivers[e];if(!a||!r.intersectsAabb(a.aabb))continue;a.aabb.min=r.closestPoint(a.aabb.min),a.aabb.max=r.closestPoint(a.aabb.max);let o=a.aabb.getCorners();for(let e=0;e<n.length;e++){let r=!0;for(let i of o){let a=[i[0]*t,i[1]*t,i[2]];if(K(a,a,n[e].matrix),a[0]<-1||a[0]>1||a[1]<-1||a[1]>1){r=!1;break}}if(a.lastCascade=e,i=Math.max(i,e),r)break}}return i+1}};function Rt(e,t,n){let r=Oe([],n,t),i=Oe([],e,t),a=je([],r,i),o=C(a);return o===0?[0,0,1,0]:(q(a,a,1/o),[a[0],a[1],a[2],-de(a,t)])}function zt(e,t,n,r,i,o){let c=e.zoom,u=e.scale,d=e.worldSize,f=1/d,p=e.aspect,m=Math.sqrt(1+p*p)*Math.tan(.5*e.fovX),h=m*m,g=r-n,_=r+n,v,y;h>g/_?(v=r,y=r*m):(v=.5*_*(1+h),y=.5*Math.sqrt(g*g+2*(r*r+n*n)*h+_*_*h*h));let x=e.projection.pixelsPerMeter(e.center.lat,d),S=e._camera.getCameraToWorldMercator(),C=[0,0,-v*f];K(C,C,S);let w=y*f,T=function(t){return t[0]/=u,t[1]/=u,t[2]=k(t[2],e._center.lat),t},E=e._edgeInsets;if(!(E.left===0&&E.top===0&&E.right===0&&E.bottom===0||E.left===E.right&&E.top===E.bottom)){let t=e._camera.getWorldToCamera(e.worldSize,e.projection.zAxisUnit===`meters`?x:1),i=e._camera.getCameraToClipPerspective(e._fov,e.width/e.height,n,r);i[8]=2*-e.centerOffset.x/e.width,i[9]=2*e.centerOffset.y/e.height;let o=new Float64Array(16);b(o,i,t);let s=new Float64Array(16);a(s,o);let l=A.fromInvProjectionMatrix(s,d,c,!0);for(let e of l.points){let t=T(e);w=Math.max(w,ce(fe([],C,t)))}}w*=i/(i-1);let D=Math.acos(t[2]),j=Math.atan2(-t[0],-t[1]),M=new l;M.position=C,M.setPitchBearing(D,j);let N=M.getWorldToCamera(d,x),P=w*d,ee=Math.min(e._mercatorZfromZoom(17)*d*-2,-2*P),F=M.getCameraToClipOrthographic(-P,P,-P,P,ee,(P+o*x)/t[2]),I=new Float64Array(16);H(I,F,N);let L=Se(Math.floor(1e6*C[0])/1e6*d,Math.floor(1e6*C[1])/1e6*d,0),te=.5*i,R=[0,0,0];K(R,L,I),q(R,R,te);let z=[Math.floor(R[0]),Math.floor(R[1]),Math.floor(R[2])],B=[0,0,0];Oe(B,R,z),q(B,B,-1/te);let V=new Float64Array(16);return s(V),O(V,V,B),H(I,V,I),[I,P]}var Bt={loaded:!0,drawModels:function(e,t,i,s){if(e.renderPass===`opaque`)return;let c=i.paint.get(`model-opacity`).constantOr(1),l=i.paint.get(`model-elevation-reference`),u=l===`ground`,d=l===`ground`;if(c===0)return;let f=i.paint.get(`model-cast-shadows`);if(e.renderPass===`shadow`&&(!f||e.terrain&&c<.65&&i._transitionablePaint._values[`model-opacity`].value.expression instanceof r))return;let h=e.shadowRenderer,b=i.paint.get(`model-receive-shadows`);h&&(h.useNormalOffset=!0,b||(h.enabled=!1));let x=()=>{h&&(h.useNormalOffset=!0,b||(h.enabled=!0))},S=t.getSource();if(e.renderPass===`light-beam`&&S.type!==`batched-model`)return;if(S.type===`vector`||S.type===`geojson`)return function(e,t,n,r,i){let a=e.transform,o=a.projection.name===`globe`,s=a.getFreeCameraOptions().position;if(!e.modelManager)return;let c=e.modelManager;n.modelManager=c;let l=e.shadowRenderer;if(!Object.hasOwn(n._unevaluatedLayout._values,`model-id`))return;let u=n._unevaluatedLayout._values[`model-id`],d={...n.layout.get(`model-id`).parameters},f=e.style.order.indexOf(n.fqid),m=n.paint.get(`model-opacity`).constantOr(1);for(let h of r){let r=t.getTile(h).getBucket(n);if(!r||r.projection.name!==a.projection.name)continue;let g=r.getModelUris();g&&!r.modelsRequested&&(c.addModelsFromBucket(g,i),r.modelsRequested=!0),d.zoom=o?h.overscaledZ:Ct(h,a);let v=u.possiblyEvaluate(d);if(St(e,r,h),$.shadowUniformsInitialized=!1,$.useSingleShadowCascade=!!l&&l.getMaxCascadeForTile(h.toUnwrapped())===0,e.renderPass===`shadow`&&l){if(e.currentShadowCascade===1&&r.isInsideFirstShadowMapFrustum)continue;let t=a.calculatePosMatrix(h.toUnwrapped(),a.worldSize);if($.tileMatrix.set(t),$.shadowTileMatrix.set(l.calculateShadowPassMatrixFromMatrix(t)),$.aabb.min=[0,0,0],$.aabb.max[0]=$.aabb.max[1]=8192,$.aabb.max[2]=0,Et(r,$,e,n.scope))continue}let y=1<<h.canonical.z,b=[((s.x-h.wrap)*y-h.canonical.x)*p,(s.y*y-h.canonical.y)*p,s.z*y*p];e.conflationActive&&Object.keys(r.instancesPerModel).length>0&&e.style.isLayerClipped(n,t.getSource())&&r.updateReplacement(h,e.replacementSource,f,n.scope)&&(r.uploaded=!1,r.upload(e.context));let x=0,S=[],C=[],T=[];for(let t in r.instancesPerModel){let a=r.instancesPerModel[t];a.features.length>0&&!o&&(t=v.evaluate(a.features[0].feature,{}));let l=c.getModel(t,i);if(l||c.hasURLBeenRequested(t)||r.modelUris.includes(t)||(r.modelUris.push(t),r.modelsRequested=!1),l&&l.uploaded){if(o){let t=q([],[s.x,s.y,s.z],e.transform.worldSize);De(t,t);for(let n=0;n<a.instancedDataArray.length;++n){let i=[0,0,0],o=[1,1,1],s=_(),c=a.tileCoordinatesForInstance(n),u=a.transformForInstance(n);Ie(o,u),j(s,u),se(i,s);let d=a.translationForInstance(n),f=new V(0,0);et(r.canonical,f,c.x,c.y);let p=ae();Ve(p,l,e.transform,f,i,o,d,!0,!1,!1);let h=a.colorForInstance(n),g=w([],t),v=Me(f.lat,e.transform.zoom),y=xe([],[1,1,1/v]);T.push({zScaleMatrix:y,negCameraPosMatrix:g});for(let t of l.nodes)gt(e,t,p,e.transform.expandedFarZProjMatrix,x,S,C,l.materialOverrides,m,h);++x}}else for(let t of l.nodes)wt(e,n,t,a,b,h,$)}}if(o){if(e.renderPass===`shadow`){for(let t of C)_t(t.mesh,t.nodeModelMatrix,e,n);for(let t of S)_t(t.mesh,t.nodeModelMatrix,e,n)}else xt(e,n,S,C,T)}}}(e,t,i,s,ht(e,i)),void x();if(!S.loaded())return;if(S.type===`batched-model`)return function(e,t,r,i){r.resetLayerRenderingStats(e);let s=e.context,c=e.transform,l=e.style.fog,u=e.shadowRenderer;if(c.projection.name!==`mercator`)return void v(`Drawing 3D landmark models for ${c.projection.name} projection is not yet implemented`);let d=e.transform.getFreeCameraOptions().position,f=q([],[d.x,d.y,d.z],e.transform.worldSize),p=De([],f),h=w([],p),_=Me(c.center.lat,c.zoom),b=xe([],[1,1,1/_]),x=H([],h,b),S=r.paint.get(`model-opacity`).constantOr(1),C=new X(s.gl.LEQUAL,X.ReadWrite,e.depthRangeFor3D),T=new X(s.gl.LEQUAL,X.ReadOnly,e.depthRangeFor3D),E=new y([1/0,1/0,1/0],[-1/0,-1/0,-1/0]),D=e.renderPass===`shadow`,O=e.renderPass===`light-beam`,k=r.paint.get(`model-color-use-theme`).constantOr(`default`)===`none`,A=D&&u?u.getCurrentCascadeFrustum():c.getFrustum(c.scaleZoom(c.worldSize)),j=r.paint.get(`model-front-cutoff`),M=j[2]<1,N=Fe(e,r.paint.get(`model-cutoff-fade-range`)),P=r.getLayerRenderingStats();(function(e,t,n,r){let i=e.terrain?e.terrain.exaggeration():0,a=e.transform.zoom;for(let o of r){let r=t.getTile(o).getBucket(n);r&&(r.setFilter(n.filter),e.conflationActive&&r.updateReplacement(o,e.replacementSource),r.evaluateTransform(e,n),e.terrain&&i>0&&r.elevationUpdate(e.terrain,i,o,n.source),r.needsReEvaluation(e,a,n)&&r.evaluate(n))}})(e,t,r,i),function(){let d=new Map,p,h,v;M?(p=i.length-1,h=-1,v=-1):(p=0,h=i.length,v=1);let y=n(),b=new oe(0,0);for(let n=p;n!==h;n+=v){let p=i[n],h=t.getTile(p).getBucket(r);if(!h||!h.uploaded)continue;let v=!1;u&&(v=u.getMaxCascadeForTile(p.toUnwrapped())===0);let w=c.calculatePosMatrix(p.toUnwrapped(),c.worldSize),ee=!!(h.modelTraits&Ge.HasMapboxMeshFeatures);H(nt,x,w),H(rt,c.expandedFarZProjMatrix,w),a(it,nt),ve(it,it);let F=!D&&u&&u.enabled?u.computeCascadeTileMatrices(w):null;!D&&M&&(a(Q,w),K(y,f,Q),b.x=y[0],b.y=y[1]);let I=[];h.setFilter(r.filter);for(let t of h.getNodesInfo()){if(t.hiddenByReplacement||!t.node.meshes)continue;let n=t.node,r=0;e.terrain&&n.elevation&&(r=n.elevation*e.terrain.exaggeration());let i=(()=>{let e=t.aabb,n=E.min,i=E.max;return n[0]=e.min[0],n[1]=e.min[1],n[2]=e.min[2]+r,i[0]=e.max[0],i[1]=e.max[1],i[2]=e.max[2]+r,K(n,n,w),K(i,i,w),E})(),a=t.evaluatedScale;if(a[0]<=1&&a[1]<=1&&a[2]<=1&&i.intersects(A)===0)continue;if(!D){let n=i.min,r=i.max;ct[0]=.5*(n[0]+r[0]),ct[1]=.5*(n[1]+r[1]),ct[2]=.5*(n[2]+r[2]);let s=o(f,ct)*_,c=e._debugParams.lodSwitchDistance,l=c>=0;if(l&&c>=9999)t.targetLod=0;else{let i;if(l)i=c;else{let e=(r[2]-n[2])*_*a[2],t=Math.max(r[0]-n[0],r[1]-n[1])*_*Math.max(a[0],a[1]),o;o=e>=30?1:t>=80?.5:Math.max(e,t)>=20?.25:0,i=2e3+3e3*o}Tt(t,s,Math.min(e.frameTimeDelta,1e3/30),i,e._debugParams.lodSwitchFadeDuration)}}if(!D&&M){let e=1/6;t.cameraCollisionOpacity=f[0]>i.min[0]&&f[0]<i.max[0]&&f[1]>i.min[1]&&f[1]<i.max[1]&&f[2]*_<i.max[2]&&n.footprint&&m(b,n.footprint)?Math.max(t.cameraCollisionOpacity-e,0):Math.min(1,t.cameraCollisionOpacity+e)}let s=1/be(p.canonical),l=n.anchor?n.anchor[0]:0,u=n.anchor?n.anchor[1]:0,d=[l*(a[0]-1)+t.evaluatedTranslation[0]*s,u*(a[1]-1)+t.evaluatedTranslation[1]*s,r+t.evaluatedTranslation[2]],h=ft(new Float64Array(16),w,d,a),g=H([],h,n.globalMatrix),v=H([],c.expandedFarZProjMatrix,g),y=v[2]*l+v[6]*u+v[10]*r+v[14];n.hidden=!1;let x=S;D||(M&&(x*=t.cameraCollisionOpacity,x*=Ot(h,c,t.aabb,j)),x*=Dt(N,y)),x===0?n.hidden=!0:I.push({nodeInfo:t,depth:y,opacity:x,wvpForNode:v,nodeModelMatrix:g,tileModelMatrix:h,tileTranslation:d})}D||I.sort((e,t)=>!M||e.opacity===1&&t.opacity===1?e.depth<t.depth?-1:1:e.opacity===1?-1:t.opacity===1?1:e.depth>t.depth?-1:1);for(let t of I){let n=t.nodeInfo,i=n.node,a=null;if(e._debugParams.show3DModelFootprints&&i.footprint){let e=i.id||i.name||`footprint`;if(!d.has(e)){let n=ft(new Float64Array(16),rt,t.tileTranslation,t.nodeInfo.evaluatedScale);d.set(e,{node:i,mvp:n})}}let o=t.nodeInfo.evaluatedScale;ft(Z,nt,t.tileTranslation,o),ot[0]=1/o[0],ot[1]=-1/o[1],ot[2]=1/o[2],B(Q,it,ot),H(Z,Z,i.globalMatrix);let f=ee?0:n.evaluatedRMEA[0][2],p=n.targetLod,m=i.lodMeshes&&i.lodMeshes.length>0,h=m&&p>0&&p<1;if(D&&m&&Math.round(p)===1)continue;let _=!D&&l?dt(tt,t.nodeModelMatrix,e.transform):null,y=D&&u?u.calculateShadowPassMatrixFromMatrix(t.nodeModelMatrix):null,b=h?2:1,x=m&&Math.round(p)===1;for(let o=0;o<b;++o){let d=h?o===1:x,m=d?i.lodMeshes:i.meshes,b=h?d?-p:1-p:1;for(let o=0;o<m.length;++o){let p=m[o],x=!d&&o===i.lightMeshIndex,S=t.wvpForNode;if(x){if(!O&&!e.terrain&&e.shadowRenderer){e.currentLayer<e.firstLightBeamLayer&&(e.firstLightBeamLayer=e.currentLayer);continue}S=ft(at,rt,t.tileTranslation,t.nodeInfo.evaluatedScale)}else if(O)continue;let w={defines:[]},E=[],A=!!p.normalBuffer;if(!D&&u&&(u.useNormalOffset=A),pt(w.defines,E,p,e,k?null:r.lut),ee||w.defines.push(`DIFFUSE_SHADED`),v&&w.defines.push(`SHADOWS_SINGLE_CASCADE`),P&&(D?P.numRenderedVerticesInShadowPass+=p.vertexArray.length:P.numRenderedVerticesInTransparentPass+=p.vertexArray.length),D){_t(p,t.nodeModelMatrix,e,r,y);continue}if(l&&c.projection.name!==`globe`){let e=p.aabb.min,t=p.aabb.max,[n,r]=l.getOpacityForBounds(_,e[0],e[1],t[0],t[1]);w.overrideFog=n>=.05||r>=.05}let j=p.material,M;j.occlusionTexture&&j.occlusionTexture.offsetScale&&(M=j.occlusionTexture.offsetScale,w.defines.push(`OCCLUSION_TEXTURE_TRANSFORM`)),h&&w.defines.push(`DITHERED_DISCARD`);let N=e.getOrCreateProgram(`model`,w);if(!D&&u&&u.enabled){if(a!==A){for(let e=0;e<F.length;e++)ft(ut[e]=ut[e]||new Float64Array(16),F[e],t.tileTranslation,t.nodeInfo.evaluatedScale);u.setupShadowsFromCascadeMatrices(ut,N,A),a=A}else N.setShadowUniformValues(s,u.getShadowUniformValues())}e.uploadCommonUniforms(s,N,null,_);let I=j.pbrMetallicRoughness;I.metallicFactor=.9,I.roughnessFactor=.5;let L=Qe(S,Z,Q,i.globalMatrix,e,t.opacity,I.baseColorFactor,j.emissiveFactor,I.metallicFactor,I.roughnessFactor,j,f,r,lt,M,void 0,void 0,b,N.fixedDefines.includes(`LIGHTING_3D_MODE`));!x&&(n.hasTranslucentParts||t.opacity<1)&&N.draw(e,s.gl.TRIANGLES,C,W.disabled,U.disabled,g.backCCW,L,r.id,p.vertexBuffer,p.indexBuffer,p.segments,r.paint,e.transform.zoom,void 0,E),N.draw(e,s.gl.TRIANGLES,x?T:C,W.disabled,x||t.opacity<1||n.hasTranslucentParts?U.alphaBlended:U.unblended,g.backCCW,L,r.id,p.vertexBuffer,p.indexBuffer,p.segments,r.paint,e.transform.zoom,void 0,E)}}}}if(e._debugParams.show3DModelFootprints&&d.size>0){let t=Array.from(d.keys()).sort();for(let n of t){let{node:t,mvp:r}=d.get(n);vt(e,0,t,r)}}}()}(e,t,i,s),void x();if(S.type!==`model`)return;let C=S.getModels(),T=[],E=e.transform.getFreeCameraOptions().position,D=q([],[E.x,E.y,E.z],e.transform.worldSize);De(D,D);let O=[],k=[],A=0;for(let n of C){let r=t.getFeatureState(``,n.id),a={type:`Unknown`,id:n.id,properties:n.featureProperties},o=i.paint.get(`model-rotation`).evaluate(a,r),s=i.paint.get(`model-scale`).evaluate(a,r),c=i.paint.get(`model-translation`).evaluate(a,r),l=i.paint.get(`model-opacity`).evaluate(a,r);yt(i,n.id,r,n.featureProperties,n.nodeOverrideNames,n.nodeOverrides),bt(i,n.id,r,n.featureProperties,n.materialOverrideNames,n.materialOverrides),n.nodeOverrides.size>0&&n.computeBoundsAndApplyParent(),n.computeModelMatrix(e,o,s,c,d,u,!1);let f=w([],D),p=Me(n.position.lat,e.transform.zoom),m=xe([],[1,1,1/p]);T.push({zScaleMatrix:m,negCameraPosMatrix:f});for(let t of n.nodes)gt(e,t,n.matrix,e.transform.expandedFarZProjMatrix,A,O,k,n.materialOverrides,l,void 0,n.lightOverrides);A++}if(O.sort((e,t)=>t.depth-e.depth),e.renderPass!==`shadow`){if(e._debugParams.show3DModelFootprints){let t=e.transform.projMatrix,n=new Map,r=(e,r)=>{if(e.footprint){let i=e.id||e.name||`footprint`;if(!n.has(i)){let a=H([],t,r);n.set(i,{node:e,mvp:a})}}};for(let e of k)r(e.node,e.modelMatrix);for(let e of O)r(e.node,e.modelMatrix);let i=Array.from(n.keys()).sort();for(let t of i){let{node:r,mvp:i}=n.get(t);vt(e,0,r,i)}}xt(e,i,O,k,T),x()}else{for(let t of k)_t(t.mesh,t.nodeModelMatrix,e,i);for(let t of O)_t(t.mesh,t.nodeModelMatrix,e,i);x()}},prepare:function(e,t,n){let r=t.getSource();if(!r.loaded())return;if(r.type===`vector`||r.type===`geojson`)return void(n.modelManager&&n.modelManager.upload(n,ht(n,e)));if(r.type===`batched-model`||r.type!==`model`)return;let i=r.getModels();for(let e of i)e.upload(n.context)},shaders:kt,programUniforms:jt,ShadowRenderer:class{constructor(e){this.painter=e,this._enabled=!1,this._drawShadowAfterLayer=-1,this._numCascadesToRender=0,this._cascades=[],this._groundShadowTiles=[],this._receivers=new Lt,this._depthMode=new X(e.context.gl.LEQUAL,X.ReadWrite,[0,1]),this._uniformValues=le(),this._forceDisable=!1,this._devtoolsFolder=null,this.useNormalOffset=!1,this._shadowParameters={cascadeCount:2,normalOffset:3,shadowMapResolution:2048}}destroy(){for(let e of this._cascades)e.texture.destroy(),e.framebuffer.destroy();this._cascades=[]}updateShadowParameters(e,t){let n=this.painter;if(this._enabled=!1,this._drawShadowAfterLayer=-1,this._receivers.clear(),!t||!t.properties)return;let r=t.properties.get(`shadow-intensity`),i=t.properties.get(`shadow-draw-before-layer`);if(!t.shadowsEnabled()||r<=0)return;let o=-1,s=0;for(let t of n.style.order){let r=n.style._mergedLayers[t];r.hasShadowPass()&&!r.isHidden(e.zoom)&&(o=s),!i||i!==t&&i!==r.slot||(this._drawShadowAfterLayer=s>0?s-1:0),s+=1}if(this._enabled=o>=0,!this.enabled)return;this._drawShadowAfterLayer<0&&(this._drawShadowAfterLayer=o);let c=n.context,l=this._shadowParameters.shadowMapResolution,u=this._shadowParameters.shadowMapResolution;if(this._cascades.length===0||this._shadowParameters.shadowMapResolution!==this._cascades[0].texture.size[0]){this._cascades=[];for(let e=0;e<this._shadowParameters.cascadeCount;++e){let e=c.gl,t=c.createFramebuffer(l,u,0,`texture`),n=new E(c,{width:l,height:u,data:null},e.DEPTH_COMPONENT16);t.depthAttachment.set(n.texture),this._cascades.push({framebuffer:t,texture:n,matrix:[],far:0,boundingSphereRadius:0,frustum:new A,scale:0})}}this.shadowDirection=P(t);let d=0;if(e.elevation){let t=e.elevation,n=[1e4,-1e4];t.visibleDemTiles.filter(e=>e.dem).forEach(e=>{let t=e.dem.tree;n[0]=Math.min(n[0],t.minimums[0]),n[1]=Math.max(n[1],t.maximums[0])}),n[0]!==1e4&&(d=(n[1]-n[0])*t.exaggeration())}let f=1.5*e.cameraToCenterDistance,p=3*f,m=new Float64Array(16);for(let t=0;t<this._cascades.length;++t){let n=this._cascades[t],r=e.height/50,i=1;this._shadowParameters.cascadeCount===1?i=p:t===0?i=f:(r=f,i=p);let[o,s]=zt(e,this.shadowDirection,r,i,this._shadowParameters.shadowMapResolution,d);n.scale=e.scale,n.matrix=o,n.boundingSphereRadius=s,a(m,n.matrix),n.frustum=A.fromInvProjectionMatrix(m,1,0,!0),n.far=i}let h=this._cascades.length-1;this._uniformValues.u_fade_range=[.75*this._cascades[h].far,this._cascades[h].far],this._uniformValues.u_shadow_intensity=r,this._uniformValues.u_shadow_direction=[this.shadowDirection[0],this.shadowDirection[1],this.shadowDirection[2]],this._uniformValues.u_shadow_texel_size=1/this._shadowParameters.shadowMapResolution,this._uniformValues.u_shadow_map_resolution=this._shadowParameters.shadowMapResolution,this._uniformValues.u_shadowmap_0=G.ShadowMap0,this._uniformValues.u_shadowmap_1=G.ShadowMap0+1,this._groundShadowTiles=n.transform.coveringTiles({tileSize:512,renderWorldCopies:!0});let g=n.transform.elevation;for(let e of this._groundShadowTiles){let t={min:0,max:0};if(g){let n=g.getMinMaxForTile(e);n&&(t=n)}this.addShadowReceiver(e.toUnwrapped(),t.min,t.max)}}get enabled(){return this._enabled&&!this._forceDisable}set enabled(e){this._enabled=e}drawShadowPass(e,t){if(!this.enabled)return;let n=this.painter,r=n.context;this._numCascadesToRender=this._receivers.computeRequiredCascades(n.transform.getFrustum(0),n.transform.worldSize,this._cascades),r.viewport.set([0,0,this._shadowParameters.shadowMapResolution,this._shadowParameters.shadowMapResolution]);for(let i=0;i<this._numCascadesToRender;++i){n.currentShadowCascade=i,r.bindFramebuffer.set(this._cascades[i].framebuffer.framebuffer),r.clear({color:f.white,depth:1});for(let r of e.order){let i=e._mergedLayers[r];if(!i.hasShadowPass()||i.isHidden(n.transform.zoom))continue;let a=e.getLayerSourceCache(i),o=a?t[a.id]:void 0;(i.type===`model`||o&&o.length)&&n.renderLayer(n,a,i,o)}}n.currentShadowCascade=0}drawGroundShadows(){if(!this.enabled)return;let e=this.painter,t=e.style,n=e.context,r=n.gl,i=t.directionalLight,a=t.ambientLight;if(!i||!a)return;let o=[],s=Fe(e,e.longestCutoffRange);s.shouldRenderCutoff&&o.push(`RENDER_CUTOFF`),o.push(`RENDER_SHADOWS`),this.useNormalOffset&&o.push(`NORMAL_OFFSET`);let c=M(t,i,a),l=new X(r.LEQUAL,X.ReadOnly,e.depthRangeFor3D),u=new W({func:r.EQUAL,mask:255},0,255,r.KEEP,r.KEEP,r.KEEP);for(let t of this._groundShadowTiles){let i=t.toUnwrapped(),a=e.isTileAffectedByFog(t),d=e.getOrCreateProgram(`groundShadow`,{defines:o,overrideFog:a});this.setupShadows(i,d),e.uploadCommonUniforms(n,d,i,null,s);let f=At(e.transform.calculateProjMatrix(i),c);d.draw(e,r.TRIANGLES,l,u,U.multiply,g.disabled,f,`ground_shadow`,e.tileExtentBuffer,e.quadTriangleIndexBuffer,e.tileExtentSegments,null,e.transform.zoom,null,null)}}getShadowPassDepthMode(){return this._depthMode}getGroundShadowLayerIndex(){return this._drawShadowAfterLayer}calculateShadowPassMatrixFromTile(e){let t=this.painter.transform,n=t.calculatePosMatrix(e,t.worldSize);return H(n,this._cascades[this.painter.currentShadowCascade].matrix,n),Float32Array.from(n)}calculateShadowPassMatrixFromMatrix(e){return H(Ft,this._cascades[this.painter.currentShadowCascade].matrix,e)}setupShadows(e,t,n){if(!this.enabled)return;let r=this.painter.transform,i=this.painter.context,a=i.gl,o=this._uniformValues,s=r.calculatePosMatrix(e,r.worldSize);for(let e=0;e<this._cascades.length;e++){let t=Nt(e);H(t,this._cascades[e].matrix,s),o[e===0?`u_light_matrix_0`:`u_light_matrix_1`]=t,i.activeTexture.set(a.TEXTURE0+G.ShadowMap0+e),this._cascades[e].texture.bindExtraParam(a.LINEAR,a.LINEAR,a.CLAMP_TO_EDGE,a.CLAMP_TO_EDGE,a.GREATER)}if(this.useNormalOffset=!!n,this.useNormalOffset){let t=be(e.canonical),i=2/r.tileSize*p/this._shadowParameters.shadowMapResolution,a=i*this._cascades[0].boundingSphereRadius,s=i*this._cascades.at(-1).boundingSphereRadius,c=(n===`vector-tile`?1:3)*function(e){let t=S((e-22)/-22,0,1);return .125*(1-t)+4*t}(r.zoom);o.u_shadow_normal_offset=[t,a*c,s*c],o.u_shadow_bias=[1e-4,.0012,.012]}else o.u_shadow_bias=[36e-5,.0012,.012];t.setShadowUniformValues(i,o)}computeCascadeTileMatrices(e){let t=this._shadowParameters.cascadeCount;for(let n=0;n<t;n++){let t=Pt[n]=Pt[n]||new Float64Array(16);H(t,this._cascades[n].matrix,e)}return Pt.length=t,Pt}setupShadowsFromMatrix(e,t,n=!1){if(!this.enabled)return;let r=this._shadowParameters.cascadeCount;for(let t=0;t<r;t++)H(Nt(t),this._cascades[t].matrix,e);Mt.length=r,this.setupShadowsFromCascadeMatrices(Mt,t,n)}setupShadowsFromCascadeMatrices(e,t,n=!1){if(!this.enabled)return;let r=this.painter.context,i=r.gl,a=this._uniformValues;for(let t=0;t<this._shadowParameters.cascadeCount;t++)a[t===0?`u_light_matrix_0`:`u_light_matrix_1`]=e[t],r.activeTexture.set(i.TEXTURE0+G.ShadowMap0+t),this._cascades[t].texture.bindExtraParam(i.LINEAR,i.LINEAR,i.CLAMP_TO_EDGE,i.CLAMP_TO_EDGE,i.GREATER);if(this.useNormalOffset=n,n){let e=this._shadowParameters.normalOffset;a.u_shadow_normal_offset=[1,e,e],a.u_shadow_bias=[6e-5,.0012,.012]}else a.u_shadow_bias=[36e-5,.0012,.012];t.setShadowUniformValues(r,a)}getShadowUniformValues(){return this._uniformValues}getCurrentCascadeFrustum(){return this._cascades[this.painter.currentShadowCascade].frustum}computeSimplifiedTileShadowVolume(e,t,n,r){if(r[2]>=0)return{};let i=function(e,t,n){let r=n/(1<<e.canonical.z);return new y([e.canonical.x*r+e.wrap*n,e.canonical.y*r+e.wrap*n,0],[(e.canonical.x+1)*r+e.wrap*n,(e.canonical.y+1)*r+e.wrap*n,t])}(e,t,n).getCorners(),a=t/-r[2];r[0]<0?(c(i[0],i[0],[r[0]*a,0,0]),c(i[3],i[3],[r[0]*a,0,0])):r[0]>0&&(c(i[1],i[1],[r[0]*a,0,0]),c(i[2],i[2],[r[0]*a,0,0])),r[1]<0?(c(i[0],i[0],[0,r[1]*a,0]),c(i[1],i[1],[0,r[1]*a,0])):r[1]>0&&(c(i[2],i[2],[0,r[1]*a,0]),c(i[3],i[3],[0,r[1]*a,0]));let o={};return o.vertices=i,o.planes=[Rt(i[1],i[0],i[4]),Rt(i[2],i[1],i[5]),Rt(i[3],i[2],i[6]),Rt(i[0],i[3],i[7])],o}addShadowReceiver(e,t,n){this._receivers.add(e,y.fromTileIdAndHeight(e,t,n))}getMaxCascadeForTile(e){let t=this._receivers.get(e);return t&&t.lastCascade?t.lastCascade:0}},drawGroundEffect:ze,queryModelLayerRendered:function(e,t,n,r){let i=n.getSource();if(!i||i.type!==`model`)return{};let a=i,o={};o[e.id]=[];let s=o[e.id],c=0;for(let i of a.models){let a=n.getFeatureState(e.sourceLayer,i.id),o={type:`Unknown`,id:i.id,properties:i.featureProperties},l=e.paint.get(`model-rotation`).evaluate(o,a),u=e.paint.get(`model-scale`).evaluate(o,a),d=e.paint.get(`model-translation`).evaluate(o,a),f=e.paint.get(`model-elevation-reference`),p=[];Ve(p,i,r,i.position,l,u,d,f===`ground`,f===`ground`,!1),r.projection.name===`globe`&&(p=We(p,r));let m=H([],r.projMatrix,p),h=t.isPointQuery()?t.screenBounds:t.screenGeometry,g=He(h,r,m,i.aabb);if(g!=null){let t=new Ee(void 0,0,0,0,i.id);t.layer=e.layer,t.properties=structuredClone(i.featureProperties),t.properties.layer=e.id,t.properties.uri=i.uri,t.properties.orientation=i.orientation,t.sourceLayer=e.sourceLayer,t.geometry={type:`Point`,coordinates:[i.position.lng,i.position.lat]},t.state=a,t.source=e.source,s.push({featureIndex:c,feature:t,intersectionZ:g})}++c}return o},queryModelLayerIntersectsFeature:function(e,t,n,r,i,a){if(!e.modelManager)return!1;let o=e.modelManager,s=t.tile.getBucket(e);if(!(s&&s instanceof Ye))return!1;for(let r in s.instancesPerModel){let c=s.instancesPerModel[r],l=n.id===void 0?n.properties&&Object.hasOwn(n.properties,`id`)?n.properties.id:void 0:n.id;if(Object.hasOwn(c.idToFeaturesIndex,l)){let n=c.features[c.idToFeaturesIndex[l]],u=o.getModel(r,a||e.scope);if(!u)return!1;let d=[],f=new V(0,0),p=s.canonical,m=Number.MAX_VALUE;for(let e=0;e<n.instancedDataCount;++e){let r=16*(n.instancedDataOffset+e),a=c.instancedDataArray.float32,o=[a[r+4],a[r+5],a[r+6]];et(p,f,Math.floor(a[r]),Math.floor(a[r+1])),Ve(d,u,i,f,n.rotation,n.scale,o,!1,!1,!1),i.projection.name===`globe`&&(d=We(d,i));let s=H([],i.projMatrix,d),l=t.queryGeometry,h=l.isPointQuery()?l.screenBounds:l.screenGeometry,g=He(h,i,s,u.aabb);g!=null&&(m=Math.min(g,m))}return m!==Number.MAX_VALUE&&m}}return!1},loadMatchingModelFeature:function(e,t,n,r){let i=e.getNodesInfo()[t];if(!i||i.hiddenByReplacement||!i.node.meshes)return;let a=Number.MAX_VALUE,o=i.node,s=n.tile,c=r.calculatePosMatrix(s.tileID.toUnwrapped(),r.worldSize),l=i.evaluatedScale,u=0;r.elevation&&o.elevation&&(u=o.elevation*r.elevation.exaggeration()),O(c,c,[(o.anchor?o.anchor[0]:0)*(l[0]-1),(o.anchor?o.anchor[1]:0)*(l[1]-1),u]),B(c,c,l);let d=n.queryGeometry,f=d.isPointQuery()?d.screenBounds:d.screenGeometry,p=function(e){let t=H([],c,e.globalMatrix);H(t,r.expandedFarZProjMatrix,t);for(let n=0;n<e.meshes.length;++n){let i=e.meshes[n];if(n===e.lightMeshIndex)continue;let o=He(f,r,t,i.aabb);o!=null&&(a=Math.min(o,a))}if(e.children)for(let t of e.children)p(t)};if(p(o),a===Number.MAX_VALUE)return;let m=new V(0,0);return et(s.tileID.canonical,m,i.node.anchor[0],i.node.anchor[1]),{intersectionZ:a,position:m,feature:i.feature}},ModelSource:class e extends re{constructor(e,t,n,r){super(),this.id=e,this.type=`model`,this.models=[],this._options=t,this._modelsInfo=new Map,this._abortController=null}cancelModelRequests(){this._abortController&&=(this._abortController.abort(),null)}async loadGLTFFromURI(e,t){let n=await this.map._requestManager.transformRequest(e,N.Model,t);return Ue(n.url,t)}async loadModel(t,n,r){try{let i=await this.loadGLTFFromURI(n.uri,r);if(r.aborted)return;let a=this._modelsInfo.get(t);if(!a)return;let o=Je(i),s=a.modelSpec,c=new qe(t,s.uri,s.position,s.orientation,o);e.applyModelSpecification(c,s),c.computeBoundsAndApplyParent(),this.models.push(c),a.model=c}catch(e){if(r.aborted)return;this.fire(new _e(Error(`Could not load model ${t} from ${n.uri}`,{cause:e})))}}async load(){this._abortController||=new AbortController;let t=this._abortController.signal,n=[];for(let r in this._options.models){let i=this._options.models[r],a=this._modelsInfo.get(r);if(a&&a.model){a.modelSpec=i;let t=a.model;t.position=i.position==null?new V(0,0):new V(i.position[0],i.position[1]),t.orientation=i.orientation??[0,0,0],e.applyModelSpecification(t,i),t.computeBoundsAndApplyParent(),this.models.push(t)}else a?a.modelSpec=i:(this._modelsInfo.set(r,{modelSpec:i,model:null}),n.push(this.loadModel(r,i,t)))}n.length===0?this.loaded()&&this.fire(new ue(`data`,{dataType:`source`,sourceDataType:`metadata`})):(await Promise.allSettled(n),t.aborted||this.fire(new ue(`data`,{dataType:`source`,sourceDataType:`metadata`})))}static arrayFromColorSpecification(e){let t=e;if(t===void 0)return;if(Array.isArray(t))return[t[0],t[1],t[2]];let n=f.parse(t);return n?[n.r,n.g,n.b]:void 0}static applyModelSpecification(t,n){if(n.nodeOverrides&&e.convertNodeOverrides(t,n.nodeOverrides),n.materialOverrides&&e.convertMaterialOverrides(t,n.materialOverrides),n.nodeOverrideNames&&(t.nodeOverrideNames=[...n.nodeOverrideNames]),n.materialOverrideNames&&(t.materialOverrideNames=[...n.materialOverrideNames]),n.featureProperties&&(t.featureProperties=n.featureProperties),n.lightOverrides){let r=n.lightOverrides,i=e.arrayFromColorSpecification(r[`light-ambient-color`]),a=e.arrayFromColorSpecification(r[`light-directional-color`]);t.lightOverrides={ambientIntensity:r[`light-ambient-intensity`],ambientColor:i,directionalIntensity:r[`light-directional-intensity`],directionalColor:a}}else t.lightOverrides=void 0}static convertNodeOverrides(e,t){if(Array.isArray(t)&&t.every(e=>typeof e==`string`)){e.nodeOverrideNames=[];for(let n of t)e.nodeOverrideNames.push(n)}else Object.entries(t).forEach(([t,n])=>{let r={orientation:[0,0,0],minZoom:void 0,maxZoom:void 0};if(Object.hasOwn(n,`orientation`)){let e=n.orientation;e&&(r.orientation=e)}Object.hasOwn(n,`minzoom`)&&(r.minZoom=n.minzoom),Object.hasOwn(n,`maxzoom`)&&(r.maxZoom=n.maxzoom),e.nodeOverrides.set(t,r)})}static convertMaterialOverrides(t,n){if(Array.isArray(n)&&n.every(e=>typeof e==`string`)){t.materialOverrideNames=[];for(let e of n)t.materialOverrideNames.push(e)}else Object.entries(n).forEach(([n,r])=>{let i=e.arrayFromColorSpecification(r[`model-color`]),a={color:i===void 0?new f(1,1,1):new f(i[0],i[1],i[2]),colorMix:0,emissionStrength:0,opacity:1},o=r[`model-color-mix-intensity`];o!==void 0&&(a.colorMix=o);let s=r[`model-emissive-strength`];s!==void 0&&(a.emissionStrength=s);let c=r[`model-opacity`];c!==void 0&&(a.opacity=c),t.materialOverrides.set(n,a)})}onAdd(e){this.map=e,this.load()}hasTransition(){return!1}loaded(){if(this._modelsInfo.size===0)return!0;for(let e of this._modelsInfo.values())if(e.model==null)return!1;return!0}getModels(){return this.models}loadTile(e,t){}serialize(){return this._options}setProperty(e,t){return!1}reload(){this.cancelModelRequests();let e=L(this.id,this.scope);this.map.style.clearSource(e),this.models=[],this._modelsInfo.clear(),this.load()}onRemove(e){this.cancelModelRequests()}setModels(e){this.models=[];let t=new Map;for(let n in e){let r=e[n],i=this._modelsInfo.get(n);i&&i.modelSpec.uri===r.uri&&t.set(n,i)}if(this._modelsInfo.size!==t.size){this.cancelModelRequests();for(let[e,n]of t)n.model||t.delete(e)}this._modelsInfo=t,this._options.models=e,this.load()}},Tiled3dModelSource:class extends re{constructor(e,t,n,r){super(),this.type=`batched-model`,this.id=e,this.tileSize=512,this._options=t,this.tiles=this._options.tiles,this.maxzoom=t.maxzoom||19,this.minzoom=t.minzoom||0,this.roundZoom=!0,this.usedInConflation=!0,this.dispatcher=n,this.reparseOverscaled=!1,this.scheme=`xyz`,this._loaded=!1,this.setEventedParent(r)}onAdd(e){this.map=e,this.load()}reload(){this.cancelTileJSONRequest();let e=L(this.id,this.scope);this.load(()=>this.map.style.clearSource(e))}cancelTileJSONRequest(){this._tileJSONRequest&&=(this._tileJSONRequest.cancel(),null)}load(e){this._loaded=!1,this.fire(new ue(`dataloading`,{dataType:`source`}));let t=Array.isArray(this.map._language)?this.map._language.join():this.map._language,n=this.map.getWorldview();this._tileJSONRequest=me(this._options,this.map._requestManager,t,n,(r,i)=>{this._tileJSONRequest=null,this._loaded=!0,r?(t&&console.warn(`Ensure that your requested language string is a valid BCP-47 code or list of codes. Found: ${t}`),n&&n.length!==2&&console.warn(`Requested worldview strings must be a valid ISO alpha-2 code. Found: ${n}`),this.fire(new _e(r))):i&&(Object.assign(this,i),i.bounds&&(this.tileBounds=new ie(i.bounds,this.minzoom,this.maxzoom)),T(i.tiles,this.map._requestManager._customAccessToken),this.fire(new ue(`data`,{dataType:`source`,sourceDataType:`metadata`})),this.fire(new ue(`data`,{dataType:`source`,sourceDataType:`content`}))),e&&e(r)})}hasTransition(){return!1}hasTile(e){return!this.tileBounds||this.tileBounds.contains(e.canonical)}loaded(){return this._loaded}async loadTile(e,t){let n=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme)),r=!e.actor||e.state===`expired`;if(r)e.actor=this.dispatcher.getActor();else{if(e.state===`loading`)return void(e.reloadCallback=t);if(e.buckets){let t=Object.values(e.buckets);for(let e of t)e.dirty=!0;e.state=`loaded`;return}}let a=r?`loadTile`:`reloadTile`,o=new AbortController;e.request=o;let s=(n,r)=>(delete e.request,e.aborted?t(null):n&&!h(n)?t(n):(this.map._refreshExpiredTiles&&r&&e.setExpiryData(i(r.headers)),e.loadModelData(r,this.map.painter),e.state=`loaded`,t(null),void(e.reloadCallback&&=(this.loadTile(e,e.reloadCallback),null))));try{let r=await this.map._requestManager.transformRequest(n,N.Tile,o.signal);if(o.signal.aborted)return t(null);let i={request:r,data:void 0,uid:e.uid,tileID:e.tileID,tileZoom:e.tileZoom,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,scope:this.scope,showCollisionBoxes:this.map.showCollisionBoxes,renderSourceType:e.renderSourceType,brightness:this.map.style&&this.map.style.getBrightness()||0,pixelRatio:ye.devicePixelRatio,promoteId:this.promoteId};e.request=e.actor.sendCancelable(a,i,{},s)}catch(e){if(o.signal.aborted)return t(null);t(e)}}abortTile(e){e.request&&(e.request.abort(),delete e.request),e.actor&&e.actor.notify(`abortTile`,{uid:e.uid,type:this.type,source:this.id,scope:this.scope})}serialize(){return{...this._options}}},loadModel:Be};export{Bt as Standard};