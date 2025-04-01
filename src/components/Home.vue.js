export default (await import('vue')).defineComponent({
    name: "Home",
    methods: {
        scrollToContact() {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }
    },
    data() {
        return {
            fadeInLeft: {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0, transition: { duration: 1 } }
            },
            fadeInRight: {
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0, transition: { duration: 1 } }
            }
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("home"),
        ...{ class: ("relative") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-around py-10 md:py-20 gap-10 md:gap-10 h-screen") },
    });
    const __VLS_0 = {}.Motion;
    /** @type { [typeof __VLS_components.Motion, typeof __VLS_components.Motion, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...(__VLS_ctx.fadeInLeft),
        ...{ class: ("flex flex-col items-center text-center md:items-start md:text-left gap-2 md:gap-1") },
    }));
    const __VLS_2 = __VLS_1({
        ...(__VLS_ctx.fadeInLeft),
        ...{ class: ("flex flex-col items-center text-center md:items-start md:text-left gap-2 md:gap-1") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-4xl font-bold flex flex-col mb-1 items-center md:items-start lg:text-6xl xl:text-7xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-400 text-7xl lg:text-8xl xl:text-9xl font-lilita") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({
        ...{ class: ("text-2xl font-medium lg:text-4xl xl-text-5xl mb-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl p-3 font-light max-w-2xl md:text-1xl lg:text-2xl xl:text-3xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-row sm:flex-row gap-4 mt-6 cursor-pointer") },
    });
    const __VLS_6 = {}.Motion;
    /** @type { [typeof __VLS_components.Motion, typeof __VLS_components.Motion, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ 'onClick': {} },
        ...({ whileHover: { scale: 1.1 } }),
        ...{ class: ("py-4 px-6 text-lg font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700 transition duration-300") },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        ...({ whileHover: { scale: 1.1 } }),
        ...{ class: ("py-4 px-6 text-lg font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700 transition duration-300") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.scrollToContact)
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("/meas.pdf"),
        download: ("meas.pdf"),
        ...{ class: ("py-4 px-6 text-lg font-semibold rounded-lg text-white bg-blue-800 hover:bg-blue-600 transition duration-300") },
    });
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_14 = {}.Motion;
    /** @type { [typeof __VLS_components.Motion, typeof __VLS_components.Motion, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        ...(__VLS_ctx.fadeInRight),
    }));
    const __VLS_16 = __VLS_15({
        ...(__VLS_ctx.fadeInRight),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("../assets/image2.png"),
        alt: ("Meas"),
        ...{ class: ("w-56 h-57 md:w-auto mt-20 md:mt-0 rounded-full border-4 border-green-400 shadow-[0px_5px_60px_rgba(0,255,0,0.4),inset_0px_4px_20px_rgba(255,255,255,0.7)]") },
    });
    __VLS_19.slots.default;
    var __VLS_19;
    ['relative', 'container', 'mx-auto', 'flex', 'flex-col-reverse', 'md:flex-row', 'items-center', 'justify-center', 'md:justify-around', 'py-10', 'md:py-20', 'gap-10', 'md:gap-10', 'h-screen', 'flex', 'flex-col', 'items-center', 'text-center', 'md:items-start', 'md:text-left', 'gap-2', 'md:gap-1', 'text-4xl', 'font-bold', 'flex', 'flex-col', 'mb-1', 'items-center', 'md:items-start', 'lg:text-6xl', 'xl:text-7xl', 'text-green-400', 'text-7xl', 'lg:text-8xl', 'xl:text-9xl', 'font-lilita', 'text-2xl', 'font-medium', 'lg:text-4xl', 'xl-text-5xl', 'mb-8', 'text-xl', 'p-3', 'font-light', 'max-w-2xl', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'flex', 'flex-row', 'sm:flex-row', 'gap-4', 'mt-6', 'cursor-pointer', 'py-4', 'px-6', 'text-lg', 'font-semibold', 'rounded-lg', 'text-white', 'bg-green-500', 'hover:bg-green-700', 'transition', 'duration-300', 'py-4', 'px-6', 'text-lg', 'font-semibold', 'rounded-lg', 'text-white', 'bg-blue-800', 'hover:bg-blue-600', 'transition', 'duration-300', 'w-56', 'h-57', 'md:w-auto', 'mt-20', 'md:mt-0', 'rounded-full', 'border-4', 'border-green-400', 'shadow-[0px_5px_60px_rgba(0,255,0,0.4),inset_0px_4px_20px_rgba(255,255,255,0.7)]',];
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
