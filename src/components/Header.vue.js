import Mobile from "./Mobile.vue";
export default (await import('vue')).defineComponent({
    name: "Header",
    components: { Mobile },
    props: {
        isMobile: Boolean,
        activeSection: String,
    },
    methods: {
        scrollToContact() {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { Mobile };
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
        ...{ class: ("sticky shadow-lg p-1 top-0 z-50 bg-back-ground h-full") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-around mt-5") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (""),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-4xl md:text-6xl font-semibold text-left") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-500") },
    });
    if (__VLS_ctx.isMobile) {
        const __VLS_0 = {}.Mobile;
        /** @type { [typeof __VLS_components.Mobile, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("hidden md:flex items-center text-2xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("flex space-x-7 lg:space-x-11 justify-between") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#home"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'home' })) },
        ...{ class: ("nav") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#about"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'about' })) },
        ...{ class: ("nav") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#skills"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'skills' })) },
        ...{ class: ("nav") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#projects"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'projects' })) },
        ...{ class: ("nav") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (__VLS_ctx.scrollToContact) },
        href: ("#contact"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'contact' })) },
        ...{ class: ("nav") },
    });
    ['sticky', 'shadow-lg', 'p-1', 'top-0', 'z-50', 'bg-back-ground', 'h-full', 'flex', 'justify-around', 'mt-5', 'text-4xl', 'md:text-6xl', 'font-semibold', 'text-left', 'text-green-500', 'hidden', 'md:flex', 'items-center', 'text-2xl', 'flex', 'space-x-7', 'lg:space-x-11', 'justify-between', 'text-green-500', 'nav', 'text-green-500', 'nav', 'text-green-500', 'nav', 'text-green-500', 'nav', 'text-green-500', 'nav',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
