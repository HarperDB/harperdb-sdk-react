export function abort(controller?: AbortController) {
  if (controller) {
    controller.abort();
  }
}
