"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2499],{55420:(e,i,a)=>{a.d(i,{T:()=>m});var t=a(17053),n=a(88384),l=a(85039),o=a(71285),r=a(97922);const s="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";var u=a(11527);const m=function({onClick:e,name:i,images:a,canEdit:m,placeholderType:c,shape:g=r.Kc.SQUARE,dragUri:p=""}){const[v,k]=(0,n.R)(a),h=(0,l.VO)(v,k)===l.KO.loaded,f=(0,t.O)({itemUris:[p],dragLabelText:i});return(0,u.jsxs)("div",{className:s,"data-testid":`${c}-image`,draggable:!!p,onDragStart:f,children:[(0,u.jsx)(r.Oe,{loading:"eager",name:i,images:a,placeholderType:c,shape:g}),m&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(o.F,{overlay:h,onClick:e,rounded:g===r.Kc.CIRCLE})})]})}},1502:(e,i,a)=>{a.d(i,{k:()=>r});var t=a(82187),n=a.n(t),l=a(63068),o=a(11527);const r=({children:e})=>(0,o.jsx)("div",{className:n()(l.Z.imageContainer,l.Z.imageContainerNew),children:e})},15632:(e,i,a)=>{a.d(i,{g:()=>o});var t=a(69736),n=a(63068),l=a(11527);const o=({children:e})=>(0,l.jsx)(t.x,{variant:"bodySmall",className:n.Z.pretitle,children:e})},84108:(e,i,a)=>{a.r(i),a.d(i,{default:()=>Xi});var t=a(50959),n=a(75802),l=a(75095),o=a(11317),r=a(82187),s=a.n(r),d=a(85648),u=a(15103),m=a(91643),c=a(70930),g=a(67204),p=a(24676);const v="profile-userOverview-container",k="profile-userOverview-section",h="profile-userOverview-subPage",f="profile-userOverview-topTrackSubPage",b="profile-userOverview-title",y="profile-userOverview-header";var N=a(11527);const x=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getFollowers,[i]),l=a?.profiles;return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),title:d.ag.get("followers"),total:l?.length,showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},S=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getFollowing,[i]),l=a?.profiles;return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),title:d.ag.get("following"),total:l?.length,showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};a(86277);var I=a(22496),T=a(35869),_=a(23055),j=a(10226),w=a(15894),A=a(25959),P=a(87964),C=a(82579),F=a(41736),R=a(41038),O=a(55420),D=a(97922),U=a(81639),E=a(16118),L=a(69736),M=a(7863),W=a(27563),H=a(3533),K=a(27926),J=a(88384),V=a(85039);const B="profile-userEditDetails-image",Q="valcBm4lLe9qFBcg0sFY",G="tAIzXn8C9KriGwGuBfWg",Z="PsrXxenHUFXYM1ub1xWw",z="U_VWfeeLWnDPhUTxCmrQ",q=function({onClickEdit:e,onClickRemove:i,name:a,images:t,canEdit:n}){const[l,o]=(0,J.R)(t),r=(0,V.VO)(l,o)===V.KO.loaded;return(0,N.jsxs)("div",{className:B,children:[(0,N.jsx)(D.Oe,{loading:"eager",name:a,images:t,placeholderType:"user",shape:D.Kc.CIRCLE}),n&&(0,N.jsxs)("div",{className:s()(Q,{[Z]:r}),children:[(0,N.jsx)("button",{className:G,"aria-haspopup":"true",onClick:e,type:"button",children:(0,N.jsx)(L.x,{variant:"bodyMedium",children:d.ag.get("user.edit-details.choose-photo")})}),(0,N.jsx)("div",{className:s()(z,"icon"),children:(0,N.jsx)(K.y,{size:"xlarge","aria-hidden":!0})}),(0,N.jsx)("button",{className:G,onClick:i,type:"button",children:(0,N.jsx)(L.x,{variant:"bodyMedium",children:d.ag.get("user.edit-details.remove-photo")})})]})]})};var X=a(85101),Y=a(17532),$=a(9590);const ee={paths:""},ie={encode(e,i=$.Writer.create()){for(const a of e.paths)i.uint32(10).string(a);return i},decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ee};for(n.paths=[];a.pos<t;){const e=a.uint32();if(e>>>3==1)n.paths.push(a.string());else a.skipType(7&e)}return n},fromJSON(e){const i={...ee};if(i.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)i.paths.push(String(a));return i},fromPartial(e){const i={...ee};if(i.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)i.paths.push(a);return i},toJSON(e){const i={};return e.paths?i.paths=e.paths.map((e=>e)):i.paths=[],i}};a(31546);var ae=a(3959),te=a(55872).lW;const ne={value:0},le={value:!1},oe={value:""};const re={encode:(e,i=$.Writer.create())=>(i.uint32(8).int32(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ne};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.int32();else a.skipType(7&e)}return n},fromJSON(e){const i={...ne};return void 0!==e.value&&null!==e.value?i.value=Number(e.value):i.value=0,i},fromPartial(e){const i={...ne};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value=0,i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}},se={encode:(e,i=$.Writer.create())=>(i.uint32(8).bool(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...le};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.bool();else a.skipType(7&e)}return n},fromJSON(e){const i={...le};return void 0!==e.value&&null!==e.value?i.value=Boolean(e.value):i.value=!1,i},fromPartial(e){const i={...le};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value=!1,i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}},de={encode:(e,i=$.Writer.create())=>(i.uint32(10).string(e.value),i),decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...oe};for(;a.pos<t;){const e=a.uint32();if(e>>>3==1)n.value=a.string();else a.skipType(7&e)}return n},fromJSON(e){const i={...oe};return void 0!==e.value&&null!==e.value?i.value=String(e.value):i.value="",i},fromPartial(e){const i={...oe};return void 0!==e.value&&null!==e.value?i.value=e.value:i.value="",i},toJSON(e){const i={};return void 0!==e.value&&(i.value=e.value),i}};$.util.Long!==ae.Z&&($.util.Long=ae.Z,(0,$.configure)());const ue=globalThis;ue.atob,ue.btoa;const me={maxWidth:0,maxHeight:0,url:""},ce={},ge={},pe={encode:(e,i=$.Writer.create())=>(i.uint32(8).int32(e.maxWidth),i.uint32(16).int32(e.maxHeight),i.uint32(26).string(e.url),i),decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...me};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.maxWidth=a.int32();break;case 2:n.maxHeight=a.int32();break;case 3:n.url=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...me};return void 0!==e.maxWidth&&null!==e.maxWidth?i.maxWidth=Number(e.maxWidth):i.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?i.maxHeight=Number(e.maxHeight):i.maxHeight=0,void 0!==e.url&&null!==e.url?i.url=String(e.url):i.url="",i},fromPartial(e){const i={...me};return void 0!==e.maxWidth&&null!==e.maxWidth?i.maxWidth=e.maxWidth:i.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?i.maxHeight=e.maxHeight:i.maxHeight=0,void 0!==e.url&&null!==e.url?i.url=e.url:i.url="",i},toJSON(e){const i={};return void 0!==e.maxWidth&&(i.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(i.maxHeight=e.maxHeight),void 0!==e.url&&(i.url=e.url),i}},ve={encode(e,i=$.Writer.create()){void 0!==e.username&&void 0!==e.username&&de.encode({value:e.username},i.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&de.encode({value:e.name},i.uint32(18).fork()).ldelim();for(const a of e.images)pe.encode(a,i.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&se.encode({value:e.verified},i.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&se.encode({value:e.editProfileDisabled},i.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&se.encode({value:e.reportAbuseDisabled},i.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&se.encode({value:e.abuseReportedName},i.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&se.encode({value:e.abuseReportedImage},i.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&se.encode({value:e.hasSpotifyName},i.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&se.encode({value:e.hasSpotifyImage},i.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&re.encode({value:e.color},i.uint32(90).fork()).ldelim(),i},decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ce};for(n.images=[];a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.username=de.decode(a,a.uint32()).value;break;case 2:n.name=de.decode(a,a.uint32()).value;break;case 3:n.images.push(pe.decode(a,a.uint32()));break;case 4:n.verified=se.decode(a,a.uint32()).value;break;case 5:n.editProfileDisabled=se.decode(a,a.uint32()).value;break;case 6:n.reportAbuseDisabled=se.decode(a,a.uint32()).value;break;case 7:n.abuseReportedName=se.decode(a,a.uint32()).value;break;case 8:n.abuseReportedImage=se.decode(a,a.uint32()).value;break;case 9:n.hasSpotifyName=se.decode(a,a.uint32()).value;break;case 10:n.hasSpotifyImage=se.decode(a,a.uint32()).value;break;case 11:n.color=re.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...ce};if(i.images=[],void 0!==e.username&&null!==e.username?i.username=String(e.username):i.username=void 0,void 0!==e.name&&null!==e.name?i.name=String(e.name):i.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)i.images.push(pe.fromJSON(a));return void 0!==e.verified&&null!==e.verified?i.verified=Boolean(e.verified):i.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?i.editProfileDisabled=Boolean(e.editProfileDisabled):i.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?i.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):i.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?i.abuseReportedName=Boolean(e.abuseReportedName):i.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?i.abuseReportedImage=Boolean(e.abuseReportedImage):i.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?i.hasSpotifyName=Boolean(e.hasSpotifyName):i.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?i.hasSpotifyImage=Boolean(e.hasSpotifyImage):i.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?i.color=Number(e.color):i.color=void 0,i},fromPartial(e){const i={...ce};if(i.images=[],void 0!==e.username&&null!==e.username?i.username=e.username:i.username=void 0,void 0!==e.name&&null!==e.name?i.name=e.name:i.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)i.images.push(pe.fromPartial(a));return void 0!==e.verified&&null!==e.verified?i.verified=e.verified:i.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?i.editProfileDisabled=e.editProfileDisabled:i.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?i.reportAbuseDisabled=e.reportAbuseDisabled:i.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?i.abuseReportedName=e.abuseReportedName:i.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?i.abuseReportedImage=e.abuseReportedImage:i.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?i.hasSpotifyName=e.hasSpotifyName:i.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?i.hasSpotifyImage=e.hasSpotifyImage:i.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?i.color=e.color:i.color=void 0,i},toJSON(e){const i={};return void 0!==e.username&&(i.username=e.username),void 0!==e.name&&(i.name=e.name),e.images?i.images=e.images.map((e=>e?pe.toJSON(e):void 0)):i.images=[],void 0!==e.verified&&(i.verified=e.verified),void 0!==e.editProfileDisabled&&(i.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(i.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(i.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(i.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(i.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(i.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(i.color=e.color),i}},ke={encode:(e,i=$.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&ie.encode(e.mask,i.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&ve.encode(e.userProfile,i.uint32(18).fork()).ldelim(),i),decode(e,i){const a=e instanceof Uint8Array?new $.Reader(e):e;let t=void 0===i?a.len:a.pos+i;const n={...ge};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:n.mask=ie.decode(a,a.uint32());break;case 2:n.userProfile=ve.decode(a,a.uint32());break;default:a.skipType(7&e)}}return n},fromJSON(e){const i={...ge};return void 0!==e.mask&&null!==e.mask?i.mask=ie.fromJSON(e.mask):i.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?i.userProfile=ve.fromJSON(e.userProfile):i.userProfile=void 0,i},fromPartial(e){const i={...ge};return void 0!==e.mask&&null!==e.mask?i.mask=ie.fromPartial(e.mask):i.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?i.userProfile=ve.fromPartial(e.userProfile):i.userProfile=void 0,i},toJSON(e){const i={};return void 0!==e.mask&&(i.mask=e.mask?ie.toJSON(e.mask):void 0),void 0!==e.userProfile&&(i.userProfile=e.userProfile?ve.toJSON(e.userProfile):void 0),i}},he=`${X.XA}/identity`;async function fe(e,i,{name:a,imageUploadToken:t}){void 0!==a&&await async function(e,i,a){const t=ke.encode(ke.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(he).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,Y.C)(i))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(t.finish()).withoutMarket().send()}(e,i,a),void 0!==t&&(null!==t?await async function(e,i,a){await e.build().withHost(he).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,Y.C)(i))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,i,t):await async function(e,i){await e.build().withHost(he).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,Y.C)(i))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,i))}var be=a(13188);const ye={type:"error",get message(){return d.ag.get("user.edit-details.error.file-size-exceeded",10)}},Ne={type:"error",get message(){return d.ag.get("user.edit-details.error.too-small",300,300)}},xe={type:"error",get message(){return d.ag.get("user.edit-details.error.missing-name")}},Se={type:"error",get message(){return d.ag.get("user.edit-details.error.failed-to-save")}},Ie={type:"error",get message(){return d.ag.get("user.edit-details.error.file-upload-failed")}};function Te(e){return{type:"setLoading",loading:e}}function _e(e){return{type:"setMessage",message:e}}function je(e,i){switch(i.type){case"setName":return{...e,name:i.name};case"setMessage":return{...e,message:i.message,loading:!1};case"setLoading":return{...e,loading:i.loading,message:null};case"setImageData":return{...e,imageData:i.data,removeImage:!1};case"setImageToken":return{...e,imageToken:i.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}var we=a(40537),Ae=a(37931),Pe=a(57201);const Ce="profile-userEditDetails-container",Fe="profile-userEditDetails-content",Re="profile-userEditDetails-header",Oe="profile-userEditDetails-closeButton",De="vAeyAmeLkDEDKdL9Hou0",Ue="dnmzO6yYKkxUV8jl7O1Z",Ee="profile-userEditDetails-nameInput",Le="profile-userEditDetails-name",Me="profile-userEditDetails-label",We="profile-userEditDetails-labelText",He="dMhJaxli87_22jb_3d9x",Ke="profile-userEditDetails-saveButton",Je="profile-userEditDetails-disclaimer",Ve=t.memo((function({uri:e,name:i,image:a,onClose:n,shouldOpenImagePicker:l,userCapabilities:o}){const[r,u]=(0,Ae.Hs)(),[m,c]=function({name:e,image:i}){return(0,t.useReducer)(je,{loading:!1,message:null,name:e,image:i})}({name:i,image:a}),g=(0,t.useMemo)((()=>{const e=m.imageData||m.image;return e?[{url:e,width:300,height:300}]:[]}),[m.image,m.imageData]);(0,t.useEffect)((()=>{l&&u()}),[u,l]);const p=(0,t.useCallback)((e=>{e===Ae.Hy.FILE_TOO_BIG?c(_e(ye)):e===Ae.Hy.IMAGE_TOO_SMALL&&c(_e(Ne))}),[c]),v=(0,t.useCallback)((()=>{c({type:"removeImage"})}),[c]),k=(0,t.useCallback)((async i=>{i.preventDefault();if(0!==m.name.trim().length){c(Te(!0));try{const i=m.removeImage?null:m.imageToken;await async function(e,{name:i,imageUploadToken:a}){await fe(be.b.getInstance(),e,{name:i,imageUploadToken:a})}(e,{name:m.name,imageUploadToken:i}),n({name:m.name,image:m.imageData||m.image})}catch(e){c(_e(Se))}}else c(_e(xe))}),[c,n,m.image,m.imageData,m.imageToken,m.name,m.removeImage,e]);return(0,N.jsx)(we.Z,{isOpen:!0,contentLabel:d.ag.get("user.edit-details.title"),onRequestClose:()=>n(),children:(0,N.jsxs)("div",{className:Ce,children:[(0,N.jsxs)("div",{className:Re,children:[(0,N.jsx)(L.x,{as:"h1",variant:"titleSmall",children:d.ag.get("user.edit-details.title")}),(0,N.jsx)("button",{className:Oe,onClick:()=>n(),"aria-label":d.ag.get("close"),children:(0,N.jsx)(M.k,{size:"small"})})]}),m.message&&(0,N.jsx)(Pe.X,{isErrorMessage:"error"===m.message.type,message:m.message.message}),(0,N.jsxs)("form",{className:Fe,onSubmit:k,children:[o.edit_image&&(0,N.jsx)(Ae.uL,{isOpen:r,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:i,imageDataUrl:a}=e;if(c(_e(null)),c({type:"setImageData",data:a}),i)try{c(Te(!0));const e=await async function(e){const i=await be.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!i.body)throw new Error("No upload token recieved");return i.body.uploadToken}(i);c({type:"setImageToken",token:e}),c(Te(!1))}catch{c(_e(Ie))}},onError:p}),(0,N.jsxs)("div",{className:De,children:[(0,N.jsx)(q,{name:i,images:g,onClickEdit:u,onClickRemove:v,canEdit:o.edit_image}),m.loading&&(0,N.jsx)("div",{className:Ue,children:(0,N.jsx)(W.T,{})})]}),(0,N.jsxs)("div",{className:Le,children:[(0,N.jsx)("label",{htmlFor:"user-edit-name",className:Me,children:(0,N.jsx)(L.x,{variant:"marginalBold",className:We,children:d.ag.get("user.edit-details.name-label")})}),(0,N.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:s()(Ee,He),onChange:e=>{c(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:d.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:m.name,disabled:!o.edit_name})]}),(0,N.jsx)("div",{className:Ke,children:(0,N.jsx)(H.D,{colorSet:"invertedLight",onClick:k,disabled:m.loading,children:d.ag.get("save")})}),(0,N.jsx)(L.x,{as:"p",variant:"marginalBold",className:Je,children:d.ag.get("image-upload.legal-disclaimer")})]})]})})}));var Be=a(50540),Qe=a(71318),Ge=a(87350),Ze=a(82813),ze=a(76950),qe=a(90284),Xe=a(80626),Ye=a(58912),$e=a(55649),ei=a(97013),ii=a(40235),ai=a(6395),ti=a(67208),ni=a(13734),li=a(9443),oi=a(33608),ri=a(15842),si=a(66205),di=a(66819);const ui=t.memo((function({openModal:e,spec:i,logger:a,name:n,backgroundColor:l,isCurrentUser:o,uri:r}){const[s,u]=(0,oi.H)(r),m=(0,ni.o)(),c=!(0,li.k)(),g=(0,t.useCallback)((()=>{m({targetUri:r,intent:s?"unfollow":"follow",type:"click"});const e=i.actionBarFactory().followButtonFactory();s?(u(!1),a.logInteraction(e.hitUnfollow({itemToBeUnfollowed:r}))):(u(!0),a.logInteraction(e.hitFollow({itemToBeFollowed:r})))}),[s,a,m,u,i,r]),p=(0,t.useCallback)((()=>{const e=i.actionBarFactory().contextMenuButtonFactory().hitUiReveal();a.logInteraction(e)}),[a,i]),v=(0,di.j)();return(0,N.jsx)(ri.o,{backgroundColor:l,children:(0,N.jsxs)(si.F,{children:[!o&&(0,N.jsx)(ai.r,{children:(0,N.jsx)(ti.e,{isFollowing:Boolean(s),onClick:g,disabled:c})}),(0,N.jsx)(ii.y,{menu:(0,N.jsx)(F.I,{uri:r,onEditProfileCallback:e}),children:(0,N.jsx)(ei.z,{label:d.ag.get("more.label.context",n),onClick:p,size:v})})]})})}));var mi=a(53502),ci=a(36199),gi=a(90824),pi=a(42550),vi=a(17162),ki=a(45438),hi=a(22527),fi=a(73928),bi=a(82857);const yi=t.memo((function({tracks:e,hasHeaderRow:i=!1,nrTracksVisible:a,uri:n}){const l=(0,Y.C)(n),r=(0,o.qC)(l,"tracks").toURI(),s=(0,t.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:u}=(0,hi.n)({uri:r,pages:[{items:e.map((e=>({type:bi.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),m=(0,t.useCallback)(((e,i)=>{const a=(0,Ye.X)(e?.albumOfTrack?.coverArt?.sources,{desiredSize:40});return(0,N.jsx)(gi.SS,{index:i,uri:(0,vi.$)(e),duration_ms:e.duration.totalMilliseconds,name:e.name,artists:e.artists.items.map((({uri:e,profile:{name:i}})=>({uri:e,name:i}))),album:e.albumOfTrack,isPlayable:!0,isExplicit:e.contentRating?.label===fi.KS.Explicit,isMOGEFRestricted:e.contentRating?.label===fi.KS.NineteenPlus,imgUrl:a?.url||"",contextUri:r,usePlayContextItem:u},i+e.uri)}),[r,u]),c=(0,t.useMemo)((()=>[ci.QD.INDEX,ci.QD.TITLE_AND_ARTIST,ci.QD.ALBUM,ci.QD.DURATION]),[]),g=(0,t.useCallback)((e=>({uri:e.uri})),[]),p=(0,pi.o)()?0:void 0;return(0,N.jsx)(ki.JL,{value:"user-top-tracks-tracklist",children:(0,N.jsx)(ci.Pv,{ariaLabel:d.ag.get("top_tracks_this_month"),renderRow:m,nrTracks:s.length,tracks:s,resolveItem:g,headerTop:p,hasHeaderRow:i,columns:c,columnPersistenceKey:"user-top-tracks-tracklist"})})}),((e,i)=>e.tracks===i.tracks)),Ni=t.memo((function({tracks:e,title:i,tagline:a,seeAllUri:n,className:l,uri:o,spec:r}){const s=(0,Xe.$P)(),d=(0,t.useCallback)((()=>{const e=r.titleLinkFactory().hitUiNavigate({destination:n});s.logInteraction(e)}),[s,n,r]),u=(0,t.useCallback)((()=>{const e=r.titleLinkFactory().hitUiNavigate({destination:n});s.logInteraction(e)}),[s,n,r]);if(!e||0===e.totalCount||0===e.items.length)return null;const m=e.totalCount>4;return(0,N.jsxs)("section",{className:l,children:[(0,N.jsx)(mi.r,{title:i,tagline:a,seeAllUri:n,hasMoreElements:m,onClickTitle:d,onClickSeeAll:u}),(0,N.jsx)(Xe.Nh,{spec:r,children:(0,N.jsx)(yi,{tracks:e.items,uri:o,nrTracksVisible:4})})]})}),((e,i)=>e.tracks===i.tracks));function xi(e,i){switch(i.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var Si=a(1502),Ii=a(15632),Ti=a(17866),_i=a(36255),ji=a(61408),wi=a(60637),Ai=a(17676),Pi=(a(46758),a(53321),a(20069));const Ci={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"userTopContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeTopArtists"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topArtistsInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AffinityInput"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"includeTopTracks"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topTracksInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AffinityInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userTopArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userTopTracks"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"userTopArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topArtists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"topArtistsInput"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"includeTopArtists"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistPageV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"userTopTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"topTracksInput"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"includeTopTracks"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPageV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]};function Fi(e){return"Artist"===e.__typename}function Ri(e){if("ArtistPageV2"!==e?.topArtists?.__typename)return null;const i=e.topArtists.items.map((e=>e.data)).filter(Fi);return 0===i.length?null:{totalCount:e.topArtists.totalCount,items:i}}function Oi(e){return"Track"===e.__typename}function Di(e){if("TrackPageV2"!==e?.topTracks?.__typename)return null;const i=e.topTracks.items.map((e=>e.data)).filter(Oi).filter((e=>null!==e.albumOfTrack));return 0===i.length?null:{totalCount:e.topTracks.totalCount,items:i}}const Ui=fi.K1.Affinity,Ei=fi.eB.ShortTerm;function Li({includeTopArtists:e,includeTopTracks:i,topArtistsLimit:a,topTracksLimit:t}){const{data:n,loading:l,error:o}=(r={includeTopArtists:e,topArtistsInput:{offset:0,limit:a,sortBy:Ui,timeRange:Ei},includeTopTracks:i,topTracksInput:{offset:0,limit:t,sortBy:Ui,timeRange:Ei}},s={enabled:e||i,gcTime:18e5,staleTime:3e5},(0,Pi.a)(Ci,r,s));var r,s;return null!==o?{topTracks:null,topArtists:null,loading:l,error:new Error("Failed loading user top content!")}:{topTracks:Di(n?.me?.profile??null),topArtists:Ri(n?.me?.profile??null),loading:l,error:null}}const Mi=18e5,Wi=3e5,Hi=(0,_.P1)(Ge.dy,(e=>e?.images||[])),Ki=({uri:e,isCurrentUser:i})=>{const a=(0,T.v9)(Ge.dy)?.uri,n=(0,T.v9)(Ge.Gf),l=(0,T.v9)(Hi),r=(0,T.I0)(),c=(0,I.NL)(),h=(0,j.W6)(Ai.J4M,{loadingValue:!0}),f=(0,t.useMemo)((()=>(0,Ye.X)(l)),[l]),[{isModalOpen:b,modalVariant:y,shouldOpenImagePicker:x},S]=function(){const[e,i]=(0,t.useReducer)(xi,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,i]}(),{data:_,loading:L,queryKey:M}=(0,p.J)(g.n5.getProfile,[{uri:e,playlists:10,artists:10,episodes:10}],{gcTime:Mi,staleTime:Wi}),W=(0,Be.g)();(0,wi.d)(ji.rA.OPERATION_COMPLETE,(()=>{c.invalidateQueries({queryKey:M})})),(0,qe.b)(ze.EW.OPERATION_COMPLETE,(()=>{c.invalidateQueries({queryKey:M})}));const H=_?.public_playlists,K=_?.is_verified,J=_?.recently_played_artists,V=i?f?.url||"":_?.image_url||"",B=(0,Y.C)(e),Q=(i?n:_?.name)||"",G=(0,Qe.Z)(_?.image_url||null),{spec:Z,logger:z}=(0,Xe.fU)(w.L,{data:{uri:e}}),q=(0,t.useMemo)((()=>Z.sectionTopTracksFactory()),[Z]),X=!W&&(!1!==_?.show_follows||i),$=i&&h,{data:ee,loading:ie}=(0,p.J)(g.n5.getFollowing,[e],{enabled:X,gcTime:Mi,staleTime:Wi}),ae=ee?.profiles,{data:te,loading:ne}=(0,p.J)(g.n5.getFollowers,[e],{enabled:X,gcTime:Mi,staleTime:Wi}),le=te?.profiles,oe=ae?.some((e=>e.uri===a)),{topArtists:re,topTracks:se,loading:de}=Li({includeTopArtists:$,includeTopTracks:$,topArtistsLimit:10,topTracksLimit:4}),ue=(0,t.useCallback)((e=>{S({type:"CLOSE_MODAL"}),e&&(r((0,Ze.dL)(e.name)),r((0,Ze.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[S,r]),me=(0,t.useCallback)((()=>{S({type:"OPEN_MODAL"});const e=Z.headerFactory().usernameFactory().hitUiReveal();z.logInteraction(e)}),[z,S,Z]),ce=(0,t.useCallback)((()=>{S({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=Z.headerFactory().profileImageFactory().hitUiReveal();z.logInteraction(e)}),[z,S,Z]),ge=(0,t.useMemo)((()=>[{url:V}]),[V]),pe=(0,t.useCallback)((()=>{const e=Z.headerFactory().usernameFactory().hitUiReveal();z.logInteraction(e)}),[z,Z]),ve=(0,t.useCallback)(((e,i)=>{if(!i)return;const a=Z.headerFactory().followersLinkFactory().hitUiNavigate({destination:i});z.logInteraction(a)}),[z,Z]),ke=(0,t.useCallback)(((e,i)=>{if(!i)return;const a=Z.headerFactory().followersLinkFactory().hitUiNavigate({destination:i});z.logInteraction(a)}),[z,Z]);if(!_||L||ie||ne||de)return(0,N.jsx)(m.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.page")});const he=s()("contentSpacing",k),fe=X&&!!le?.length,be=X&&!!ae?.length;return(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)(R.$,{children:Q}),(0,N.jsxs)(D.gF,{backgroundColor:G,children:[(0,N.jsx)(U.W,{children:(0,N.jsx)(E.i,{text:Q})}),(0,N.jsx)(C._,{menu:(0,N.jsx)(F.I,{uri:_.uri}),children:(0,N.jsx)(Si.k,{children:(0,N.jsx)(O.T,{canEdit:i&&!_.edit_image_disabled,name:Q,images:ge,onClick:ce,placeholderType:"user",shape:D.Kc.CIRCLE})})}),(0,N.jsxs)(D.sP,{children:[(0,N.jsx)(Ii.g,{children:K?(0,N.jsx)(Ti.S,{text:d.ag.get("card.tag.profile")}):d.ag.get("card.tag.profile")}),(0,N.jsx)(C._,{menu:(0,N.jsx)(F.I,{uri:_.uri}),children:(0,N.jsx)(D.xd,{canEdit:i&&!_.edit_name_disabled,editTitle:d.ag.get("playlist.edit-details.title"),onClick:me,children:Q})}),(0,N.jsx)(D.QS,{totalFollowers:_.followers_count,totalFollowing:_.following_count,publicPlaylists:_.total_public_playlists_count,userUri:e,onCreatorClick:pe,onTotalFollowersClick:ve,onTotalFollowingClick:ke,theyFollowUs:oe})]})]}),(0,N.jsx)(ui,{openModal:me,spec:Z,logger:z,name:Q,backgroundColor:G,isCurrentUser:i,uri:e}),(0,N.jsxs)(Xe.Nh,{spec:Z,children:[i&&(0,N.jsxs)(N.Fragment,{children:[null!==re&&(0,N.jsx)(_i.q,{className:he,total:re.totalCount,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(B,["top","artists"]).toURI(),id:"top-artists",index:0,children:re.items.map(((e,i)=>(0,N.jsx)(A.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))}),(0,N.jsx)(Ni,{className:he,title:d.ag.get("top_tracks_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(B,["top","tracks"]).toURI(),uri:e,tracks:se,spec:q})]}),(0,N.jsx)(_i.q,{className:he,total:_.total_public_playlists_count,title:d.ag.get("public_playlists"),seeAllUri:(0,o.QK)(B,["playlists"]).toURI(),id:"playlists",index:1,children:H?.map(((e,i)=>(0,N.jsx)(P.Z,{index:i,uri:e.uri,name:e.name,images:[{url:(0,$e.p)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):""},e.uri)))}),J?.length?(0,N.jsx)(_i.q,{className:he,total:J?.length,title:d.ag.get("recently_played_artists"),seeAllUri:(0,o.QK)(B,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:J?.map(((e,i)=>(0,N.jsx)(A.I,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,fe?(0,N.jsx)(_i.q,{className:he,title:d.ag.get("followers"),total:le?.length,seeAllUri:(0,o.QK)(B,["followers"]).toURI(),id:"followers",index:3,children:le?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,be?(0,N.jsx)(_i.q,{className:he,title:d.ag.get("following"),total:ae?.length,seeAllUri:(0,o.QK)(B,["following"]).toURI(),id:"following",index:4,children:ae?.map(((e,i)=>(0,N.jsx)(u.P,{index:i,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,i&&b&&("editProfile"===y?(0,N.jsx)(Ve,{uri:e,name:Q,image:V,onClose:ue,shouldOpenImagePicker:x,userCapabilities:{edit_image:!_?.edit_image_disabled,edit_name:!_?.edit_name_disabled}}):null)]})]})},Ji=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getPlaylists,[{uri:i}]),{public_playlists:l,total_public_playlists_count:o=0}=a||{};return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),total:o,title:d.ag.get("public_playlists"),showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(P.Z,{index:i,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):"",images:[{url:(0,$e.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Vi=e=>{const{uri:i}=e,{data:a,loading:t,error:n}=(0,p.J)(g.n5.getRecentlyPlayedArtists,[{uri:i,limit:50}]),l=a?.artists;return t?(0,N.jsx)(m.h,{hasError:null!==n,errorMessage:d.ag.get("error.not_found.title.page")}):(0,N.jsx)(c.P,{className:s()("contentSpacing",h),total:l?.length,title:d.ag.get("recently_played_artists"),showAll:!0,children:l?.map(((e,i)=>(0,N.jsx)(A.I,{index:i,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Bi=()=>{const{topArtists:e,loading:i,error:a}=Li({includeTopArtists:!0,includeTopTracks:!1,topArtistsLimit:100,topTracksLimit:0});return i?(0,N.jsx)(m.h,{hasError:null!==a,errorMessage:d.ag.get("error.not_found.title.page")}):null===e?null:(0,N.jsx)(c.P,{className:s()("contentSpacing",h),total:e.items.length,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),showAll:!0,children:e.items.map(((e,i)=>(0,N.jsx)(A.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))})},Qi=({isCurrentUser:e})=>e?(0,N.jsx)(Bi,{}):(0,N.jsx)(m.h,{hasError:!0,errorMessage:d.ag.get("error.not_found.title.page")}),Gi=({uri:e})=>{const{topTracks:i,loading:a,error:t}=Li({includeTopArtists:!1,includeTopTracks:!0,topArtistsLimit:0,topTracksLimit:100});return a?(0,N.jsx)(m.h,{hasError:null!==t,errorMessage:d.ag.get("error.not_found.title.page")}):null===i?null:(0,N.jsxs)("div",{className:s()("contentSpacing",h,f),children:[(0,N.jsxs)("div",{className:b,children:[(0,N.jsx)(L.x,{as:"h1",variant:"titleSmall",className:y,children:d.ag.get("top_tracks_this_month")}),(0,N.jsx)(L.x,{as:"p",variant:"bodySmall",children:d.ag.get("only_visible_to_you")})]}),(0,N.jsx)(yi,{tracks:i.items,uri:e,hasHeaderRow:!0})]})},Zi=({uri:e,isCurrentUser:i})=>i?(0,N.jsx)(Gi,{uri:e}):(0,N.jsx)(m.h,{hasError:!0,errorMessage:d.ag.get("error.not_found.title.page")});var zi=a(85803);var qi=a(963);const Xi=(0,t.memo)((function(){const{userId:e=""}=(0,n.UO)(),i=decodeURIComponent(e),a=(0,o.QK)(i).toURI(),t=(e=>{const i=(0,Be.g)(),a=(0,zi.r)()?.username;return!i&&a===e})(i);return(0,N.jsx)("section",{children:(0,N.jsxs)(n.Z5,{children:[(0,N.jsx)(n.AW,{path:"playlists",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE_PLAYLISTS,children:(0,N.jsx)(Ji,{uri:a})})}),(0,N.jsx)(n.AW,{path:"top/tracks",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE_TOP_TRACKS,children:(0,N.jsx)(Zi,{uri:a,isCurrentUser:t})})}),(0,N.jsx)(n.AW,{path:"top/artists",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE_TOP_ARTISTS,children:(0,N.jsx)(Qi,{isCurrentUser:t})})}),(0,N.jsx)(n.AW,{path:"recently-played-artists",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,N.jsx)(Vi,{uri:a})})}),(0,N.jsx)(n.AW,{path:"following",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE_FOLLOWING,children:(0,N.jsx)(S,{uri:a})})}),(0,N.jsx)(n.AW,{path:"followers",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE_FOLLOWERS,children:(0,N.jsx)(x,{uri:a})})}),(0,N.jsx)(n.AW,{path:"/",element:(0,N.jsx)(qi.K,{pageId:l.Wg.PROFILE,children:(0,N.jsx)(Ki,{uri:a,isCurrentUser:t})})})]})})}))},85803:(e,i,a)=>{a.d(i,{r:()=>l});a(86277);var t=a(35869),n=a(82857);const l=()=>{const e=(0,t.v9)((e=>e.session?.user));return e?{type:n.p.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:i,height:a})=>({url:e,width:i||void 0,height:a||void 0})))}:null}}}]);
//# sourceMappingURL=xpui-routes-profile.js.map