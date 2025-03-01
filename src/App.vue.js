import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
export default (await import('vue')).defineComponent({
    name: "App",
    components: { Header, Home, About, Skills, Projects, Contact, Footer },
    data() {
        return {
            isMobile: window.innerWidth < 768,
            activeSection: "home",
        };
    },
    methods: {
        updateMobileView() {
            this.isMobile = window.innerWidth < 768;
        },
        observeSections() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.activeSection = entry.target.id;
                    }
                });
            }, { rootMargin: "-50% 0px" });
            document.querySelectorAll("section").forEach((section) => {
                observer.observe(section);
            });
        },
    },
    mounted() {
        window.addEventListener("resize", this.updateMobileView);
        this.observeSections();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateMobileView);
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { Header, Home, About, Skills, Projects, Contact, Footer };
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.Header;
    /** @type { [typeof __VLS_components.Header, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        isMobile: ((__VLS_ctx.isMobile)),
        activeSection: ((__VLS_ctx.activeSection)),
    }));
    const __VLS_2 = __VLS_1({
        isMobile: ((__VLS_ctx.isMobile)),
        activeSection: ((__VLS_ctx.activeSection)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.Home;
    /** @type { [typeof __VLS_components.Home, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.About;
    /** @type { [typeof __VLS_components.About, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = {}.Skills;
    /** @type { [typeof __VLS_components.Skills, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = {}.Projects;
    /** @type { [typeof __VLS_components.Projects, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = {}.Contact;
    /** @type { [typeof __VLS_components.Contact, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = {}.Footer;
    /** @type { [typeof __VLS_components.Footer, ] } */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
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
