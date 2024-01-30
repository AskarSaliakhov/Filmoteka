export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        });
    },
}
