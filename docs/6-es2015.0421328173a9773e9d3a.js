(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{m43k:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var a=e("pMnS"),r=e("SVse");class i{constructor(){}ngOnInit(){}}var u=t.ob({encapsulation:0,styles:[['.card[_ngcontent-%COMP%]{width:250px;margin:10px;cursor:pointer;position:relative;height:280px;background-color:#000;color:#fff;padding:20px 10px;background:linear-gradient(to bottom,#3270f5 0,#770eb9 100%);box-shadow:3px 3px 11px -2px rgba(0,0,0,.62);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.9rem}.card[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]{margin-top:10px}.card[_ngcontent-%COMP%]:hover{background:linear-gradient(to bottom,#efff08 0,#fa5c00 100%)}.chip[_ngcontent-%COMP%]{background-color:#fff;color:#770eb9;font-size:.9rem;padding:9px;margin:7px;border-radius:30px;box-shadow:3px 3px 7px 0 rgba(0,0,0,.353);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#ad4bad", endColorstr="#d45b5b", GradientType=1 )}.img-container[_ngcontent-%COMP%]{width:160px;height:160px}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-webkit-filter:drop-shadow(5px 4px 5px rgba(0, 0, 0, .47));filter:drop-shadow(5px 4px 5px rgba(0, 0, 0, .47))}']],data:{}});function s(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,1,"span",[["class","chip"]],null,null,null,null,null)),(n()(),t.Fb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.type.name)})}function c(n){return t.Hb(2,[t.Ab(0,r.r,[]),(n()(),t.qb(1,0,null,null,8,"div",[["class","card"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,1,"div",[["class","img-container"]],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,0,"img",[["alt",""],["class","image"]],[[8,"src",4]],null,null,null,null)),(n()(),t.qb(4,0,null,null,2,"span",[["class","title"]],null,null,null,null,null)),(n()(),t.Fb(5,null,["",""])),t.Bb(6,1),(n()(),t.qb(7,0,null,null,2,"div",[["class","types"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,s)),t.pb(9,278528,null,0,r.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,9,0,null==e.pokemon?null:e.pokemon.types)},function(n,l){var e=l.component;n(l,3,0,null==e.pokemon?null:e.pokemon.sprites.front_default);var o=t.Gb(l,5,0,n(l,6,0,t.zb(l,0),null==e.pokemon?null:e.pokemon.name));n(l,5,0,o)})}var b=e("dJrM"),p=e("HsOI"),m=e("Xd0L"),d=e("IP0z"),f=e("/HVE"),g=e("omvX"),h=e("s7LF"),x=e("ZwOa"),k=e("oapL"),v=e("Gi4r"),O=e("cUpR"),P=t.ob({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}});function _(n){return t.Hb(2,[t.yb(null,0)],null,null)}var C=e("DQLy"),y=e("Kj3r"),w=e("lJxs"),q=e("vkgz"),z=function(n){return n.SearchPokemons="[Pokemon] Search Pokemons",n.SearchResponse="[Pokemon] Search Response",n.SearchTrigger="[Pokemon] Trigger Search",n.SelectPokemon="[Pokemon] Select Pokemon",n.SelectPokemonResponse="[Pokemon] Select Pokemon Response",n}({});const j=Object(C.w)(z.SearchPokemons),S=Object(C.w)(z.SearchResponse,Object(C.C)()),F=Object(C.w)(z.SearchTrigger),M=Object(C.w)(z.SelectPokemon,Object(C.C)()),I=Object(C.w)(z.SelectPokemonResponse,Object(C.C)()),D=Object(C.y)({pokemonList:[],totalPokemons:0,pokemonSelected:{detail:{},evolutionChain:{}}},Object(C.B)(S,(n,{pokemonsResponse:l})=>Object.assign({},n,{pokemonList:n.pokemonList.length?n.pokemonList.concat(l.pokemonList):[...l.pokemonList],totalPokemons:l.totalPokemons})),Object(C.B)(F,n=>Object.assign({},n,{pokemonList:[...n.pokemonList]})),Object(C.B)(I,(n,{selectedPokemon:l})=>Object.assign({},n,{pokemonSelected:l})),Object(C.B)(M,n=>Object.assign({},n,{pokemonSelected:{}})));function L(n,l){return D(n,l)}const H=Object(C.x)("pokemon"),B=Object(C.A)(H,n=>n.pokemonList),R=Object(C.A)(H,n=>n.pokemonSelected);var T=e("Yml6"),$=e("x1Dd"),N=e("EY2u"),E=e("eIep"),J=e("JIr8"),X=e("5+tZ");class V{constructor(n,l){this.actions$=n,this.pokemonService=l,this.searchPokemonFirstTime=!1,this.searchPokemonCurrentPage=0,this.searchPokemon$=Object(T.h)(()=>this.actions$.pipe(Object(T.j)(z.SearchPokemons),Object(E.a)(()=>!this.searchPokemonFirstTime&&0===this.searchPokemonCurrentPage||this.searchPokemonCurrentPage>0?(this.searchPokemonFirstTime=!0,this.pokemonService.getPokemons(this.searchPokemonCurrentPage).pipe(Object(w.a)(n=>({type:z.SearchResponse,pokemonsResponse:n})),Object(q.a)(()=>this.searchPokemonCurrentPage++))):N.a),Object(J.a)(()=>N.a))),this.selectPokemon$=Object(T.h)(()=>this.actions$.pipe(Object(T.j)(z.SelectPokemon),Object(E.a)(n=>this.pokemonService.getPokemonSpecies(n.pokemonDetail.id).pipe(Object(X.a)(l=>{const e=l.evolution_chain.url.split("/").reverse()[1];return this.pokemonService.getPokemonEvolutionChain(e).pipe(Object(w.a)(l=>({type:z.SelectPokemonResponse,selectedPokemon:{detail:n.pokemonDetail,evolutionChain:l}})))}))),Object(J.a)(()=>N.a)))}}class A{constructor(n,l){this.store=n,this.router=l,this.currentPage=0,this.isBusy=!1,this.control=new h.f("")}ngOnInit(){this.searchValueSubscription(),this.search()}loadNewPokemonsPage(){this.store.dispatch(j())}searchValueSubscription(){this.control.valueChanges.pipe(Object(y.a)(500)).subscribe(()=>{this.store.dispatch(F())})}search(){this.pokemonList$=this.store.pipe(Object(C.D)(B),Object(w.a)(n=>n.length?n.filter(n=>n.name.includes(this.control.value)||n.types.filter(n=>n.type.name.includes(this.control.value)).length):this.loadNewPokemonsPage()),Object(q.a)(()=>this.isBusy=!1))}selectPokemon(n){this.store.dispatch(M({pokemonDetail:n})),this.router.navigate(["pokemon/detail"])}onScroll(n){n.target.offsetHeight+n.target.scrollTop>=n.target.scrollHeight&&!this.isBusy&&(this.loadNewPokemonsPage(),this.isBusy=!0)}trackyFn(n){return n.id}}var W=e("iInd"),G=t.ob({encapsulation:0,styles:[[".list-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{text-align:center}mat-form-field[_ngcontent-%COMP%]{width:300px}"]],data:{}});function Q(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"app-pokemon-card",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectPokemon(n.context.$implicit)&&t),t},c,u)),t.pb(2,114688,null,0,i,[],{pokemon:[0,"pokemon"]},null)],function(n,l){n(l,2,0,l.context.$implicit)},null)}function Y(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,32,"div",[["class","custom-container"]],null,[[null,"scroll"]],function(n,l,e){var t=!0;return"scroll"===l&&(t=!1!==n.component.onScroll(e)&&t),t},null,null)),(n()(),t.qb(1,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,26,"div",[["class","search-container"]],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,25,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),t.pb(4,7520256,null,9,p.c,[t.k,t.h,[2,m.g],[2,d.b],[2,p.a],f.a,t.y,[2,g.a]],{appearance:[0,"appearance"]},null),t.Db(603979776,1,{_controlNonStatic:0}),t.Db(335544320,2,{_controlStatic:0}),t.Db(603979776,3,{_labelChildNonStatic:0}),t.Db(335544320,4,{_labelChildStatic:0}),t.Db(603979776,5,{_placeholderChild:0}),t.Db(603979776,6,{_errorChildren:1}),t.Db(603979776,7,{_hintChildren:1}),t.Db(603979776,8,{_prefixChildren:1}),t.Db(603979776,9,{_suffixChildren:1}),(n()(),t.qb(14,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.pb(15,16384,[[3,4],[4,4]],0,p.f,[],null,null),(n()(),t.Fb(-1,null,["Search"])),(n()(),t.qb(17,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Pokemon name or type"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t.zb(n,18)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,18).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.zb(n,18)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.zb(n,18)._compositionEnd(e.target.value)&&o),"blur"===l&&(o=!1!==t.zb(n,22)._focusChanged(!1)&&o),"focus"===l&&(o=!1!==t.zb(n,22)._focusChanged(!0)&&o),"input"===l&&(o=!1!==t.zb(n,22)._onInput()&&o),o},null,null)),t.pb(18,16384,null,0,h.d,[t.D,t.k,[2,h.a]],null,null),t.Cb(1024,null,h.l,function(n){return[n]},[h.d]),t.pb(20,540672,null,0,h.g,[[8,null],[8,null],[6,h.l],[2,h.u]],{form:[0,"form"]},null),t.Cb(2048,null,h.m,null,[h.g]),t.pb(22,999424,null,0,x.a,[t.k,f.a,[6,h.m],[2,h.p],[2,h.i],m.c,[8,null],k.a,t.y],{placeholder:[0,"placeholder"]},null),t.pb(23,16384,null,0,h.n,[[4,h.m]],null,null),t.Cb(2048,[[1,4],[2,4]],p.d,null,[x.a]),(n()(),t.qb(25,0,null,4,3,"mat-icon",[["class","mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,_,P)),t.pb(26,16384,[[9,4]],0,p.g,[],null,null),t.pb(27,9158656,null,0,v.b,[t.k,v.d,[8,null],[2,v.a],[2,t.l]],null,null),(n()(),t.Fb(-1,0,["search"])),(n()(),t.qb(29,0,null,null,3,"div",[["class","list-container"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,2,null,Q)),t.pb(31,278528,null,0,r.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),t.Ab(131072,r.b,[t.h])],function(n,l){var e=l.component;n(l,4,0,"outline"),n(l,20,0,e.control),n(l,22,0,"Pokemon name or type"),n(l,27,0),n(l,31,0,t.Gb(l,31,0,t.zb(l,32).transform(e.pokemonList$)),e.trackyFn)},function(n,l){n(l,3,1,["standard"==t.zb(l,4).appearance,"fill"==t.zb(l,4).appearance,"outline"==t.zb(l,4).appearance,"legacy"==t.zb(l,4).appearance,t.zb(l,4)._control.errorState,t.zb(l,4)._canLabelFloat,t.zb(l,4)._shouldLabelFloat(),t.zb(l,4)._hasFloatingLabel(),t.zb(l,4)._hideControlPlaceholder(),t.zb(l,4)._control.disabled,t.zb(l,4)._control.autofilled,t.zb(l,4)._control.focused,"accent"==t.zb(l,4).color,"warn"==t.zb(l,4).color,t.zb(l,4)._shouldForward("untouched"),t.zb(l,4)._shouldForward("touched"),t.zb(l,4)._shouldForward("pristine"),t.zb(l,4)._shouldForward("dirty"),t.zb(l,4)._shouldForward("valid"),t.zb(l,4)._shouldForward("invalid"),t.zb(l,4)._shouldForward("pending"),!t.zb(l,4)._animationsEnabled]),n(l,17,1,[t.zb(l,22)._isServer,t.zb(l,22).id,t.zb(l,22).placeholder,t.zb(l,22).disabled,t.zb(l,22).required,t.zb(l,22).readonly&&!t.zb(l,22)._isNativeSelect||null,t.zb(l,22)._ariaDescribedby||null,t.zb(l,22).errorState,t.zb(l,22).required.toString(),t.zb(l,23).ngClassUntouched,t.zb(l,23).ngClassTouched,t.zb(l,23).ngClassPristine,t.zb(l,23).ngClassDirty,t.zb(l,23).ngClassValid,t.zb(l,23).ngClassInvalid,t.zb(l,23).ngClassPending]),n(l,25,0,t.zb(l,27).inline,"primary"!==t.zb(l,27).color&&"accent"!==t.zb(l,27).color&&"warn"!==t.zb(l,27).color)})}function Z(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,1,"app-pokemon-list",[],null,[[null,"scroll"]],function(n,l,e){var o=!0;return"scroll"===l&&(o=!1!==t.zb(n,1).onScroll(e)&&o),o},Y,G)),t.pb(1,114688,null,0,A,[C.o,W.k],null,null)],function(n,l){n(l,1,0)},null)}var U=t.mb("app-pokemon-list",A,Z,{},{},[]),K=e("W5yJ"),nn=t.ob({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function ln(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)})}function en(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)})}function tn(n){return t.Hb(2,[(n()(),t.qb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),t.pb(1,16384,null,0,r.n,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),t.fb(16777216,null,null,1,null,ln)),t.pb(3,278528,null,0,r.o,[t.O,t.L,r.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t.fb(16777216,null,null,1,null,en)),t.pb(5,278528,null,0,r.o,[t.O,t.L,r.n],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,l){n(l,1,0,"indeterminate"===l.component.mode),n(l,3,0,!0),n(l,5,0,!1)},function(n,l){var e=l.component;n(l,0,0,e.diameter,e.diameter,e._viewBox)})}class on{constructor(n,l){this.store=n,this.router=l,this.loading=!0}ngOnInit(){this.pokemonDetailObservable()}pokemonDetailObservable(){this.pokemonCustomDetail$=this.store.pipe(Object(C.D)(R),Object(q.a)(n=>{(n.detail||n.evolutionChain)&&(this.getEvolutionNames(n.evolutionChain),this.loading=!1)}))}goBack(){this.router.navigate(["pokemon/list"])}searchEvolutionsByName(n){this.store.pipe(Object(C.D)(B),Object(w.a)(l=>l.filter(l=>n.includes(l.name)))).subscribe(n=>this.pokemonEvolutions=n)}getEvolutionNames(n){const l=[];let e=n.chain;for(;e;)l.push(e.species.name),e=e.evolves_to[0];this.searchEvolutionsByName(l)}selectPokemon(n){this.store.dispatch(M({pokemonDetail:n}))}}var an=t.ob({encapsulation:0,styles:[[".detail.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:auto;min-height:30vh;position:relative;justify-content:space-between}.list-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.section-1[_ngcontent-%COMP%], .section-2[_ngcontent-%COMP%]{padding:25px 16px;min-height:30px;border-radius:10px;background-color:#fff}h1[_ngcontent-%COMP%]{text-align:center}.material-icons[_ngcontent-%COMP%]{cursor:pointer}.section-1[_ngcontent-%COMP%]{width:30%;height:550px;background:linear-gradient(to bottom,#990881 30%,#770eb9 100%);display:flex;align-items:center;flex-direction:column}.section-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.section-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:rgba(255,255,255,.616)}.section-2[_ngcontent-%COMP%]{width:69%}.img-container[_ngcontent-%COMP%]{width:160px;height:160px;margin-bottom:18px}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-filter:drop-shadow(5px 4px 5px rgba(0, 0, 0, .47));filter:drop-shadow(5px 4px 5px rgba(0, 0, 0, .47))}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.chip[_ngcontent-%COMP%]{background-color:#3270f5;color:#fff;font-size:.9rem;padding:9px;margin:7px;border-radius:30px}.spinner-container[_ngcontent-%COMP%]{position:absolute;padding-top:60px;width:100%;background-color:#e4e5f2;z-index:70;height:100%}.spinner-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin:auto}@media screen and (max-width:800px){.section-1[_ngcontent-%COMP%], .section-2[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function rn(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","spinner-container"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,tn,nn)),t.pb(2,114688,null,0,K.d,[t.k,f.a,[2,r.d],[2,g.a],K.a],null,null)],function(n,l){n(l,2,0)},function(n,l){n(l,1,0,t.zb(l,2)._noopAnimations,t.zb(l,2).diameter,t.zb(l,2).diameter)})}function un(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.type.name)})}function sn(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"app-pokemon-card",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectPokemon(n.context.$implicit)&&t),t},c,u)),t.pb(2,114688,null,0,i,[],{pokemon:[0,"pokemon"]},null)],function(n,l){n(l,2,0,l.context.$implicit)},null)}function cn(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,1,"span",[["class","chip"]],null,null,null,null,null)),(n()(),t.Fb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.move.name)})}function bn(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,46,"div",[["class","custom-container"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,4,"div",[["class","header"]],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Pokemon Detail"])),(n()(),t.qb(5,0,null,null,1,"span",[["class","material-icons center-flex"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},null,null)),(n()(),t.Fb(-1,null,[" close "])),(n()(),t.qb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.qb(8,0,null,null,38,"div",[["class","detail container"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,rn)),t.pb(10,16384,null,0,r.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(11,0,null,null,23,"div",[["class","section-1"]],null,null,null,null,null)),(n()(),t.qb(12,0,null,null,1,"div",[["class","img-container"]],null,null,null,null,null)),(n()(),t.qb(13,0,null,null,0,"img",[["alt",""],["class","image"]],[[8,"src",4]],null,null,null,null)),(n()(),t.qb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.qb(15,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Name"])),(n()(),t.qb(17,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(18,null,["",""])),(n()(),t.qb(19,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Id"])),(n()(),t.qb(21,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(22,null,["",""])),(n()(),t.qb(23,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Type"])),(n()(),t.fb(16777216,null,null,1,null,un)),t.pb(26,278528,null,0,r.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.qb(27,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Height"])),(n()(),t.qb(29,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(30,null,["",""])),(n()(),t.qb(31,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Weight"])),(n()(),t.qb(33,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(34,null,["",""])),(n()(),t.qb(35,0,null,null,11,"div",[["class","section-2"]],null,null,null,null,null)),(n()(),t.qb(36,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Evolutions"])),(n()(),t.qb(38,0,null,null,2,"div",[["class","list-container"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,sn)),t.pb(40,278528,null,0,r.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.qb(41,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.qb(42,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Moves"])),(n()(),t.qb(44,0,null,null,2,"div",[["class","list-container"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,cn)),t.pb(46,278528,null,0,r.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,10,0,!l.context.ngIf.detail),n(l,26,0,null==l.context.ngIf.detail?null:l.context.ngIf.detail.types),n(l,40,0,e.pokemonEvolutions),n(l,46,0,null==l.context.ngIf.detail?null:l.context.ngIf.detail.moves)},function(n,l){n(l,13,0,null==l.context.ngIf.detail?null:null==l.context.ngIf.detail.sprites?null:l.context.ngIf.detail.sprites.front_default),n(l,18,0,null==l.context.ngIf.detail?null:l.context.ngIf.detail.name),n(l,22,0,null==l.context.ngIf.detail?null:l.context.ngIf.detail.id),n(l,30,0,null==l.context.ngIf.detail?null:l.context.ngIf.detail.height),n(l,34,0,null==l.context.ngIf.detail?null:l.context.ngIf.detail.weight)})}function pn(n){return t.Hb(0,[(n()(),t.fb(16777216,null,null,2,null,bn)),t.pb(1,16384,null,0,r.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),t.Ab(131072,r.b,[t.h])],function(n,l){var e=l.component;n(l,1,0,t.Gb(l,1,0,t.zb(l,2).transform(e.pokemonCustomDetail$)))},null)}function mn(n){return t.Hb(0,[(n()(),t.qb(0,0,null,null,1,"app-pokemon-detail",[],null,null,null,pn,an)),t.pb(1,114688,null,0,on,[C.o,W.k],null,null)],function(n,l){n(l,1,0)},null)}var dn=t.mb("app-pokemon-detail",on,mn,{},{},[]),fn=e("xYTU"),gn=e("t68o"),hn=e("NcP4"),xn=e("POq0"),kn=e("QQfA"),vn=e("gavF"),On=e("JjoW"),Pn=e("s6ns"),_n=e("7kcP"),Cn=e("/Co4"),yn=e("qJ5m"),wn=e("Mz6y");class qn{}var zn=e("Fwaw"),jn=e("pBi1"),Sn=e("zQui"),Fn=e("8rEH"),Mn=e("zMNK"),In=e("hOhj"),Dn=e("igqZ"),Ln=e("dFDH"),Hn=e("BV1i"),Bn=e("8P0U"),Rn=e("5GAg"),Tn=e("rWV4"),$n=e("FVPZ"),Nn=e("5Bek"),En=e("c9fC"),Jn=e("r0V8"),Xn=e("qJ50"),Vn=e("lT8R"),An=e("vvyD"),Wn=e("PCNd");e.d(l,"PokemonModuleNgFactory",function(){return Gn});var Gn=t.nb(o,[],function(n){return t.wb([t.xb(512,t.j,t.ab,[[8,[a.a,U,dn,fn.a,fn.b,gn.a,hn.a]],[3,t.j],t.w]),t.xb(4608,r.m,r.l,[t.t,[2,r.y]]),t.xb(4608,xn.c,xn.c,[]),t.xb(4608,O.e,m.d,[[2,m.f],[2,m.i]]),t.xb(4608,m.c,m.c,[]),t.xb(4608,kn.a,kn.a,[kn.g,kn.c,t.j,kn.f,kn.d,t.q,t.y,r.d,d.b,[2,r.g]]),t.xb(5120,kn.h,kn.i,[kn.a]),t.xb(5120,vn.a,vn.d,[kn.a]),t.xb(5120,On.a,On.b,[kn.a]),t.xb(5120,Pn.b,Pn.c,[kn.a]),t.xb(135680,Pn.d,Pn.d,[kn.a,t.q,[2,r.g],[2,Pn.a],Pn.b,[3,Pn.d],kn.c]),t.xb(5120,_n.b,_n.a,[[3,_n.b]]),t.xb(5120,Cn.a,Cn.b,[kn.a]),t.xb(5120,yn.b,yn.a,[[3,yn.b]]),t.xb(5120,wn.a,wn.b,[kn.a]),t.xb(4608,h.e,h.e,[]),t.xb(4608,h.t,h.t,[]),t.xb(4608,V,V,[T.a,$.a]),t.xb(1073742336,W.l,W.l,[[2,W.q],[2,W.k]]),t.xb(1073742336,qn,qn,[]),t.xb(1073742336,r.c,r.c,[]),t.xb(1073742336,d.a,d.a,[]),t.xb(1073742336,m.i,m.i,[[2,m.e],[2,O.f]]),t.xb(1073742336,f.b,f.b,[]),t.xb(1073742336,m.o,m.o,[]),t.xb(1073742336,zn.c,zn.c,[]),t.xb(1073742336,jn.b,jn.b,[]),t.xb(1073742336,xn.d,xn.d,[]),t.xb(1073742336,jn.a,jn.a,[]),t.xb(1073742336,Sn.o,Sn.o,[]),t.xb(1073742336,Fn.a,Fn.a,[]),t.xb(1073742336,p.e,p.e,[]),t.xb(1073742336,k.c,k.c,[]),t.xb(1073742336,x.b,x.b,[]),t.xb(1073742336,Mn.g,Mn.g,[]),t.xb(1073742336,In.c,In.c,[]),t.xb(1073742336,kn.e,kn.e,[]),t.xb(1073742336,vn.c,vn.c,[]),t.xb(1073742336,vn.b,vn.b,[]),t.xb(1073742336,v.c,v.c,[]),t.xb(1073742336,Dn.a,Dn.a,[]),t.xb(1073742336,K.c,K.c,[]),t.xb(1073742336,m.m,m.m,[]),t.xb(1073742336,m.k,m.k,[]),t.xb(1073742336,On.c,On.c,[]),t.xb(1073742336,Ln.e,Ln.e,[]),t.xb(1073742336,Hn.a,Hn.a,[]),t.xb(1073742336,Pn.g,Pn.g,[]),t.xb(1073742336,_n.c,_n.c,[]),t.xb(1073742336,Cn.c,Cn.c,[]),t.xb(1073742336,Bn.a,Bn.a,[]),t.xb(1073742336,Rn.a,Rn.a,[]),t.xb(1073742336,Tn.a,Tn.a,[]),t.xb(1073742336,m.j,m.j,[]),t.xb(1073742336,$n.a,$n.a,[]),t.xb(1073742336,Nn.c,Nn.c,[]),t.xb(1073742336,En.a,En.a,[]),t.xb(1073742336,Jn.b,Jn.b,[]),t.xb(1073742336,Jn.a,Jn.a,[]),t.xb(1073742336,Xn.e,Xn.e,[]),t.xb(1073742336,yn.c,yn.c,[]),t.xb(1073742336,Vn.a,Vn.a,[]),t.xb(1073742336,wn.c,wn.c,[]),t.xb(1073742336,An.a,An.a,[]),t.xb(1073742336,h.s,h.s,[]),t.xb(1073742336,h.q,h.q,[]),t.xb(1073742336,h.j,h.j,[]),t.xb(1073742336,Wn.a,Wn.a,[]),t.xb(1024,C.Q,function(){return[{}]},[]),t.xb(1024,C.k,function(){return[{key:"pokemon",reducerFactory:C.u,metaReducers:[],initialState:void 0}]},[]),t.xb(1024,C.R,C.Y,[t.q,C.Q,C.k]),t.xb(1024,C.P,function(){return[L]},[]),t.xb(1024,C.S,function(n){return[n]},[C.P]),t.xb(1024,C.b,function(n,l,e){return[C.Z(n,l,e)]},[t.q,C.P,C.S]),t.xb(1024,C.W,function(n){return[C.J(n)]},[C.V]),t.xb(1073873408,C.p,C.p,[C.R,C.b,C.h,C.q,[2,C.W]]),t.xb(1024,T.p,function(){return[[V]]},[]),t.xb(1024,T.g,function(){return[[]]},[]),t.xb(1024,T.q,function(n,l,e){return[T.k(n,l,e)]},[t.q,T.p,T.g]),t.xb(1073742336,T.d,T.d,[T.e,T.q,[2,C.q],[2,C.p]]),t.xb(1073742336,o,o,[]),t.xb(1024,W.i,function(){return[[{path:"list",component:A},{path:"",redirectTo:"list"},{path:"detail",component:on}]]},[])])})}}]);