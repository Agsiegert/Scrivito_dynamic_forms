export function fetchJson(options) {
  return import(
    /* webpackChunkName: "can-ajax" */ "can-ajax"
  ).then(({ default: ajax }) => ajax(options));
}
