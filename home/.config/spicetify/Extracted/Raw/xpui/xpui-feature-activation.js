"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9792],{34807:(e,t,a)=>{a.d(t,{FeatureActivationSection:()=>xe});a(46758),a(53321),a(86277);var i=a(50959),n=a(54995),s=a(85648),l=a(82187),o=a.n(l),r=a(16601),c=a(56839),u=a(22739);const d="NTywvDEuW1PlcoR__9XV",f="BkQ1MPUWBY0WvjENXmC7",v="hwhquP1FOxRcCnf84P2M",g="MIBwSRJ5XZaCw1WWXXBn",h="dEuzpK3s_BmlRiVNFude",y="IeJGaG6QXRvfMka0gCSG",m="Wh0HGq_CXEX_JqbSYvx7",p="MVRnUhNC4ZMglLR56YMn",b="jjQUaCx5rvU20rWBzyLA",C="ES02HhKmADP_AdcKPs1e",F="IYwEYGRUJ5RTtr0EyBV1",S="YYlv5PB5fGQthi9XzTQg";var x=a(11527);const j=i.memo((({isLoading:e})=>{const t=(0,u.h)("shimmer");return(0,x.jsx)("div",{ref:t,className:o()(d,{[S]:e})})})),A=i.memo((({cardImage:e,isLoading:t})=>(0,x.jsx)(r.w,{className:v,media:e||(0,x.jsx)(j,{isLoading:t}),id:"feature-skeleton-card-id",title:(0,x.jsx)(c.C,{as:"div",variant:"bodyMediumBold",className:C,charCount:10,isLoading:t}),body:(0,x.jsx)(c.C,{as:"div",variant:"bodySmall",className:F,charCount:15,isLoading:t}),layout:"wide",size:"xl",variant:"elevated"})));var L=a(1740),w=a(24241),N=a(59374);const E={offset:0,limit:50,flatten:!0,sort:{field:N.bD.RELEVANCE,order:N.As.DESC}};function k(e){const t=(0,w.o)(),a=(0,i.useContext)(L.ZF),n=(0,i.useMemo)((()=>function(e){return async function(t){if(null===t)return null;try{const a=await e.getPlaylist(t.uri);return a?.metadata.hasSpotifyTracks?a:null}catch(e){return null}}}(a)),[a]),[s,l]=(0,i.useState)([]),[o,r]=(0,i.useState)(!1),[c,u]=(0,i.useState)(null);return(0,i.useEffect)((()=>{r(!0),t.getContents(E).then((t=>function({items:e},t){return e.filter(N.no).filter((e=>e.isOwnedBySelf&&e.totalLength>0)).slice(0,t)}(t,e))).then((e=>Promise.all(e.map(n)))).then((e=>e.filter((e=>null!==e)))).then((e=>l(e))).catch(u).finally((()=>r(!1)))}),[t,n,e]),{loading:o,playlists:s,error:c}}var I=a(73895);const U={collaborativePlaylists:I.L.CollaborativePlaylists,liveEvents:I.L.LiveEvents,groupSessions:I.L.GroupSessions,veryHighQualityAudio:I.L.VeryHighQualityAudio,blend:I.L.Blend,smartShuffle:I.L.SmartShuffle,dj:I.L.Dj};function P(e){const t=[];for(const n of e)if("object"==typeof(i=n)&&null!==i&&"data"in i&&"object"==typeof i.data&&null!==i.data&&"name"in i.data){const e=null===(a=n.data.name)?null:U[a]??null;if(null===e)continue;t.push({feature:e,activated:n.data.activated,image:n.data.image,title:n.data.title,uri:n.data.uri,name:n.data.name,destination:n.data.destination})}var a,i;return t}var Q=a(49815),H=a(27845),B=a(74950);const G=()=>{const e=(0,H.r)(),[{data:t},{mutate:a}]=(0,B.t)(e.quality.streamingQuality),[{data:i}]=(0,B.t)(e.quality.maxSupportedQuality);if(void 0===t||void 0===i)return{isAvailable:!1,isEnabled:!1,enableVeryHighQualityAudio:()=>{}};return{isAvailable:i>=Q.hF.VERY_HIGH,isEnabled:t===Q.IL.VERY_HIGH,enableVeryHighQualityAudio:()=>{a(Q.IL.VERY_HIGH)}}};var R=a(67577),_=a(80626),V=a(70526),M=a(75802),z=a(69736),O=a(6370),q=a(65376);const D=({children:e,isActivated:t,inShelf:a})=>(0,x.jsx)(z.x,{as:"p",variant:"bodyMediumBold",className:o()(h,{[y]:!a}),style:{paddingInlineEnd:t?"18px":"initial"},children:e});var T=a(6487),W=a(82350);const Y=i.memo((function({image:e,onClick:t,id:a,title:i,body:n,footer:s,activated:l,premiumOnlyFeature:o}){return(0,x.jsx)(r.w,{className:v,media:e,id:a||"",title:i,body:n,layout:"wide",size:"xl",pretitle:(0,x.jsxs)(x.Fragment,{children:[o&&(0,x.jsx)(W.D,{color: getComputedStyle(document.body).getPropertyValue("--spice-text").trim(),height:"18",className:g}),l&&(0,x.jsx)(T.N,{size:"small",className:f})]}),variant:"elevated",footer:s,onClick:t})}));var X=a(75550);const $=i.memo((function({activated:e,position:t,inShelf:a,onFeatureActivate:l}){const o=(0,M.s0)(),r="/blend/invitation",{eventFactory:c,logger:u}=function(e,t,a,i){const{spec:s,logger:l}=(0,_.fU)(n.i,{}),{spec:o,logger:r}=(0,_.fU)(X.e,{});return e?{eventFactory:t?s.shelfContainerFactory().activatedBlendCardFactory({position:a,uri:i}):s.shelfContainerFactory().blendCardFactory({position:a,uri:i}),logger:l}:{eventFactory:t?o.activatedBlendCardFactory({position:a,uri:i}):o.blendCardFactory({position:a,uri:i}),logger:r}}(a,e,t,r);(0,i.useEffect)((()=>{u.logImpression(c.impression())}),[]);const d=()=>{l(),u.logInteraction(c.hitUiNavigate({destination:r})),o(r)};return(0,x.jsx)(Y,{activated:e,premiumOnlyFeature:!1,image:(0,q.g)("images/feature-activation-shelf-blend.png"),onClick:d,title:(0,x.jsx)(D,{isActivated:e,inShelf:a,children:s.ag.get("web-player.feature-activation-shelf.blend.title")}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.blend.description")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{size:"small",onClick:d,children:s.ag.get("web-player.feature-activation-shelf.invite.cta")})})]})})}));var J=a(11317);const K=i.memo((function({playlist:e,activated:t,position:a,inShelf:l,onFeatureActivate:o}){const r=(0,M.s0)(),{eventFactory:c,logger:u}=function(e,t,a,i){const{spec:s,logger:l}=(0,_.fU)(n.i,{}),{spec:o,logger:r}=(0,_.fU)(X.e,{});return e?{eventFactory:t?s.shelfContainerFactory().activatedCollaborativePlaylistCardFactory({position:a,uri:i}):s.shelfContainerFactory().collaborativePlaylistCardFactory({position:a,uri:i}),logger:l}:{eventFactory:t?o.activatedCollaborativePlaylistCardFactory({position:a,uri:i}):o.collaborativePlaylistCardFactory({position:a,uri:i}),logger:r}}(l,t,a,e?.metadata?.uri??"");(0,i.useEffect)((()=>{e&&u.logImpression(c.impression())}),[e]);const d=()=>{if(!e)return;o();const t=`${(0,J.EC)(e.metadata.uri).toURLPath(!0)}?feature-activation=${I.L.CollaborativePlaylists}`;u.logInteraction(c.hitUiNavigate({destination:t})),r(t)};return e?(0,x.jsx)(Y,{premiumOnlyFeature:!1,activated:t,image:e.metadata.images[0].url,id:"collaborative-playlists-card",onClick:d,title:(0,x.jsx)(D,{isActivated:t,inShelf:l,children:s.ag.get("web-player.feature-activation-shelf.collaborative-playlists.title",{playlist:e.metadata.name})}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.collaborative-playlists.description")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{onClick:d,size:"small",children:s.ag.get("web-player.feature-activation-shelf.invite.cta")})})]})}):null}));const Z=i.memo((function({activated:e,position:t,inShelf:a,onFeatureActivate:l}){const{triggerPlay:o,isPlaying:r}=(0,R.O6)(),{maybeAddDJToLibrary:c}=(0,R.Zk)(),u=(0,R._n)(),{metadata:d}=(0,R.O9)(),f=u&&!!d,{eventFactory:v,logger:g}=function(e,t,a){const{spec:i,logger:s}=(0,_.fU)(n.i,{}),{spec:l,logger:o}=(0,_.fU)(X.e,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedDjCardFactory({position:a}):i.shelfContainerFactory().djCardFactory({position:a}),logger:s}:{eventFactory:t?l.activatedDjCardFactory({position:a}):l.djCardFactory({position:a}),logger:o}}(a,e,t);(0,i.useEffect)((()=>{f&&g.logImpression(v.impression())}),[f]);const h=()=>{l(),g.logInteraction(v.hitPlay({itemToBePlayed:R.rv})),r||(c(),o())};return f?(0,x.jsx)(Y,{activated:e,premiumOnlyFeature:!1,image:d.images[0].url,onClick:h,title:(0,x.jsx)(D,{isActivated:e,inShelf:a,children:s.ag.get("web-player.feature-activation-shelf.ai-dj.title")}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.ai-dj.description")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{size:"small",onClick:h,disabled:r,children:s.ag.get("web-player.feature-activation-shelf.ai-dj.cta")})})]})}):null}));var ee=a(77725);const te=i.memo((function({inShelf:e,activated:t,position:a,destination:l,onFeatureActivate:o}){const{eventFactory:r,logger:c}=function(e,t,a){const{spec:i,logger:s}=(0,_.fU)(n.i,{}),{spec:l,logger:o}=(0,_.fU)(X.e,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedGroupSessionsCardFactory({position:a}):i.shelfContainerFactory().groupSessionsCardFactory({position:a}),logger:s}:{eventFactory:t?l.activatedGroupSessionsCardFactory({position:a}):l.groupSessionsCardFactory({position:a}),logger:o}}(e,t,a);(0,i.useEffect)((()=>{c.logImpression(r.impression())}),[]);const u=()=>{o(),c.logInteraction(r.hitNavigateToExternalUri({destination:l})),window.open(l,"_blank","noopener")};return(0,x.jsx)(Y,{activated:t,premiumOnlyFeature:!1,image:(0,q.g)("images/feature-activation-shelf-group-sessions.png"),onClick:u,title:(0,x.jsx)(D,{isActivated:t,inShelf:e,children:s.ag.get("web-player.feature-activation-shelf.group-sessions.title")}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.group-sessions.description-general")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{size:"small",onClick:u,iconTrailing:ee.h,children:s.ag.get("web-player.feature-activation-shelf.group-sessions.cta")})})]})})}));const ae=i.memo((function({position:e,inShelf:t,onFeatureActivate:a}){const l=(0,M.s0)(),{isAvailable:o,isEnabled:r,enableVeryHighQualityAudio:c}=G(),{eventFactory:u,logger:d}=function(e,t,a){const{spec:i,logger:s}=(0,_.fU)(n.i,{}),{spec:l,logger:o}=(0,_.fU)(X.e,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedAudioQualityCardFactory({position:a}):i.shelfContainerFactory().audioQualityCardFactory({position:a}),logger:s}:{eventFactory:t?l.activatedAudioQualityCardFactory({position:a}):l.audioQualityCardFactory({position:a}),logger:o}}(t,r,e);(0,i.useEffect)((()=>{o&&d.logImpression(u.impression())}),[]);const f=e=>{a();const t="/preferences"+(e?`?${e}`:"");d.logInteraction(u.hitUiNavigate({destination:t})),l(t)},v=()=>{d.logInteraction(u.hitSetSettingField()),c(),f(`feature-activation=${I.L.VeryHighQualityAudio}`)};return o?(0,x.jsx)(Y,{activated:r,premiumOnlyFeature:!1,image:(0,q.g)("images/feature-activation-shelf-audio-quality.png"),id:"audio-quality-card",onClick:r?()=>f():v,title:(0,x.jsx)(D,{isActivated:r,inShelf:t,children:s.ag.get("web-player.feature-activation-shelf.audio-quality.title")}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.audio-quality.description")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{onClick:r?()=>f():v,size:"small",iconLeading:r?T.N:void 0,children:r?s.ag.get("web-player.feature-activation-shelf.audio-quality.cta_alt"):s.ag.get("web-player.feature-activation-shelf.audio-quality.cta")})})]})}):null}));const ie="/concerts",ne=i.memo((function({activated:e,position:t,inShelf:a,onFeatureActivate:l}){const o=(0,M.s0)(),{eventFactory:r,logger:c}=function(e,t,a,i){const{spec:s,logger:l}=(0,_.fU)(n.i,{}),{spec:o,logger:r}=(0,_.fU)(X.e,{});return e?{eventFactory:t?s.shelfContainerFactory().activatedLiveEventsCardFactory({position:a,uri:i}):s.shelfContainerFactory().liveEventsCardFactory({position:a,uri:i}),logger:l}:{eventFactory:t?o.activatedLiveEventsCardFactory({position:a,uri:i}):o.liveEventsCardFactory({position:a,uri:i}),logger:r}}(a,e,t,ie);(0,i.useEffect)((()=>{c.logImpression(r.impression())}),[]);const u=()=>{l(),c.logInteraction(r.hitUiNavigate({destination:ie})),o(ie)};return(0,x.jsx)(Y,{activated:e,premiumOnlyFeature:!1,image:(0,q.g)("images/feature-activation-shelf-live-events.png"),id:"live-events-card",onClick:u,title:(0,x.jsx)(D,{isActivated:e,inShelf:a,children:s.ag.get("web-player.feature-activation-shelf.live-events.title")}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.live-events.description")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{onClick:u,size:"small",children:s.ag.get("web-player.feature-activation-shelf.live-events.cta")})})]})})}));var se=a(30753);const le=i.memo((function({activated:e,playlist:t,position:a,inShelf:l,onFeatureActivate:o}){const{setSeen:r}=(0,se.q)(),c=(0,M.s0)(),{eventFactory:u,logger:d}=function(e,t,a){const{spec:i,logger:s}=(0,_.fU)(n.i,{}),{spec:l,logger:o}=(0,_.fU)(X.e,{});return e?{eventFactory:t?i.shelfContainerFactory().activatedSmartShuffleCardFactory({position:a}):i.shelfContainerFactory().smartShuffleCardFactory({position:a}),logger:s}:{eventFactory:t?l.activatedSmartShuffleCardFactory({position:a}):l.smartShuffleCardFactory({position:a}),logger:o}}(l,e,a);(0,i.useEffect)((()=>{t&&d.logImpression(u.impression())}),[t]);const f=(0,i.useCallback)((()=>{if(!t)return;o(),d.logInteraction(u.hitUiNavigate({destination:t.metadata.uri})),r(!1);const e=(0,J.EC)(t.metadata.uri).toURLPath(!0);c(`${e}?feature-activation=${I.L.SmartShuffle}`)}),[c,t,r,d,u,o]);return t?(0,x.jsx)(Y,{activated:e,premiumOnlyFeature:!1,image:t.metadata.images[0].url,onClick:f,title:(0,x.jsx)(D,{isActivated:e,inShelf:l,children:s.ag.get("web-player.feature-activation-shelf.smart-shuffle.title",{playlist:t.metadata.name})}),body:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(z.x,{as:"p",variant:"bodySmall",className:p,children:s.ag.get("web-player.feature-activation-shelf.smart-shuffle.description")}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(O.P,{size:"small",onClick:f,children:s.ag.get("web-player.feature-activation-shelf.smart-shuffle.cta")})})]})}):null}));var oe=a(5629),re=a(53502),ce=a(46974),ue=a(76981);const de="RvSsw_CWBCtHhojt6bY_",fe=i.memo(i.forwardRef((function(e,t){const{className:a,render:n}=e,s=(0,i.useRef)(null),[l,r]=(0,i.useState)({columnCount:-1,columnWidth:-1,gridGap:24});(0,i.useImperativeHandle)(t,(()=>s.current));const c=(0,i.useCallback)((()=>{const e=s.current;if(!e||!e.parentElement)return;const t=e.parentElement.offsetWidth,a=(e=>e<700?1:e<1e3?2:3)(t),i=(e=>2===e?12:3===e?18:24)(a),n=Math.floor((t-(a-1)*i)/a);r({columnCount:a,columnWidth:n,gridGap:i})}),[]);(0,ue.y)({refOrElement:s,observeOnly:"width",onResize:()=>{c()}}),(0,i.useLayoutEffect)((()=>{c()}),[c]);const u={"--column-width":`${l.columnWidth}px`,"--column-count":`${l.columnCount}`,"--grid-gap":`${l.gridGap}px`};return(0,x.jsx)("div",{ref:s,className:o()(de,a),style:u,children:n(l)})})));fe.displayName="GridContainer";const ve="QD8u8vCxcfIpJC14IBqg",ge="H4yLgZB7CQJlPH3u5Qbi",he="jNsZ_X7AAz13oxU5Sx0G",ye="b49pU5FuAfdm6Ub0x7N3",me=i.memo((function({title:e,children:t,seeAllUri:a,className:n="",testId:s="component",seeAllLabel:l,onClickShelfTitle:r,onClickShelfSeeAll:c,showAll:u,elementRef:d}){const f=(0,i.useCallback)((({columnCount:e})=>(0,x.jsx)(x.Fragment,{children:u?t:Array.isArray(t)&&t.filter(((t,a)=>a<e))})),[t,u]);return Array.isArray(t)&&0===t.length?null:(0,x.jsxs)("section",{ref:d,className:o()(n,ve),"data-testid":`${s}-shelf`,"aria-label":e,children:[(0,x.jsx)("div",{className:ge,children:(0,x.jsx)(re.r,{title:e,seeAllUri:a,seeAllLabel:l,hasMoreElements:!u,onClickTitle:r,onClickSeeAll:c})}),(0,x.jsx)(fe,{className:o()(he,{[ye]:u}),render:f})]})}));me.displayName="BaseShelf";const pe=e=>(0,x.jsx)(oe.L,{onError:e=>{(0,ce.vK)(e,"Shelf")},children:(0,x.jsx)(me,{...e,showAll:e.showAll})});var be=a(72417),Ce=(a(2836),a(65786));const Fe=e=>e.desktopSessionsSinceFullActivation>=2||e.desktopSessions>=20;const Se=i.memo((function(e){const{features:t,localStorageKey:a}=e,{spec:l,logger:o}=(0,_.fU)(n.i,{}),{isAvailable:r,isEnabled:c}=G(),u=r&&c,d=(0,R._n)(),{metadata:f}=(0,R.O9)(),v=(0,be.Q)(),{isAvailable:g}=G(),h=(0,i.useMemo)((()=>function(e,t){const a=e.filter((e=>e.feature===I.L.VeryHighQualityAudio)),i=e.filter((e=>e.feature!==I.L.VeryHighQualityAudio));return t?[...i.filter((e=>!e.activated)),...i.filter((e=>e.activated)),...a]:[...e.filter((e=>!e.activated)),...e.filter((e=>e.activated))]}(t,u)),[u,t]),{playlists:y,loading:m}=k(2),p=(0,i.useMemo)((()=>h.filter((({feature:e})=>!!(e!==I.L.Dj||d&&f)&&(!!(e!==I.L.SmartShuffle||v&&0!==y.length)&&(e!==I.L.VeryHighQualityAudio||g?e!==I.L.CollaborativePlaylists||0!==y.length:null))))),[h,v,g,d,f,y]),{hideShelf:b,setFeatureActivation:C}=function(e,t){const a=t||"feature-activation-shelf-v3-interaction-state",[n,s]=(0,Ce.z)(a,{featureInteractionMapping:{[I.L.VeryHighQualityAudio]:!1,[I.L.Dj]:!1,[I.L.SmartShuffle]:!1,[I.L.Blend]:!1,[I.L.GroupSessions]:!1,[I.L.LiveEvents]:!1,[I.L.CollaborativePlaylists]:!1},desktopSessions:0,desktopSessionsSinceFullActivation:0});return(0,i.useEffect)((()=>{if(e)return;const t=Object.values(n.featureInteractionMapping).reduce(((e,t)=>e&&t),!0);s({...n,desktopSessionsSinceFullActivation:t?n.desktopSessionsSinceFullActivation+1:n.desktopSessionsSinceFullActivation,desktopSessions:n.desktopSessions+1})}),[]),{hideShelf:!e&&Fe(n),interactionState:n,setFeatureActivation:(e,t)=>{s({...n,featureInteractionMapping:{...n.featureInteractionMapping,[e]:t}})}}}(e.showAll,a);(0,i.useEffect)((()=>{0!==p.length&&(b?o.logImpression(l.hideShelfImpressionElementFactory().impression()):o.logImpression(l.shelfContainerFactory().impression()))}),[b]);const F=(0,i.useCallback)((()=>{o.logInteraction(l.shelfTitleFactory({uri:e.uri}).hitUiNavigate({destination:e.uri}))}),[l,o,e.uri]),S=(0,i.useCallback)((()=>{o.logInteraction(l.seeAllFeaturesFactory({uri:e.uri}).hitUiNavigate({destination:e.uri}))}),[l,o,e.uri]);return b||0===p.length?null:(0,x.jsx)(pe,{title:s.ag.get("web-player.feature-activation-shelf.generic-title"),seeAllUri:e.uri,showAll:e.showAll,seeAllLabel:s.ag.get("web-player.feature-activation-shelf.see_more"),onClickShelfTitle:F,onClickShelfSeeAll:S,children:m?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(A,{isLoading:!0}),(0,x.jsx)(A,{isLoading:!0}),(0,x.jsx)(A,{isLoading:!0}),(0,x.jsx)(A,{isLoading:!0}),(0,x.jsx)(A,{isLoading:!0}),(0,x.jsx)(A,{isLoading:!0})]}):p.map(((t,a)=>((e,t,a,i,n)=>{switch(e.feature){case I.L.GroupSessions:return(0,x.jsx)(te,{activated:e.activated,position:t,inShelf:a,destination:e.destination||"",onFeatureActivate:()=>i(I.L.GroupSessions,!0)},"feature-activation-shelf-group-sessions");case I.L.CollaborativePlaylists:return(0,x.jsx)(K,{activated:e.activated,playlist:n[1]??n[0]??null,position:t,inShelf:a,onFeatureActivate:()=>i(I.L.CollaborativePlaylists,!0)},"feature-activation-shelf-collaborative-playlist");case I.L.Blend:return(0,x.jsx)($,{activated:e.activated,position:t,inShelf:a,onFeatureActivate:()=>i(I.L.Blend,!0)},"feature-activation-shelf-blend");case I.L.LiveEvents:return(0,x.jsx)(ne,{activated:e.activated,position:t,inShelf:a,onFeatureActivate:()=>i(I.L.LiveEvents,!0)},"feature-activation-shelf-live-events");case I.L.VeryHighQualityAudio:return(0,x.jsx)(ae,{position:t,inShelf:a,onFeatureActivate:()=>i(I.L.VeryHighQualityAudio,!0)},"feature-activation-shelf-very-high-quality-audio");case I.L.Dj:return(0,x.jsx)(Z,{activated:e.activated,position:t,inShelf:a,onFeatureActivate:()=>i(I.L.Dj,!0)},"feature-activation-shelf-dj");case I.L.SmartShuffle:return(0,x.jsx)(le,{activated:e.activated,playlist:n[0]??null,position:t,inShelf:a,onFeatureActivate:()=>i(I.L.SmartShuffle,!0)},"feature-activation-shelf-smart-shuffle");default:return(0,V._)(e.feature),null}})(t,a,!e.showAll,C,y)))})})),xe=({uri:e,sectionItems:t,showAll:a=!1,localStorageKey:i})=>(0,x.jsx)(Se,{features:P(t),showAll:a,uri:e,localStorageKey:i})}}]);
//# sourceMappingURL=xpui-feature-activation.js.map