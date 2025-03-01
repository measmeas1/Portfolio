export default (await import('vue')).defineComponent({
    name: 'Footer',
    data() {
        return {
            socials: [
                { name: 'Email', icon: 'fas fa-envelope', link: 'mailto:mabmeas12@gmail.com' },
                { name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/mab-meas-89a8a3335/' },
                { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/meas_dudu/' },
                { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/measmeas1' }
            ]
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({
        ...{ class: ("bg-gray-900 text-white py-10 mt-20 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 underline") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center gap-10 mt-10") },
    });
    for (const [social] of __VLS_getVForSourceType((__VLS_ctx.socials))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((social.name)),
            ...{ class: ("text-center transform transition-transform duration-300 hover:scale-110") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((social.link)),
            target: ("_blank"),
            ...{ class: ("text-2xl md:text-3xl xl:text-4xl text-green-500 hover:text-green-400") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ((social.icon)) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-md md:text-lg xl:text-xl text-white mt-2") },
        });
        (social.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("mt-10 text-lg md:text-xl xl:text-2xl font-light") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("../assets/vue.svg"),
        ...{ class: ("inline-block w-8 h-8 text-green-500 animate-pulse") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("../assets/tailwind.svg"),
        ...{ class: ("inline-block w-8 h-8 text-blue-500 animate-bounce") },
    });
    ['bg-gray-900', 'text-white', 'py-10', 'mt-20', 'text-center', 'text-4xl', 'md:text-5xl', 'xl:text-6xl', 'font-bold', 'text-white', 'mb-6', 'underline', 'text-green-400', 'flex', 'justify-center', 'gap-10', 'mt-10', 'text-center', 'transform', 'transition-transform', 'duration-300', 'hover:scale-110', 'text-2xl', 'md:text-3xl', 'xl:text-4xl', 'text-green-500', 'hover:text-green-400', 'text-md', 'md:text-lg', 'xl:text-xl', 'text-white', 'mt-2', 'mt-10', 'text-lg', 'md:text-xl', 'xl:text-2xl', 'font-light', 'inline-block', 'w-8', 'h-8', 'text-green-500', 'animate-pulse', 'inline-block', 'w-8', 'h-8', 'text-blue-500', 'animate-bounce',];
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
