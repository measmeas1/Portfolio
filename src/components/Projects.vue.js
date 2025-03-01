export default (await import('vue')).defineComponent({
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    name: "Project 1",
                    image: "logo_2.jpg",
                    description: "An e-commerce platform for buying and selling products online.",
                    technologies: "Vue.js | Tailwind CSS | Stripe API",
                    github: "https://github.com/yourusername/project1",
                    demo: "https://yourdemo.com/project1"
                },
                {
                    name: "Project 2",
                    image: "logo_2.jpg",
                    description: "A modern blogging platform with rich text editing and media uploads.",
                    technologies: "Vue.js | Firebase | Tailwind CSS",
                    github: "https://github.com/yourusername/project2",
                    demo: "https://yourdemo.com/project2"
                }
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
        id: ("projects"),
        ...{ class: ("py-40") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-16") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-white to-green-400 text-transparent bg-clip-text font-bold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4") },
    });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((project.name)),
            ...{ class: ("bg-slate-800 border-2 border-green-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-green-700") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((`src/assets/${project.image}`)),
            alt: ((project.name)),
            ...{ class: ("w-full h-56 object-cover rounded-t-lg") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("p-6") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-2xl font-semibold text-gray mb-2") },
        });
        (project.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-sm text-gray-300 mb-4") },
        });
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-xs text-green-400 font-medium") },
        });
        (project.technologies);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between mt-6") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((project.github)),
            target: ("_blank"),
            ...{ class: ("bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-800 transition-colors duration-300") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("fab fa-github mr-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((project.demo)),
            target: ("_blank"),
            ...{ class: ("bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-800 transition-colors duration-300") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("fas fa-external-link-alt mr-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute inset-0 bg-green-700 opacity-10 rounded-2xl blur-2xl") },
        });
    }
    ['py-40', 'text-center', 'mb-16', 'text-5xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', 'bg-gradient-to-b', 'from-white', 'to-green-400', 'text-transparent', 'bg-clip-text', 'font-bold', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-10', 'px-4', 'bg-slate-800', 'border-2', 'border-green-500', 'rounded-lg', 'shadow-lg', 'transition-all', 'duration-300', 'transform', 'hover:scale-105', 'hover:shadow-2xl', 'hover:border-green-700', 'w-full', 'h-56', 'object-cover', 'rounded-t-lg', 'p-6', 'text-2xl', 'font-semibold', 'text-gray', 'mb-2', 'text-sm', 'text-gray-300', 'mb-4', 'text-xs', 'text-green-400', 'font-medium', 'flex', 'justify-between', 'mt-6', 'bg-green-600', 'text-white', 'py-2', 'px-4', 'rounded-md', 'shadow-md', 'hover:bg-green-800', 'transition-colors', 'duration-300', 'fab', 'fa-github', 'mr-2', 'bg-green-600', 'text-white', 'py-2', 'px-4', 'rounded-md', 'shadow-md', 'hover:bg-green-800', 'transition-colors', 'duration-300', 'fas', 'fa-external-link-alt', 'mr-2', 'absolute', 'inset-0', 'bg-green-700', 'opacity-10', 'rounded-2xl', 'blur-2xl',];
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
