export default (await import('vue')).defineComponent({
    name: "Contact",
    data() {
        return {
            formStatus: false
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("contact"),
        ...{ class: ("py-40") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-10") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-5xl md:text-6xl lg:text-7xl font-extrabold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("px-6 text-lg md:text-xl lg:text-2xl mt-5 font-light") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-3xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        name: ("contact"),
        'data-netlify': ("true"),
        method: ("POST"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("hidden"),
        name: ("form-name"),
        value: ("contact"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("name"),
        ...{ class: ("block text-lg font-medium text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("text"),
        id: ("name"),
        name: ("name"),
        ...{ class: ("w-full p-4 mt-2 border border-gray-600 bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all") },
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("email"),
        ...{ class: ("block text-lg font-medium text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("email"),
        id: ("email"),
        name: ("email"),
        ...{ class: ("w-full p-4 mt-2 border border-gray-600 bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all") },
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("message"),
        ...{ class: ("block text-lg font-medium text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        id: ("message"),
        name: ("message"),
        rows: ("5"),
        ...{ class: ("w-full p-4 mt-2 border border-gray-600 bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all") },
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
        ...{ class: ("py-3 px-8 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-all") },
    });
    if (__VLS_ctx.formStatus) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-6 text-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-xl text-green-400") },
        });
    }
    ['py-40', 'text-center', 'mb-10', 'text-5xl', 'md:text-6xl', 'lg:text-7xl', 'font-extrabold', 'bg-gradient-to-r', 'from-white', 'to-green-500', 'text-transparent', 'bg-clip-text', 'px-6', 'text-lg', 'md:text-xl', 'lg:text-2xl', 'mt-5', 'font-light', 'max-w-3xl', 'mx-auto', 'bg-gray-800', 'bg-opacity-50', 'backdrop-blur-xl', 'border', 'border-gray-700', 'p-8', 'rounded-2xl', 'shadow-lg', 'mb-6', 'block', 'text-lg', 'font-medium', 'text-white', 'w-full', 'p-4', 'mt-2', 'border', 'border-gray-600', 'bg-gray-900', 'rounded-lg', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-400', 'transition-all', 'mb-6', 'block', 'text-lg', 'font-medium', 'text-white', 'w-full', 'p-4', 'mt-2', 'border', 'border-gray-600', 'bg-gray-900', 'rounded-lg', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-400', 'transition-all', 'mb-6', 'block', 'text-lg', 'font-medium', 'text-white', 'w-full', 'p-4', 'mt-2', 'border', 'border-gray-600', 'bg-gray-900', 'rounded-lg', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-400', 'transition-all', 'flex', 'justify-center', 'py-3', 'px-8', 'bg-green-600', 'text-white', 'font-semibold', 'rounded-lg', 'shadow-md', 'hover:bg-green-800', 'transition-all', 'mt-6', 'text-center', 'text-xl', 'text-green-400',];
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
