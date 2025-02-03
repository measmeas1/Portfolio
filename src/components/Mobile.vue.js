export default (await import('vue')).defineComponent({
    data() { return { menuOpen: false }; },
    methods: {
        toggleMenu() { this.menuOpen = !this.menuOpen; },
        closeMenu() { this.menuOpen = false; },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['active',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.toggleMenu) },
    });
    if (__VLS_ctx.menuOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute top-0 right-0 w-full bg-back-ground shadow-lg mt-12") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: ("flex flex-col items-center space-y-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (__VLS_ctx.closeMenu) },
            href: ("#home"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (__VLS_ctx.closeMenu) },
            href: ("#about"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (__VLS_ctx.closeMenu) },
            href: ("#skills"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (__VLS_ctx.closeMenu) },
            href: ("#projects"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (__VLS_ctx.closeMenu) },
            href: ("#contact"),
        });
    }
    ['absolute', 'top-0', 'right-0', 'w-full', 'bg-back-ground', 'shadow-lg', 'mt-12', 'flex', 'flex-col', 'items-center', 'space-y-4',];
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
