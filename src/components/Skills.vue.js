export default (await import('vue')).defineComponent({
    name: "Skills",
    data() {
        return {
            skills: [
                { name: "HTML", icon: "html5.svg" },
                { name: "CSS", icon: "css3.svg" },
                { name: "JavaScript", icon: "javascript.svg" },
                { name: "Vue.js", icon: "vue.svg" },
                { name: "Tailwind CSS", icon: "tailwind.svg" },
                { name: "Node.js", icon: "node.svg" },
                { name: "MySQL", icon: "mysql.svg" },
                { name: "PostgreSQL", icon: "postgresql.svg" },
                { name: "GitHub", icon: "github.svg" },
                { name: "PHP", icon: "php-svgrepo-com.svg" }
            ],
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("skills"),
        ...{ class: ("py-10 lg:py-40") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-12") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("bg-gradient-to-r from-green-400 to-white text-transparent bg-clip-text") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-center") },
    });
    for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.skills))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col items-center") },
            key: ((skill.name)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((`/${skill.icon}`)),
            alt: ((skill.name)),
            ...{ class: ("w-16 h-16 mb-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute inset-0 bg-green-400 opacity-10 rounded-full blur-lg") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-xl font-semibold ") },
        });
        (skill.name);
    }
    ['py-10', 'lg:py-40', 'text-center', 'mb-12', 'text-5xl', 'md:text-6xl', 'lg:text-7xl', 'font-extrabold', 'text-gray-900', 'bg-gradient-to-r', 'from-green-400', 'to-white', 'text-transparent', 'bg-clip-text', 'mt-20', 'grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-10', 'text-center', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'absolute', 'inset-0', 'bg-green-400', 'opacity-10', 'rounded-full', 'blur-lg', 'text-xl', 'font-semibold',];
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
