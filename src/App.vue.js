import Mobile from "./components/Mobile.vue";
export default (await import('vue')).defineComponent({
    name: "App",
    components: { Mobile },
    data() {
        return {
            isMobile: window.innerWidth < 768,
            activeSection: "home",
        };
    },
    mounted() {
        // Watch for window resize
        window.addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 768;
        });
        // Use Intersection Observer to watch sections as they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.activeSection = entry.target.id; // Set the active section to the current section
                }
            });
        }, {
            rootMargin: "-50% 0px", // This makes it trigger when the section is at the center of the screen
        });
        // Observe the sections
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });
    },
    beforeDestroy() {
        window.removeEventListener("resize", () => {
            this.isMobile = window.innerWidth < 768;
        });
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
        ...{ class: ("flex justify-around mt-5 ") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (""),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-4xl md:text-6xl font-semibold text-left") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-500 ") },
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
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#about"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'about' })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#skills"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'skills' })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#projects"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'projects' })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#contact"),
        ...{ class: (({ 'text-green-500': __VLS_ctx.activeSection === 'contact' })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("home"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-around py-10 md:py-20 gap-10 md:gap-10 h-screen") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center text-center md:items-start md:text-left gap-2 md:gap-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-4xl font-bold flex flex-col mb-1 items-center md:items-start lg:text-6xl xl:text-7xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-400 text-7xl lg:text-8xl xl:text-9xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({
        ...{ class: ("text-2xl font-medium lg:text-4xl xl-text-5xl mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("px-5 text-xl font-light max-w-2xl md:text-1xl lg:text-2xl xl:text-3xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("mt-5 py-2 px-4 rounded-md text-white bg-green-500 hover:bg-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/image2.png"),
        alt: ("Meas"),
        ...{ class: ("w-56 h-57 md:w-auto md:h-auto rounded-full border-2 border-green-400 shadow-[0px_5px_20px_rgba(0,255,0,0.5),inset_0px_3px_10px_rgba(255,255,255,0.7)]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("about"),
        ...{ class: ("py-20") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center underline pt-5 font-bold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xl px-5 py-10 md:py-20 md:px-40 md:text-justify md:text-1xl lg:text-2xl xl:text-3xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("skills"),
        ...{ class: ("py-10 lg:py-40") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-green-400 to-white text-transparent bg-clip-text font-bold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/html5.svg"),
        alt: ("HTML"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/css3.svg"),
        alt: ("CSS"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-110") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/javascript.svg"),
        alt: ("JavaScript"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/vue.svg"),
        alt: ("Vue.js"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/tailwind.svg"),
        alt: ("Tailwind CSS"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/java.svg"),
        alt: ("Java"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/node.svg"),
        alt: ("Node.js"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/mysql.svg"),
        alt: ("MySQL"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/postgresql.svg"),
        alt: ("PostgreSQL"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-110") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("./assets/github.svg"),
        alt: ("GitHub"),
        ...{ class: ("w-16 h-16 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xl font-semibold") },
    });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-slate-800 border-2 border-green-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-green-700") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("./assets/logo_2.jpg"),
        alt: ("Project 3"),
        ...{ class: ("w-full h-56 object-cover rounded-t-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-2xl font-semibold text-gray mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm text-gray-300 mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-xs text-green-500 font-medium") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between mt-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://github.com/yourusername/project3"),
        target: ("_blank"),
        ...{ class: ("bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fab fa-github mr-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://yourdemo.com/project3"),
        target: ("_blank"),
        ...{ class: ("bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fas fa-external-link-alt mr-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("contact"),
        ...{ class: ("py-40 ") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-16") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-green-500 via-slate-300 to-green-500 text-transparent bg-clip-text font-bold") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("px-5 text-xl md:text-1xl lg:text-2xl xl:text-3xl mt-5 md:mt-10 font-light") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        action: ("https://formspree.io/mabmeas12@gmail.com"),
        method: ("POST"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("name"),
        ...{ class: ("block text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.name)),
        type: ("text"),
        id: ("name"),
        ...{ class: ("w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all") },
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("email"),
        ...{ class: ("block text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("email"),
        id: ("email"),
        ...{ class: ("w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all") },
        required: (true),
    });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ("message"),
        ...{ class: ("block text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.message)),
        id: ("message"),
        rows: ("6"),
        ...{ class: ("w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all") },
        required: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center mt-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
        ...{ class: ("py-3 px-8 bg-green-500 text-white font-semibold rounded-md hover:bg-green-400 transition-all") },
    });
    if (__VLS_ctx.successMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-6 text-center text-green-500") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-6 text-center text-red-500") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-16 text-center border-t-2 pt-10") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-3xl md:text-4xl xl:text-5xl font-semibold text-white mb-6 underline") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center gap-10 md:gap-24 flex-wrap mt-10") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("transform transition-transform duration-300 hover:scale-125 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("mailto:mabmeas12@gmail.com"),
        target: ("_blank"),
        ...{ class: ("text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fas fa-envelope") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-lg md:text-xl xl:text-2xl text-white mt-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("transform transition-transform duration-300 hover:scale-125 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://www.linkedin.com/in/mab-meas-89a8a3335/"),
        target: ("_blank"),
        ...{ class: ("text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fab fa-linkedin") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-lg md:text-xl xl:text-2xl text-white mt-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("transform transition-transform duration-300 hover:scale-125 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://www.instagram.com/meas_dudu/"),
        target: ("_blank"),
        ...{ class: ("text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fab fa-instagram") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-lg md:text-xl xl:text-2xl text-white mt-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("transform transition-transform duration-300 hover:scale-125 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://github.com/measmeas1"),
        target: ("_blank"),
        ...{ class: ("text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fab fa-github") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-lg md:text-xl xl:text-2xl text-white mt-2") },
    });
    ['sticky', 'shadow-lg', 'p-1', 'top-0', 'z-50', 'bg-back-ground', 'h-full', 'flex', 'justify-around', 'mt-5', 'text-4xl', 'md:text-6xl', 'font-semibold', 'text-left', 'text-green-500', 'hidden', 'md:flex', 'items-center', 'text-2xl', 'flex', 'space-x-7', 'lg:space-x-11', 'justify-between', 'text-green-500', 'text-green-500', 'text-green-500', 'text-green-500', 'text-green-500', 'container', 'mx-auto', 'flex', 'flex-col-reverse', 'md:flex-row', 'items-center', 'justify-center', 'md:justify-around', 'py-10', 'md:py-20', 'gap-10', 'md:gap-10', 'h-screen', 'flex', 'flex-col', 'items-center', 'text-center', 'md:items-start', 'md:text-left', 'gap-2', 'md:gap-1', 'text-4xl', 'font-bold', 'flex', 'flex-col', 'mb-1', 'items-center', 'md:items-start', 'lg:text-6xl', 'xl:text-7xl', 'text-green-400', 'text-7xl', 'lg:text-8xl', 'xl:text-9xl', 'text-2xl', 'font-medium', 'lg:text-4xl', 'xl-text-5xl', 'mb-4', 'px-5', 'text-xl', 'font-light', 'max-w-2xl', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'mt-5', 'py-2', 'px-4', 'rounded-md', 'text-white', 'bg-green-500', 'hover:bg-green-400', 'w-56', 'h-57', 'md:w-auto', 'md:h-auto', 'rounded-full', 'border-2', 'border-green-400', 'shadow-[0px_5px_20px_rgba(0,255,0,0.5),inset_0px_3px_10px_rgba(255,255,255,0.7)]', 'py-20', 'text-center', 'text-5xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', 'text-center', 'underline', 'pt-5', 'font-bold', 'text-green-400', 'text-xl', 'px-5', 'py-10', 'md:py-20', 'md:px-40', 'md:text-justify', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'text-green-400', 'py-10', 'lg:py-40', 'text-center', 'text-5xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', 'bg-gradient-to-b', 'from-green-400', 'to-white', 'text-transparent', 'bg-clip-text', 'font-bold', 'mt-20', 'grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-10', 'text-center', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-125', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'flex-col', 'items-center', 'skill-box', 'p-4', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110', 'w-16', 'h-16', 'mb-4', 'text-xl', 'font-semibold', 'py-40', 'text-center', 'mb-16', 'text-5xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', 'bg-gradient-to-b', 'from-white', 'to-green-400', 'text-transparent', 'bg-clip-text', 'font-bold', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-10', 'px-4', 'bg-slate-800', 'border-2', 'border-green-500', 'rounded-lg', 'shadow-lg', 'transition-all', 'duration-300', 'transform', 'hover:scale-105', 'hover:shadow-2xl', 'hover:border-green-700', 'w-full', 'h-56', 'object-cover', 'rounded-t-lg', 'p-6', 'text-2xl', 'font-semibold', 'text-gray', 'mb-2', 'text-sm', 'text-gray-300', 'mb-4', 'text-xs', 'text-green-500', 'font-medium', 'flex', 'justify-between', 'mt-6', 'bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded-md', 'shadow-md', 'hover:bg-green-600', 'transition-colors', 'duration-300', 'fab', 'fa-github', 'mr-2', 'bg-green-600', 'text-white', 'py-2', 'px-4', 'rounded-md', 'shadow-md', 'hover:bg-green-700', 'transition-colors', 'duration-300', 'fas', 'fa-external-link-alt', 'mr-2', 'py-40', 'text-center', 'mb-16', 'text-5xl', 'lg:text-6xl', 'xl:text-7xl', 'bg-gradient-to-b', 'from-green-500', 'via-slate-300', 'to-green-500', 'text-transparent', 'bg-clip-text', 'font-bold', 'px-5', 'text-xl', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'mt-5', 'md:mt-10', 'font-light', 'max-w-4xl', 'mx-auto', 'bg-gray-900', 'p-8', 'rounded-lg', 'shadow-xl', 'mb-6', 'block', 'text-xl', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'font-medium', 'text-white', 'w-full', 'p-4', 'mt-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-500', 'transition-all', 'mb-6', 'block', 'text-xl', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'font-medium', 'text-white', 'w-full', 'p-4', 'mt-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-500', 'transition-all', 'mb-6', 'block', 'text-xl', 'md:text-1xl', 'lg:text-2xl', 'xl:text-3xl', 'font-medium', 'text-white', 'w-full', 'p-4', 'mt-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-500', 'transition-all', 'flex', 'justify-center', 'mt-6', 'py-3', 'px-8', 'bg-green-500', 'text-white', 'font-semibold', 'rounded-md', 'hover:bg-green-400', 'transition-all', 'mt-6', 'text-center', 'text-green-500', 'mt-6', 'text-center', 'text-red-500', 'mt-16', 'text-center', 'border-t-2', 'pt-10', 'text-3xl', 'md:text-4xl', 'xl:text-5xl', 'font-semibold', 'text-white', 'mb-6', 'underline', 'text-green-400', 'flex', 'justify-center', 'gap-10', 'md:gap-24', 'flex-wrap', 'mt-10', 'transform', 'transition-transform', 'duration-300', 'hover:scale-125', 'text-center', 'text-3xl', 'md:text-4xl', 'xl:text-5xl', 'text-green-500', 'hover:text-green-400', 'fas', 'fa-envelope', 'text-lg', 'md:text-xl', 'xl:text-2xl', 'text-white', 'mt-2', 'transform', 'transition-transform', 'duration-300', 'hover:scale-125', 'text-center', 'text-3xl', 'md:text-4xl', 'xl:text-5xl', 'text-green-500', 'hover:text-green-400', 'fab', 'fa-linkedin', 'text-lg', 'md:text-xl', 'xl:text-2xl', 'text-white', 'mt-2', 'transform', 'transition-transform', 'duration-300', 'hover:scale-125', 'text-center', 'text-3xl', 'md:text-4xl', 'xl:text-5xl', 'text-green-500', 'hover:text-green-400', 'fab', 'fa-instagram', 'text-lg', 'md:text-xl', 'xl:text-2xl', 'text-white', 'mt-2', 'transform', 'transition-transform', 'duration-300', 'hover:scale-125', 'text-center', 'text-3xl', 'md:text-4xl', 'xl:text-5xl', 'text-green-500', 'hover:text-green-400', 'fab', 'fa-github', 'text-lg', 'md:text-xl', 'xl:text-2xl', 'text-white', 'mt-2',];
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
